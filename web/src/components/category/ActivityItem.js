import React from 'react';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';
import { buttonTypes } from '../../constants/buttonTypes';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title';

function ActivityItem({ title, description, slug }) {
  return (
    <CategoryItemStyles>
      <Title className="title">{title}</Title>
      <div className="text white">
        <MyPortableText value={description} />
      </div>
      <Button to={`/lawn-care/${slug.current}`} variant={buttonTypes.outline}>
        More
      </Button>
    </CategoryItemStyles>
  );
}

export default ActivityItem;
