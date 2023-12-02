// src/components/RestaurantList.js

import React, { useEffect, useState } from 'react';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch data from backend API
    fetch('http://localhost:3001/api/restaurants')
      .then((response) => response.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <div className="container">
      <h1>Restaurant List</h1>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="restaurant-card">
          <h2>{restaurant.name}</h2>
          <p>{restaurant.description}</p>
          {/* Add more details or components */}
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
