import React from 'react';

export class QuestionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            question: '',
        }
    }

    setField = (evt, filed) => {
        this.setState({
            [filed]: evt.target.value,
        })
    }

    onSubmit = evt => {
        evt.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <>
                <h2>Do you have any questions for author?</h2>
                <form id="question-form">
                    <div style={styles.fieldWrapper}>
                        <label style={styles.label}>Your name</label>
                        <input type="text" onChange={evt => this.setField(evt, 'name')} />
                    </div>
                    <div style={styles.fielWrapper}>
                        <label style={styles.label}>Your email</label>
                        <input type="email" onChange={evt => this.setField(evt, 'email')} />
                    </div>
                    <div style={styles.fieldWrapper}>
                        <label style={styles.label}>Your question</label>
                        <textarea onChange={evt => this.setField(evt, 'question')} />
                    </div>
                </form>
                <button type="submit" form="question-form" onClick={this.onSubmit}>Send a question</button>
            </>
        )
    }
}

const styles = {
    label: {
        width: '120px',
        display: 'inline-block',
    },
    fieldWrapper: {
        padding: '10px 0',
    }
}
