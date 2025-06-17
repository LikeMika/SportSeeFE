import React from 'react';
import './style/ProfilePage.css';
import logo from './assets/logo.png';
import meditation from './assets/meditation.png';
import pool from './assets/pool.png';
import bike from './assets/bike.png';
import muscu from './assets/muscu.png';
import Dashboard from "./components/Dashboard";

export default function ProfilePage() {
  const userId = 18;

  return (
    <div className="page-container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="menu">
          <span>Accueil</span>
          <span>Profil</span>
          <span>Réglage</span>
          <span>Communauté</span>
        </nav>
      </header>
      <div className="body-container">
        <aside className="sidebar">
          <div className="sidebar-icons">
            <img src={meditation} alt="Meditation" />
            <img src={pool} alt="pool" />
            <img src={bike} alt="bike" />
            <img src={muscu} alt="muscu" />
          </div>
          <div className="copyright">Copyright, SportSee 2020</div>
        </aside>
        <main className="content">
          <Dashboard userId={userId} />
        </main>
      </div>
    </div>
  );
}
