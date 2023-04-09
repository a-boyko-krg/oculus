function Equip() {
  return (
    <section className="equip">
      <div className="container">
        <h2 className="equip__title section-title">IN THE BOX</h2>
        <div className="equip__box">
          <div className="equip__box-item equip__box-item--one">
            <img src="images/eq1.jpg" alt="equip" className="equip__box-img" />
            <p className="equip__box-text">VR Headset</p>
          </div>
          <div className="equip__box-item">
            <img src="images/eq2.jpg" alt="equip" className="equip__box-img" />
            <p className="equip__box-text">
              Two Touch Controllers & AA Batteries
            </p>
          </div>
          <div className="equip__box-item">
            <p className="equip__box-title">What's included</p>
          </div>
          <div className="equip__box-item">
            <img src="images/eq3.jpg" alt="equip" className="equip__box-img" />
            <p className="equip__box-text">Charging Cable & Power Adapter</p>
          </div>
          <div className="equip__box-item">
            <img src="images/eq4.jpg" alt="equip" className="equip__box-img" />
            <p className="equip__box-text">Glasses Spacer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Equip;
