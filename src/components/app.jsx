// import { useState } from 'react';
import '/src/styles/app.css';
import Contact from './contact';
import Education from './education';
import Language from './language';
import About from './about';
import Experience from './experience';

function App() {
  // const [status, setStatus] = useState('Test');
  return (
    <>
      <div className="side">
        <div id="photo">
          <img src="src/assets/images/brown-ostrich.jpg" alt="brown ostrich" />
        </div>
        <Contact />
        <Education />
        <Language />
      </div>
      <div className="main">
        <About />
        <Experience />
      </div>
    </>
  );
}

export default App;
