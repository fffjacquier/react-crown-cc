import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from 'redux';

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import withSpinner from '../with-spinner/withSpinner';
import CollectionsOverview from "./CollectionsOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);
//same as connect(mapStateToProps)(withSpinner(CollectionsOverview))
export default CollectionsOverviewContainer;
