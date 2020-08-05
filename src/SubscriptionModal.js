import React from 'react';

import ReactDOM from 'react-dom';

export class SubscriptionModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <>
                <button onClick={this.toggle}>Subscription terms</button>
                {this.state.isOpen && ReactDOM.createPortal(
                    <div style={styles.overlay} onClick={this.toggle}>
                        <div style={styles.description}>
                            <p>This is subscription terms description</p>
                            <button onClick={this.toggle}>Close</button>
                        </div>
                    </div>,
                    document.getElementById('modal-root')
                )}
            </>
        );
    }
}

const styles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        maxWidth: '90%',
        minWidth: '200px',
        backgroundColor: '#ffffff',
        padding: '30px',
        displa: 'flex',
        flexDirection: 'column',
    }
}