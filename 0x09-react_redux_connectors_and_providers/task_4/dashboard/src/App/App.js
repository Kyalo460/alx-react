import React from 'react';
import { Notifications } from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Login } from '../Login/Login';
import { CourseList } from '../CourseList/CourseList';
import PropTypes from 'prop-types'
import { getLatestNotification } from '../utils/utils';
import { BodySectionWithMarginBottom } from '../BodySection/BodySectionWithMarginBottom';
import { BodySection } from '../BodySection/BodySection';
import { StyleSheet, css} from 'aphrodite'
import AppContext from './AppContext';
import {connect} from 'react-redux'
import { displayNotificationDrawer, hideNotificationDrawer, login } from '../actions/uiActionCreators';

const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get('isUserLoggedIn'),
  displayDrawer: state.ui.get('isNotificationDrawerVisible')
})

const mapDispatchToProps = (dispatch) => {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => {
      console.log("Button clicked!");
      dispatch(hideNotificationDrawer())
    },
    loginRequest: () => {
      console.log('Login button clicked!')
      dispatch(login())
    }
  }
}

const styles = StyleSheet.create({
  hrStyle: {
    height: 4,
    backgroundColor: 'rgb(243, 95, 95)'
  }
})

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
]

const listNotifications = [
  {id: 1, type: "default", value: "New course available"},
  {id: 2, type: "urgent", value: "New resume available"},
  {id: 3, type: "urgent", html: getLatestNotification()}
]

const user = {
  email: '',
  password: '',
  isLoggedIn: false
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: user,
      listNotifications: [
        {id: 1, type: "default", value: "New course available"},
        {id: 2, type: "urgent", value: "New resume available"},
        {id: 3, type: "urgent", html: getLatestNotification()}
      ]
    };
  }

  markNotificationAsRead = (id) => {
    const newList = this.state.listNotifications.filter(notification => notification.id !== id);
    this.setState({listNotifications: newList})
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {

    return (
      <AppContext.Provider value={{user: this.state.user, logOut: this.logOut}}>
        <Notifications
          listNotifications={this.state.listNotifications}
          markNotificationAsRead={this.markNotificationAsRead}
          displayDrawer={this.props.displayDrawer}
          handleDisplayDrawer={this.props.displayNotificationDrawer}
          handleHideDrawer={this.props.hideNotificationDrawer}
        />
        <div className="App">
          <Header />
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.props.loginRequest} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Due to bad weather, PE is canceled</p>
          </BodySection>
          <hr className={css(styles.hrStyle)}></hr>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

App.defaultProps = {
  logOut: function() {},
  isLoggedIn: true,
  displayDrawer: true,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App);