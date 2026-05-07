import Link from "next/link";
import DeerGrid from "@/components/DeerGrid";

export default function Shrines() {
  return (
    <div>
       <main>

    
    

    <div className="content-div">
        <section className="card">
          <h4>˚₊‧ ꒰ა shrines ໒꒱ ‧₊˚</h4>

          <p><Link href="/shrines/fae">fae</Link></p>
          <p><Link href="/shrines/angels">angels</Link></p>
          <p><Link href="/shrines/deer">deer</Link></p>
        </section>
    
    </div>

    
   
</main>
    </div>
  );
}
