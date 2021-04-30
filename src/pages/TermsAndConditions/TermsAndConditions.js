import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Toolbar from '../../components/ToolBar/Toolbar';

const TermsContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const TermsWrapper = styled.div`
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

const TermsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  margin-top: 15px;

  .heading {
    font-size: 27px;
    font-weight: 600;
  }

  p {
    margin-top: 5px;
  }
`;

const TermsAndConditions = () => {
  return (
    <>
      <Toolbar value="true" />
      <TermsContainer>
        <TermsWrapper>
          <TermsContent>
            <p className="heading">Terms and Conditions</p>
            <h3>Terms</h3>
            <p>
              This website (“floxus.co”) is owned and operated by Floxus
              Education Pvt Ltd.. By accessing this web site, you are agreeing
              to be bound by these web site Terms and Conditions of Use, all
              applicable laws and regulations, and agree that you are
              responsible for compliance with any applicable local laws. If you
              do not agree with any of these terms, you are prohibited from
              using or accessing this site. The materials contained in this web
              site are protected by applicable copyright and trademark law.
            </p>
            <h3>Your obligations</h3>
            <p>
              You must comply with any instructions we give you about how to use
              our website and must not do anything that interferes with or
              adversely affects the normal operation of the website (including
              the ability of other users to access or use the website). You are
              responsible for ensuring the security of the systems and devices
              that you use to access our website, including through use of
              appropriate virus-checking and other security software.
            </p>
            <h3>Registration</h3>
            <p>
              You must comply with any instructions we give you about how to use
              our website and must not do anything that interferes with or
              adversely affects the normal operation of the website (including
              the ability of other users to access or use the website). You are
              responsible for ensuring the security of the systems and devices
              that you use to access our website, including through use of
              appropriate virus-checking and other security software.
            </p>
            <h3>Intellectual property</h3>
            <p>
              All of the intellectual property rights in and to our website
              belong to us and our licensors. We may update and change the
              materials available on our website, including by removing
              materials, at any time in our discretion without notice to you.
              You may download or print sections of our website if needed for
              your own personal use, but otherwise you may not reproduce any
              part of our website without our express prior consent. To the
              extent that our website contains functionality that allows you to
              access or download specific materials through our website, your
              use of that functionality and the downloaded materials may be
              subject to separate terms and conditions which you will be asked
              to read and accept at the relevant time.
            </p>
            <h3>Website Links</h3>
            <p>
              Our website may contain or link to information that has not been
              devised, verified or tested by us or any of our officers,
              employees or agents. These are provided for your information only.
              We do not take any responsibility for that information, nor
              endorse its accuracy or completeness. We do not guarantee that the
              information, or the provision of the hyperlinks to you, does not
              infringe third party rights. If our website contains a link to an
              external website, we do not endorse, recommend, approve, guarantee
              or introduce any third parties or the services and/or products
              that those third parties may offer. We accept no responsibility
              for them or any of the content available, or for any loss or
              damage that may arise from your use of them. You may provide a
              link to the home page of our website at, on any website you
              operate, as long as you do not suggest any form of association,
              approval or endorsement on our part without our express prior
              permission and you promptly delete the link at our request. Except
              as set out in this clause, you may not link to our website.
            </p>
            <h3>Liability</h3>
            <p>
              While we will use reasonable care and skill in operating our
              website, we cannot promise that our website will always be
              available, meet your requirements or completely free of faults,
              errors or compromise from cybersecurity events. To the maximum
              extent permitted by law, except as expressly set out in these
              terms of use, we exclude: -all conditions, representations,
              warranties and statutory guarantees, whether express or implied,
              in relation to our website; and -any liability, whether in
              contract, tort (including negligence), or otherwise, for any
              indirect or consequential loss, damage or expense incurred by you
              or any other user in connection with our website. To the extent we
              are unable by law to exclude any implied condition,
              representation, warranty or statutory guarantee in relation to the
              provision of goods or services through our website, we limit our
              liability for a breach to the re-supply of those goods or
              services, or payment for such re-supply. This is without
              limitation to any other exclusions or restrictions of our or
              others’ liability in connection with this website.
            </p>
            <h3>Privacy</h3>
            <p>
              We will manage any personal information that we collect through
              our website in accordance with our Privacy Policy, which you can
              access <Link to="/privacy-policy">here</Link>
            </p>
            <h5>Questions?</h5>
            <p>
              Please contact us at connect@floxus.co if you have any questions
              about our website.
            </p>
          </TermsContent>
        </TermsWrapper>
      </TermsContainer>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
