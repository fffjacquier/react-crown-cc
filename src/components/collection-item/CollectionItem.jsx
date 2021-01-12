import React from 'react';
import styled from 'styled-components';

const CollectionItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;
  height: 350px;
  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }
  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  }
`;

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <CollectionItemStyles>
      <div className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </CollectionItemStyles>
  );
};

export default CollectionItem;
