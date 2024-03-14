// import { useState } from 'react';
import '/src/styles/app.css';
import Contact from './contact';
import Education from './education';
import Language from './language';
import About from './about';

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
        <div id="experience">
          <div className="expTitle">
            <h2>Experience</h2>
          </div>
          <div>
            <p>2019-2023</p>
            <p>Company Name | somewhere, Big City</p>
            <h3>Job position</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tempor nunc in sagittis imperdiet. Quisque non erat ipsum. Sed
              vehicula justo in ultricies vulputate. Phasellus ut rhoncus
              lectus. Nam metus ipsum, dignissim in posuere vitae, vestibulum et
              nisl. Suspendisse felis eros, sodales ut semper eget, convallis et
              dolor. Pellentesque nec felis sed lectus tempor tincidunt non non
              eros. Donec egestas dui ac orci porttitor interdum. Cras aliquam
              tortor imperdiet, laoreet odio a, sagittis odio. Duis sed
              facilisis purus. Ut a sollicitudin lacus. Suspendisse finibus
              felis nisl, nec porttitor velit finibus nec.
            </p>
          </div>
          <div>
            <p>2016-2019</p>
            <p>Company Name | somewhere, Big City</p>
            <h3>Job position</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tempor nunc in sagittis imperdiet. Quisque non erat ipsum. Sed
              vehicula justo in ultricies vulputate. Phasellus ut rhoncus
              lectus. Nam metus ipsum, dignissim in posuere vitae, vestibulum et
              nisl. Suspendisse felis eros, sodales ut semper eget, convallis et
              dolor. Pellentesque nec felis sed lectus tempor tincidunt non non
              eros. Donec egestas dui ac orci porttitor interdum. Cras aliquam
              tortor imperdiet, laoreet odio a, sagittis odio. Duis sed
              facilisis purus. Ut a sollicitudin lacus. Suspendisse finibus
              felis nisl, nec porttitor velit finibus nec.
            </p>
          </div>
          <div>
            <p>2013-2016</p>
            <p>Company Name | somewhere, Big City</p>
            <h3>Job position</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tempor nunc in sagittis imperdiet. Quisque non erat ipsum. Sed
              vehicula justo in ultricies vulputate. Phasellus ut rhoncus
              lectus. Nam metus ipsum, dignissim in posuere vitae, vestibulum et
              nisl. Suspendisse felis eros, sodales ut semper eget, convallis et
              dolor. Pellentesque nec felis sed lectus tempor tincidunt non non
              eros. Donec egestas dui ac orci porttitor interdum. Cras aliquam
              tortor imperdiet, laoreet odio a, sagittis odio. Duis sed
              facilisis purus. Ut a sollicitudin lacus. Suspendisse finibus
              felis nisl, nec porttitor velit finibus nec.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
