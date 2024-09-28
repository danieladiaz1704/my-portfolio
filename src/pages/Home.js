// File: Home.js
// Name: Daniela Diaz
// Student ID: 301281747
// Date: September 28, 2024
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo'; 

export default function Layout() {
  return (
    <div style={styles.container}>
      {/* logo y title */}
      <div style={styles.logoContainer}>
        <Logo />
        <h1 style={styles.title}>My Portfolio</h1>
      </div>

      {/* navbar */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link> | 
        <Link to="/about" style={styles.link}>About</Link> | 
        <Link to="/projects" style={styles.link}>Projects</Link> | 
        <Link to="/services" style={styles.link}>Services</Link> | 
        <Link to="/contact" style={styles.link}>Contact</Link>
      </nav>

      {/* Message */}
      <div style={styles.welcomeSection}>
        <h2>Welcome to My Portfolio!</h2>
        <p>
          Hello! I'm Daniela, a passionate developer who specializes in creating amazing web experiences. 
          Feel free to explore my projects and learn more about me!
        </p>

        {/* bot */}
        <Link to="/about">
          <button style={styles.button}>Learn More About Me</button>
        </Link>
      </div>

      {/* mission */}
      <section style={styles.missionStatement}>
        <h3>Mission Statement</h3>
        <p>
          My mission is to build innovative and effective digital solutions that make a positive impact on the world. 
          Through continuous learning and collaboration, I strive to deliver high-quality, scalable, and sustainable web applications.
        </p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#ffe4e1', 
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    maxWidth: '1000px',
    margin: '50px auto', 
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
  },
  title: {
    fontSize: '36px',
    color: '#d45d79', 
    marginLeft: '10px',
  },
  nav: {
    backgroundColor: '#f7c6d9', 
    padding: '10px',
    borderRadius: '10px',
    textAlign: 'center',
  },
  link: {
    color: '#d45d79', 
    textDecoration: 'none',
    margin: '0 10px',
  },
  welcomeSection: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#fde2e4', 
    borderRadius: '10px',
    margin: '20px 0', 
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#f28b94', 
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  missionStatement: {
    textAlign: 'center',
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#f8bbd0', 
    borderRadius: '10px',
    color: '#5d1049', 
  },
};