import React from 'react'
import './itensFrutas.css'
import { Produtos } from '../produtos/Produtos'
import fruta1 from '../../assets/Hortfrut/uva.jpeg'
import fruta2 from '../../assets/Hortfrut/maca.jpg'
import fruta3 from '../../assets/Hortfrut/fruit3.png'
import fruta4 from '../../assets/Hortfrut/fruit4.png'
import fruta5 from '../../assets/Hortfrut/fruit5.png'
import fruta6 from '../../assets/Hortfrut/fruit6.png'
import carn1 from '../../assets/acougue/carn1.png'
import carn2 from '../../assets/acougue/carn2.png'
import carn3 from '../../assets/acougue/carn3.png'
import carn4 from '../../assets/acougue/carn4.png'
import carn5 from '../../assets/acougue/carn5.png'
import carn6 from '../../assets/acougue/carn6.png'
import bebida1 from '../../assets/Bebidas/bebida1.png'
import bebida2 from '../../assets/Bebidas/bebida2.png'
import bebida3 from '../../assets/Bebidas/bebida3.png'
import bebida4 from '../../assets/Bebidas/bebida4.png'
import bebida5 from '../../assets/Bebidas/bebida5.png'
import bebida6 from '../../assets/Bebidas/bebida6.png'
import padaria1 from '../../assets/padaria/padaria1.png'
import padaria2 from '../../assets/padaria/padaria2.png'
import padaria3 from '../../assets/padaria/padaria3.png'
import padaria4 from '../../assets/padaria/padaria4.png'
import padaria5 from '../../assets/padaria/padaria5.png'
import padaria6 from '../../assets/padaria/padaria6.png'

const Itens = () => {

    const frutas = [{
        id:1,
        img:fruta1,
        nome:"maça",
        preco:1.99,
     },
     {id:2,
        img:fruta2,
        nome:"Uva",
        preco:2.99}, 
      {id:3,
        img:fruta3,
        nome:"Uva",
        preco:2.99},
      {id:4,
        img:fruta4,
        nome:"Uva",
        preco:2.99},
      {id:5,
        img:fruta5,
        nome:"Uva",
        preco:2.99},
      {id:6,
        img:fruta6,
        nome:"Uva",
        preco:2.99},
        {
          id:7,
        img:carn1,
        nome:"carne",
        preco:22.99
        },{
          id:8,
        img:carn2,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:carn3,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:carn4,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:carn5,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:carn6,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:bebida1,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:bebida2,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:bebida3,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:bebida4,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:bebida5,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:bebida6,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:padaria1,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:padaria2,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:padaria3,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:padaria4,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:padaria5,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:padaria6,
        nome:"Uva",
        preco:2.99
        },
    ]





  return (
    <div className='FrutasCart'>
    {frutas.map(product => <Produtos img={product.img} nome={product.nome} preco={product.preco}/>)}
    </div>
  )
}

export default Itens