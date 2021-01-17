import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/CollectionItem";

const CollectionStyles = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 38px;
    margin: 0 auto 38px;
  }

  .items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
`;

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionStyles>
      <h2>{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </CollectionStyles>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
