import { useState } from 'react';


function Tabs() {
  const types = [
    '01 Graphics',
    '02 Controls',
    '03 Processor',
    '04 Set up your play area',
    '05 Gardian activity',
    '06 Headset casting',
  ];
  const [active, setActive] = useState(types[0]);
  return (
    <section className="features">
      <div className="container">
        <div className="features__titles">
          <h2 className="features__title section-title">PRODUCT FEATURES</h2>
          <p className="features__text">Easy to set up and safe to use</p>
        </div>
        <div className="tabs">
          <div className="tabs__btn">
            {types.map((type) => (
              <button
                className={`${
                  active === type
                    ? 'tabs__btn-item tabs__btn-item--active'
                    : 'tabs__btn-item'
                } `}
                id={type}
                key={type}
                onClick={() => setActive(type)}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="tabs__content">
            {/* ==============================================            */}
            {active === '01 Graphics' && (
              <div className="tabs__content-item tabs__content-item--active">
                <img
                  className="tabs__content-img"
                  src="images/content.jpg"
                  alt="content"
                />
                <div className="tabs__content-box">
                  <h3>Graphics</h3>
                  <p>
                    Everything from multiplayer games to 360° videos look beyond
                    incredible, with 20 pixels per degree visuals and a
                    Fast-Switch LCD Display spanning 1832 x 1920 pixels per eye.
                  </p>
                </div>
                <div className="video">
                  <button className="video__btn">
                    <img src="images/play.svg" alt="play" />
                  </button>
                  <span>Watch the video</span>
                </div>
              </div>
            )}
            {/* ===================================== */}
            {active === '02 Controls' && (
              <div className="tabs__content-item tabs__content-item--active">
                <img
                  className="tabs__content-img"
                  src="images/content.jpg"
                  alt="content"
                />
                <div className="tabs__content-box">
                  <h3>Controls</h3>
                  <p>
                    Feel like your virtual hands are your own with Touch
                    Controllers or play using your own hands with hand-tracking
                    technology.
                  </p>
                </div>
                <div className="video">
                  <button className="video__btn">
                    <img src="images/play.svg" alt="play" />
                  </button>
                  <span>Watch the video</span>
                </div>
              </div>
            )}
            {/* ===================================== */}
            {active === '03 Processor' && (
              <div className="tabs__content-item tabs__content-item--active">
                <img
                  className="tabs__content-img"
                  src="images/content.jpg"
                  alt="content"
                />
                <div className="tabs__content-box">
                  <h3>Processor</h3>
                  <p>
                    6GB RAM combined with the ultra-fast Qualcomm Snapdragon XR2
                    Platform ensure a smooth performance.
                  </p>
                </div>
                <div className="video">
                  <button className="video__btn">
                    <img src="images/play.svg" alt="play" />
                  </button>
                  <span>Watch the video</span>
                </div>
              </div>
            )}
            {/* ===================================== */}
            {active === '04 Set up your play area' && (
              <div className="tabs__content-item tabs__content-item--active">
                <img
                  className="tabs__content-img"
                  src="images/content.jpg"
                  alt="content"
                />
                <div className="tabs__content-box">
                  <h3>Set up your play area</h3>
                  <p>
                    Set up Guardian by using your controller to trace a virtual
                    boundary around a safe play area in your physical space.
                  </p>
                </div>
                <div className="video">
                  <button className="video__btn">
                    <img src="images/play.svg" alt="play" />
                  </button>
                  <span>Watch the video</span>
                </div>
              </div>
            )}
            {/* ===================================== */}
            {active === '05 Gardian activity' && (
              <div className="tabs__content-item tabs__content-item--active">
                <img
                  className="tabs__content-img"
                  src="images/content.jpg"
                  alt="content"
                />
                <div className="tabs__content-box">
                  <h3>Gardian activity</h3>
                  <p>
                    Punch, swing, grab and stretch out your arms with the
                    confidence of knowing you're clear of all obstructions.
                  </p>
                </div>
                <div className="video">
                  <button className="video__btn">
                    <img src="images/play.svg" alt="play" />
                  </button>
                  <span>Watch the video</span>
                </div>
              </div>
            )}
            {/* ===================================== */}
            {active === '06 Headset casting' && (
              <div className="tabs__content-item tabs__content-item--active">
                <img
                  className="tabs__content-img"
                  src="images/content.jpg"
                  alt="content"
                />
                <div className="tabs__content-box">
                  <h3>Headset casting</h3>
                  <p>
                    Bring friends into battle or collaborate on a presentation.
                    Cast directly to an enabled TV or phone using the Oculus
                    app.
                  </p>
                </div>
                <div className="video">
                  <button className="video__btn">
                    <img src="images/play.svg" alt="play" />
                  </button>
                  <span>Watch the video</span>
                </div>
              </div>
            )}
            {/* ===================================== */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Tabs;
