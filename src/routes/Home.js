import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";


class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    /*
    add = () => {
      // this.setState({ count: this.state.count + 1 })
      this.setState(current => ({ count: current.count + 1 }))
      // setState 호출 => react 는 새로운 state 와 함께 render 를 다시 진행
    };
    minus = () => {
      // this.setState({ count: this.state.count - 1 })
      this.setState(current => ({ count: current.count - 1 }))
    };
    */

    getMovies = async () => {
        const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        this.setState({ movies, isLoading: false });
    };
    componentDidMount() {
        this.getMovies();
    };
    render() {
        const { movies, isLoading } = this.state;
        return (
            // class 로 하면 리액트가 js 의 Class 와 혼동하니 className 부여
            <section className="container">
                {isLoading
                    ? <div className="loader" id="loader">
                        <span className="loader__text">LOADING</span>
                    </div>
                    : (
                        <div className="movies" id="movies">
                            {
                                movies.map(movie => (
                                    < Movie
                                        key={movie.id}
                                        id={movie.id}
                                        year={movie.year}
                                        title={movie.title}
                                        summary={movie.summary}
                                        poster={movie.medium_cover_image}
                                        genres={movie.genres} />
                                ))}
                        </div>
                    )
                }
            </section>
        );
    };
};

export default Home;
