import Image from "next/image";
import styles from "./flora.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
       <main>

    
    

    <div className="content-div">
        <section className="content">
            <h3> welcome ໒꒱ ‧₊˚ </h3>
          <p>hi and welcome to my art and music realm. I make fantasy artwork, bespoke web apps and music</p>
          <br/>
          <p><img src="../images/pixels/fairy.gif" /></p>
          <br/>
          <p>this page is also my love letter to the 90s golden age of the internet, an era that lives on through the indie web. I hope you enjoy!</p>
          <p> 
            <button type="button" className="button">about me</button></p>
    
        </section>
    
    </div>

    <div className="card-grid">
        <section className="card">
          <div>
            <p><img className="card-img" src="..\images\png\shop.png" /></p>
            <p className="card-text">download beautiful greeting cards, stationary and more</p>
          </div>
          
      
          <button type="button" className="button">Shop</button>
        
            
        </section>

        <section className="card">
          <p><img className="card-img" src="..\images\png\art.png" /></p>
          <p>vintage-inspired art using colored pencil, graphite, pen and watercolor ♡</p>
      
          <Link href="/art"><button type="button" className="button">Art</button></Link>
        </section>

        <section className="card">
          <p><img className="card-img-png" src="..\images\music.png" /></p>
          <p>stream flora fades on bandcamp</p>
      
          <button type="button" className="button">Music</button>
        </section>

        <section className="card">
          <p><img className="card-img" src="..\images\png\articles.png" /></p>
          <p>schizo-diagrams, symbols, archetypes and more</p>
      
          <button type="button" className="button">Articles</button>
        </section>
    
    </div>
</main>
    </div>
  );
}
