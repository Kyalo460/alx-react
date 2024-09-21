import {getFullYear, getFooterCopy} from '../utils/utils'
import React from 'react';
import { StyleSheet, css} from 'aphrodite'

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
    <>
      <footer>
        <div>
          <p className={css(styles.appFooter)}>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
      </footer>
    </>
  )
}