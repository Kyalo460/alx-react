import holberton_logo from '../assets/holberton_logo.jpg'
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';
import { connect } from 'react-redux';
import {logout} from '../actions/uiActionCreators'

const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
  isLoggedIn: state.ui.get('isUserLoggedIn')
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    color: 'rgb(243, 95, 95)'
  },
  image: {
    width: 300,
    height: 300
  },
  hr: {
    height: 4,
    backgroundColor: 'rgb(243, 95, 95)'
  }
})

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className={css(styles.appHeader)}>
            <img className={css(styles.image)} src={holberton_logo} alt=""></img>
            <h1>School Dashboard</h1>
            {this.props.isLoggedIn && <p id='logoutSection'>Welcome {this.props.user.email} <a onClick={this.props.logout}><i>(logout)</i></a></p>}
          </div>
          <hr className={css(styles.hr)}></hr>
        </header>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);