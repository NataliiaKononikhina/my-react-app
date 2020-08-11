import React from 'react';

import { SubscriptionModal } from './SubscriptionModal';
import { Card } from './Card';

export class BookCard extends React.Component {
    render() {
        const { book } = this.props;

        return (
            <Card img={book.bookCover} name={book.name} description={book.description} >
                <div>Pages: {book.pages}</div>
                <div>Language: {book.language}</div>
                <div>MinPrice: {book.minPrice}</div>
                <div>Price: {book.price}</div>
                {book.subscribers > 10 &&
                    <div style={styles.bestSeller}>Best-seller!</div>
                }
                <SubscriptionModal />
            </Card>
        )
    }
}

const styles = {
    bestSeller: {
        color: 'red',
    }
}