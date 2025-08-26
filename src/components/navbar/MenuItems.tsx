import Link from 'next/link'
import React from 'react'

function MenuItems() {
  /* 
    
   
   */
  return (
    <div className="flex flex-row justify-around">
      <Link href={"/about"}>About</Link>
      <Link href={"/resume"}>Resume</Link>
      <Link href={"/portfolio"}>Portfolio</Link>
      <Link href={"/contact"}>Contact</Link>
    </div>
  );
}

export default MenuItems
