import { useState } from 'react';
import './App.css';

function App() {
  const [size, setSize] = useState("medium");
  const [toppings, setToppings] = useState([]);
  
  const price = {
    small: 5,
    medium: 8,  
    large: 12,
    toppings: {
      cheese: 2,
      mushroom: 1.5,
      paneer: 3,
    },
  };
  
  const handleToppingChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setToppings([...toppings, value]);
    } else {
      setToppings(toppings.filter(t => t !== value));
    }
  };

  const calculateTotal = () => {
    let total = price[size]; 
    toppings.forEach(t => {
      total += price.toppings[t];
    });
    return total.toFixed(2);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px", backgroundc: "blue" }}>
      <h1>Pizza Billing App</h1>

      <h2>Select Size:</h2>
      <label>
        <input 
          type="radio" 
          name="size" 
          value="small" 
          checked={size === "small"} 
          onChange={(e) => setSize(e.target.value)} 
        />
        Small (${price.small})
      </label><br/>
      
      <label>
        <input 
          type="radio" 
          name="size" 
          value="medium" 
          checked={size === "medium"} 
          onChange={(e) => setSize(e.target.value)} 
        />
        Medium (${price.medium})
      </label><br/>

      <label>
        <input 
          type="radio" 
          name="size" 
          value="large" 
          checked={size === "large"} 
          onChange={(e) => setSize(e.target.value)} 
        />
        Large (${price.large})
      </label><br/>

      <h2>Select Toppings:</h2>
      <label>
        <input 
          type="checkbox" 
          value="cheese" 
          checked={toppings.includes("cheese")} 
          onChange={handleToppingChange}
        />
        Cheese (${price.toppings.cheese})
      </label><br/>
      
      <label>
        <input 
          type="checkbox" 
          value="mushroom" 
          checked={toppings.includes("mushroom")} 
          onChange={handleToppingChange}
        />
        Mushroom (${price.toppings.mushroom})
      </label><br/>
      
      <label>
        <input 
          type="checkbox" 
          value="paneer" 
          checked={toppings.includes("paneer")} 
          onChange={handleToppingChange}
        />
        Paneer (${price.toppings.paneer})
      </label><br/>

      <h2>Total: ${calculateTotal()}</h2>
    </div>
  );
}

export default App;