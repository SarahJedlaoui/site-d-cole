import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Administratif from './components/SignIn/Administratif';
import Etudiant from './components/EspaceEtudiant/Etudiant';
import SignUp from './components/SignUp/SignUp';
import Administre from './components/Administre/Administre';
import ListeEtudiant from './components/ListeEtudiant/ListeEtudiant';
import ListeEtudiantTest from './components/ListeEtudiant/ListeEtudiantTest';
import ListeEnseignant from './components/ListeEnseignant/ListeEnseignant';
import ListeEnseignantTest from './components/ListeEnseignant/ListeEnseignantTest';
import ProfileAdministre from './components/Administre/ProfileAdministre';
import GereAdministre from './components/Administre/GereAdministre';
import {AuthProvider} from './contexts/AuthContext';
import PrivateRoute from './contexts/PrivateRoute';
import ForgotPassword from './components/SignIn/ForgotPassword';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} /> {/* every time we go to / it open upp the home component */ }
          <Route path='/administratif' component={Administratif} />
          <Route path='/Etudiant' component={Etudiant} />
          <Route path='/forgotpassword' component={ForgotPassword} />
          <AuthProvider>
          <Route path='/sign-up' component={SignUp} /> 
          <PrivateRoute path='/administre' component={Administre} />
          <PrivateRoute path='/ListeEtudiant' component={ListeEtudiant} />
          <PrivateRoute path='/ListeEnseignant' component={ListeEnseignant} />
          <PrivateRoute path='/ProfileAdministre' component={ProfileAdministre } />
          <PrivateRoute path='/GereAdministre' component={GereAdministre } />
          <Route path='/listeEtudiantTest' component={ListeEtudiantTest} />
          <Route path='/listeEnseignantTest' component={ListeEnseignantTest} />
          </AuthProvider>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;