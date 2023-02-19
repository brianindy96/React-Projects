'use client';
import { motion } from "framer-motion"
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";


const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div 
    // parents div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    // when div comes into viewport, it will not only animate once
    viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div variants={textVariant(1.2)} className="flex flex-row justify-center items-center">
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText}>D</div>
          <h1 className={styles.heroHeading}>ness</h1>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
