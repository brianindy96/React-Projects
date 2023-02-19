'use client';
import styles from "../styles/index"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"
import { TypingText, TitleText } from "../components/CustomTexts";
import { insights } from "../constants";
import InsightCard from "../components/InsightCard";


const Insights = () => (
  <section>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col my-10`}
    >
      <TypingText title="Insight" textStyles="text-center"/>
      <TitleText title={<>Insight about metaverse</>} textStyles="text-center" />
      <motion.div 
      className="mt-[50px] flex flex-col gap-[30px]"
      >
        {insights.map((insight, index) => (
          <InsightCard 
           key={`insight-${index}`}
           {...insight}
           index={index+1}
          />
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Insights;
