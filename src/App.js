// App.js
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Page2 from './components/Page2';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="background-image-container">
        <Body />
      </div>
      <Page2 />
      <Menu/>
    </div>
  );
}

export default App;
