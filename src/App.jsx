import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Tabs from './components/tabs/Tabs';
import Games from './components/games/Games';
import Buy from './components/buy/Buy';
import Equip from './components/equip/Equip';
import Promo from './components/promo/Promo';
import Accessories from './components/accessories/Accessories';
import Footer from './components/footer/Footer';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <Router>
      <Header />
      <main className="main">
        <Hero />
        <Tabs />
        <Games />
        <Buy />
        <Equip />
        <Promo />
        <Accessories />
        <Contacts />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
