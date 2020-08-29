import React from 'react';

import { SubscriptionModal } from './SubscriptionModal';
import { Card } from './Card';
import { CardData } from './CardData';

export class BookCard extends React.Component {
    render() {
        const { book } = this.props;

        return (
            <Card img={book.bookCover} name={book.name} description={book.description} >
                <CardData name="Pages" data={book.pages} />
                <CardData name="Language" data={book.language} />
                <CardData name="MinPrice" data={book.minPrice} />
                <CardData name="Price" data={book.price} />
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