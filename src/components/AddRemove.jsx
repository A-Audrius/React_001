import { useState } from "react";


function AddRemove() {
  const [items, setItems] = useState([]);
  
  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  const removeItem = (itemIndex) => {
    const filteredArray = items.filter((_, index) => index !== itemIndex);
    setItems(filteredArray);
  };



  return (
    <>
      <div className="card">
        {/* {itemsai} */}

        {items.map((item, index) => (
          <div key={index}>
          <button className="btn btn-success border-yellow-300 border-4 rounded-lg" >{item}</button>
              <button
          className="btn btn-success  border-spacing-5 border-red-400 border-2 rounded-lg"
          onClick={() => removeItem(index)}> Remove Item</button>
          </div> ))}

        <button
            className="btn btn-success  border-spacing-5 border-cyan-500 border-2 rounded-lg"
            onClick={addItem}
            > Add Item
            </button>
        
      </div>
    </>
  );
}

export default AddRemove;
