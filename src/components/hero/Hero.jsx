import BuyButton from "../buyButton/BuyButton";

function Hero() {
  return (
    <section className="top">
      <div className="container">
        <h1 className="title">Meta Quest 2</h1>
        <p className="subtitle">Get an Elite Strap free</p>
        <p className="top__text">
          For a limited time only, save $59.99 USD. Offer ends 1/19/23
        </p>
       <BuyButton/>
        <p className="buy__text">Meta Quest 2 is for ages 13+</p>
      </div>
    </section>
  );
}
export default Hero