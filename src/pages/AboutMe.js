// File: Aboutme.js
// Name: Daniela Diaz
// Student ID: 301281747
// Date: September 28, 2024import React from 'react';
import profileImage from '../assets/mifoto.jpg';  

export default function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Daniela Diaz</h1>
      
      {/* My foto */}
      <img 
        src={profileImage} 
        alt="Daniela Diaz" 
        style={styles.image}
      />

      {/* Descripction */}
      <p style={styles.paragraph}>
        Hi, I'm Daniela, a passionate software developer with a deep interest in building efficient and scalable web applications. 
        I love solving problems through code and continuously learning new technologies to improve my skills. 
        I'm dedicated to delivering high-quality solutions and enjoy collaborating with others to create meaningful digital experiences.
      </p>

      {/* Pdf with my resume */}
      <a 
        href="/resume/Resumedaniela.pdf"
        target="_blank" 
        rel="noopener noreferrer"
        style={styles.link}
      >
        Download My Resume
      </a>
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
    maxWidth: '800px',
    margin: '50px auto',  
  },
  title: {
    color: '#f28b94', 
    fontSize: '36px',
    marginBottom: '20px',
  },
  image: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',  
    marginTop: '20px',
    objectFit: 'cover',  
    border: '5px solid #f28b94', 
  },
  paragraph: {
    marginTop: '20px',
    fontSize: '18px',
    lineHeight: '1.8',
    maxWidth: '600px',
    margin: '0 auto',
    color: '#333',  
  },
  link: {
    display: 'inline-block',
    marginTop: '30px',
    padding: '10px 20px',
    backgroundColor: '#f28b94',  
    color: '#fff', 
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',  
    transition: 'background-color 0.3s',  
  },
};