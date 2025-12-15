import React, { useState } from 'react'
import './Loginadmin.css'

const LoginAdmin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Merci de saisir email et mot de passe.')
      return
    }
    setLoading(true)
    // fake auth
    setTimeout(() => {
      setLoading(false)
      console.log('admin login', { email })
      alert('Connexion réussie (simulation)')
      window.location.hash = '#/'
    }, 800)
  }

  return (
    <div className="admin-root">
      <div className="admin-card">
        <div className="admin-header">
          <h2>Admin Console</h2>
          <p className="muted">Connexion sécurisée</p>
        </div>

        <form className="admin-form" onSubmit={submit} noValidate>
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@votre-domaine.com"
              required
            />
          </label>

          <label className="field">
            <span>Mot de passe</span>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </label>

          {error && <div className="admin-error">{error}</div>}

          <div className="admin-actions">
            <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading ? 'Connexion...' : "Se connecter"}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => { setEmail(''); setPassword('') }}
            >
              Effacer
            </button>
          </div>
        </form>

        <div className="admin-foot">
          <small className="muted">© Gourmet Admin</small>
        </div>
      </div>
    </div>
  )
}

export default LoginAdmin
