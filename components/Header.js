'use client'

import Link from "next/link";
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import WavAngel from "./WavAngel";

export default function Header() {
  return (
    <header className="content-div">
      <div className="header-content">
        <a href="/" className="logo-link">
          <img src="/images/logo.png" alt="Flora Fades Logo" id="bg-img" />
        </a>
  
        <nav>
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

        <marquee> ˚꒰ა ♱ ໒꒱˚ THERE ARE LEGIONS OF ANGELS IN BATTLE FOR YOUR SAKE ˚ ꒰ა ♱ ໒꒱ ˚ FEAR NOT  ˚ ꒰ა ♱ ໒꒱ ˚ THE ANGELS ARE SENT TO LOOK AFTER YOU ˚ ꒰ა ♱ ໒꒱ ˚</marquee>
      </div>
    </header>
  );
}