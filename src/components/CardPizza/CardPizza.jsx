import React from 'react';
import './CardPizza.css';

const CardPizza = ({ name, price, ingredients, img, descrip, idpizza}) => (
  <div className="card card-pizza">
    <img src={img} alt={name} className="card-img-top" />
    <div className="card-body d-flex flex-column justify-content-between">
      <h2 className="card-title mb-2">Pizza {name}.</h2>
      <p className="mb-2 pdesc">{descrip}</p>
      <div>
        <p className="mb-0">🍕 Ingredientes:</p>
        <ul className="ingredients-list">
          {ingredients.map((ingredient) => (
            <li key={`${ingredient}-${idpizza}`}>{ingredient}.</li>
          ))}
        </ul>
      </div>
      <h4 className="text-center">
        Precio: ${price.toLocaleString()}
      </h4>
    </div>
    <div className="card-footer d-flex justify-content-between">
      <button className="btn btn-outline-dark btn-ver-mas">Ver más 👀</button>
      <button className="btn btn-dark btn-añadir">Añadir 🛒</button>
    </div>
  </div>
);

export default CardPizza;
