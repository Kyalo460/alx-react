import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  default: {
    color: 'blue'
  },
  urgent: {
    color: 'red'
  }
})

function NotificationItem({ type, html, value, markAsRead, id }) {
  return (
    <li className={css(type == 'default' ? styles.default : styles.urgent)} data-notification-type={type} onClick={() => markAsRead(id)}>
      {value && <span>{value}</span>}
      {html && <span dangerouslySetInnerHTML={{ __html: html }} />}
    </li>
  );
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func.isRequired,
}

NotificationItem.defaultProps = {
  type: "default",
}

export default React.memo(NotificationItem);