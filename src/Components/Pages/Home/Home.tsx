import YouTube from "../../Layout/YouTube/YouTube";
import MovieList from "../../MovieList/MovieList";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
			this is home page
            {/* <YouTube/> */}

            <MovieList />
        </div>
    );
}

export default Home;
