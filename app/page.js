import Image from "next/image";
import styles from "./flora.css";

export default function Home() {
  return (
    <div>
       <main>

    
    

    <div className="content-div">
        <section className="content">
          <p> 
          
                <button>Scroll to Top</button>
         
            <br />
            </p>
        
            <p><img src="..\images\pixels\chinesemoon_sm.png" /></p>
        </section>
    
    </div>

    <div className="card-grid">
        <section className="card">
          <h2>Art</h2>
          <p><img src="..\images\pixels\chinesemoon_sm.png" /></p>
      
          <button type="button" className="button">View More</button>
        
            
        </section>

        <section className="card">
          <p> 
            <a href="javascript:Navigate('home');window.scrollTo(0, 0);">
                <button className="button">scroll to top</button>
            </a>
            <br />
            </p>
        
            <p><img src="..\images\pixels\chinesemoon_sm.png" /></p>
        </section>
    
    </div>
</main>
    </div>
  );
}
