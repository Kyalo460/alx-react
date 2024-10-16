import {getFullYear, getFooterCopy} from '../utils/utils'
import React from 'react';
import { StyleSheet, css} from 'aphrodite'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
  isLoggedIn: state.ui.get('isUserLoggedIn')
})

const styles = StyleSheet.create({
  appFooter: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 'large',
    textAlign: 'center'
  }
})

function Footer({isLoggedIn}) {
  return (
    <>
      <footer>
        <div>
          <p className={css(styles.appFooter)}>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
          {isLoggedIn && <p><a href='#'>Contact us</a></p>}
        </div>
      </footer>
    </>
  )
}

export default connect(mapStateToProps)(Footer);