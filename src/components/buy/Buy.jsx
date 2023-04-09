import BuyButton from '../buyButton/BuyButton';

function Buy() {
  return (
    <div className="buy">
      <p className="buy__bg">OCULUS</p>
      <img src="images/oculus.png" alt="" className="buy__img" />
      <BuyButton/>
      <p className="buy__text">Meta Quest 2 is for ages 13+</p>
    </div>
  );
}
export default Buy;
