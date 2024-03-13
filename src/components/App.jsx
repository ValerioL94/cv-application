// import { useState } from 'react';
import '/src/styles/App.css';

function App() {
  // const [status, setStatus] = useState('Test');
  return (
    <>
      <div className="side">
        <div id="photo">
          <img src="src/assets/images/brown-ostrich.jpg" alt="brown ostrich" />
        </div>
        <div id="Info">
          <h2>Contact</h2>
          <div>
            <h3>Name</h3>
            <p>John Smith</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>555-555-5555</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>notarealemail@gmail.com</p>
          </div>
          <div>
            <h3>Address</h3>
            <p>123 notReal St., Big City</p>
          </div>
          <div></div>
        </div>
        <div id="education">
          <h2>Education</h2>
          <div>
            <p>2002-2006</p>
            <h3>Some degree</h3>
            <p>Some College</p>
          </div>
          <div>
            <p>2007-2012</p>
            <h3>Some degree</h3>
            <p>Some University</p>
          </div>
        </div>
        <div id="language">
          <div>
            <div>
              <h2>Language</h2>
            </div>
            <h3>English</h3>
            <h3>Spanish</h3>
            <h3>French</h3>
          </div>
        </div>
      </div>
      <div className="main">
        <div id="about">
          <h1 className="name">Name Surname</h1>
          <h2 className="title">My current title</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tempor nunc in sagittis imperdiet. Quisque non erat ipsum. Sed
            vehicula justo in ultricies vulputate. Phasellus ut rhoncus lectus.
            Nam metus ipsum, dignissim in posuere vitae, vestibulum et nisl.
            Suspendisse felis eros, sodales ut semper eget, convallis et dolor.
            Pellentesque nec felis sed lectus tempor tincidunt non non eros.
          </p>
        </div>
        <div id="experience">
          <h2>Experience</h2>
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
