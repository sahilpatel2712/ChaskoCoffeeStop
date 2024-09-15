// App.js
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Page2 from './components/Page2';
import Menu from './components/Menu';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import FeedbackPage from './components/FeedbackPage';
function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Body />
      </div>
      <Page2 />
      <Menu />
      <div>
        <Page3 />
      </div>
      <div>
        <Page4 />
      </div>
      <div>
        <FeedbackPage/>
      </div>
    </div>
  );
}

export default App;
