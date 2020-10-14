import React from 'react';
import '../assets/styles/components/Carouselitem.scss';
import playIcon from '../assets/static/play-icon.png';
import propTypes from 'prop-types';
import plusIcon from '../assets/static/plus-icon.png';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions/index';


const Carouselitem = (props) =>{
    const { id, cover, title, year, contentRating, duration } = props;
 
    const handleSetFavorite = () =>{
        props.setFavorite({
           id, cover, title, year, contentRating, duration 
        });
    }
    const handleDeleteFavorite = (itemId) =>{
        props.deleteFavorite(itemId)
    }

    return (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title} />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
                <img
                 className="carousel-item__details--img" 
                 src={plusIcon} 
                 alt="Plus Icon" 
                 onClick={handleSetFavorite}
                 />
                 <img
                 className="carousel-item__details--img" 
                 src={playIcon} 
                 alt="Remove Icon" 
                 onClick={() => handleDeleteFavorite(id)}
                 />
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
              {`${year} ${contentRating} ${duration}min`}
            </p>
        </div>
    </div>

);
    }

Carouselitem.propTypes = {
    cover: propTypes.string,
    title: propTypes.string,
    year: propTypes.number,
    contentRating: propTypes.string,
    duration: propTypes.number,
};

const mapDispashToProps = {
    setFavorite,
    deleteFavorite,
}

export default connect(null, mapDispashToProps)(Carouselitem);