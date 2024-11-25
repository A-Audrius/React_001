import ControllComp from "./ControllComp";
// import Example from "./Example";
// import Greeting from "./Greeting";
import { useState } from "react";

function Login() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const logIn = () => setIsLogedIn((prev) => !prev);

  let form = (
    <form className="max-w-sm mx-auto">
      {/* name */}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        ></input>
      </div>

      {/* password */}
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        ></input>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );

//   const data = {
//     title: "Getting Started React",
//     subtitle: "JavaScript Library",
//     author: {
//       firstName: "Asabeneh",
//       lastName: "Yetayeh",
//       loggedIn: true,
//     },
//     date: "Oct 9, 2020",
//   };

  let jsx;

  if (isLogedIn) {
           jsx = <ControllComp/>

    } else {
            jsx = <div> <p>prašome prisijungti</p> {form}  </div>
            
    }





//   let jsx = (data.author.IsLoggedIn
//     ?<p>Welcome User</p>
//     :<p>{form}prasome prisijungti</p>);

  return (
    <>
      <div>{jsx}</div>

      {/* {form} */}
      <button className="btn btn-success  border-spacing-5 border-blue-300 border-4 rounded-lg"  onClick={logIn}>Login</button>

      <div>
        {/* {data.author.loggedIn &&<p>Welcome</p>} */}

        
      </div>
    </>
  );
}

export default Login;

// function Basic_1() { const users = { name: "Nameless", isLoggedIn: true, }; let jsx; if (users.isLoggedIn) { jsx = <p>Welcome, {users.name}!</p>; } else { jsx = <p>Please log in" if not</p>; } return (<>  <button>State</button>  <div>{jsx}</div>  </>); } export default Basic_1;

// import { useState } from "react";

// function Basic_1() {
//     // const [isLoggedIn, setIsLogedIn] = useState(true);
//     const login = () => setIsLogedIn((prev) => !prev);

//     let jsx;
//     if (isLoggedIn) {
//       jsx = <p>Welcome, User!</p>;
//     } else {
//       jsx = <p>Please log in </p>;
//     }

//     // const users = {
//     // name: "Nameless",
//     // isLoggedIn: true, };
//     const [items, setItems] = useState([]);
//     const addItem = () => {
//       const newItem = `Item ${items.length + 1}`;
//       setItems([...items, newItem]);
//     };

//     return (
//         <>

//           <div>{jsx}</div>
//           <button onClick={login}>push</button>

//           <div className="card">

//             {/* {itemsai} */}

//             <button onClick={addItem}>Add Item</button>

//             <button onClick={()=>removeItem}>Remove Item</button>
//           </div>
//         </>
//       );
//     }

//     export default Basic_1;
