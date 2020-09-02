import React from 'react';
import ContentWrapper from '../ContentWrapper';

const ItemCard = (props) => {
    return (
        <ContentWrapper className="mt-10">
            <img src={props.details.links.mission_patch} alt="img"/>
        </ContentWrapper>
    );
};

export default ItemCard;