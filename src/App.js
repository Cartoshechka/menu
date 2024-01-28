// App.js
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';

const MenuDish = ({ name, price, description, image }) => {
  const imagePath = `/images/${image}`; 

  return (
    <div className="menu-dish">
      <img src={imagePath} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

const MenuCategory = ({ category, dishes }) => {
  return (
    <div className="menu-category">
      <h2>{category}</h2>
      {dishes.map((dish, index) => (
        <MenuDish key={index} {...dish} />
      ))}
    </div>
  );
};

const Breakfast = () => {
  const breakfastMenu = [
    { 
      name: 'Scrambled Eggs', 
      price: 8.99, 
      description: 'Delicious scrambled eggs.', 
      image: 'egg.jpg' },
      {
        name: 'Classic Pancakes',
        price: 8.99,
        description: 'Fluffy pancakes served with maple syrup and a dollop of whipped cream.',
        image: 'pancake.jpg',
      },
      {
        name: 'Avocado Toast with Poached Eggs',
        price: 10.99,
        description: 'Sliced avocado on toasted artisan bread, topped with perfectly poached eggs and a sprinkle of black pepper.',
        image: 'avocado_toast.jpg',
      },
      {
        name: 'Greek Yogurt Parfait',
        price: 7.99,
        description: 'Layers of Greek yogurt, granola, fresh berries, and honey for a healthy and delicious breakfast.',
        image: 'yogurt_parfait.jpg',
      },
  ];

  return <MenuCategory category="Breakfast" dishes={breakfastMenu} />;
};

const Lunch = () => {
  const lunchMenu = [
    { name: 'Chicken Sandwich', 
    price: 10.99, 
    description: 'Grilled chicken sandwich with veggies.', 
    image: 'chicken-sandwich.jpg' },
    {
      name: 'Caprese Salad Sandwich',
      price: 12.99,
      description: 'Fresh mozzarella, ripe tomatoes, and basil leaves on ciabatta bread with balsamic glaze.',
      image: 'caprese_sandwich.jpg',
    },
    {
      name: 'Quinoa Salad Bowl',
      price: 11.99,
      description: 'A hearty bowl of quinoa, mixed vegetables, chickpeas, and feta cheese, drizzled with lemon vinaigrette.',
      image: 'quinoa_salad.jpg',
    },
    {
      name: 'Chicken Caesar Wrap',
      price: 9.99,
      description: 'Grilled chicken, crisp romaine lettuce, cherry tomatoes, and Caesar dressing wrapped in a tortilla.',
      image: 'caesar_wrap.jpg',
    },
  ];

  return <MenuCategory category="Lunch" dishes={lunchMenu} />;
};

const Dinner = () => {
  const dinnerMenu = [
    { name: 'Steak Dinner', 
    price: 19.99, 
    description: 'Juicy steak with mashed potatoes and veggies.',
    image: 'steak-dinner.jpg' },
    {
      name: 'Grilled Salmon with Lemon Herb Sauce',
      price: 16.99,
      description: 'Succulent grilled salmon fillet served with a zesty lemon herb sauce, accompanied by roasted vegetables.',
      image: 'grilled_salmon.jpg',
    },
    {
      name: 'Mushroom Risotto',
      price: 14.99,
      description: 'Creamy Arborio rice cooked with a medley of mushrooms, Parmesan cheese, and fresh herbs.',
      image: 'mushroom_risotto.jpg',
    },
    {
      name: 'Beef Tenderloin Steak',
      price: 19.99,
      description: 'Juicy beef tenderloin steak cooked to perfection, served with garlic mashed potatoes and sautéed asparagus.',
      image: 'beef_steak.jpg',
    },
  ];

  return <MenuCategory category="Dinner" dishes={dinnerMenu} />;
};


const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to our Restaurant!</h2>

      <img src="/images/restaurant.png" alt="Restaurant Photo" className="restaurant-image" />
    
    <div className="restaurant-description">
    <h2>Bellagio Bistro: Culinary Elegance with a View</h2>
    <p>Welcome to Bellagio Bistro, a culinary haven nestled within the renowned Bellagio Hotel. Our restaurant is a celebration of exquisite flavors, impeccable service, and a delightful ambiance. Indulge your senses in a gastronomic journey that combines innovation with timeless classics.</p>

    <h3>Signature Dishes:</h3>
    <ul>
      <li>
        <strong>Morning Symphony (Breakfast):</strong> Start your day with our Morning Symphony, featuring the fluffiest pancakes drizzled with artisanal maple syrup, avocado toast crowned with perfectly poached eggs, and a refreshing Greek Yogurt Parfait layered with fresh berries and granola.
      </li>
      <li>
        <strong>Midday Delights (Lunch):</strong> At lunchtime, savor our Midday Delights, including the Caprese Salad Sandwich with fresh mozzarella and ripe tomatoes, a wholesome Quinoa Salad Bowl bursting with flavors, and the Chicken Caesar Wrap, a grilled masterpiece with crisp romaine and tender chicken.
      </li>
      <li>
        <strong>Evening Serenade (Dinner):</strong> As the sun sets, immerse yourself in our Evening Serenade. Relish the Grilled Salmon with Lemon Herb Sauce, a succulent harmony of flavors, indulge in the creamy Mushroom Risotto, and experience the perfection of our Beef Tenderloin Steak served with garlic mashed potatoes and sautéed asparagus.
      </li>
    </ul>

    <p><strong>The Bellagio Experience:</strong> Bellagio Bistro is not just a restaurant; it's an experience. With breathtaking views of the iconic Bellagio fountains and a sophisticated ambiance, every meal is elevated into a memorable occasion. Our commitment to quality ingredients, culinary artistry, and personalized service ensures that each visit is a journey into culinary excellence.</p>

    <p>Join us at Bellagio Bistro, where each dish tells a story, and every bite is a symphony of flavors. Discover the perfect blend of luxury, taste, and atmosphere at the heart of the Bellagio Hotel.</p>
</div>
</div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Restaurant Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/breakfast" className="nav-link">
              Breakfast
            </NavLink>
            <NavLink to="/lunch" className="nav-link">
              Lunch
            </NavLink>
            <NavLink to="/dinner" className="nav-link">
              Dinner
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container mt-3">
      <Routes>
  <Route path="/breakfast" element={<Breakfast />} />
  <Route path="/lunch" element={<Lunch />} />
  <Route path="/dinner" element={<Dinner />} />
  <Route path="/" element={<Home />} />
</Routes>
      </div>
    </Router>
  );
};

export default App;
