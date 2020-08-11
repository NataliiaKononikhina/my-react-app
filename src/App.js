import React from 'react';

import { AuthorsList } from './AuthorsList';
import { BookCard } from './BookCard';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';

import book from './books.json';

export class App extends React.Component {
    render() {
        return (
            <>
                <PageHeader />
                <main style={styles.appWrapper}>
                    <BookCard book={book} />
                    <AuthorsList authors={book.authors} />
                </main>
                <PageFooter />
            </>
        );
    }
}

const styles = {
    appWrapper: {
        padding: '15px',
    }
}
