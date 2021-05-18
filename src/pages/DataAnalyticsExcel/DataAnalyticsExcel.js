import React from 'react';
import Toolbar from '../../components/ToolBar/Toolbar';
import Coursehero from '../../components/Coursehero/Coursehero';
import CourseOverview from '../../components/CourseOverview/CourseOverview';
import TestimonialSection from '../../components/Testimonial/Testimonial';
import FAQSection from '../../components/FAQs/FAQSection';
import Footer from '../../components/Footer/Footer';
import RazorpayLogo from '../../images/razorpay.png';
import Syllbus_AccordionWorkshop from '../../components/Syllbus_Accordion_Workshop/Syllbus_Accordion_Workshop';
import SyllabusCourseWorkshop from '../../components/SyllabusCourseWorkshop/SyllabusCourseWorkshop';

const CourseData = {
  title: 'Data Analytics with Excel',
  courseHerodata: [
    '3 days live workshop.',
    'Get certified.',
    'Become a part of Floxus Community',
  ],
  status: 'Inprogress',
  price: '499',
  courseServices: ['3 Days', '3+', 'Community'],
  courseObjectives: [
    'Learn about Web Development Basics',
    'Learn about Web Developer Tools',
    'Learn how to make responsive Web page',
    'Learn HTML, CSS and Javascript',
  ],
  Topics: [
    'Advanced Excel',
    'Financial Functions',
    'Statistical Funtions',
    'VBA',
    'Workbook Events',
    'Case Studies',
  ],
  prerequisite: [],
  curriculum: [
    [
      'Introduction to Excel',
      'Creating a new excel sheet.',
      'Understanding the basic toolbar in a sheet.',
      'Understanding rows and columns.',
      'Entering text and numeric data in excel.',
      'Saving excel sheet',
      'Various formats (CSV, XLS, XLSX, and Macro-Enabled sheets)',
      'Adding sequential data',
      'Regular sequence',
      'Customized sequence',
      'Rows and Columns',
      'Moving rows and columns',
      'Hiding rows and columns',
      'Auto fit',
      'Transpose',
      'Skip blanks',
      'Functions and formulae',
      'Range',
      'Case Studies',
    ],
    [
      'Other functions such as Discounts, Metric Conversions, equal to and not equal to',
      'Basic Cell Formatting Functions',
      'Converting text to numbers',
      'Converting numbers to text',
      'Decimal points',
      'Day, date and time',
      'Cell themes',
      'Merging cells, wrapping cells. strikethrough',
      'Superscript, subscript, check mark',
      'Fractions',
      'Currency and accounting',
      'Keyboard Shortcuts',
      'Frequently used shortcuts',
      'Ribbon keyboard shortcuts',
      'Keyboard shortcuts for formatting cells',
      'Keyboard shortcuts for making selections and performing actions',
      'Keyboard shortcuts for working with data, functions, and the formula bar',
      'Function keys',
      'Other useful shortcut keys',
      'To understand the few Concepts in excel like: Share, Print, Freeze, Protect, Data Validation',
      'Advanced Excel Formats',
      'Count and sum',
      'Cell references',
      'Logical functions',
      'Text functions',
      'Look up and references',
      'Financial functions',
      'Statistical functions',
      'Round up functions',
      'Arrays',
      'Data Analysis( Sorting, Filter, Charts, Tables, Pivot Tables, Conditional Formatting, What if analysis, Solver, Analysis Tool Pack, Regression )',
      'Case Studies',
    ],
    [
      'Macros',
      'Macros Errors',
      'VBA(Visual Basics for Application)',
      'Workbook and worksheet object, Range object, Variables, Message Box, If-Then Statement',
      'Loops, String Manipulation, Date and Time, Events, Functions and Sub, Application Object, Active X control, USERFORMS',
      'Case Studies',
    ],
  ],
};

const DataAnalyticsExcel = () => {
  return (
    <>
      <Toolbar />
      <Coursehero
        courseData={CourseData}
        // active="true"
        image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/excel.jpg"
        status={CourseData.status}
        watchlist="https://www.youtube.com/watch?v=w0ZKuyOyt50&list=PLJOROP7Jw1kpCWzslEeISHiQhsRqkLZ3Q"
      />

      <CourseOverview
        courseObjectives={CourseData.courseObjectives}
        topics={CourseData.Topics}
        prerequisite={CourseData.prerequisite}
        status={CourseData.status}
        logo={<img src={RazorpayLogo} alt="paytm" height="40%" />}
        description=" Learn By a Razorpay Analyst"
        linkto="https://airtable.com/shrjC0NjNCVRs87Vn"
        btnText="Enroll Know"
        // FormTitle = "Have an Query?"
      />
      <SyllabusCourseWorkshop curriculum={CourseData.curriculum} />

      <TestimonialSection />
      {/* <FAQSection /> */}
      <Footer />
    </>
  );
};

export default DataAnalyticsExcel;
