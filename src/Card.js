import React from 'react';

import { PropTypes } from 'prop-types';

export const Card = ({ children, img, name, description, removeHandler }) => (
    <div style={styles.cardWrapper}>
        {removeHandler &&
            <button onClick={removeHandler} style={styles.removeButton}>⨉</button>
        }
        <img src={img} alt={name} style={styles.img} />
        <h1>{name}</h1>
        <p>{description}</p>
        {children}
    </div>
)

const styles = {
    cardWrapper: {
        width: "250px",
        padding: "15px",
        margin: "20px",
        backgroundColor: "#f3f3f3",
        position: "relative",
    },
    img: {
        width: "100%",
    },
    removeButton: {
        position: "absolute",
        top: "10px",
        right: "10px",
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        backgroundColor: "#d8d4d4",
        cursor: "pointer",
    }
}

Card.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node,
};
