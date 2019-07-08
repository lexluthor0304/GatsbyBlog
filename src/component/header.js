import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Clock from 'react-live-clock';

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            {/* <Clock className={headerStyles.navClock} format={'dddd  , MMMM Mo, YYYY, h:mm:ss A'} ticking={true} timezone={'jp'} /> */}
            <Clock className={headerStyles.navClock} format={'hh  :mm:ss A'} ticking={true} timezone={'jp'} />

          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
