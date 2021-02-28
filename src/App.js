import CampusSection from './components/CampusSection/CampusSection';
import CertificationSection from './components/CertificationSection/CertificationSection';
import CourseSection from './components/CourseSection/CourseSection';
import HeroSection from './components/HeroSection/HeroSection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Floxusfeature from './components/FloxusUSP/Floxusfeature';
import Coursehero from './components/Coursehero/Coursehero';
import Toolbar from './components/ToolBar/Toolbar';
import SyllabusCourse from './components/SyllabusCourse/SyllabusCourse';
import FAQSection from './components/FAQs/FAQSection';
import Footer from './components/Footer/Footer';
import CourseOverview from './components/CourseOverview/CourseOverview';
import WhatCert from './components/WhatCert/WhatCert';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Toolbar />
            <HeroSection />
            <Floxusfeature />
            <CampusSection />
            <WhatCert />
            <CourseSection />
            <Footer />
          </Route>
          <Route path="/course">
            <Toolbar />
            <Coursehero />
            <CourseOverview />
            <SyllabusCourse />
            <FAQSection />
            <Footer />
            {/* <CertificationSection /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
