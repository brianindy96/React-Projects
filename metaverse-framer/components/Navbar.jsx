'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 200);
    console.log(window.scrollY);

    
  };

  useEffect(() => {
    const nav = document.querySelector("#nav");

    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if(lastScrollY < window.scrollY) {
        console.log("going down")
        nav.classList.add("hidden")
      } else{
        console.log("going up")
        nav.classList.remove("hidden");
      }

      lastScrollY= window.scrollY;
    });
  }, [])
  

  useEffect
  return(
    <motion.nav
    id="nav"
    variants={navVariants}
    // doesn't disappear
    whileInView="show"
    initial="hidden"
    className={`${styles.xPaddings} w-full z-20 py-8 fixed`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img src="/search.svg" alt="search" className="w-[19px] h-[19px] object-contain " />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">METAVERSES</h2>
        <img src="/menu.svg" alt="menu" className="w-[20px] h-[14px] object-contain" />
      </div>
    </motion.nav>
  )
};

export default Navbar;
