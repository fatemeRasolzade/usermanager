import React from 'react'
import { Route, Router } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import SingUp from './component/SingUp'
import Login from './component/Login'
import PrivateRoute from './component/PrivateRoute'
import history from './history'
import ErrorBoundary from './Utils/ErrorBoundary'

const App = () => {
    return (
        <ErrorBoundary>
            <Router history={history}>
            <mainLayout>
                <switch>
                    <Route exact path="/" component={SingUp} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                </switch>
            </mainLayout>
            </Router>
        </ErrorBoundary>
    )
}

export default App
