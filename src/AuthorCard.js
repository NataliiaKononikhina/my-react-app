import React from 'react';

import { Card } from './Card';
import { CardData } from './CardData';

export const AuthorCard = ({ author }) => (
    <Card img={author.avatar} name={author.name} description={author.description} >
        <CardData name="Email">{author.email}</CardData>
    </Card>
)
