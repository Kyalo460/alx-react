import React from 'react'
import PropTypes from 'prop-types'

export function NotificationItem({ type, html, value }) {
  return (
    <li data-notification-type={type}>
      {value && <span>{value}</span>}
      {html && <span dangerouslySetInnerHTML={{ __html: html }} />}
    </li>
  );
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
}

NotificationItem.defaultProps = {
  type: "default",
}