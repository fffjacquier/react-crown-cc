import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions.js";
import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverviewContainer";
import CollectionContainer from "../collection/CollectionContainer.js";

class ShopPage extends React.Component {
  //unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
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
    const { match } = this.props;
    // match.path === '/shop'
    return (
      <div>
        <Route exact path={`${match.path}`}
          component={CollectionsOverviewContainer} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
