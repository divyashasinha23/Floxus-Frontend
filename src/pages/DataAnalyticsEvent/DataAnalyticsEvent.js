import React from 'react';
import Toolbar from '../../components/ToolBar/Toolbar';
import Coursehero from '../../components/Coursehero/Coursehero';
import CourseOverview from '../../components/CourseOverview/CourseOverview';
import TestimonialSection from '../../components/Testimonial/Testimonial';
import FAQSection from '../../components/FAQs/FAQSection';
import Footer from '../../components/Footer/Footer';

const CourseData = {
  title: 'Data Analytics Bootcamp',
  courseHerodata: [
    'Lorem ipsum ist non hey im isst none',
    'Lorem ipsum ist non hey im isst none',
    'Lorem ipsum ist non hey im isst none',
  ],
  price: 'FREE',
  courseServices: ['48+ hours', '3+', '24/7'],
  courseObjectives: [
    'Install Python and write your first program',
    'Describe the basics of the Python programming language',
    'Use variables to store, retrieve and calculate information',
    'Use variables to store, retrieve and calculate information',
  ],
  Topics: [
    'Data Wrangling',
    'Data Manipulation',
    'SQL',
    'Data Pipeline',
    'Query Language',
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

const DataAnalyticsEvent = () => {
  return (
    <>
      <Toolbar />
      <Coursehero courseData={CourseData} active="true" />
      <CourseOverview
        courseObjectives={CourseData.courseObjectives}
        topics={CourseData.Topics}
        prerequisite={CourseData.prerequisite}
      />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default DataAnalyticsEvent;
