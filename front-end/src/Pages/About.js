import "../Styles/About.css";

const About = () => {
  return (
    <section className="About">
      <h1>About Us</h1>
      <p>
        <span>Retro Games</span> is a new video game retailer headquartered in
        New York, NY. Founded in July, 2021 by famed full-stack web developers
        Jordan Bobadilla, Obaid Rustemi, Flower Aviles and Dalíz Cruz. The
        collaboration started out of a desire to create a trustworthy portal for
        selling and buying authentic and rare retro video games. Our knowledge
        of the video game industry combined with our deep supply chain
        relationships and software engineering progress, helped us design a
        robust user friendly website with features that include: popular gamers’
        favorites and authenticated reviews for buyers and easy game upload for
        sellers.
      </p>
      <h1>Our Team</h1>
      <article>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/74875301?v=4"
            alt="Pic of Jordan"
          />
          <h2>Jordan Bobadilla</h2>
          <h3>Director of Design</h3>
        </div>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/33786946?v=4"
            alt="pic of Dalíz"
          />
          <h2>Dalíz Cruz</h2>
          <h3>Lead Assurance Engineer</h3>
        </div>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/75175536?v=4"
            alt="Pic of Obaid"
          />
          <h2>Obaid Rustemi</h2>
          <h3>Lead Developer</h3>
        </div>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/75289454?v=4"
            alt="Pic of Flower"
          />
          <h2>Flower Aviles</h2>
          <h3>Product Owner</h3>
        </div>
      </article>
    </section>
  );
};

export default About;
