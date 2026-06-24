import Link from "next/link";

export default function Links() {
  return (
    <main>
      <div className="content-div">
        <section className="card">

          <div className="link-list">
            

            <Link href="https://florafades.com/" target="_blank" className="link-card">
              <h4>Flora Fades</h4>
              <span className="link-sub">art and music portfolio</span>
            </Link>

            <Link href="https://arundelinterlink.com/" target="_blank" className="link-card">
              <h4>Arundel Interlink</h4>
              <span className="link-sub">web development for artists</span>
            </Link>

            {/* <Link href="https://shop.florafades.com/" target="_blank" className="link-card">
              <h4>Flora Shop</h4>
              <span className="link-sub">shop greeting cards and other digital media</span>
            </Link> */}

            <p className="footer-socials">
      <a className="icon-circle" target="_blank" href="https://github.com/florafades"><i className="fa-brands fa-github"></i></a>
      <a className="icon-circle" target="_blank" href="https://www.pinterest.com/florafades/"><i className="fa-brands fa-pinterest-p"></i></a>
      <a className="icon-circle" target="_blank" href="https://instagram.com/florafades"><i className="fa-brands fa-instagram"></i></a>
      <a className="icon-circle" target="_blank" href="https://florafades.bandcamp.com/"><i className="fa-brands fa-bandcamp"></i></a>
    </p>

            
          </div>
        </section>
      </div>
    </main>
  );
}
