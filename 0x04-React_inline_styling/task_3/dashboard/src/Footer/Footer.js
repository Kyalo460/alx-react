import {getFullYear, getFooterCopy} from '../utils/utils'
import './Footer.css'
import React from 'react';

export function Footer() {
  return (
    <>
      <footer>
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
      </footer>
    </>
  )
}