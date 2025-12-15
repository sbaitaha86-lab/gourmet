import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(v => !v)

  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <button
            className={`navbar__hamburger ${open ? 'is-active' : ''}`}
            onClick={toggle}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>

          <a className="navbar__logo" href="#">
            Gourmet<span className="accent">+</span>
          </a>
        </div>

        <nav className={`navbar__nav ${open ? 'is-open' : ''}`} role="navigation">
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Menus</a></li>
            <li><a href="#">Réservations</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#/admin">Admin</a></li>
          </ul>

          <div className="navbar__search">
            <input type="search" placeholder="Rechercher..." aria-label="Rechercher" />
          </div>
        </nav>

        <div className="navbar__actions">
          <button className="btn btn-ghost">Se connecter</button>
          <button className="btn btn-primary">Réserver</button>
        </div>
      </div>

      <div
        className={`navbar__overlay ${open ? 'is-visible' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
    </header>
  )
}

export default Navbar
