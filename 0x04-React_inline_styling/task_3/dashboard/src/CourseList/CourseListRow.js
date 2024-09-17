import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab'
  },
  header: {
    backgroundColor: '#deb5b545'
  },
  colSpan: {
    textAlign: 'center'
  }
})

export function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  return (
    <tr>
      {isHeader ? (
        textSecondCell === null ? (
          <th className={css(styles.header, styles.colSpan)} colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.header)}>{textFirstCell}</th>
            <th className={css(styles.header)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.row)}>{textFirstCell}</td>
          <td className={css(styles.row)}>{textSecondCell}</td>
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