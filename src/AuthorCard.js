import React from 'react';

export class AuthorCard extends React.Component {
    render() {
        const { author } = this.props;

        return (
            <div style={styles.cardWrapper}>
                <img src={author.avatar} alt={author.name} style={styles.img} />
                <h1>{author.name}</h1>
                <p>{author.description}</p>
                <div>Email: {author.email}</div>
            </div>
        )
    }
}

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