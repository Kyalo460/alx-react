import holberton_logo from '../assets/holberton_logo.jpg'
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

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

export function Header() {
  return (
    <>
      <header>
        <div className={css(styles.appHeader)}>
          <img className={css(styles.image)} src={holberton_logo} alt=""></img>
          <h1>School Dashboard</h1>
        </div>
        <hr className={css(styles.hr)}></hr>
      </header>
    </>
  );
}