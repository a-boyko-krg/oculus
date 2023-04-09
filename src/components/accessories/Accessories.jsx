function Accessories() {
  const accessories = [
    {
      img: 'images/accessory-1.jpg',
      title: 'Meta Quest 2 Carrying Case',
      text: 'Protect your system–at home or away.',
      price: '$59.99 USD',
    },
    {
      img: 'images/accessory-2.jpg',
      title: 'Link Cable',
      text: 'Harness the power of your PC with this premium fiber-optic cable.',
      price: '$79.99 USD',
    },
    {
      img: 'images/accessory-3.jpg',
      title: 'Meta Quest 2 Active Pack',
      text: 'A wipeable facial interface, wrist straps, and knuckle straps.',
      price: '$69.99 USD',
    },
    {
      img: 'images/accessory-4.jpg',
      title: 'Meta Quest Gift Cards',
      text: 'Redeemable on 350+ games and apps.',
      price: '$15-50 USD',
    },
  ];

  return (
    <section className="accessories">
      <div className="container">
        <h2 className="accessories__title section__title">ACCESSORIES</h2>
        <p className="accessories__text">Personalize every experience</p>
        <div className="accessories__items">
          {accessories.map((accessory, index) => (
            <div className="accessories__item" key={index}>
              <img className="accessory__item-img" src={accessory.img} alt={accessory.title} />
              <h3 className="accessory__item-title">{accessory.title}</h3>
              <p className="accessory__item-text">{accessory.text}</p>
              <p className="accessory__item-price">{accessory.price}</p>
              <button className="accessory__item-btn">BUY NOW</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Accessories;
