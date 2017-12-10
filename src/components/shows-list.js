import React, {Component} from 'react';
import './styles-components.css';
import { Row, Col } from 'react-flexbox-grid';
import Rating from 'react-rating';
import starempty from '../images/starempty.png';
import starfull from '../images/starfull.png';
import { connect } from "react-redux";
import {fetchShowsList, fetchPopularShows, fetchTopRatedShows, fetchNowPlayingShows, fetchSearchShows} from '../actions/shows';


class ShowsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shows: []
        };
    }

    componentDidMount() {
        this.props.fetchShowsList();
    }

    getPopularShows = () => {
        this.props.fetchPopularShows();
    };

    getTopRatedShows = () => {
        this.props.fetchTopRatedShows();
    };

    getNowPlayingShows = () => {
        this.props.fetchNowPlayingShows();
    };

    getSearchShows = (event) => {
        (event.target.value !== '') ? this.props.fetchSearchShows(event.target.value) : this.props.fetchShowsList();


    };


    render() {
        let posterIMG = 'https://image.tmdb.org/t/p/w500';
        return(
            <Col xs={12}>
                <Row center="xs">
                    <Col className="row-filter" xs={12}>
                        <Row arround="xs">
                            <Col xs={4}>
                                <button className="filter" onClick={this.getPopularShows}>
                                    Популярные
                                </button>
                            </Col>
                            <Col xs={4}>
                                <button className="filter" onClick={this.getTopRatedShows}>
                                    Топ рейтинговые
                                </button>
                            </Col>
                            <Col xs={4}>
                                <button className="filter" onClick={this.getNowPlayingShows}>
                                    Сейчас в прокате
                                </button>
                            </Col>
                        </Row>
                        <Row center="xs" className="row-search">
                            <Col>
                                <input className="search"
                                       onChange={this.getSearchShows}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {this.props.shows.map((el) => {
                    return (
                        <Col key={el.id}>
                            <Row center="xs">
                                <Col xs={8} className="card">
                                    <Row>
                                        <Col xs={4}>
                                            <img alt="" src={posterIMG + el.poster_path} className="poster"/>
                                        </Col>
                                        <Col xs={8}>
                                            <Row end="xs">
                                                <Rating
                                                    initialRate={el.vote_average / 2}
                                                    empty={<img alt="" src={starempty} className="icon"/>}
                                                    full={<img alt="" src={starfull} className="icon"/>}
                                                />
                                            </Row>
                                            <Row end="xs">
                                                Рейтинг: {el.vote_average}
                                            </Row>
                                            <Row center="xs" middle="xs" className="title-movie">
                                                <Col>
                                                    <Row center="xs">
                                                        {el.original_name}
                                                    </Row>
                                                    <Row center="xs">
                                                        ({el.name})
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    )
                })
                }
            </Col>
        )
    }
}

const mapStateToProps = (state) => ({
    shows: state.shows.list
});

const mapDispatchToProps = {
    fetchShowsList,
    fetchPopularShows,
    fetchTopRatedShows,
    fetchNowPlayingShows,
    fetchSearchShows
};



export default connect(mapStateToProps, mapDispatchToProps)(ShowsList);