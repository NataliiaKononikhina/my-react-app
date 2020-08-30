import React from 'react';

export const ListWrapper = ({ children }) => (
    <div style={styles.listWrapper}>
        {children}
    </div>
);

const styles = {
    listWrapper: {
        display: "flex",
        flexWrap: "wrap",
    }
}