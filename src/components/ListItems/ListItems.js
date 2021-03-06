import React from "react";
import ShopItem from "../ShopItem/ShopItem";

// const ListItems = ({items}) => {
//     if(items){
//     return(
//         <section>
//             <ul>
//                 <ShopItem items={items}/>
//             </ul>
//         </section>
//     )}
//     return <div></div>
// }

// export default ListItems;

import { Component } from "react";
import { connect } from "react-redux";

class ListItems extends Component {
  render() {
    const { shopItems } = this.props;
    return (
      <section className="listItems_container">
        <h1>ShopList</h1>
        <ul>
          {shopItems.map((item) => (
            <li key={item.id}>
              <ShopItem item={item} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
  shopItems: state,
});

export default connect(mapStateToProps, null)(ListItems);
