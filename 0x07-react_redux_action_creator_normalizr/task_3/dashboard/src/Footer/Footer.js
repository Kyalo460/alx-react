import {getFullYear, getFooterCopy} from '../utils/utils'
import React from 'react';
import { StyleSheet, css} from 'aphrodite'
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  appFooter: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 'large',
    textAlign: 'center'
  }
})

export function Footer() {
  return (
    <AppContext.Consumer>
      {({user}) => (
        <footer>
          <div>
            <p className={css(styles.appFooter)}>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            {user.isLoggedIn && <p><a href='#'>Contact us</a></p>}
          </div>
        </footer>
      )}
    </AppContext.Consumer>
  )
}