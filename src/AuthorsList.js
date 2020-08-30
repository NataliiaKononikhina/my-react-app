import React from 'react';

import { AuthorCard } from './AuthorCard';
import { ListWrapper } from './ListWrapper';

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
        const buttonText = showAllAuthors
            ? 'Show 3 authors'
            : `Show ${authors.length} all authors`;

        return (
            <>
                {authors.length > 3 &&
                    <button onClick={this.toggleShowAllAuthors}>
                        {buttonText}
                    </button>
                }
                <ListWrapper>
                    {authorList.map((author) => (
                        <AuthorCard author={author} key={author.id} />
                    ))}
                </ListWrapper>
            </>
        )
    }
}
