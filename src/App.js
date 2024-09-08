<<<<<<< HEAD
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
=======
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body>
      </Body>
      </div>   
>>>>>>> 8f3f38fa8995d98aab982cb3f8949a5247185c08
  );
}

export default App;
