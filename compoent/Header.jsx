import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
  <>
     <header>
                <a href="#">Logo</a>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/search">search</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
  </>
  )
}
