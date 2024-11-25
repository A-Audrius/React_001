// import { useState } from "react";

// function Basic_1() {
//   const [isLoggedIn, setIsLogedIn] = useState(true);
//   const login = () => setIsLogedIn((prev) => !prev);

//   let jsx;
//   if (isLoggedIn) {
//     jsx = <p>Welcome, User!</p>;
//   } else {
//     jsx = <p>Please log in </p>;
//   }


//   // const users = {
//   // name: "Nameless",
//   // isLoggedIn: true, };
//   const [items, setItems] = useState([]);
//   const addItem = () => {
//     const newItem = `Item ${items.length + 1}`;
//     setItems([...items, newItem]);
//   };



  
//   const removeItem = (itemIndex) => {
//     const filteredArray = items.filter((item, index)=> index !== itemIndex);
//     setItems(filteredArray);

//   };

//   const itemsai = items.map((item, index) => 
//   <div key={index}>
//    {item}
//    <button>{removeItem} remove</button>
//    </div>
   
//   )



  

//   return (
//     <>

//       <div>{jsx}</div>
//       <button onClick={login}>push</button>

//       <div className="card">

//         {itemsai}

    
 
//         <button onClick={addItem}>Add Item</button>
        
//         <button onClick={()=>removeItem}>Remove Item</button>
//       </div>
//     </>
//   );
// }

// export default Basic_1;
