import React, { Component } from 'react';
import './main.css';
import { Row, Col } from 'react-flexbox-grid';
import '../components/styles-components.css';
import ShowsList from '../components/shows-list.js';
import MoviesList from '../components/movies-list.js';
import { Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
        <Col>
            <Col className="main">
                <Row center="xs">
                    <BrowserRouter>
                        <div className="main-block">
                            <Col>
                                <Row center="xs" className="row-tab">
                                    <Col xs={3}>
                                        <Link to="/movies">
                                            <Col className="tab">
                                                Фильмы
                                            </Col>
                                        </Link>
                                    </Col>
                                    <Col xs={3}>
                                        <Link to="/shows">
                                            <Col className="tab">
                                                Сериалы
                                            </Col>
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                            <Row center="xs">
                                <Route path="/movies" component={MoviesList} />
                                <Route path="/shows" component={ShowsList} />
                            </Row>
                        </div>
                    </BrowserRouter>
            </Row>
        </Col>
    </Col>
        );
    }
}

export default Main;