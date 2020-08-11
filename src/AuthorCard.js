import React from 'react';

import { Card } from './Card';
import { CardData } from './CardData';

export class AuthorCard extends React.Component {
    render() {
        const { author } = this.props;

        return (
            <Card img={author.avatar} name={author.name} description={author.description} >
                <CardData name="Email" data={author.email} />
            </Card>
        )
    }
}
