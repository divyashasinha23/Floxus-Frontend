import React from 'react';
import styled from '@emotion/styled';
import Toolbar from '../../components/ToolBar/Toolbar';
import Footer from '../../components/Footer/Footer';

const RefundContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const RefundWrapper = styled.div`
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

const RefundContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;

  .heading {
    font-size: 27px;
    font-weight: 600;
  }
`;

const RefundPolicy = () => {
  return (
    <>
      <Toolbar />
      <RefundContainer>
        <RefundWrapper>
          <RefundContent>
            <p className="heading">Refund and Cancellation Policy</p>
            <p>
              1. Refunds can be initiated within a week from the commencement of
              classes.,via a call to the reception desk followed by mail to
              insert an email address with reason for refund.
            </p>
            <p>
              2. In case a timely request(within a week of commencement of
              classes) is received
            </p>
            <li>
              Floxus Education Pvt. Ltd. will refund 100% of the amount paid,
              between 30 to 45 days of raising request for refund.
            </li>
            <li>
              Floxus Education Pvt. Ltd. will refund 90% of the amount paid, if
              the refund amount is required within 10 days of raising a request
              for refund.
            </li>
            <p>
              3. No refund claim will be entertained after 7 days from the
              commencement of the class.
            </p>
          </RefundContent>
        </RefundWrapper>
      </RefundContainer>
      <Footer />
    </>
  );
};

export default RefundPolicy;
