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

function FooterAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion
        style={{
          backgroundColor: '#111111',
          boxShadow: 'none',
          color: 'white',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Company</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>About Us</p>
            <p>Careers</p>
            <p>Media</p>
            <p>Contact Us</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          backgroundColor: '#111111',
          boxShadow: 'none',
          color: 'white',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Resources</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Blogs</p>
            <p>Guides</p>
            <p>Interview Questions</p>
            <p>Webinars</p>
            <p>Podcasts</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          backgroundColor: '#111111',
          boxShadow: 'none',
          color: 'white',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Partner with Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Become an Instructor</p>
            <p>Become Training Associate</p>
            <p>Become Certification Partner</p>
            <p>Become Community Partner</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          backgroundColor: '#111111',
          boxShadow: 'none',
          color: 'white',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Help and Support</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Course Info</p>
            <p>FAQs</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Refund and cancellation Policy</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FooterAccordion;
