import React from 'react';

import { AuthorCard } from './AuthorCard';

export class AuthorsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { showAllAuthors: false };
    }

    toggleShowAllAuthors = () => {
        this.setState({ showAllAuthors: !this.state.showAllAuthors });
    }

    render() {
        const { showAllAuthors } = this.state;
        const { authors } = this.props;

        const authorList = showAllAuthors ? authors : authors.slice(0, 3);

        return (
            <>
            {authors.length > 3 &&
                <button onClick={this.toggleShowAllAuthors}>
                    {showAllAuthors
                        ? 'Show 3 authors'
                        : `Show ${authors.length} all authors`
                    }
                </button>
            }
            <div style={styles.listWrapper}>
                {authorList
                .map((author) => (
                    <AuthorCard author={author} key={author.id} />
                ))}
            </div>
            </>
        )
    }
}

const styles = {
    listWrapper: {
        display: "flex",
        flexWrap: "wrap",
    }
}