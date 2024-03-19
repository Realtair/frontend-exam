import { ChangeEvent, useState } from "react";
import "./App.css";

type Items = Array<string>;

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState<Items>([]);
  const [addedItems, setAddedItems] = useState<Items>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const addToList = (item: string) => {
    setAddedItems([...addedItems, item]);
  };

  return (
    <div className="App">
      <div className="add-item">
        <input
          type="text"
          placeholder="Add item..."
          value={newItem}
          onChange={handleChange}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div className="lists">
        <div className="item-list">
          <h2>Items to Add:</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => addToList(item)}>Add to List</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="added-item-list">
          <h2>Added Items:</h2>
          <ul>
            {addedItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
