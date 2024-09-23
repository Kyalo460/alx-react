import React from 'react';
import { StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  appBody: {
    height: 500,
    paddingLeft: 50
  },
  paragraph: {
    fontWeight: 'bold',
    fontSize: 'large'
  },
  smallScreen: {
    '@media (max-width: 900px)': {
      display: 'block'
    }
  }
})

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', enableSubmit: false}
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    this.props.logIn();
  }

  updateSubmitState = () => {
    const {email, password} = this.state;
    this.setState({enableSubmit: email !== '' && password !== ''})
  }

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value}, this.updateSubmitState)
  }

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value }, this.updateSubmitState);
  }

  render() {
    return (
      <>
        <div className={css(styles.appBody)}>
          <p className={css(styles.paragraph)}>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label className={css(styles.smallScreen)}>Email:<input type='text' value={this.state.email} onChange={this.handleChangeEmail} /></label>
            <label className={css(styles.smallScreen)}>Password:<input type='text' value={this.state.password} onChange={this.handleChangePassword} /></label>
            <input type='submit' value='OK' disabled={!this.state.enableSubmit} />
          </form>
        </div>
      </>
    )
  }
}