import React from 'react';

const MovieCard = (props) => {
    console.log('props = ',props);
    const {data }= props;
    return (
        <div>
            <div>
            <img src={data.Poster}></img>
            </div>
            <div>
                <h4>{data.Title}</h4>
                <p>Released on {data.Year}</p> 
            </div>
        </div>
    );
};

export default MovieCard;