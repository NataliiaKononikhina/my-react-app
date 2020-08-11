import React from 'react';

import { Card } from './Card';

export class AuthorCard extends React.Component {
    render() {
        const { author } = this.props;

        return (
            <Card img={author.avatar} name={author.name} description={author.description} >
                <div>Email: {author.email}</div>
            </Card>
        )
    }
}
