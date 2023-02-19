'use client';

import { motion } from "framer-motion"
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
  variants={navVariants}
  // doesn't disappear
  whileInView="show"
  initial="hidden"
  className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" alt="search" className="w-[19px] h-[19px] object-contain " />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">METAVERSES</h2>
      <img src="/menu.svg" alt="menu" className="w-[20px] h-[14px] object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
