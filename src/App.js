// import logo from './logo.svg';
import './App.css';
import Family from './components/Family';
import Header from './components/Header';
import Date from './components/Date';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
function App() {
  return (
    <div className="App bg-slate-800">
      <Header />
      <Family />
      <Date />
      <Countdown />
      <Timeline />
    </div>
  );
}

export default App;
