import React from 'react';
import styled from '@emotion/styled';
import { fade, withStyles, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import SubmissionCard from '../SubmissionCard/SubmissionCard';
import { db } from '../../firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const BatchContactContainer = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #d9d9d9, -5px -5px 8px #e7e7e7;

  @media (max-width: 496px) {
    margin-top: 25px;
    width: 90%;
  }
`;

const BatchContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
`;

const HeadWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-basis: 20%;
  justify-content: center;
  align-items: center;

  .heading {
    font-size: 14px;
    font-weight: 600;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-basis: 80%;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .btnform {
      margin-top: 5px;
      width: 95%;
    }
  }
`;

const BatchContact = () => {
  const classes = useStyles();
  const [active, setActive] = React.useState(true);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [contact, setContact] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('contacts')
      .add({
        name: name,
        email: email,
        contact: contact,
      })
      .then(() => setActive(false))
      .catch((error) => alert(error));

    setName(' ');
    setEmail(' ');
    setContact(' ');
  };

  return (
    <>
      {active ? (
        <BatchContactContainer>
          <BatchContactWrapper>
            <HeadWrapper>
              <p className="heading">Upcoming Batch Details</p>
            </HeadWrapper>

            <FormWrapper>
              <form className={classes.root} onSubmit={handleSubmit}>
                <FormControl className={classes.margin}>
                  <BootstrapInput
                    placeholder="Name"
                    id="bootstrap-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl className={classes.margin}>
                  <BootstrapInput
                    id="bootstrap-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </FormControl>
                <FormControl className={classes.margin}>
                  <BootstrapInput
                    placeholder="Contact No."
                    id="bootstrap-input"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </FormControl>

                <Button
                  variant="contained"
                  color="primary"
                  className="btnform"
                  type="submit"
                  disableElevation
                  // onClick={() => setTimeout(() => setActive(false), 2000)}
                >
                  Notify Me
                </Button>
              </form>
            </FormWrapper>
          </BatchContactWrapper>
        </BatchContactContainer>
      ) : (
        <SubmissionCard />
      )}
    </>
  );
};

export default BatchContact;
