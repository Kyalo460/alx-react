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
      display: 'block',
    }
  }
})

export function Login() {
  return (
    <>
      <div className={css(styles.appBody)}>
        <p className={css(styles.paragraph)}>Login to access the full dashboard</p>
        <label className={css(styles.smallScreen)}>Email:<input type='text'></input></label>
        <label className={css(styles.smallScreen)}>Password:<input type='text'></input></label>
        <button>OK</button>
      </div>
    </>
  )
}