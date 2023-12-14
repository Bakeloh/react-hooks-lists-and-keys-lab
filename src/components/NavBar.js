import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  //   return <nav><a href="#home">home</a>  </nav>;
  // }
  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}
export default NavBar;
