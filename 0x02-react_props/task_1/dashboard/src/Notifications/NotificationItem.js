import React from 'react'


export function NotificationItem({ type, html, value }) {
  return (
    <li data-notification-type={type}>
      {value && <span>{value}</span>}
      {html && <span dangerouslySetInnerHTML={{ __html: html }} />}
    </li>
  );
}