

// - Create a new folder called aboutme within the components folder.
// - Create a new file inside the folder called AboutMe.jsx.
// - Create a <p> tag that notes where you grew up.
//   - Use variables for city and state.
// - Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
// - Export the component.
// - Import the component into App.jsx and mount it between the Header and Footer components.
  

function AboutMe  ()  {
  const city = 'Newmarket-On-Fergus';
  const state = 'Clare';
  const country = "Ireland";

  let styles = {
    ul: {
        textAlign: 'left',
        color: 'red'
    },
    p: {
        fontSize: "20pt"
    }
   
  }

  return (
   <div id="about-me-section">
     <p style={styles.p}>I grew up in {city}, {state}, {country}
     
     <br/>
     I went to these places today:
     <ul style={{textAlign: "left", color: "red"}}>
        <li>Store!!</li>
        <li>Outside!!</li>
        <li>Kitchen!!</li>
     </ul>
   
     </p>
     </div>
    
  );
};

export default AboutMe;
