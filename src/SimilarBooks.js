import React from 'react';

import { BookCard } from './BookCard';
import { ListWrapper } from './ListWrapper';
import similarBooks from './similarBooks.json';

export class SimilarBooks extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            booksList: this.firstThreeBooks,
        }
    }

    booksIdList = similarBooks.map(book => book.id);
    firstThreeBooks = similarBooks.slice(0,3).map(book => book.id);

    removeBookCard(bookId) {
        this.setState(state => ({
            booksList: [
                ...state.booksList.filter(id => id !== bookId),
                this.booksIdList.find(id => !this.state.booksList.includes(id))
            ]
        }))
    }

    render() {
        const books = similarBooks.filter(book => this.state.booksList.includes(book.id));

        return (
            <>
                <h2>Similar Books</h2>
                <ListWrapper>
                    {books.map(book => (
                        <BookCard book={book} key={book.id} removeHandler={() => this.removeBookCard(book.id)} />
                    ))}
                </ListWrapper>
            </>
        )
    }
}