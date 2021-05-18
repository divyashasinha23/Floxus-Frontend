import React from 'react';
import Toolbar from '../../components/ToolBar/Toolbar';
import Coursehero from '../../components/Coursehero/Coursehero';
import CourseOverview from '../../components/CourseOverview/CourseOverview';
import TestimonialSection from '../../components/Testimonial/Testimonial';
import FAQSection from '../../components/FAQs/FAQSection';
import Footer from '../../components/Footer/Footer';
import PaytmLogo from '../../images/paytm.png';

const CourseData = {
  title: 'Web Development Workshop',
  courseHerodata: [
    '3 days live workshop.',
    'Get certified.',
    'Become a part of Floxus Community',
  ],
  status: 'Inprogress',
  price: 'FREE',
  courseServices: ['3 Days', '3+', 'Community'],
  courseObjectives: [
    'Learn about Web Development Basics',
    'Learn about Web Developer Tools',
    'Learn how to make responsive Web page',
    'Learn HTML, CSS and Javascript',
  ],
  Topics: [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'UI DEVELOPMENT',
    'RESPONSIVE DESIGN',
    'DEVEOPER TOOLS',
  ],
  prerequisite: [],
  curriculum: [
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
  ],
};

const WebDevWorkshop = () => {
  return (
    <>
      <Toolbar />
      <Coursehero
        courseData={CourseData}
        // active="true"
        image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/webDev.jpg"
        status={CourseData.status}
        watchlist="https://www.youtube.com/watch?v=w0ZKuyOyt50&list=PLJOROP7Jw1kpCWzslEeISHiQhsRqkLZ3Q"
        linkto="https://airtable.com/shrjC0NjNCVRs87Vn"
      />
      <CourseOverview
        courseObjectives={CourseData.courseObjectives}
        topics={CourseData.Topics}
        prerequisite={CourseData.prerequisite}
        status={CourseData.status}
        logo={<img src={PaytmLogo} alt="paytm" height="30%" />}
        description=" Learn By a Paytm Engineer"
        linkto="https://airtable.com/shrjC0NjNCVRs87Vn"
        btnText="Enroll Know"
        // FormTitle = "Have an Query?"
      />
      <TestimonialSection />
      {/* <FAQSection /> */}
      <Footer />
    </>
  );
};

export default WebDevWorkshop;
