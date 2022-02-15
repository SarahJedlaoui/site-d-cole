import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {connect} from 'react-redux'; 
import { useAuth } from "../../contexts/AuthContext"

function ISED() {
   return (
     <Typography variant="body2" color="textSecondary" align="center">
       {'ISED '}
 
       <Link color="inherit">
       <i class="fas fa-university"></i>
       </Link>{ ' ' }
 
       {new Date().getFullYear()}
       {'.'}
     </Typography>
   );
 }

const useStyles = makeStyles((theme) => ({
  
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

function ProfileAdministre({profile}) { 
  
  const classes = useStyles();
  const { currentUser} = useAuth();
  
  return (

    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="base-line" >
            Profile
          </Typography>
              <Box component="span" m={5}>
              </Box>
              <React.Fragment>
              <Grid container spacing={3}>
                 <Grid item xs={12} sm={6}>
                      <h3>
                        Prénom : {profile.firstName}
                      </h3>
        </Grid>
        <Grid item xs={12} sm={6}>
           <h3>
             Nom :  {profile.lastName} 
           </h3>
        </Grid>
        <Grid item xs={12}>
          <h3>
            Addresse email : {currentUser.email}
          </h3>
        </Grid>
       
        <Grid item xs={12} >
          <h3>
            N°CIN :  {profile.nCin} 
          </h3>
        </Grid>
        <Grid item xs={12} >
          <h3>
            Mot de passe: ******
          </h3>
        </Grid>
        <Grid item xs={12} >
        <h3>
          N°de téléphone : {profile.telephone} 
        </h3>
        </Grid>
      </Grid>
      <div className={classes.buttons}>
            <Button
              href='GereAdministre'
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Modifier
            </Button>
      </div>
              </React.Fragment>
              <Grid item xs>
                <Link href='Administre' variant="body2" color='primary'>
                  Retour
                </Link>
              </Grid>
        </Paper>
        <ISED />
      </main>
    </React.Fragment>
  );
}

const mapStateProps =(state)=>{
  return{
    users: state.auth.users,
    profile: state.firebase.profile 
  }

}

export default connect(mapStateProps)(ProfileAdministre) ;
