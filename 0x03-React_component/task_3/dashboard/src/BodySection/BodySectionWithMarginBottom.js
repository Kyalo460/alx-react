import React from 'react'
import { BodySection } from './BodySection'
import './BodySectionWithMarginBottom.css'
import PropTypes from 'prop-types'

export function BodySectionWithMarginBottom(props) {
  return(
    <div className="bodySectionWithMargin">
      <BodySection { ...props } />
    </div>

  )
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};