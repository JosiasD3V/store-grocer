import React from 'react'

export const Produtos = ({ nome, img, preco,}) => {
  return (
    <div className="CartProdutos">
      <img src={img} alt={nome} />

      <h4>{nome}</h4>

      <p>
        {preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <div>
        <button>Carrinho</button>
      </div>
    </div>
  );
};

