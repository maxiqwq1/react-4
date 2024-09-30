import { useEffect, useState } from "react";

const Home = () => {
   const [pizzas, setPizzas] = useState([]);

   useEffect(() => {
      fetch("http://localhost:5000/api/pizzas")
         .then(response => response.json())
         .then(data => setPizzas(data))
         .catch(error => console.error("Error en encontrar fetching de laspizzas:", error));
   }, []);

   return (
      <div className="padre" >
         {pizzas.map(pizza => (
            <div className="hijito" key={pizza.id}>
               <h2 className="titulo" >{pizza.name}</h2>
               <p>Cl$: {pizza.price}</p>
               
               <p>Ingredientes: {pizza.ingredients.join(", ")}</p>
               <img src={pizza.img} alt={pizza.name} />
            </div>
         ))}
      </div>
   );
};

export default Home;
