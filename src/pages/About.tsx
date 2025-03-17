const About = () => {
  return (
    <>
      <h2 className="aboutHeadingMobile">About Me</h2>
      <section className="content">
        <div className="aboutWrapper">
          <div className="aboutImageContainer">
            <img src="/public/myPic.jpg" className="aboutImage"></img>
          </div>
          <section className="aboutDescription">
            <h2 className="aboutHeadingDesktop">About Me</h2>
            <p className="aboutParagraph">
              I'm a frontend developer with a background in education. Before
              diving into tech, I spent over eight years working in schools and
              preschools, with three of those years as a preschool teacher.
            </p>
            <p className="aboutParagraph">
              That experience shaped my ability to communicate, adapt, think
              creatively, and collaborate in a team—skills that now help me
              build intuitive and engaging web experiences. I'm passionate about
              design, accessibility, and modular development. I love crafting
              clean, efficient, and dynamic interfaces. My tech stack includes
              HTML, CSS, JavaScript, and TypeScript, and I’ve worked with React
              and Vue.js.
            </p>

            <p className="aboutParagraph">
              Recently, I’ve been expanding my knowledge in Next.js, Sanity CMS,
              Headless CMS solutions, and Node.js to become a more well-rounded
              developer. I thrive in team environments where ideas flow and
              collaboration leads to great solutions. Whether it’s refining
              UI/UX, optimizing performance, or exploring new tech, I’m always
              eager to learn and contribute!
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

export default About;
