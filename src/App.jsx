import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Education,Hero, Navbar, Tech, Works,Achievement, StarsCanvas, Findme } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
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
