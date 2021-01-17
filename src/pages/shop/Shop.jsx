import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.jsx";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/Collection.jsx";

const ShopPage = ({ match }) => {
  // match.path === '/shop'
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default (ShopPage);
