
import '/src/Home.css';

const Home = () => {
  return (
    <div className="home-container">
    
      <section className="hero">
        <h1>Unleash Your Inner Strength</h1>
        <p>Transform your body, mind, and soul at our elite fitness center.</p>
        <div className="hero-buttons">
          <button className="cta-btn">Join Now</button>
          <button className="secondary-btn">Explore Plans</button>
        </div>
      </section>

 
      <section className="about">
        <h2>About Us</h2>
        <p>
          Our mission is to provide the best fitness experience for everyone—from
          beginners to athletes. With world-class equipment, professional trainers,
          and personalized training programs, we help you achieve your fitness goals.
        </p>
      </section>

      {/* Membership Plans */}
      <section className="plans">
        <h2>Membership Plans</h2>
        <div className="plan-cards">
          <div className="plan-card">
            <h3>Basic Plan</h3>
            <p>Access to gym equipment</p>
            <p>Price: ₹999/month</p>
          </div>
          <div className="plan-card">
            <h3>Pro Plan</h3>
            <p>Includes personal trainer</p>
            <p>Price: ₹1999/month</p>
          </div>
          <div className="plan-card">
            <h3>Elite Plan</h3>
            <p>Access to all classes + VIP lounge</p>
            <p>Price: ₹2999/month</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Get Your Free Trial Now!</h2>
        <button className="cta-btn">Claim Free Pass</button>
      </section>
    </div>
  );
};

export default Home;
