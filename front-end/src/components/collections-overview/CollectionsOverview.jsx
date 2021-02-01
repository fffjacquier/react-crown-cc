import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from 'styled-components';

import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from '../collection-preview/CollectionPreview';

const CollectionOverviewStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionOverviewStyles>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </CollectionOverviewStyles>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    collections: selectCollectionForPreview,
  });

export default connect(mapStateToProps)(CollectionsOverview);
