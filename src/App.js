import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Home from './components/pages/Home';
import MobileHome from './components/pages/MobileHome';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Row from './components/grid/Row';
import Column from './components/grid/Column';
import MobileNav from './components/MobileNav';

class App extends Component {

    render() {
        return (
            <Router>
                <>
                <Row>
                    <Column size='twelve'>
                        <Header />
                    </Column>
                </Row>
                <MediaQuery query='(min-device-width: 550px)'>
                    <Row>
                        <Column size='three'>
                            <SideNav />
                        </Column>
                        <Column size='nine'>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/contact' component={Contact} />
                            <Route exact path='/projects' component={Projects} />
                        </Column>
                    </Row>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 550px)'>
                    <Row>
                        <Column size='twelve'>
                            <MobileNav />
                        </Column>
                    </Row>
                    <Row>
                        <Column size='twelve'>
                            <Route exact path='/' component={MobileHome} />
                            <Route exact path='/contact' component={Contact} />
                            <Route exact path='/projects' component={Projects} />
                        </Column>
                    </Row>
                </MediaQuery>
                </>
            </Router>
        );
    }
}

export default App;