import React from 'react';
import './Inbox.css';
import PropTypes from 'prop-types';

function Inbox(props) {
    return (
        
        <li>
            <img src={props.imgURL} alt={props.name} />
            <div className="timeline">
                <h3>{props.name}</h3>
                <p className="number">{props.number}</p>
                <p>{props.message}</p>
                <p>{props.time}</p>
            </div>
        </li>
        
    )
}

Inbox.propTypes = {
    imgURL : PropTypes.string,
    name : PropTypes.string,
    number : PropTypes.string,
    message : PropTypes.string,
    time : PropTypes.string,
}

export default Inbox;