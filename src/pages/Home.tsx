const Home = () => {
  return (
    <>
      <section className="heroSection">
        <div className="avatarImageContainer">
          <img className="avatarImage" src="/my-image.jpg" alt="My image"></img>
        </div>
        <div className="introductionContainer">
          <h2 className="introduction">
            Hello, my name is Nicolas and I'm a Frontend developer.
          </h2>
          <button>Learn More</button>
        </div>
      </section>
    </>
  );
};

export default Home;
