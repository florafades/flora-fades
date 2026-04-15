import Link from "next/link";
import WavAngel from "./WavAngel";


export default function Header() {
  return (
     <header className="content-div">
 
  <div className="header-content">
    <a href="/" className="logo-link">
      <img src="./images/logo.png" alt="Flora Fades Logo" id="bg-img" />
    </a>
  
  <nav className="container">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/art">Art</Link>
    
    <Link href="/articles">articles</Link>
    <Link href="/">music</Link>
    <Link href="/">shop</Link>
    <Link href="/affiliates">affiliates</Link>
    <Link href="/articles/fae">fae</Link>
    <Link href="/articles/angels">angels</Link>
  </nav>
  {/* <NavAngel /> */}
   <marquee> ˚꒰ა ♱ ໒꒱˚ THERE ARE LEGIONS OF ANGELS IN BATTLE FOR YOUR SAKE ˚ ꒰ა ♱ ໒꒱ ˚ FEAR NOT  ˚ ꒰ა ♱ ໒꒱ ˚ THE ANGELS ARE SENT TO LOOK AFTER YOU ˚ ꒰ა ♱ ໒꒱ ˚</marquee>
  


 
   
  <WavAngel />
     
  </div>

  

</header>

  );
}