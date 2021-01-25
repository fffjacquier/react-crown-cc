import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions.js";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import withSpinner from "../../components/with-spinner/withSpinner";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.jsx";
import CollectionPage from "../collection/Collection.jsx";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  //unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
    /*const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then( (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });*/

    /*this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );*/
     /* // using fetch pattern
      fetch('https://firestore.googleapis.com/v1/projects/crown-db/databases/(default)/documents/collections')
        .then(response => response.json())
        .then(collections => console.log(collections))
     */
  }

  render() {
    const { match, isCollectionFetching } = this.props;
    // match.path === '/shop'
    return (
      <div>
        <Route exact path={`${match.path}`}
          render={props => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
