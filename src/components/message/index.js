import React from "react";
import './message.scss'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const message = ({avatar, text, date, user}) => {
    return (
        <>
        <div className="message">
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.name}`} />
            </div>
            <div className="message__content">
                <div className="message__bubble">
                <p className="message__text">
                    {text}
                </p>
                </div>
                <span className="message__date">{date}</span>
            </div>
    
        </div>
        </>
    )
};


message.defaultProps = {
    user: {},
}


message.propTypes = {
    avatar: PropTypes.string, 
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object
}


export default message;