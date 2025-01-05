function ListItem(props) {
    return <li>{props.item}</li>
}

function List(props) {
    if (!props.items) {
        return <div>Loading...</div>;
    }
    if (props.items.length === 0){
        return <div>There is nothing in the list!</div>;
    }
    return <ul>
        {props.items.map((item) => {
            return item.includes("y") ? <ListItem key={item} item={item}/> : null;
        })}
    </ul>

}

function Movies() {
    const movies = ["Dirty Harry", "The Outlaw Josey Wales", "Heartbreak Ridge", "Million Dollar Baby"];
    //const movies = null;
    //const movies = [];
    return <div>
        <h1>Movies: </h1>
        <List items={movies} />
    </div>;
}

export default Movies;