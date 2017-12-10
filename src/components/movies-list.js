import React, {Component} from 'react';
import './styles-components.css';
import { Row, Col } from 'react-flexbox-grid';
import Rating from 'react-rating';
import starempty from '../images/starempty.png';
import starfull from '../images/starfull.png';
import { connect } from "react-redux";
import {fetchMoviesList, fetchPopularMovies, fetchTopRated, fetchNowPlaying, fetchSearchMovies} from '../actions/movies';


class MoviesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        this.props.fetchMoviesList();
    }

    getPopularMovies = () => {
        this.props.fetchPopularMovies();
    };

    getTopRated = () => {
        this.props.fetchTopRated();
    };

    getNowPlaying = () => {
        this.props.fetchNowPlaying();
    };

    getSearchMovies = (event) => {
        (event.target.value !== '') ? this.props.fetchSearchMovies(event.target.value) : this.props.fetchMoviesList();


    };


    render() {
        let posterIMG = 'https://image.tmdb.org/t/p/w500';
        return(
            <Col xs={12}>
                <Row center="xs">
                    <Col className="row-filter" xs={12}>
                        <Row arround="xs">
                            <Col xs={4}>
                                <button className="filter" onClick={this.getPopularMovies}>
                                    Популярные
                                </button>
                            </Col>
                            <Col xs={4}>
                                <button className="filter" onClick={this.getTopRated}>
                                    Топ рейтинговые
                                </button>
                            </Col>
                            <Col xs={4}>
                                <button className="filter" onClick={this.getNowPlaying}>
                                    Сейчас в прокате
                                </button>
                            </Col>
                        </Row>
                        <Row center="xs" className="row-search">
                            <Col>
                                <input className="search"
                                       onChange={this.getSearchMovies}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {this.props.movies.map((el) => {
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
                                                        {el.original_title}
                                                    </Row>
                                                    <Row center="xs">
                                                        ({el.title})
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
    movies: state.movies.list
});

const mapDispatchToProps = {
    fetchMoviesList,
    fetchPopularMovies,
    fetchTopRated,
    fetchNowPlaying,
    fetchSearchMovies
};



export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);