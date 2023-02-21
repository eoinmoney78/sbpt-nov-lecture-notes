import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/headers/Header';
import AboutMe from './components/aboutme/AboutMe';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <AboutMe/>
      <Footer />
    </div>
  );
}

export default App;
