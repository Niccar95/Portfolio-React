import { useState } from "react";
import { Stack } from "../models/Stack";
import { stacks } from "../data/stacks";
import Skills from "../components/Skills";
import { ContactForm } from "../components/ContactForm";

const Home = () => {
  const [stackList] = useState<Stack[]>(stacks);
  return (
    <>
      <section className="content">
        <section className="heroSection">
          <div className="introductionContainer">
            <h2 className="introHeading">
              {" "}
              Hello, my name is{" "}
              <span className="nameLabel">Nicolas Carrasco</span>
            </h2>
            <p className="introduction">
              I'm a Frontend developer that enjoys crafting intuitive and
              efficient user interfaces. Always exploring new technologies, I
              focus on creating seamless digital experiences.
            </p>
            <button className="learnMoreButton">
              Get my CV
              <i className="bi bi-download"></i>
            </button>
          </div>
          <div className="avatarImageContainer">
            <img className="avatarImage" src="/myPic.jpg" alt="My image"></img>
          </div>
        </section>
      </section>

      <section className="content">
        <Skills stackList={stackList} />
      </section>
      <section className="content">
        <ContactForm />
      </section>
    </>
  );
};

export default Home;
