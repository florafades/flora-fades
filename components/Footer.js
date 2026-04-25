import Link from "next/link";

export default function Footer() {
  return (
    <footer className="content-div">
      <div className="footer-content">
        <p className="footer-socials">
      <a className="icon-circle" target="_blank" href="https://github.com/florafades"><i className="fa-brands fa-github"></i></a>
      <a className="icon-circle" target="_blank" href="https://www.pinterest.com/florafades/"><i className="fa-brands fa-pinterest-p"></i></a>
      <a className="icon-circle" target="_blank" href="https://instagram.com/florafades"><i className="fa-brands fa-instagram"></i></a>
      <a className="icon-circle" target="_blank" href="https://www.pi.fyi/u/florafades"><i className="fa-solid fa-star"></i></a>
      <a className="icon-circle" target="_blank" href="https://florafades.bandcamp.com/"><i className="fa-brands fa-bandcamp"></i></a>
    </p>
        <p>copyright 2026</p>
        <img src="./images/butterfly.png"/>
      </div>
    </footer>
  );
}