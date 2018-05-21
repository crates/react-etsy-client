import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About Michael &quot;Crates&quot; McDade</h2>
      <img
        style={{float: 'right', padding: '0 20px 20px 20px', width: '200px'}}
        src="//cr8s.net/images/crates.jpg"
        alt="Michael Sean McDade (a.k.a. Crates) is a world-class full stack development engineer" />
      <p>Crates is a UI/UX Architect that has worked with many Fortune 500s on mission-critical applications.</p>
      <p>Read more at these links:</p>
      <ul>
        <li><a
          href="https://linkedin.com/in/crates"
          target="_blank"
          rel="noopener noreferrer"
        >LinkedIn</a></li>
        <li><a
          href="https://about.me/cr8s"
          target="_blank"
          rel="noopener noreferrer"
        >About.me Profile</a></li>
        <li><a
          href="https://cr8s.net/"
          target="_blank"
          rel="noopener noreferrer"
        >Portfolio site</a></li>
        <li><a
          href="https://angel.co/cr8s"
          target="_blank"
          rel="noopener noreferrer"
        >Angel.co Profile</a></li>
        <li><a
          href="https://twitter.com/cr8s"
          target="_blank"
          rel="noopener noreferrer"
        >Twitter</a></li>
      </ul>
      <p>
        Bonus: <Link to="/badlink">Click this bad link</Link> to see the 404 page for this application.
      </p>
    </div>
  );
};

export default AboutPage;
