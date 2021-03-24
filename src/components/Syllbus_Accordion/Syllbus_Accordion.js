import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CgLaptop, CgLayoutGrid } from 'react-icons/cg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  hideborder: {
    marginTop: '8px',
    boxShadow: 'none',
    borderRadius: '5px',
    '&.MuiAccordion-root:before': {
      display: 'none',
    },
  },
  summaryContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function Syllbus_Accordion({ curriculum }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {curriculum.map((data, index) => {
        return (
          <Accordion
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
            className={classes.hideborder}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                Module {index + 1}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.summaryContainer}>
              {data.map((point) => (
                <Typography>
                  {' '}
                  <li>{point}</li>{' '}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
