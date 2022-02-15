import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import img1 from '../../assets/images/img-1.jpg';
import img2 from '../../assets/images/img-2.jpg';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    alignItems: 'center',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
   
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    alignItems: 'center',
  },
  cardContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


 function Administre({profile}) {
  const classes = useStyles();
  
  
  const {logout} = useAuth();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Directeur Général
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              {profile.firstName} {profile.lastName} 
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="secondary" href='ProfileAdministre'>
                    Voir Profil
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="default" onClick={logout}>
                   Déconnecter
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="sm" align="center">
          <Grid container spacing={5}>
           
              <Grid item  xs={12} sm={6} >
                <Card className={classes.card} align="center">
                  <CardMedia
                    className={classes.cardMedia}
                    image= {img1}
                    title="img 1"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Etudiant
                    </Typography>
                    <Typography>
                     Gérer Etudiant
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button  href='ListeEtudiantTest'
                    size="large" color="primary">
                      Liste
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6} >
                <Card className={classes.card} align="center">
                  <CardMedia
                    className={classes.cardMedia}
                    image= {img2}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Enseignant
                    </Typography>
                    <Typography>
                     Gérer Enseignant
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" color="primary" href='ListeEnseignantTest'>
                      Liste
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
           
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <ISED />
      </footer>
      {/* End footer */}
    </React.Fragment>
  ); 
}
const mapStateProps =(state)=>{
  return{
    users: state.auth.users,
    profile: state.firebase.profile 
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Administre)
