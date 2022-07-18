// import logo from './logo.svg';
import './App.css';
import Family from './components/Family';
import Header from './components/Header';
import Date from './components/Date';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Theme from './utils/theme';
import GmapsLink from './components/GmapsLink';
function App() {
  const theme = new Theme('light');
  return (
    <div className={`App ${theme.bgColor}`}>
      <Header theme={theme} />
      <Family theme={theme} />
      <Date theme={theme}/>
      <Countdown theme={theme}/>
      <Timeline theme={theme}/>
      <GmapsLink theme={theme}/>
      <Footer theme={theme}/>
      
    </div>
  );
}

export default App;
