import React from 'react';

export class BookCard extends React.Component {
    render() {
        const { book } = this.props;

        return (
            <div style={styles.cardWrapper}>
                <img src={book.bookCover} alt={book.name} style={styles.img} />
                <h1>{book.name}</h1>
                <p>{book.description}</p>
                <div>Pages: {book.pages}</div>
                <div>Language: {book.language}</div>
                <div>MinPrice: {book.minPrice}</div>
                <div>Price: {book.price}</div>
                {book.subscribers > 10 &&
                    <div style={styles.bestSeller}>Best-seller!</div>
                }
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
    },
    bestSeller: {
        color: 'red',
    }
}