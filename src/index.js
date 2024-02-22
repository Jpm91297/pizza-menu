import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "prosciutto.jpg",
      soldOut: false,
    },
  ];

  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu({ pizzaData }) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Authentic Italian Cuisine</p>
      <ul className="pizzas">
        {pizzaData.length > 0 ? (
          pizzaData.map((pizza, index) => {
            return <Pizza key={index} pizza={pizza} />;
          })
        ) : (
          <p>We're still working on our menu.</p>
        )}
      </ul>
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>We are closed</p>
      )}
    </footer>
  );
}

function Pizza({ pizza }) {
  const { name, ingredients, photoName, price, soldOut } = pizza;

  return (
    <li className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photoName} alt="cool" />
      <div>
        <h2>{name}</h2>
        <p>{ingredients}</p>
        <span>{!soldOut ? price : "SOLD OUT"}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
