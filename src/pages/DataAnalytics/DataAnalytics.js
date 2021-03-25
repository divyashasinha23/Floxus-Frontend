import React from 'react';
import Toolbar from '../../components/ToolBar/Toolbar';
import Coursehero from '../../components/Coursehero/Coursehero';
import CourseOverview from '../../components/CourseOverview/CourseOverview';
import SyllabusCourse from '../../components/SyllabusCourse/SyllabusCourse';
import Footer from '../../components/Footer/Footer';
import CertificationSection from '../../components/CertificationSection/CertificationSection';
import TestimonialSection from '../../components/Testimonial/Testimonial';

const CourseData = {
  title: 'Data Analytics Bootcamp',
  description:
    'Get hands on Python skills and accelerate your data science career',
  courseHerodata: [
    'Proficiency in statistical analysis of data ',
    'Learn trending professional statistical software to analyse data',
    'Ability to create and evaluate data-driven models.',
  ],
  price: 5500,
  courseServices: ['90+ hours', '6+', '24/7'],
  courseObjectives: [
    'Python programming ',
    'Various python libraries like numpy ,scipy,matplotlib and so on.',
    'Learn to use softwares like tableau, powerbi and advanced excel',
    'Analysing big data using pig and hive',
  ],
  Topics: [
    'Data Wrangling',
    'Data Manipulation',
    'SQL',
    'Data Pipeline',
    'Query Language',
  ],
  prerequisite: [
    'Basic of linear algebra and statistics ',
    'Basics of any programming language is preferred  ',
  ],
  curriculum: [
    [
      'Introduction to Data Science',
      'An Introduction to PYTHON and basic python',
      'OOPs in python',
    ],
    [
      'Database SQLite and MySql',
      'Connecting MySQL database using python',
      'NumPy for Mathematical Computing',
      'SciPy for Scientific Computing',
      'Pandas for reading and saving data files',
    ],
    [
      'Introduction to Machine Learning with Python',
      'Use cases of Machine Learning',
      'Process flow of Machine Learning and Various categories of Machine Learning',
      'Understanding Linear Regression and Logistic Regression',
      'What is gradient descent in Machine Learning',
      'What is supervised learning, classification',
      'Decision Tree, algorithm for Decision Tree induction Confusion Matrix',
      'Random Forest',
    ],
    [
      'Naïve Bayes, working of Naïve Bayes, how to implement Naïve Bayes Classifier',
      'Support Vector Machine, working process of Support Vector Mechanism',
      'What is Hyperparameter Optimization',
      'Comparing Random Search with Grid Search',
      'How to implement Support Vector Machine for classification.',
      'Introduction to unsupervised learning, use cases of unsupervised learning',
      'What is K-means clustering, understanding the K-means clustering algorithm Optimal clustering',
    ],
    [
      'Connecting to & Preparing Data in ',
      'Understanding Tableau Concepts',
      'Understanding Tableau Concepts',
      'Organize data and apply filters',
      'Apply analytics to a worksheet Sharing Insights',
    ],
    [
      'Introduction to PowerBI',
      'Power Query for Data Transformation',
      'Data Visualization with Analytics',
      'Power BI Desktop & Administration',
    ],
    [
      'Entering Data',
      'Referencing in Formulas',
      'Name Range',
      'Understanding Logical Functions',
      'Getting started with Conditional Formatting',
      'Advanced-level Validation',
      'Important Formulas in Excel',
      'Working with Dynamic table',
      'Data Sorting',
      'Data Filtering',
      'Chart Creation',
      'Various Techniques of Charting',
      'Pivot Tables in Excel VBA',
    ],
    [
      'Installation , Architecture',
      'Data Types (scalar , complex)',
      'Running Pig (interactive , Batch)',
      'Pig Operators – Local, Store,Dump,Distinct, Filter, ForEach, generate , Limit, Union , join, order by, Describe ',
      'Group by , Avg Default UDFs available ( Built in function ) REGEX EXPLAIN Parallel processing ',
      'Custom UDF, How to use your custom UDF in your script',
    ],
    [
      'Installation , Hive Services , Architecture , Comparing Hive to traditional Databases',
      'Relational Data Analysis – (data types (primitive,complex)database tables,create,alter,delete)',
      'Hive Schema & Data storage Loading data into Hive views Storing query results (store)',
      'Text processing - Built in functions , string functions , regular expressions',
      'Managed vs External Tables',
      'Optimization : Partitioning , bucketing , indexing data • Extending Hive : Custom UDFs,Custom SerDes',
    ],
    ['Project Time'],
  ],
};

const DataAnalytics = () => {
  return (
    <>
      <Toolbar />
      <Coursehero
        courseData={CourseData}
        image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/dataanlaytics.jpg"
      />
      <CourseOverview
        courseObjectives={CourseData.courseObjectives}
        topics={CourseData.Topics}
        prerequisite={CourseData.prerequisite}
      />
      <SyllabusCourse curriculum={CourseData.curriculum} />
      <CertificationSection />
      {/* <ProjectSection /> */}
      <TestimonialSection />
      {/* <FAQSection /> */}
      <Footer />
    </>
  );
};

export default DataAnalytics;
