function Movies() {
    const movies = ["Dirty Harry", "The Outlaw Josey Wales", "Heartbreak Ridge", "Million Dollar Baby"];
    return <div>
        <h1>Movies: </h1>
        <ul>
            {movies.map((movie) => {
                return <li key={movie}>{movie}</li>
            })}
        </ul>
    </div>;
}

export default Movies;