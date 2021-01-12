import React from 'react';
import styled from 'styled-components';
import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreviewStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
  }
  .preview {
    display: flex;
    justify-content: space-between;
  }
`;

const CollectionPreview = ({title, items}) => {
  return (
    <CollectionPreviewStyles>
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({id, ...others}) => (
            <CollectionItem key={id}
              {...others}
            />
          ))
        }
      </div>
    </CollectionPreviewStyles>
  );
};

export default CollectionPreview;
