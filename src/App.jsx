import { useState } from "react";
import ItemButton from "./components/ItemButton";

const App = () => {
  const [mainList, setMainList] = useState([
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

  const [fruitList, setFruitList] = useState([]);
  const [vegetableList, setVegetableList] = useState([]);

  const moveToMainList = (item) => {
    setMainList([...mainList, item]);
    if (item.type === "Fruit") {
      setFruitList(fruitList.filter((i) => i.name !== item.name));
    } else {
      setVegetableList(vegetableList.filter((i) => i.name !== item.name));
    }
  };

  const moveItem = (item) => {
    setMainList(mainList.filter((i) => i.name !== item.name));
    if (item.type === "Fruit") {
      setFruitList([...fruitList, item]);
    } else {
      setVegetableList([...vegetableList, item]);
    }
  };

  return (
    <div>
      <div className="flex gap-4 h-[700px] m-4">
        <div className="w-full">
          {mainList.map((item) => (
            <button
              className="border border-slate-300 hover:bg-slate-200 p-2 font-semibold w-full mb-2"
              key={item.name}
              onClick={() => moveItem(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="w-full border border-slate-300">
          <h1 className="font-semibold text-center bg-slate-300 p-2">Fruit</h1>
          <div className="p-2">
            {fruitList.map((item) => (
              <ItemButton
                key={item.name}
                item={item}
                moveToMainList={moveToMainList}
                removeItem={moveToMainList}
              />
            ))}
          </div>
        </div>
        <div className="w-full border border-slate-300">
          <h1 className="font-semibold text-center bg-slate-300 p-2">
            Vegetable
          </h1>
          <div className="p-2">
            {vegetableList.map((item) => (
              <ItemButton
                key={item.name}
                item={item}
                moveToMainList={moveToMainList}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
