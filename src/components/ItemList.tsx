import React, { useEffect, useRef, useState } from "react";
interface Item {
  type: "Fruit" | "Vegetable";
  name: string;
}

interface ItemProps {
  items: Item[];
}

const Itemlists: React.FC<ItemProps> = ({ items }) => {
  const [lists, setLists] = useState<Item[]>(items);
  const [fruits, setFruits] = useState<Item[]>([]);
  const [vegetables, setVegetables] = useState<Item[]>([]);
  const timeOutRef = useRef<NodeJS.Timeout | null>(null);

  const returnItem = (item: Item) => {
    setLists((prev) => [...prev, item]);
    if (item.type === "Fruit") {
      setFruits((prev) => prev.filter((fruit) => fruit.name !== item.name));
    } else {
      setVegetables((prev) =>
        prev.filter((vegetable) => vegetable.name !== item.name)
      );
    }
  };

  const moveItem = (item: Item) => {
    const newlists = lists.filter(
      (list) => !(list.type === item.type && list.name === item.name)
    );

    if (item.type === "Fruit") {
      setFruits((prev) => [...prev, item]);
    } else {
      setVegetables((prev) => [...prev, item]);
    }
    setLists(newlists);

    const timeOutId = setTimeout(() => {
      returnItem(item);
    }, 5000);
    timeOutRef.current = timeOutId;
  };

  useEffect(() => {
    return () => {
      timeOutRef.current && clearTimeout(timeOutRef.current);
    };
  }, []);

  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-center bg-gray-200 p-3">
            <p>All Items</p>
          </div>
          {lists.map((item, index) => (
            <button
              key={index}
              onClick={() => moveItem(item)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-center bg-gray-200 p-3">
            <p>Fruits</p>
          </div>
          {fruits.map((fruit, index) => (
            <button
              key={index}
              onClick={() => returnItem(fruit)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              {fruit.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-center bg-gray-200 p-3">
            <p>Vegetables</p>
          </div>
          {vegetables.map((vegetable, index) => (
            <button
              key={index}
              onClick={() => returnItem(vegetable)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {vegetable.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Itemlists;
