import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../../components/collection-preview/CollectionPreview.jsx";

const ShopPage = ({ collections }) => {
  return (
    <div>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    collections: selectCollections,
  });

export default connect(mapStateToProps)(ShopPage);
