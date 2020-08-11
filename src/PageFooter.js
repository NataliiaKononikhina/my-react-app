import React from 'react';

export class PageFooter extends React.Component {
    render() {
        return (
            <footer style={styles.footer}>
                &copy; {new Date().getFullYear()}, Thinknetica
            </footer>
        )
    }
};

const styles = {
    footer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#292929',
        color: '#ffffff',
        padding: '10px',
    }
};