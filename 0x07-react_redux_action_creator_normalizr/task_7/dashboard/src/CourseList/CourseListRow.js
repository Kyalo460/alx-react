import React, {useState} from 'react'
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
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
})

export function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

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
          <td className={css(styles.row, checked && styles.rowChecked)}>{textFirstCell}<input type='checkbox' checked={checked} onChange={handleCheckboxChange}></input></td>
          <td className={css(styles.row, checked && styles.rowChecked)}>{textSecondCell}</td>
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