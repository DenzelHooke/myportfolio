import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function Navbar() {
  const [navState, setNavState] = useState(true);
  const [scrollFromTop, setScrollFromTop] = useState(0);
  let elRef = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
  }, []);

  const onScroll = (e) => {
    setScrollFromTop(window.pageYOffset);
  };

  const onClick = () => {
    setNavState(!navState);
  };

  const onNavClick = (e) => {
    elRef.current = document.querySelector(`.${e.target.name}`);
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: elRef.current, autoKill: true, offsetY: 60 },
    });
    // const x = document.body.parentNode;
    // elRef.current.scrollIntoView()
    // windowRef.current.scrollTo({ bottom: 0, behavior: "smooth" });
  };

  return (
    <div className="navbar-wrapper flex wider-container">
      <a className="menu-btn" onClick={onClick}>
        <div></div>
      </a>
      {/* <span className="text-accent">Denzel Hooke</span> */}
      <nav className={`navigation ${navState ? "closed" : ""} `}>
        <svg
          onClick={onClick}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#222"
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4l-66.1.3c-4.4 0-8-3.5-8-8c0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4l66-.3c4.4 0 8 3.5 8 8c0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2c0 4.4-3.6 8-8 8z"
          />
        </svg>
        <ul className="text-accent">
          <li>
            {/* {scrollFromTop} */}
            <a onClick={onNavClick} name="about">
              ABOUT ME
            </a>
          </li>
          <li>
            <a onClick={onNavClick} name="projects">
              PROJECTS
            </a>
          </li>
          <li>
            <a onClick={onNavClick} name="contact">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
