// import logo from '../logo.svg';
import './App.css';
import { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Auth from './Auth/Auth'
import CharacterSheet from './CharacterSheet/CharacterSheet'
import ClassesPage from './ClassesPage/ClassesPage'
import RaceBackgroundPage from './RaceBackgroundPage/RaceBackgroundPage'
import UserPage from './UserPage/UserPage'
import AbilityScorePage from './AbilityScorePage/AbilityScorePage'
import ChoicesPage from './ChoicesPage/ChoicesPage'
import { useDispatch } from 'react-redux'
import { updateUser } from './redux/userSlice'

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch(`${process.env.REACT_APP_RAILS_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`}
    })
      .then(r => r.json())
      .then(data => {
        dispatch(updateUser(data))
        if (!data.name) {
          history.push('/login')
        }
      })
  }, [dispatch, history])

  
  return (
    <div className="App">
    <Switch>
      <Route exact path="/login">
        <Auth key='login'/>
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
      <Route path='*'>
        <Auth key='default' />
      </Route>
    </Switch>
    </div>
      
  
  );
}

export default App;
