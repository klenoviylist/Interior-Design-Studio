import React from "react";
import './Footer.css';

function Footer() {
      const date = new Date();
      const year = date.getFullYear();

  return (
      <footer className="mt-auto light text-center">
          © {year} Interior Design Studio
          <div className="container-fluid credit">
            <a href='https://www.freepik.com/photos/furniture'>Furniture photo created by freepik - www.freepik.com</a>
            <a href='https://www.freepik.com/photos/wood'>Wood photo created by vanitjan - www.freepik.com</a>
            <a href='https://www.freepik.com/photos/luxury'>Luxury photo created by dit26978 - www.freepik.com</a>
            <a href='https://www.freepik.com/photos/design'>Design photo created by jcomp - www.freepik.com</a>
            <div>Icons made by <a href="https://www.flaticon.com/authors/cursor-creative" title="Cursor Creative">Cursor Creative</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </div>
      </footer>
  )
}

export default Footer;
