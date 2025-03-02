import { useState } from "react";
import { Stack } from "../models/Stack";
import { stacks } from "../data/stacks";
import Skills from "../components/Skills";

const Home = () => {
  const [stackList] = useState<Stack[]>(stacks);
  return (
    <section className="content">
      <section className="heroSection">
        <div className="introductionContainer">
          <p className="introduction">
            Hello, my name is{" "}
            <span className="nameLabel">Nicolas Carrasco</span> and I'm a
            Frontend developer.
          </p>
          <button>Learn More</button>
        </div>
        <div className="avatarImageContainer">
          <img className="avatarImage" src="/myPic.jpg" alt="My image"></img>
        </div>
      </section>
      <Skills stackList={stackList} />
    </section>
  );
};

export default Home;
