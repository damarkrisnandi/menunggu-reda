// import logo from './logo.svg';
import './App.css';

import utils from './utils/utils.json';
import Family from './components/Family';
import Header from './components/Header';
import Date from './components/Date';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Theme from './utils/theme';
import GmapsLink from './components/GmapsLink';
import Gift from './components/Gift';
import Song from './components/parts/Song';

function show(component, id) {
  if (!utils.hidden.includes(id)) {
    return (
      component
    )
  }

  return null;
}

function App() {
  const theme = new Theme('light');
  return (
    <div className={`App ${theme.bgColor}`}>
      <Song theme={theme}/>
      <Header theme={theme} />
      { show(<Family theme={theme} />, 'family') }
      { show(<Date theme={theme}/>, 'date') }
      { show(<GmapsLink theme={theme}/>, 'gmaps') }
      { show(<Countdown theme={theme}/>, 'countdown') }
      { show(<Timeline theme={theme}/>, 'timeline') }
      { show(<Gift theme={theme}/>, 'gift') }
      <Footer theme={theme}/>
      
    </div>
  );
}

export default App;
