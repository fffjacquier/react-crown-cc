import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import withSpinner from "../../components/with-spinner/withSpinner";
import CollectionPage from "./Collection";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionContainer
