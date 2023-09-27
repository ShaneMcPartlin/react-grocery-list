import React from "react";
import "./GroceryList.scss";
import { ListItem } from "./GroceryList.types";

interface GroceryListItemsProps {
  groceryList: ListItem[];
  deleteListItem: (arg0: ListItem) => void;
  clickListItem: (arg0: ListItem) => void;
}

const GroceryListItems = (props: GroceryListItemsProps) => {
  const handleDeleteClick = (listItem: ListItem) => {
    props.deleteListItem(listItem);
  };

  const handleCheckClick = (listItem: ListItem) => {
    props.clickListItem(listItem);
  };
  const listItems = props.groceryList.map((listItem) => {
    return (
      <React.Fragment key={listItem.id}>
        <div className="flex-row space-between">
          <div className="flex-row">
            <label onChange={() => handleCheckClick(listItem)}>
              <input
                className="checkbox"
                id={listItem.id.toString()}
                type="checkbox"
                defaultChecked={listItem.checked}
              />
              {listItem.name}
            </label>
          </div>
          <button
            className="delete-button"
            onClick={() => handleDeleteClick(listItem)}
          >
            x
          </button>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      {!props.groceryList.length ? (
        <p>
          <i>The list is empty</i>
        </p>
      ) : (
        listItems
      )}
    </>
  );
};

export default GroceryListItems;
