import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://www.linkedin.com/in/frankdelamota/" className="icon fa-linkedin">
            <span className="label">Linkedin</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Twervs/Twervs" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/twervs" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="mailto:twervs@outlook.com?subject = Feedback&body = Message" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Gatsby Starter Strata</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
