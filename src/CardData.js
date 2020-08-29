import React from 'react';

import { PropTypes } from 'prop-types';

export const CardData = ({ children, name }) => (
    <div>{name}: {children}</div>
)

CardData.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};
