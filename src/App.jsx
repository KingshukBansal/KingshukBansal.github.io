import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Education,Hero, Navbar, Tech, Works,Achievement, StarsCanvas, Findme } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
      <div className='relative bg-gradient-to-b from-primary via-secondary to-transparent bg-cover bg-no-repeat bg-center'>
  <div className='backdrop-blur-md absolute inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center'></div>
            <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Tech />
        <Education/>
        <Achievement/>
        {/* <Experience /> */}
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Findme/>
    </BrowserRouter>
  );
}

export default App;
