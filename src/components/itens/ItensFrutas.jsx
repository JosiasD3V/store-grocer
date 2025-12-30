import React from 'react'
import './itensFrutas.css'
import { Produtos } from '../produtos/Produtos'
import fruta1 from '../../assets/Hortfrut/uva.jpeg'
import fruta2 from '../../assets/Hortfrut/maca.jpg'
import fruta3 from '../../assets/Hortfrut/fruit3.png'
import fruta4 from '../../assets/Hortfrut/fruit4.png'
import fruta5 from '../../assets/Hortfrut/fruit5.png'
import fruta6 from '../../assets/Hortfrut/fruit6.png'


const Itens = () => {

    const frutas = [{
        id:1,
        img:fruta1,
        nome:"maça",
        preco:1.99,
     },
     {id:1,
        img:fruta2,
        nome:"Uva",
        preco:2.99}, 
      {id:1,
        img:fruta3,
        nome:"Uva",
        preco:2.99},
      {id:1,
        img:fruta4,
        nome:"Uva",
        preco:2.99},
      {id:1,
        img:fruta5,
        nome:"Uva",
        preco:2.99},
      {id:1,
        img:fruta6,
        nome:"Uva",
        preco:2.99}
    ]





  return (
    <div className='FrutasCart'>
    <h1>Frutas</h1>
    {frutas.map(product => <Produtos img={product.img} nome={product.nome} preco={product.preco}/>)}
    </div>
  )
}

export default Itens