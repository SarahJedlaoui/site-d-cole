import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux'; 
import  { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { Alert } from "react-bootstrap"
import 'firebase/firestore';
//import fire from '../../fire';
import "firebase/auth";
import firebase from 'firebase/app';

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


function GereAdministre({profile}) {
  
  const classes = useStyles();
  

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [open, setOpen] = useState(false);
  const [nCin, setNcin] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { currentUser} = useAuth();
  const { updatePassword, updateEmail } = useAuth()
  const user = firebase.firestore().collection('users').doc(currentUser.uid);


  /*const handleClickOpen = () => {
    setOpen(true);
  };*/
   
  
  
  
  
  const handleClose = () => {
    setOpen(false);
  };
  
   

  function handleSubmit(e) {
    e.preventDefault()
    
    const promises = []
    
    setLoading(true)
    setError("")
    
    user.update({
      firstName: prenom,
      lastName: nom,
      nCin: nCin ,
      telephone : telephone,
      initials: prenom[0] +nom[0],
    })
    
    if (email !== currentUser.email) {
      promises.push(updateEmail(email))
    }
    if (password) {
      promises.push(updatePassword(password))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/ProfileAdministre")
      })
      .catch(() => {
        setError("Failed to update account")
        //history.push("/ProfileAdministre")
      })
      .finally(() => {
        setLoading(false)
      })

    }


  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center" >
            Profile  
          </Typography>
         
          <React.Fragment>
      <form className={classes.form} onSubmit={handleSubmit} >
          <Grid container spacing={3}>
         <Grid item xs={12} sm={6}>
          <TextField onChange={(e) => setPrenom(e.target.value)}
            id="prenom"
            defaultValue= {profile.firstName} 
            name="prenom"
            label="Prénom"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField onChange={(e) => setNom(e.target.value)}
            id="nom"
            defaultValue= {profile.lastName} 
            name="nom"
            label="Nom"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField onChange={(e) => setEmail(e.target.value)}
            id="email"
            defaultValue={currentUser.email}
            label="Address Email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} >
          <TextField  onChange={(e) => setPassword(e.target.value)}
           placeholder="Laisser vide pour garder le même "
           id="password"
           type="password" 
          label="Mot de passe " 
          fullWidth />
        </Grid>
        
        <Grid item xs={12} >
          <TextField onChange={(e) => setNcin(e.target.value)}
            defaultValue= {profile.nCin} 
            id="nCin"
            name="nCin"
            label="N°CIN"
            fullWidth
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField onChange={(e) => setTelephone(e.target.value)}
            defaultValue={profile.telephone} 
            id="grp"
            name="grp"
            label="N°de téléphone"
            fullWidth
          />
        </Grid>
      </Grid>
      <div className={classes.buttons}>
        
            <Button
              variant="contained"
              color="Primary"
              className={classes.button}
              type='submit'
              //onClick={handleClickOpen}
              disabled={loading}
              
            >
              Enregistrer
            </Button>


             <Dialog
              open={open}
              onClose={handleClose}
              >
             <DialogTitle >{"Notification"}</DialogTitle>
             <DialogContent>
              <DialogContentText >
                  Modification enregistrés avec succés
             </DialogContentText>
            </DialogContent>
             <DialogActions>
            <Button onClick={handleClose} color="primary">
               Ok
            </Button>
           </DialogActions>
           </Dialog>
         </div>
         </form>
              </React.Fragment>
              {error && <Alert variant="danger">{error}</Alert>}
              <Grid item xs>
                <Link href='ProfileAdministre' variant="body2" color='primary'>
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

export default connect(mapStateProps)(GereAdministre)