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
                {authors
                .filter((_, index) => index < 3 || showAllAuthors)
                .map((author, index) => (
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