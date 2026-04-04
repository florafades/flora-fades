import Link from "next/link";


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
  </nav>
  {/* <NavAngel /> */}
   <marquee> ˚꒰ა ♱ ໒꒱˚ THERE ARE LEGIONS OF ANGELS IN BATTLE FOR YOUR SAKE ˚ ꒰ა ♱ ໒꒱ ˚ FEAR NOT  ˚ ꒰ა ♱ ໒꒱ ˚ THE ANGELS ARE SENT TO LOOK AFTER YOU ˚ ꒰ა ♱ ໒꒱ ˚</marquee>
  


 
   
      {/* <audio controls>
        <source src="horse.ogg" type="audio/ogg" />
        <source src="\music\liminal-spaces.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio> */}
      {/* <WavAngel /> */}
      <div className="background">
        <img src="" id="bg-img" />
    </div>
      {/* @ts-ignore - marquee is deprecated but still works in browsers */}
     
  </div>

  

</header>

  );
}