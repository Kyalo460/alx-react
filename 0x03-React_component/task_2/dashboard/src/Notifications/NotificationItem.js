import React from 'react'
import PropTypes from 'prop-types'

export function NotificationItem({ type, html, value, markAsRead, id }) {
  return (
    <li data-notification-type={type} onClick={() => markAsRead(id)}>
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