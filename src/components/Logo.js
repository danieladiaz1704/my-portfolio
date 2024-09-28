
// File: Logo.js
// Name: Daniela Diaz
// Student ID: 301281747
// Date: September 28, 2024import React from 'react';

const Logo = () => {
  return (
    <div style={styles.logoContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="50"
        height="50"
        style={styles.logo}
      >
        {/* log */}
        <circle cx="50" cy="50" r="45" fill="#f28b94" />
        <text
          x="50%"
          y="50%"
          alignmentBaseline="middle"
          textAnchor="middle"
          fontSize="24"
          fill="white"
          fontFamily="Arial"
        >
          DD
        </text>
      </svg>
    </div>
  );
};

const styles = {
  logoContainer: {
    display: 'inline-block',
    marginRight: '20px',
  },
  logo: {
    cursor: 'pointer',
  },
};

export default Logo;