import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

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
            <p onClick={window.scroll(0, 0)}>About Us</p>
            <Link
              to="/join-us"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <p>Careers</p>
            </Link>
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
            <a
              href="https://www.notion.so/Floxus-Refund-Policy-aa9b1acfa7784a82975e4b80f54f95eb"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <p>Refund and cancellation Policy</p>
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FooterAccordion;
