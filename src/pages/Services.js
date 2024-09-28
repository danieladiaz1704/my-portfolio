// File: Services.js
// Name: Daniela Diaz
// Student ID: 301281747
// Date: September 28, 2024
import React from 'react';
import service1 from '../assets/ser1.jpg';
import service2 from '../assets/ser2.jpg';
import service3 from '../assets/ser3.jpg';

export default function Services() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Services</h1>
      
      <div style={styles.contentContainer}>
        {/* My list */}
        <div style={styles.leftColumn}>
          <ul style={styles.list}>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>General Programming</li>
            <li>Database Management</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>HTML & CSS</li>
            <li>API Development</li>
            <li>Version Control (Git)</li>
            <li>Responsive Design</li>
            <li>Debugging and Testing</li>
            <li>Software Development Life Cycle (SDLC)</li>
            <li>Agile Methodologies</li>
          </ul>
        </div>

        {/* Images */}
        <div style={styles.rightColumn}>
          <img src={service1} alt="Service 1" style={styles.image} />
          <img src={service2} alt="Service 2" style={styles.image} />
          <img src={service3} alt="Service 3" style={styles.image} />
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
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  leftColumn: {
    flex: 1,
    textAlign: 'center', 
    padding: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '18px',
    color: '#5d1049', 
    lineHeight: '1.6', 
  },
  rightColumn: {
    flex: 1,
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '250px',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};