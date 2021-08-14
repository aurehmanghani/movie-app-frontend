import MoviesList from './MoviesList'

const SearchResult = (props) => {
    return(
        <div className="row">
                <MoviesList movies={props.data.searchMoviesReducer.moviesData}/>
        </div>
    )
}
export default SearchResult