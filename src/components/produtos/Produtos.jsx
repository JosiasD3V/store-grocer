import React from 'react'

export const Produtos = ({nome,img,preco}) => {
  return (
    <div className='CartProdutos'>
    <img src={img} alt="imagem" />
    <h4>{nome}</h4>
    <p>{preco}</p>
    <button>Carrinho</button>

    </div>
  )
}
