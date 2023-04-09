import { Link } from 'react-router-dom';

function Games() {
  const games = [
    {
      title: 'Blade & Sorcery: Nomad',
      cover: 'game-1.jpg',
      desc: 'Step into a medieval fantasy sandbox that uses phisics to serve up some of the most realistic combat in VR',
      link: '#',
    },
    {
      title: 'Population: One',
      cover: 'game-2.jpg',
      desc: 'Climb anything. Fight everywhere. Experience battle royale only possible in VR',
      link: '#',
    },
    {
      title: 'Supernatural',
      cover: 'game-3.jpg',
      desc: 'Box, Flow, Meditate and Stretch with real coaches in stunning destinations from around the world. Enjoy new workouts every day.',
      link: '#',
    },
  ];
  return (
    <section className="game">
      <div className="container">
        <h2 className="section__title game__title">GAMES</h2>
        <div className="game__inner">
          <div className="game__descr">
            <p className="game__descr-title">It’s all fun and games</p>
            <p className="game__descr-text">
              Discover new adventures, master epic challenges or revisit classic
              moments in your favourite games and experiences
            </p>
            <Link to="#" className="game__link">
              SEE ALL GAMES
            </Link>
          </div>
          {games.map((game, index) => (
            <div className="game__item" key={index}>
              <img
                className="game__item-img"
                src={`images/${game.cover}`}
                alt="game"
              />
              <h3 className="game__item-title">{game.title}</h3>
              <p className="game__item-text">{game.desc}</p>
              <Link to={game.link} className="game__item-link">
                see more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Games;
