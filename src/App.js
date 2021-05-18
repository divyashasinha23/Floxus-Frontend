import CampusSection from './components/CampusSection/CampusSection';
import ReactGA from 'react-ga';
import CertificationSection from './components/CertificationSection/CertificationSection';
import CourseSection from './components/CourseSection/CourseSection';
import HeroSection from './components/HeroSection/HeroSection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Floxusfeature from './components/FloxusUSP/Floxusfeature';
import Toolbar from './components/ToolBar/Toolbar';
import Footer from './components/Footer/Footer';
import Python from './pages/PythonCourse/Python';
import DataAnalytics from './pages/DataAnalytics/DataAnalytics';
import Cybersecurity from './pages/Cybersecurity/Cybersecurity';
import MachineLearning from './pages/MachineLearning/MachineLearning';
import Testimonial from './components/Testimonial/Testimonial';
import TestimonialSection from './components/Testimonial/Testimonial';
import EventSection from './components/EventSection/EventSection';
import DataAnalyticsEvent from './pages/DataAnalyticsEvent/DataAnalyticsEvent';
import JoinUs from './pages/JoinUs/JoinUs';
import CyberSecurityEvent from './pages/CyberSecurityEvent/CyberSecurityEvent';
import FloatingActionButtons from './components/FloatingActionButton/FloatingActionButton';
import CouponSection from './components/CouponSection/CouponSection';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import WebDevWorkshop from './pages/WebDevWorkshop/WebDevWorkshop';
import DataAnalyticsExcel from './pages/DataAnalyticsExcel/DataAnalyticsExcel';

ReactGA.initialize('G-DL76B4YQZL');

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
            {/* <FloatingActionButtons /> */}
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
          <Route
            path="/cybersecurity-workshop"
            component={CyberSecurityEvent}
          />

          <Route path="/web-development-workshop" component={WebDevWorkshop} />

          <Route
            path="/data-analytics-with-excel"
            component={DataAnalyticsExcel}
          />
          <Route path="/join-us" component={JoinUs} />
          <Route path="/enroll" component={CouponSection} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/refund-cancellation-policy" component={RefundPolicy} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
