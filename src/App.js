import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './index.scss'
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Profile} from "./pages/Profile";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {GithubState} from "./context/github/githubState";

function App() {
    return (
        <AlertState>
            <GithubState>
                <BrowserRouter>
                    <Navbar/>
                    <div className='container pt-4'>
                        <Alert alert={{text: 'Test alert'}}/>
                        <Switch>
                            <Route path={'/'} exact component={Home}></Route>
                            <Route path={'/about'} exact component={About}></Route>
                            <Route path={'/profile/:name'} exact component={Profile}></Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </GithubState>
        </AlertState>
    );
}

export default App;