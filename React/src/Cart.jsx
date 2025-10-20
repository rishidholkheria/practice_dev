import React, { useState } from "react";

const MovieCard = ({
  key,
  title,
  year,
  liked,
  inCart,
  price,
  handleLike,
  handleCart,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "12px",
        minWidth: "200px",
        minHeight: "150px",
        margin: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <div>
        <h4 style={{ margin: "0 0 4px", fontSize: "14px", color: "#333" }}>
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </h4>
        <p style={{ margin: "2px 0", fontSize: "12px", color: "#555" }}>
          <strong>Year:</strong> {year}
        </p>
        <p style={{ margin: "2px 0", fontSize: "12px", color: "#555" }}>
          <strong>Price:</strong> ${price.toFixed(2)}
        </p>
      </div>
      <div>
        <p
          style={{
            margin: "2px 0",
            fontSize: "12px",
            color: liked ? "red" : "#777",
            cursor: "pointer",
          }}
          onClick={handleLike}
        >
          ❤️ {liked ? "Liked" : "Not liked"}
        </p>
        <p
          onClick={handleCart}
          style={{
            margin: "2px 0",
            fontSize: "12px",
            color: inCart ? "green" : "#777",
            cursor: "pointer",
          }}
        >
          🛒 {inCart ? "In Cart" : "Not in Cart"}
        </p>
      </div>
    </div>
  );
};

const Cart = () => {
  const [movieData, setMovieData] = useState([
    {
      id: 1,
      title: "Iron Man",
      year: 2008,
      poster: "https://via.placeholder.com/150x220?text=Iron+Man",
      liked: false,
      inCart: false,
      price: 9.99,
    },
    {
      id: 2,
      title: "Captain America: The First Avenger",
      year: 2011,
      poster: "https://via.placeholder.com/150x220?text=Captain+America",
      liked: false,
      inCart: false,
      price: 8.99,
    },
    {
      id: 3,
      title: "The Avengers",
      year: 2012,
      poster: "https://via.placeholder.com/150x220?text=The+Avengers",
      liked: false,
      inCart: false,
      price: 12.99,
    },
    {
      id: 4,
      title: "Black Panther",
      year: 2018,
      poster: "https://via.placeholder.com/150x220?text=Black+Panther",
      liked: false,
      inCart: false,
      price: 11.99,
    },
    {
      id: 5,
      title: "Spider-Man: No Way Home",
      year: 2021,
      poster: "https://via.placeholder.com/150x220?text=Spider-Man+No+Way+Home",
      liked: false,
      inCart: false,
      price: 13.99,
    },
    {
      id: 6,
      title: "Doctor Strange in the Multiverse of Madness",
      year: 2022,
      poster: "https://via.placeholder.com/150x220?text=Doctor+Strange+2",
      liked: false,
      inCart: false,
      price: 10.99,
    },
    {
      id: 7,
      title: "Thor",
      year: 2011,
      poster: "https://via.placeholder.com/150x220?text=Thor",
      liked: false,
      inCart: false,
      price: 8.49,
    },
    {
      id: 8,
      title: "Guardians of the Galaxy",
      year: 2014,
      poster:
        "https://via.placeholder.com/150x220?text=Guardians+of+the+Galaxy",
      liked: false,
      inCart: false,
      price: 10.49,
    },
    {
      id: 9,
      title: "Ant-Man",
      year: 2015,
      poster: "https://via.placeholder.com/150x220?text=Ant-Man",
      liked: false,
      inCart: false,
      price: 7.99,
    },
    {
      id: 10,
      title: "Captain Marvel",
      year: 2019,
      poster: "https://via.placeholder.com/150x220?text=Captain+Marvel",
      liked: false,
      inCart: false,
      price: 10.99,
    },
    {
      id: 11,
      title: "Avengers: Age of Ultron",
      year: 2015,
      poster: "https://via.placeholder.com/150x220?text=Age+of+Ultron",
      liked: false,
      inCart: false,
      price: 12.49,
    },
    {
      id: 12,
      title: "Avengers: Infinity War",
      year: 2018,
      poster: "https://via.placeholder.com/150x220?text=Infinity+War",
      liked: false,
      inCart: false,
      price: 13.49,
    },
    {
      id: 13,
      title: "Avengers: Endgame",
      year: 2019,
      poster: "https://via.placeholder.com/150x220?text=Endgame",
      liked: false,
      inCart: false,
      price: 14.99,
    },
    {
      id: 14,
      title: "Shang-Chi and the Legend of the Ten Rings",
      year: 2021,
      poster: "https://via.placeholder.com/150x220?text=Shang-Chi",
      liked: false,
      inCart: false,
      price: 11.49,
    },
    {
      id: 15,
      title: "Eternals",
      year: 2021,
      poster: "https://via.placeholder.com/150x220?text=Eternals",
      liked: false,
      inCart: false,
      price: 10.49,
    },
  ]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  const handleLike = (id) => {
    console.log(`Liked ${id}!`);
    const updatedMovieData = movieData.map((movie) =>
      movie.id === id ? { ...movie, liked: !movie.liked } : movie
    );
    setMovieData(updatedMovieData);
  };

  const handleCart = (id) => {
    const movie = movieData.find((mov) => mov.id === id);
    console.log(movie);
    if (!cart.some((m) => m.id === id)) {
      console.log(`${movie} added to cart!`);
      setCart([...cart, movie]);
      setCount((count) => count + 1);
    }
    console.log("Cart :");
    cart.map((cartItem) => {
      console.log(cartItem.title);
    });
  };

  return (
    <div>
      <p>Cart Count : {count}</p>
      <div
        style={{
          padding: "5px",
          display: "flex",
          flexDirection: "row",
          border: "1px solid grey",
          overflowX: "auto",
          overflowY: "hidden",
          scrollBehavior: "smooth",
          gap: "10px",
        }}
      >
        {movieData.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            liked={movie.liked}
            inCart={movie.inCart}
            price={movie.price}
            handleLike={() => handleLike(movie.id)}
            handleCart={() => handleCart(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
