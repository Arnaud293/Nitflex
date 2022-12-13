import React from 'react';

const QuickView = ({program, setPopup}) => {

    let genreArr = [];
    const findGenre = () => {
        for (let i = 0; i < program.genre_ids.length; i++){
            switch(program.genre_ids[i]){
                case 28 :
                    genreArr.push('Action');
                    break;
                case 12 :
                    genreArr.push('Adventure');
                    break;
                case 99 :
                    genreArr.push('Documentary');
                    break;
                case 18 :
                    genreArr.push('Drama');
                    break;
                case 10751 :
                    genreArr.push('Family');
                    break;
                case 14 : 
                    genreArr.push('Fantasy');
                    break;
                case 36 :
                    genreArr.push('History');
                    break;
                case 27 :
                    genreArr.push('Horror');
                    break;
                case 10402 :
                    genreArr.push('Music');
                    break;
                case 9648 :
                    genreArr.push('Mystery');
                    break;
                case 10749 :
                    genreArr.push('Romance');
                    break;
                case 878 :
                    genreArr.push('Sci-Fi');
                    break;
                case 10770 :
                    genreArr.push('Tv-movie');
                    break;
                case 53 :
                    genreArr.push('Thriller');
                    break;
                case 10752 :
                    genreArr.push('War');
                    break;
                case 37 :
                    genreArr.push('Western');
                    break;
                case 10759 :
                    genreArr.push('Action-Adventure');
                    break;
                case 16 :
                    genreArr.push('Animation');
                    break;
                case 35 :
                    genreArr.push('Comedy');
                    break;
                case 80 :
                    genreArr.push('Crime');
                    break;
                case 10762 :
                    genreArr.push('Kids');
                    break;
                case 10763 :
                    genreArr.push('News');
                    break;
                case 10764 :
                    genreArr.push('Reality');
                    break;
                case 10765 :
                    genreArr.push('Sci-fi & Fantasy');
                    break;
                case 10766 :
                    genreArr.push('Soap');
                    break;
                case 10767 :
                    genreArr.push('Talk');
                    break;
                case 10768 :
                    genreArr.push('War & Politics');
                default :
                    return null;
            }
        }
        return genreArr.map((genre) => <li>{genre}</li>);
    }


    return (
        <div className='quick-view'>
            <div className="quick-view-container">
                <div className="quick-view-container-img">
                    <i className="fa-solid fa-xmark" onClick={() => setPopup(false)}></i>
                    <img src={`https://image.tmdb.org/t/p/original/${program.backdrop_path}`} alt={program?.title || program?.original_title} />
                    <h1>{program.title}</h1>
                    <div className="quick-view-btn">
                        <button className='play-btn'><i className="fa-solid fa-play"></i>&nbsp;Lecture</button>
                        <button className='circle-btn'><i className="fa-solid fa-plus"></i></button>
                        <button className='circle-btn'><i className="fa-sharp fa-solid fa-thumbs-up"></i></button>
                    </div>
                </div>
                <div className="quick-view-container-infos">
                    <div className="quick-view-infos-left">
                        <div className="quick-view-infos-left-head"> 
                            <p>{program.release_date?.split('').splice(0,4) || program.first_air_date?.split('').splice(0,4)}</p>
                            <p className='media-type'>{program.media_type}</p>
                            <p>{program.vote_average.toFixed(1)}⭐</p>
                        </div>
                        <div className="quick-view-infos-left-main">
                            <h3>Overview :</h3>
                            <p>{program.overview}</p>
                        </div>
                    </div>
                    <div className="quick-view-right">
                        <div className="quick-view-right-genre">
                            <p>Genres :</p>
                            <ul>{program.genre_ids ? findGenre() : "No genre found for this program"}</ul>
                        </div>
                        <p>Suitable for children : {program.adult ? <i class="fa-sharp fa-solid fa-xmark"></i> : <i class="fa-sharp fa-solid fa-check"></i>}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}; 

export default QuickView;