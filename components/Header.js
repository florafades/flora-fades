'use client'

import Link from "next/link";
import { Menu, MenuButton, MenuItems, MenuItem, Dialog, DialogPanel } from '@headlessui/react';
import { useState } from 'react';
import WavAngel from "./WavAngel";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="content-div">
      <div className="header-content">
        <a href="/" className="logo-link">
          <img src="/images/logo.png" alt="Flora Fades Logo" id="bg-img" />
        </a>
  
        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/art">Art</Link>
        
          <Menu>
            <MenuButton className="menu-button">
              Shrines
            </MenuButton>
            <MenuItems className="menu-dropdown">
              <MenuItem>
                {({ focus }) => (
                  <Link 
                    href="/shrines/fae"
                    className={focus ? 'menu-item active' : 'menu-item'}
                  >
                    Fae
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <Link 
                    href="/shrines/angels"
                    className={focus ? 'menu-item active' : 'menu-item'}
                  >
                    Angels
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <Link 
                    href="/shrines/deer"
                    className={focus ? 'menu-item active' : 'menu-item'}
                  >
                    Deer
                  </Link>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>

          <Link href="https://florafades.bandcamp.com/" target="_blank">Music</Link>
          <Link href="/coming-soon">Shop</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button className="hamburger-button" onClick={() => setMobileMenuOpen(true)}>
  <i className="fa-solid fa-bars"></i> Menu
</button>

        {/* Mobile Menu Dialog */}
       {/* Mobile Menu Dialog */}
<Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
  <div className="mobile-overlay">
    <DialogPanel className="mobile-menu">
      <button className="close-button" onClick={() => setMobileMenuOpen(false)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
      <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
      <Link href="/art" onClick={() => setMobileMenuOpen(false)}>Art</Link>
      <Link href="/shrines" onClick={() => setMobileMenuOpen(false)}>Shrines</Link>
      <Link href="https://florafades.bandcamp.com/" target="_blank" onClick={() => setMobileMenuOpen(false)}>Music</Link>
      <Link href="/coming-soon" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
    </DialogPanel>
  </div>
</Dialog>

        <marquee> ˚꒰ა ♱ ໒꒱˚ THERE ARE LEGIONS OF ANGELS IN BATTLE FOR YOUR SAKE ˚ ꒰ა ♱ ໒꒱ ˚ FEAR NOT  ˚ ꒰ა ♱ ໒꒱ ˚ THE ANGELS ARE SENT TO LOOK AFTER YOU ˚ ꒰ა ♱ ໒꒱ ˚</marquee>
      </div>
    </header>
  );
}