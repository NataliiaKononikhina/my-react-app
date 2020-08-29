import React from 'react';

import { PropTypes } from 'prop-types';

export const Card = ({ children, img, name, description }) => (
    <div style={styles.cardWrapper}>
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
    },
    img: {
        width: "100%",
    }
}

Card.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node,
};
