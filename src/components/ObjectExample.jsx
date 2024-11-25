import { useState } from "react";


function ObjectExample() {
  const [items, setItems] = useState({ x: 10, y: 20 });
  const addItem = () => {
    setItems({ ...items, y: 35, z: 100 });
  };

  return (
    <>
      {/* // <div className="frame"> */}

      
        <button className="btn btn-active btn-ghost" onClick={addItem}>
          Add Item
        </button>
      
      {/* // </div> */}
    </>
  );
}

export default ObjectExample;
