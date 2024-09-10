import './App.css';
import React from 'react';
import { Notifications } from '../Notifications/Notifications';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Login } from '../Login/Login';
import { CourseList } from '../CourseList/CourseList';
import PropTypes from 'prop-types'
import { getLatestNotification } from '../utils/utils';

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

export default function App({isLoggenIn}) {
  return (
    <>
      <Notifications listNotifications={listNotifications}/>
      <div className="App">
        <Header />
        {isLoggenIn ? (
          <CourseList listCourses={listCourses} />
        ) : (
          <Login />
        )}
        <hr></hr>
        <Footer />
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggenIn: false,
}
