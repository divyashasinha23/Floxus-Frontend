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
            <p onClick={() => window.scroll(0, 0)}>About Us</p>
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
            <a
              href="mailto:floxuseducation@gmail.com?subject=%20Interested%20to%20become%20an%20instructor%20at%20Floxus&body=%20Interested%20to%20become%20an%20instructor%20at%20Floxus"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <p>Become an Instructor</p>
            </a>

            <a
              href="mailto:floxuseducation@gmail.com?subject=%20Interested%20to%20become%20a%20training%20associate%20at%20Floxus&body=%20Interested%20to%20become%20a%20training%20associate%20at%20Floxus"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <p>Become Training Associate</p>
            </a>
            <a
              href="mailto:floxuseducation@gmail.com?subject=%20Interested%20to%20become%20Certification%20Partner&body=Please%20attach%20your%20company%20brochure%20and%20also%20explain%20the%20terms%20for%20this%20collaboration."
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <p>Become Certification Partner</p>
            </a>
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
            <Link
              to="/refund-cancellation-policy"
              style={{ textDecoration: 'none', color: 'white' }}
              onClick={() => window.scroll(0, 0)}
            >
              <p>Refund and cancellation Policy</p>
            </Link>
            <Link
              to="/privacy-policy"
              style={{ textDecoration: 'none', color: 'white' }}
              onClick={() => window.scroll(0, 0)}
            >
              <p>Privacy Policy</p>
            </Link>
            <Link
              to="/terms-and-conditions"
              style={{ textDecoration: 'none', color: 'white' }}
              onClick={() => window.scroll(0, 0)}
            >
              <p>Terms and Conditions</p>
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
          <Typography className={classes.heading}>Contact Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Email : connect@floxus.co</p>
            <p>Phone : +91 9123499293</p>
            <p>
              Address : House no:-24, Madhukam lane, Sastri Chowk, Ratu Rd,
              Ranchi, 834005
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FooterAccordion;
