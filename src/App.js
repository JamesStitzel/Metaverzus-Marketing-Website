import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Waitlist from './components/Waitlist';
import Gallery from './components/Gallery';
import Gallery2 from './components/Gallery2';
import Community from './components/Community';
import Team from './components/Team';
import Footer from './components/Footer';
import Trademark from './components/Trademark';

function App() {
  return (
    <div className="App">
      <Header/>
      <Categories/>
      <Waitlist/>
      <Gallery/>
      <Gallery2/>
      <Community/>
      <Team/>
      <Footer/>
      <Trademark/>
    </div>
  );
}

export default App;