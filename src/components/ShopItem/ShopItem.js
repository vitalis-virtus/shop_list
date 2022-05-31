import React, { Component } from "react";
import styles from "./ShopItem.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/shopListActions";

class ShopItem extends Component {
  render() {
    const { removeItem, buyItem } = this.props;
    const { item } = this.props;
    return (
      <div className={styles.shopItemWrapper}>
        <button
          type="button"
          onClick={(event) => {
            buyItem(item.id);
          }}
        >
          Buy
        </button>
        <div
          className={
            !item.isPurchased ? styles.shopItemPurchased : styles.shopItem
          }
        >
          <p>{item.text}</p>
          <button
            type="button"
            onClick={(event) => {
              removeItem(item.id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(actions.removeShopItem(id)),
  buyItem: (id)=>dispatch(actions.buyShopItem(id))
});

export default connect(null, mapDispatchToProps)(ShopItem);
