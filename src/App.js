import React from 'react';

import { AuthorsList } from './AuthorsList';
import { BookCard } from './BookCard';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { QuestionForm } from './QuestionForm';

import book from './books.json';

export const App = () => (
    <>
        <PageHeader />
        <main style={styles.appWrapper}>
            <BookCard book={book} />
            <AuthorsList authors={book.authors} />
            <QuestionForm />
        </main>
        <PageFooter />
    </>
)

const styles = {
    appWrapper: {
        padding: '15px',
    }
}
