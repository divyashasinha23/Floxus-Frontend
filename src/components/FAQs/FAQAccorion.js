import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function FAQAccorion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion style={{ backgroundColor: '#F9F9F9', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Who is the mentor of the course?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The course will be taught by Mr Ashish Misra, who is a Microsoft
            Innovate Trainer and also an Oracle Certified Professional. He has a
            teaching experience of over 12 years and has taught more than 10000
            students. He has also been constantly conducting Faculty Development
            Programs in IITs and various corporate employee training for many
            MNC’s.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: '#F9F9F9', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Is there any demo class for the course?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we will be organizing a two day online live webinar in which
            you will be introduced to python, its scope and its application in
            the real world. A few live projects of real time applications based
            on python will be demonstrated.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: '#F9F9F9', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            What if I pay for the course but later don't like the teacher's
            methodology of teaching?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It is absolutely not a problem. If you don’t like the teaching
            methodology, we will refund you the amount fully. Although, this may
            be assured that the money will be refunded fully. This can be
            availed after 2-3 classes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: '#F9F9F9', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Why should I pay the full amount if I just want to learn and don't
            want any certificate?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you don’t need the Microsoft Technology Associate Certificate, it
            is fine. We will deduct the amount of the certificate from the price
            of the course. Nevertheless, you will still get the certificate from
            Floxus.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: '#F9F9F9', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            What if I can't attend live classes at a given time?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The class time will be decided such that everyone can attend. Even
            after that, if you miss the class, we will provide you with the
            recorded session of the respective class.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: '#F9F9F9', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            As heard by many, major companies hire only by seeing the talent at
            the time of the interview, how will MTA certificate help me at time
            of placement?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It is a highly competitive space out there, massive shortlisting is
            done based on certificates only. Certificates are used to
            differentiate between candidates having similar skillset, and it
            also acts as a filter for different companies while applying through
            recruiting platforms like LinkedIn.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FAQAccorion;
