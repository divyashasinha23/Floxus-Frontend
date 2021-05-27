import React from 'react';
import Toolbar from '../../components/ToolBar/Toolbar';
import Coursehero from '../../components/Coursehero/Coursehero';
import CourseOverview from '../../components/CourseOverview/CourseOverview';
import TestimonialSection from '../../components/Testimonial/Testimonial';
import FAQSection from '../../components/FAQs/FAQSection';
import Footer from '../../components/Footer/Footer';
import { MdAccountBalance } from 'react-icons/md';

const CourseData = {
  title: 'Web Development Workshop',
  courseHerodata: [
    '3 days live workshop.',
    'Get certified.',
    'Become a part of Floxus Community',
  ],
  status: 'finished',
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
        active="true"
        image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/webDev.jpg"
        status={CourseData.status}
        watchlist="https://youtube.com/playlist?list=PLJOROP7Jw1kqBFnyX5IYfXAJsubEeq0Ln"
      />
      <CourseOverview
        courseObjectives={CourseData.courseObjectives}
        topics={CourseData.Topics}
        prerequisite={CourseData.prerequisite}
        status={CourseData.status}
        logo={<MdAccountBalance fontSize="45px" color="#050b75" />}
        description=" Access all the learning and project materials from floxus community."
        linkto="https://discord.gg/nyZnWRM7z8"
        btnText=" Join the Community"
        // FormTitle = "Have an Query?"
      />
      <TestimonialSection />
      {/* <FAQSection /> */}
      <Footer />
    </>
  );
};

export default WebDevWorkshop;
