import React from 'react'
import { BodySection } from './BodySection'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  margin: {
    marginBottom: 40
  }
})

export function BodySectionWithMarginBottom(props) {
  return(
    <div className={css(styles.margin)}>
      <BodySection { ...props } />
    </div>

  )
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};