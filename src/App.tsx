import React from 'react'
import { Container, Drawer, Link, Typography } from '@material-ui/core'
import { initializeApp } from 'firebase/app'
import { initializeAnalytics } from 'firebase/analytics'
import { BrowserRouter as Router, Switch, Link as RouterLink, Route} from 'react-router-dom'

import { firebaseConfig } from '../config'
import { RegisterForm } from './components/auth/RegisterForm'

const app = initializeApp(firebaseConfig)
initializeAnalytics(app)

function App() {
  return (
    <Router>
      <Container>
        <Link component={RouterLink} to="/">Home</Link>
        <Link component={RouterLink} to="/register">Register</Link>
      </Container>
      <Switch>
        <Route path="/" exact>
          <Typography variant="h3">Welcome Home</Typography>
        </Route>
        <Route path="/register" exact>
          <RegisterForm/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
