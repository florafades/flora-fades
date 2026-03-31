import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router"; 
import { CaretDownIcon } from "@radix-ui/react-icons";

export const NavAngel = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        
        {/* 1. HOME (Direct) */}
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link className="NavigationMenuLink" to="/">Home</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {/* 2. ABOUT (Direct) */}
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link className="NavigationMenuLink" to="/about">About</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {/* 3. ART (Direct) */}
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link className="NavigationMenuLink" to="/art">Art</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {/* 4. MISC (Dropdown) */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Misc <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="dropdown-list">
              <li className="ListItem">
                <NavigationMenu.Link asChild>
                  <Link to="/art/angel">Angel</Link>
                </NavigationMenu.Link>
              </li>
              <li className="ListItem">
                <NavigationMenu.Link asChild>
                  <Link to="/art/lamb">Lamb</Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      {/* The Viewport: This is necessary for the 'Misc' dropdown to appear */}
      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

export default NavAngel;