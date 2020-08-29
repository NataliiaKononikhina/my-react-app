import React from 'react';
import AuthContext from './AuthContext';

export const UserInfo = () => (
    <AuthContext.Consumer>
        {user => (
            <div style={styles.user}>
                <span style={styles.name}>{user.firstName} {user.lastName}</span>
                <img src={user.avatarUrl} style={styles.avatar}/>
            </div>

        )}
    </AuthContext.Consumer>
)

const styles = {
    avatar: {
        width: '45px',
        margin: '10px',
        padding: '2px',
        borderRadius: '50%',
        border: '1px solid #ffffff',
    },
    name: {
        color: '#ffffff',
    },
    user: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '15px',
    }
}
