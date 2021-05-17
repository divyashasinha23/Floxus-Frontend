import React from 'react';
import styled from '@emotion/styled';
import Toolbar from '../../components/ToolBar/Toolbar';
import Footer from '../../components/Footer/Footer';

const PrivacyContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const PrivacyWrapper = styled.div`
  display: flex;
  ${'' /* flex-direction: column; */}
  width: 70%;
  background-color: white;
  border: 1px solid #cecce3;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 25px;

  @media (max-width: 496px) {
    width: 90%;
  }
`;

const PrivacyContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;

  .heading {
    font-size: 27px;
    font-weight: 600;
  }
`;
const PrivacyPolicy = () => {
  return (
    <>
      <Toolbar />
      <PrivacyContainer>
        <PrivacyWrapper>
          <PrivacyContent>
            <p className="heading">Privacy Policy</p>
            <p>
              This privacy policy governs your use of the website
              https://www.floxus.co/ ('Website') and the other associated
              websites and services managed by the Company. Please read this
              privacy policy ('Policy') carefully before using the Website, our
              services and products.  Accessing the website and providing your
              personal information shall be assumed that you have accepted the
              Policy and any other  terms and conditions available on the
              website. Please read this privacy policy ('Policy') carefully
              before using the Website, our services and products.  Accessing
              the website and providing your personal information shall be
              assumed that you have accepted the Policy and any other  terms and
              conditions available on the website. If any information provided
              by the user on the website violates the terms of this Policy,
              Floxus would be compelled to delete such information upon
              informing you of the same.
              <p>
                {' '}
                If you do not agree with the terms of this Policy, do not use
                our Website or avail any of our Services.
              </p>
            </p>
            <li>Assemblage Of Information</li>
            <p>
              While registering on our website,subscribing to the e-mails,
              attending events, responding to a survey or filling out a form we
              may ask you to provide us with certain personal Information that
              can be used to identify you. It may include :
            </p>
            <li>Your name</li>
            <li>Your Email Address</li>
            <li>Gender and Age</li>
            <li>Phone Number</li>
            <li>Location</li>
            <li>Course opted by you</li>
            <li>
              Transaction-related information, such as when you make purchases,
              respond to any of our offers, etc.
            </li>
            <li>
              Information you enter into our system when using the website, such
              as while asking doubts, participating in discussions, and taking
              tests.
            </li>
            <li>
              Sensitive Personal Information” as defined under the Information
              Technology (Reasonable Security Practices and Procedures and
              Sensitive Personal Data or Information) Rules, 2011 and in this
              context, includes passwords or any financial account information
              provided by you during registration.
            </li>
            <p>
              “Sensitive Personal Information” and “Associated Information”
              shall collectively be referred to as 'Information' in this Policy.
              We may also collect Information that your browser sends whenever
              you visit our site ("Log Data"). This Log Data may include
              information such as:
            </p>
            <li>Your IP address and browser type</li>
            <li>Device type and browser version</li>
            <li>
              The pages of our site that you visit and the time and date of your
              visit
            </li>
            <li>The time spent on those pages and other statistics</li>
            <li>
              Geographic location, including country, city calculated based on
              your IP address.
            </li>
            <p>
              While receiving payments from the user, we might  collect (either
              directly or through our payments partners) certain financial
              Information which may be considered important.
            </p>
            <p>1. Use of collected information </p>
            <p>
              Information collected by us is used for the preceding motives:
            </p>
            <li>To administer the products and services provided by us</li>
            <li>To study trends and data usage</li>
            <li>To conduct researches on user’s learning patterns</li>
            <li>To gather usage behaviour of our user base as a whole</li>
            <li>To gather usage behaviour of our user base as a whole</li>
            <li>Protecting us against any kind of fraud</li>
            <li>
              Analysing any issues pointed by the user regarding our services or
              content
            </li>
            <li>
              Analysing any issues pointed by the user regarding our services or
              content
            </li>
            <p>
              We intend to use the individual data and behavior patterns
              combined with personal information to provide you with
              personalized content for a better learning opportunity.
            </p>
            <p>1. Sharing your information</p>
            <p>
              We may periodically share aggregated and individual, anonymized
              and non-anonymized data to third party service providers to help
              us improve our services.
            </p>
            <p>
              We might share certain Information regarding our users to the
              following :
            </p>
            <li>
              Third parties such as instructors, companies helping us run
              promotions and surveys, etc.
            </li>
            <li>For security, legal compliance</li>
            <li>
              To authorize transactions we may share your financial data with
              such third-party providers
            </li>
            <p>Information may be disclosed only in the following cases:</p>
            <p>Information may be disclosed only in the following cases:</p>
            <li>
              To enforce applicable ToU, including investigation of potential
              violations thereof.
            </li>
            <li>
              To enforce applicable ToU, including investigation of potential
              violations thereof.
            </li>
            <li>
              To enforce applicable ToU, including investigation of potential
              violations thereof.
            </li>
            <li>
              With our trusted services providers who work on our behalf, do not
              have an independent use of the information we disclose to them,
              and have agreed to adhere to the rules set forth in this Policy;
            </li>
            <li>
              - With our trusted services providers who work on our behalf, do
              not have an independent use of the information we disclose to
              them, and have agreed to adhere to the rules set forth in this
              Policy;
            </li>
            <p>
              Third parties provide certain services which we may use to analyze
              the data and information to personalize, drive insights and help
              us better your experience or reach out to you with more value
              added applications, products, information and services. However,
              these third party companies do not have any independent right to
              share this information. We do not sell, trade or rent your
              Information to any third party unless it  has been expressly
              authorized by you either in writing or electronically to do so.
            </p>
            <p>1. Security of your Information</p>
            <p>
              We prioritize our concern about safeguarding the confidentiality
              of the user data, thereby we use appropriate security based on the
              sensitivity and type of Information being stored. Although we
              endeavor to provide reasonable security for the information we
              maintain, no security system can prevent the potential security
              breaches. You ought to understand that there is always a risk of
              unauthorized access to Information with internet enabled
              platforms.
            </p>
            <p>1. Review Of User Information</p>
            <p>
              The user should review the Information provided  to us on a
              regular basis so as  to ensure that any Sensitive Personal
              Information is not inaccurate or deficient. We won't be
              responsible for the authenticity of any Information or Sensitive
              Personal information supplied by you. Sensitive Personal
              Information” shall contain passwords or any other information that
              is classified as sensitive under Section 3 of the Information
              Technology (Reasonable Security Practices and Procedures and
              Sensitive Personal Data or Information) Rules, 2011. We shall
              address any discrepancies with respect to Information or Sensitive
              Personal Information within 30 days of identification by the user.
            </p>
            <p>1. Period Of Information Retention</p>
            <p>
              We do not intend to retain your Sensitive Personal Information for
              longer than it is required. However, there is a possibility that
              copies of any public content will be retained indefinitely in our
              systems, including in cached and archived pages of the platform,
              or if other users have copied or saved that information. In
              addition, copies of your content, including content that you have
              removed or deleted from your account, may also exist elsewhere on
              the Internet and be retained indefinitely. We might also retain
              information which may be relevant for internal processing,
              analytical reasons, fraud monitoring,etc.
            </p>
            <p>1. Your Rights</p>
            <p>
              You can access your Information and pertain to the option to opt
              out of promotional emails, cookies, and collection of your data
              further. You can update or terminate your account under our
              services, and can also contact us for the same. You definitely
              have the right to ask us to review, correct and amend the
              information we collect about you at any point in time. However,
              revoking your consent may negatively affect your use of the
              Platform. However, we would require a reasonable period of 30
              (thirty) days to follow any of your requests.
            </p>
            <p>1. Your Consent</p>
            <p>
              Accessing the website and providing your personal information
              shall be assumed that you have provided your consent and accepted
              the policy and any other terms and conditions available on the
              website.
            </p>
            <p>1. Changes to Privacy Policy</p>
            <p>
              We may update the Privacy Policy periodically. The updated Privacy
              Policy will be posted by us on the website
              https://www.floxus.tech/. We will send you notifications from time
              to time to keep you updated of any changes made to this Privacy
              Policy.
            </p>
            <p>1. Disclaimer</p>
            <p>
              We take the best security measures to protect your Information and
              try to prevent unauthorised access. However, we cannot guarantee
              the security of your information transmitted to the Platform. You
              agree that any transmission of information on the platform is at
              your own risk.
            </p>
            <p>1. Children’s Online Privacy Protection Act Compliance</p>
            <p>
              We are in compliance with the requirements of COPPA (Childrens
              Online Privacy Protection Act). Our site does not intend for
              children under 13. We do not knowingly collect any information
              from anyone under 13 years of age.
            </p>
            <p>1. Third Party Links</p>
            <p>
              Our platform may contain links to the websites of our partners,
              advertisers, affiliates,etc along with content which is not hosted
              by us. If you follow a link to any of the third party websites,
              please note that these websites have their own privacy policies
              and we do not control what data third parties collect or what they
              will do with it. We do not accept any responsibility or liability
              for the policies of third party links and embeds. Please check
              their policies before you submit any personal data to third party
              websites or mobile applications. Although, we do our best to keep
              bad actors off of the platform but third party actions are not
              covered by this Privacy Policy. Third party actions are covered by
              the privacy policy of the third-party service. So, please be
              careful when you see embedded forms and links on the platform and
              make sure you understand to whom you are submitting your
              information and what they say they plan to do with it. We suggest
              that you do not submit information to any third-party links or
              embeds. Nonetheless, we seek to protect the integrity of our site
              and welcome any feedback about third party sites.
            </p>
            <p>1. Product Privacy Information</p>
            <p>
              The [Product Privacy
              Policy](https://docs.google.com/document/d/e/2PACX-1vQSZqkoBw2H60O_EPy-NkKokaPhr1npLL64lCYuSWjEWh_ptQ0KmjxmL2jeNZa62GNGkebkQKNQQgZG/pub)
              explains what happens to any personal data that you provide to us
              or that we collect from you while you use our software, including
              browser extensions and mobile apps.
            </p>
            <p>1. Reporting Of Grievances</p>
            <p>1. Reporting Of Grievances</p>
            <h5>Grievance Officer Details –</h5>
            <p>
              Name: Hritik Shubham Mo. +91-9123499293 1. Contact Information If
              you have any questions about this Privacy Policy, you can email,
              write, or call us: Floxus Team E-mail : connect@floxus.co Mo: +91
              9123499293
            </p>
          </PrivacyContent>
        </PrivacyWrapper>
      </PrivacyContainer>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
