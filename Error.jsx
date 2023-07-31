import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
    <div>
      <h1>404! Not found</h1>
      <NavLink to="/">GO Back</NavLink>
    </div>
  )
}
