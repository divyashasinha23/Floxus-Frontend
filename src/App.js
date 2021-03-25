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
import Python from './pages/PythonCourse/Python';
import DataAnalytics from './pages/DataAnalytics/DataAnalytics';
import Cybersecurity from './pages/Cybersecurity/Cybersecurity';
import MachineLearning from './pages/MachineLearning/MachineLearning';
import Testimonial from './components/Testimonial/Testimonial';
import TestimonialSection from './components/Testimonial/Testimonial';
import EventSection from './components/EventSection/EventSection';
import DataAnalyticsEvent from './pages/DataAnalyticsEvent/DataAnalyticsEvent';
import JoinUs from './pages/JoinUs/JoinUs';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Toolbar value="true" />
            <HeroSection />
            <Floxusfeature />
            <CampusSection />
            <EventSection />
            {/* <WhatCert /> */}
            <CourseSection />
            <TestimonialSection />
            <Footer />
          </Route>
          <Route path="/python-power-programming" component={Python} />
          <Route path="/data-analytics" component={DataAnalytics} />
          <Route path="/cybersecurity-networking" component={Cybersecurity} />
          <Route path="/machine-learning" component={MachineLearning} />
          <Route path="/testimonials" component={Testimonial} />
          <Route
            path="/data-analytics-workshop"
            component={DataAnalyticsEvent}
          />
          <Route path="/join-us" component={JoinUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
