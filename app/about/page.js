import AlbumGrid from "@/components/AlbumGrid";

export default function About() {
  return (
    <div>
      <main>
        <div className="content-div">
          <section className="card">
            <h4> ˚₊‧ ꒰ა about ໒꒱ ‧₊˚</h4>
            <img className="about-photo" src="../images/jpg/about.jpg" alt="About Flora Fades" />
            <p>hi my name is maia ♡</p>
            <p>thank you so much for visiting my page! it is lovely to have you here.</p>
          </section>
        </div>

        <div className="content-div">
          <section className="card">
            <h4> ˚₊‧ ꒰ა album collection ໒꒱ ‧₊˚</h4>
            <AlbumGrid />
          </section>
        </div>

        <div className="content-div">
          <section className="content">
            <ul>
                <li><b>favorite colors:</b> sage green, light rose, chocolate brown, cream</li>
                <li><b>faith:</b> christian</li>
                <li><b>instruments I play:</b> piano, alto vocals</li>
                <li><b>profession:</b> information technology</li>
                <li><b>favorite princesses:</b> vasiliscia, aurora</li>
                <li><b>core values:</b> loyalty, authenticity, kindness, sonder, resilliance</li>
                <li><b>favorite drink:</b> matcha latte, hibiscus tea, mint tea</li>
                <li><b>love languages:</b> words of affirmation, quality time, physical touch</li>
                <li><b>favorite season:</b> autumn</li>
                <li><b>mountains or beaches?:</b> mountains</li>
                <li><b>favorite animals:</b> lunar moth, deer, doves, lambs</li>
                <li><b>random favorites:</b> retro tech like cds and casette tapes, seraphim, moths, vintage fairytales, cold showers,
                thrift shops</li>
            </ul>
          </section>
        </div>

        <div className="content-div">
          <section className="card">
            <h4> ˚₊‧ ꒰ა affiliates ໒꒱ ‧₊˚</h4>
            <p>
              flora fawn, 
            </p>
          </section>
        </div>

        

      
      </main>
    </div>
  );
}
