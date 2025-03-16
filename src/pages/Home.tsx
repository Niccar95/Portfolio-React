import { useState } from "react";
import { Stack } from "../models/Stack";
import { stacks } from "../data/stacks";
import Skills from "../components/Skills";
import { motion } from "motion/react";

const Home = () => {
  const [stackList] = useState<Stack[]>(stacks);

  return (
    <motion.section
      className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.section
        className="heroSection"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <div className="avatarImageContainer">
          <motion.img
            className="avatarImage"
            src="/myPic.jpg"
            alt="My image"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <motion.div
          className="introductionContainer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <h2 className="introHeading">
            Hello, my name is{" "}
            <span className="nameLabel">Nicolas Carrasco</span>
          </h2>
          <p className="introduction">
            I'm a Frontend developer that enjoys crafting intuitive and
            efficient user interfaces. Always exploring new technologies, I
            focus on creating seamless digital experiences.
          </p>
          <motion.button
            className="heroButton"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <i className="bi bi-download"></i>
            Get my CV
          </motion.button>
        </motion.div>
      </motion.section>
      <Skills stackList={stackList} />
    </motion.section>
  );
};

export default Home;
