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
            <p className="introduction">
              Hello, my name is{" "}
              <span className="nameLabel">Nicolas Carrasco</span> and I'm a
              Frontend developer.
            </p>
            <button className="learnMoreButton">Learn More</button>
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
