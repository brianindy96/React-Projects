'use client';
import styles from "../styles/index"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"
import { TypingText, TitleText } from "../components/CustomTexts";
const World = () => (
  <section>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="People of the World" textStyles="text-center"/>
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center" />
      <motion.div
      variants={fadeIn('up', 'tween', 0.3, 1)}
      className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" />
        </div>  
        <div className="absolute top-25 left-40 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" />
        </div>  
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" />
        </div>  
        
      </motion.div>
    </motion.div>
  </section>
);

export default World;
