import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css";

const header = () => {
  const menus = [
    {
      name:"Home",
      to: "/"
    },
    {
      name:"About",
      to: "/about"
    },
    {
      name:"Contact",
      to: "/contact"
    },
    {
      name:"Services",
      to: "/services"
    },
    {
      name:"Login",
      to:"/login"
    }];
  return (
    <header>
        <div className='logo-wrapper'>
            <h2>Villagio</h2>
        </div>
      <nav>
        <ul>
          {
            menus.map(({name,to},index)=>(
              <li><Link to={to}>{name}</Link></li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default header
