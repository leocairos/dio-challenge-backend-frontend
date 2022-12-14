import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core/';
import Cart from './Cart';

const useStyles = makeStyles((theme) => ({
    logo: {
      width: '200px',
      margin: '15px',
    },
  }));

const Header = () => {
    const classes = useStyles();

    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3'>
            <img className={classes.logo} src="./images/dio_shopping.svg" alt="DIO Shopping Logo"/>
            </Typography>
            <Link to="/">
                <Button color="primary">Home</Button>
            </Link>
            <Link to="/contato">
                <Button color="primary">Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
