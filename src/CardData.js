import React from 'react';

import { PropTypes } from 'prop-types';

export const CardData = ({ data, name }) => (
    <div>{name}: {data}</div>
)

CardData.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};
