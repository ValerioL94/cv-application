import '/src/styles/app.css';
import Contact from './contact';
import Education from './education';
import Language from './language';
import About from './about';
import Experience from './experience';

function App() {
  return (
    <>
      <div className="side">
        <div id="photo">
          <img src="/brownOstrich.jpg" alt="brown ostrich" />
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
