import React from 'react'
import PropTypes from 'prop-types'

const row = {
  backgroundColor: '#f5f5f5ab'
}

const header = {
  backgroundColor: '#deb5b545'
}

export function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  return (
    <tr>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={header} colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th style={header}>{textFirstCell}</th>
            <th style={header}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td style={row}>{textFirstCell}</td>
          <td style={row}>{textSecondCell}</td>
        </>
      )}
    </tr>
  )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number
  ]),
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}