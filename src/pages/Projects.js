// File: Projects.js
// Name: Daniela Diaz
// Student ID: 301281747
// Date: September 28, 2024
import React from 'react';
import image1 from '../assets/pro1.jpg';
import image2 from '../assets/pro2.jpg';
import image3 from '../assets/pro3.jpg';

export default function Projects() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Projects</h1>

      <div style={styles.projectContainer}>
        {/* Proyect 1 */}
        <div style={styles.project}>
          <img src={image1} alt="Project 1" style={styles.image} />
          <h2 style={styles.projectTitle}>To-Do List Web App</h2>
          <p style={styles.projectDescription}>
            A simple task management web application where users can create, update, and delete their daily tasks.
            I implemented the front-end using React and utilized local storage to persist user data across sessions.
            This project allowed me to improve my skills in React and basic web design.
          </p>
        </div>

        {/* Proyect 2 */}
        <div style={styles.project}>
          <img src={image2} alt="Project 2" style={styles.image} />
          <h2 style={styles.projectTitle}>Dating App</h2>
          <p style={styles.projectDescription}>
            Developed a prototype of a dating application that allows users to create profiles, swipe to find matches,
            and chat with other users. The back-end is built with Node.js and Express, while the front-end is a mobile-first
            design using React Native. This project helped me learn about handling real-time data and user authentication.
          </p>
        </div>

        {/* Proyect 3 */}
        <div style={styles.project}>
          <img src={image3} alt="Project 3" style={styles.image} />
          <h2 style={styles.projectTitle}>Portfolio Website</h2>
          <p style={styles.projectDescription}>
            A personal portfolio website that showcases my work and skills. The website is fully responsive, built using React
            and styled with custom CSS. This project demonstrates my ability to create user-friendly, visually appealing web interfaces.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#ffe4e1',  
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    maxWidth: '1000px',  
    margin: '50px auto', 
  },
  title: {
    color: '#f28b94',  
    fontSize: '36px',
    marginBottom: '30px',
  },
  projectContainer: {
    display: 'flex',
    justifyContent: 'space-between', 
  },
  project: {
    width: '30%',  
    margin: '20px 0', 
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  projectTitle: {
    color: '#f28b94',  
    fontSize: '24px',
    margin: '10px 0',
  },
  projectDescription: {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#333',  
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
};