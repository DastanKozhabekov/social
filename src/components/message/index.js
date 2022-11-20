import React from "react";
import './message.scss'
import PropTypes from 'prop-types'

const message = ({avatar, text, date, user}) => {
    return (
        <>
        <div className="message">
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.name}`} />
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