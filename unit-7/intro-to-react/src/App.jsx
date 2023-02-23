// import './App.css';
// import Footer from './components/footer/Footer';
// import Header from './components/headers/Header';
// import AboutMe from './components/aboutme/AboutMe';
// import Employee from './components/employeeinformation/Employee';
// import PresidentVotes from './components/Presidents/PresidentVotes';
// import DisplayTotals from './DisplayTotals';

// const votes = [
//   { name: "Abe Lincoln", count: 139033},
//   { name: "Stephen Douglas", count: 115509},
// ];

// function App() {

//   return (
//     <div className="App">
//       <Header />
//       <AboutMe />
//       <Employee />
     
//       <PresidentVotes/>
//       <Footer />
//     </div>
//   );
// }

// export default App;
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/headers/Header';
import AboutMe from './components/aboutme/AboutMe';
import Employee from './components/employeeinformation/Employee';
import PresidentVotes from './components/Presidents/PresidentVotes';



function App() {

  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Employee />
      <PresidentVotes votes/>
      <Footer />
    </div>
  );
}

export default App;