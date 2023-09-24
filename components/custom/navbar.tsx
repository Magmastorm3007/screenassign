import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuVoid,
} from "@/components/ui/navigation-menu";
import Link from 'next/link'; // Import Link from Next.js
function Navbar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveItem(index);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem
            className="relative"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            {activeItem === 0 && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-200 p-2">
                hello
              </div>
            )}
          </NavigationMenuItem>

          <NavigationMenuItem
            className="relative"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            {activeItem === 1 && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-200 p-2">
                <NavigationMenuLink>Link 1</NavigationMenuLink>
                <br></br>
                <NavigationMenuLink>Link 2</NavigationMenuLink>
              </div>
            )}
          </NavigationMenuItem>

         

          <NavigationMenuVoid>
          <Link href="/price">
            <NavigationMenuLink>
           
              Pricing
              </NavigationMenuLink>
            </Link>
          
          </NavigationMenuVoid>
          <NavigationMenuVoid>
            <NavigationMenuLink>FAQ</NavigationMenuLink>
          </NavigationMenuVoid>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
