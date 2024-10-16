import React from 'react'

export function BodySection({ children, title }) {
  return(
    <div className="bodySection">
      <h2>{title}</h2>
      {children}
    </div>
  )
}