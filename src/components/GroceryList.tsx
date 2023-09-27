import React, { useState } from "react";
import "./GroceryList.scss";
import { ListItem } from "./GroceryList.types";
import GroceryListItems from "./GroceryListItems";

let id = 0;

const GroceryList = () => {
  const [groceryList, setGroceryList] = React.useState<Array<ListItem>>([]);
  const [listItemInput, setListItemInput] = useState("");
  const [showCheckedItems, setShowCheckedItems] = useState(false);

  const toggleShowCheckedItems = () => {
    setShowCheckedItems(!showCheckedItems);
  };

  const addListItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      id++;
      const newList = [
        ...groceryList,
        { name: listItemInput, id: id, checked: false } as ListItem,
      ];
      setGroceryList(newList);
      setListItemInput("");
    }
  };

  const deleteListItem = (listItem: ListItem) => {
    const targetIndex = groceryList.indexOf(listItem);
    const newGroceryList = [...groceryList];
    newGroceryList.splice(targetIndex, 1);
    setGroceryList(newGroceryList);
  };

  const clickListItem = (listItem: ListItem) => {
    const targetIndex = groceryList.indexOf(listItem);
    const newGroceryList = [...groceryList];
    newGroceryList.splice(targetIndex, 1, {
      name: listItem.name,
      id: listItem.id,
      checked: !listItem.checked,
    } as ListItem);
    setGroceryList(newGroceryList);
  };

  return (
    <>
      <div className="flex-column">
        <input
          className="text-input"
          title="listItemInput"
          placeholder="type something to remember..."
          value={listItemInput}
          onChange={(e) => {
            setListItemInput(e.target.value);
          }}
          onKeyDown={(event) => addListItem(event)}
        />
        <button
          className="toggle-button"
          onClick={() => toggleShowCheckedItems()}
        >
          {showCheckedItems ? "Hide checked items" : "Show checked items"}
        </button>
        {showCheckedItems ? (
          <GroceryListItems
            groceryList={groceryList}
            deleteListItem={deleteListItem}
            clickListItem={clickListItem}
          />
        ) : (
          <GroceryListItems
            groceryList={groceryList.filter(
              (listItem) => listItem.checked === false
            )}
            deleteListItem={deleteListItem}
            clickListItem={clickListItem}
          />
        )}
      </div>
    </>
  );
};

export default GroceryList;
