import React from 'react';

import { AuthorCard } from './AuthorCard';
import { BookCard } from './BookCard';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';

const book = {
    name: 'The Trial',
    description: 'Book tells the story of Josef K., a man arrested and prosecuted by a remote, inaccessible authority, with the nature of his crime revealed neither to him nor to the reader.',
    pages: 150,
    language: 'English',
    progress: 100,
    bookCover: 'https://upload.wikimedia.org/wikipedia/en/f/f9/TrialKafka.jpg',
    author: {
        name: 'Franz Kafka',
        email: 'no.email.kafka@gmail.com',
        avatar: 'https://ichef.bbci.co.uk/news/624/cpsprodpb/15C9B/production/_108234298_gettyimages-3230646.jpg',
        description: 'a German-speaking Bohemian novelist and short-story writer, widely regarded as one of the major figures of 20th-century literature',
    },
    minPrice: 20,
    price: 50,
    sum: 40,
    expectedSum: 100,
};

export class App extends React.Component {
    render() {
        return (
            <>
                <PageHeader />
                <main style={styles.appWrapper}>
                    <BookCard book={book} />
                    <AuthorCard author={book.author} />
                </main>
                <PageFooter />
            </>
        );
    }
}

const styles = {
    appWrapper: {
        display: "flex",
        flexWrap: "wrap",
    }
}
