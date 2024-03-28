import { ChangeEvent, useState } from "react";
import "./App.css";

type Item = {
  title: string;
  description: string;
};
type Items = Array<Item>;

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<Items>([]);
  const [addedItems, setAddedItems] = useState<Items>([]);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const addItem = () => {
    if (title.trim() !== "") {
      const newItem = {
        title,
        description,
      };
      setItems([...items, newItem]);
      setTitle("");
      setDescription("");
    }
  };

  const addToList = (item: Item) => {
    setAddedItems([...addedItems, item]);
  };

  return (
    <div className="column">
      <div className="add-item">
        <input
          type="text"
          placeholder="Title of item"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Descripion of item"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div className="horizontal gap-sm">
        <div className="y-center">
          <h3>Items to Add:</h3>
          <ul className="vertical gap-sm">
            {items.map((item, index) => (
              <li className="card" key={index}>
                <h3>{item.title}</h3>
                <button onClick={() => addToList(item)}>Add to List</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="added-item-list">
          <h3>Added Items:</h3>
          <ul className="vertical gap-sm">
            {addedItems.map((item, index) => (
              <li className="card" key={index}>
                <h3>{item.title}</h3>
                <p> {item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
