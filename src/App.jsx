import { useState } from "react";
import ItemButton from "./components/ItemButton";
import Column from "./components/Column";

const App = () => {
  const [items, setItems] = useState([
    { type: "Fruit", name: "Apple" },
    { type: "Vegetable", name: "Broccoli" },
    { type: "Vegetable", name: "Mushroom" },
    { type: "Fruit", name: "Banana" },
    { type: "Vegetable", name: "Tomato" },
    { type: "Fruit", name: "Orange" },
    { type: "Fruit", name: "Mango" },
    { type: "Fruit", name: "Pineapple" },
    { type: "Vegetable", name: "Cucumber" },
    { type: "Fruit", name: "Watermelon" },
    { type: "Vegetable", name: "Carrot" },
  ]);

  const [columnItems, setColumnItems] = useState([]);

  const moveToColumn = (item) => {
    setColumnItems([...columnItems, item]);
    setItems(items.filter((i) => i.name !== item.name));
  };

  const moveToMainList = (item, e) => {
    e.stopPropagation();
    setColumnItems(columnItems.filter((i) => i.name !== item.name));
    setItems([...items, item]);
  };

  const removeFromColumn = () => {
    if (columnItems.length > 0) {
      const removedItem = columnItems.pop();
      setColumnItems([...columnItems]);
      setItems([...items, removedItem]);
    }
  };

  return (
    <div>
      <div className="flex gap-4 h-[700px] m-4">
        <div className="w-full">
          {items.map((item, index) => (
            <ItemButton
              key={index}
              item={item}
              onClick={() => moveToColumn(item)}
            />
          ))}
        </div>
        <Column
          titleType="Fruit"
          columnItems={columnItems}
          removeFromColumn={removeFromColumn}
          moveToMainList={moveToMainList}
        />
        <Column
          titleType="Vegetable"
          columnItems={columnItems}
          removeFromColumn={removeFromColumn}
          moveToMainList={moveToMainList}
        />
      </div>
    </div>
  );
};

export default App;
