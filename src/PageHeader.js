import React from 'react';

import { UserInfo } from './UserInfo';

export class PageHeader extends React.Component {
    render() {
        return (
            <header style={styles.header}>
                <div style={styles.logo}>Books</div>
                <UserInfo />
            </header>
        )
    }
}

const styles = {
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#292929',
    },
    logo: {
        border: '1px solid #ffffff',
        padding: '10px 15px',
        margin: '20px',
        color: '#ffffff',
    }
};
