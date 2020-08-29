import React from 'react';

import { SubscriptionModal } from './SubscriptionModal';
import { Card } from './Card';
import { CardData } from './CardData';

export const BookCard = ({ book }) => (
    <Card img={book.bookCover} name={book.name} description={book.description} >
        <CardData name="Pages">{book.pages}</CardData>
        <CardData name="Language">{book.language}</CardData>
        <CardData name="MinPrice">{book.minPrice}</CardData>
        <CardData name="Price">{book.price}</CardData>
        {book.subscribers > 10 &&
            <div style={styles.bestSeller}>Best-seller!</div>
        }
        <SubscriptionModal />
    </Card>
)

const styles = {
    bestSeller: {
        color: 'red',
    }
}