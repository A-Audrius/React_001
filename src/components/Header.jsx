import reactLogo from "/vite.svg";

function Header({img, title, description}) {
// console.log(props);


  return (
    <>

      <img src={img} alt="#" />
      <h1 className="text-3xl  text-orange-500 font-bold underline">{title}</h1>
      <p>
         {description}
      </p>
    </>
  );
}

export default Header;
