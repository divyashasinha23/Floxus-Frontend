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
    fontWeight: theme.typography.fontWeightBold,
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
            When does the workshop start?{' '}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Monday, June 4th.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: '#F9F9F9', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            What is the duration of the workshop?{' '}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The workshop is for 3 days, starting on 4th June and concluding on
            6th June.
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
            Will this be live or pre-recorded?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, the session will be live. After the session, recording of the
            session will be shared.
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
            What are the timings?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Live sessions would be at 8.00 PM on Friday and 10.00 AM on Saturday
            and Sunday.
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
            I have a full time job, not sure if I can make it. Will you be
            sharing recordings?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! You’ll receive recordings of all the live sessions.
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
            Is this workshop only for advanced excel features?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It’s for people getting started and have some basic knowledge of
            excel. You will be taught the most common and powerful features of
            excel used for data analysis and storytelling using data.
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
            Would there be any certificate on completion?{' '}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! You will receive a certificate on completion only if you
            complete the tasks given after each session. (The task will be
            solely based on the topics covered in the session on the same day).
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
            I made the payment but didn’t receive any email. What should I do?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I made the payment but didn’t receive any email. What should I do?
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
            Will I get lifetime access to the videos?{' '}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, videos link will expire after one week of the workshop.{' '}
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
            Is there any discount for bulk registration?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, if you join the workshop in a group of five from the same
            college, ₹100 will be off for each candidate.{' '}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FAQAccorion;
