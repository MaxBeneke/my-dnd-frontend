// import logo from '../logo.svg';
import './App.css';
// import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './Auth/Auth'
import CharacterSheet from './CharacterSheet/CharacterSheet'
import ClassesPage from './ClassesPage/ClassesPage'
import RaceBackgroundPage from './RaceBackgroundPage/RaceBackgroundPage'
import UserPage from './UserPage/UserPage'
import AbilityScorePage from './AbilityScorePage/AbilityScorePage'
import ChoicesPage from './ChoicesPage/ChoicesPage'

function App() {
  
  return (
    <Switch>
      <Route exact path="/login">
        <Auth />
      </Route>
      <Route exact path="/user/:id">
        <UserPage />
      </Route>
      <Route exact path="/classes">
        <ClassesPage />
      </Route>
      <Route exact path ="/character/:id">
        <CharacterSheet />
      </Route>
      <Route exact path="/race-background">
        <RaceBackgroundPage />
      </Route>
      <Route exact path='/choices'>
        <ChoicesPage />
      </Route>
      <Route exact path='/ability-score'>
        <AbilityScorePage />
      </Route>
    </Switch>
      
  
  );
}

export default App;
