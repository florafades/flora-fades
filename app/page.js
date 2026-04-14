import Image from "next/image";
import styles from "./flora.css";

export default function Home() {
  return (
    <div>
       <main>

    
    

    <div className="content-div">
        <section className="content">
            <h2><img src="..\images\heart_bullet3.gif"/>   welcome   <img src="..\images/heart_bullet3.gif"/></h2>
          <p>hi and welcome to my art and music realm.  I make shoegaze music and vintage-inspired fantasy artwork as well.</p>
          <br/>
          <p><img className="pixel"src="../public/images/pixel-fairy.gif" /></p>
          <br/>
          <p>this page is also my love letter to the 90s golden age of the internet, an era that lives on through the indie web. I hope you enjoy!</p>
          <p> 
            <button type="button" className="button">about me</button></p>
    
        </section>
    
    </div>

    <div className="card-grid">
        <section className="card">
          <h2>Art</h2>
          <p><img src="..\images\pixels\chinesemoon_sm.png" /></p>
      
          <button type="button" className="button">View More</button>
        
            
        </section>

        <section className="card">
          <h2>Art</h2>
          <p><img src="..\images\png\art.png" /></p>
      
          <button type="button" className="button">View More</button>
        </section>

        <section className="card">
          <h2>Art</h2>
          <p><img src="..\images\pixels\chinesemoon_sm.png" /></p>
      
          <button type="button" className="button">View More</button>
        </section>

        <section className="card">
          <h2>Art</h2>
          <p><img src="..\images\pixels\chinesemoon_sm.png" /></p>
      
          <button type="button" className="button">View More</button>
        </section>
    
    </div>
</main>
    </div>
  );
}
