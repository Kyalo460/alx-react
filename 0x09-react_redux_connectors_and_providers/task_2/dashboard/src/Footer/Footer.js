import {getFullYear, getFooterCopy} from '../utils/utils'
import React from 'react';
import { StyleSheet, css} from 'aphrodite'
import AppContext from '../App/AppContext';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  user: state.user
})

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
          {this.props.user.isLoggedIn && <p><a href='#'>Contact us</a></p>}
        </div>
      </footer>
    </>
  )
}

export const connectedFooter = connect(mapStateToProps)(Footer);