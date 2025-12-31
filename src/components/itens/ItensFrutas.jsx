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
        categoria:"fruta",
        img:fruta1,
        nome:"maça",
        preco:1.99,
     },
     {id:2,
      categoria:"fruta",
        img:fruta2,
        nome:"Uva",
        descricao:"Uvas frescas, doces e suculentas, perfeitas para lanches rápidos, sobremesas ou sucos naturais.",
        preco:2.99}, 
      {id:3,
        categoria:"fruta",
        img:fruta3,
        nome:"Uva",
        preco:2.99},
      {id:4,
        categoria:"fruta",
        img:fruta4,
        nome:"Uva",
        preco:2.99},
      {id:5,
        categoria:"fruta",
        img:fruta5,
        nome:"Uva",
        preco:2.99},
      {id:6,
        categoria:"fruta",
        img:fruta6,
        nome:"Uva",
        preco:2.99},
        {
          id:7,
          categoria:"carne",
        img:carn1,
        nome:"carne",
        preco:22.99
        },{
          id:8,
          categoria:"carne",
        img:carn2,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
          categoria:"carne",
        img:carn3,
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:carn4,
        categoria:"carne",
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:carn5,
        categoria:"carne",
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:carn6,
        categoria:"carne",
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:bebida1,
        categoria:"bebidas",
        nome:"Whisky Blended Johnnie Walker Garrafa 500ml",
        preco:25.99
        },{
          id:7,
        img:bebida2,
        categoria:"bebidas",
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:bebida3,
        categoria:"bebidas",
        nome:"Refrigerante Coca-Cola Sem Açúcar 1,5L",
        preco:`R$: ${7.99}`
        },{
          id:7,
        img:bebida4,
        categoria:"bebidas",
        nome:"Whisky Escocês Blended Black Label Johnnie Walker Garrafa 500ml",
        preco:99.99
        },{
          id:7,
        img:bebida5,
        categoria:"bebidas",
        nome:"Licor Fino de Leite Morango com Tequila Ballena 750ml",
        preco:`R$:${154.99}`
        },{
          id:7,
        img:bebida6,
        categoria:"bebidas",
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:padaria1,
        categoria:"padaria",
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:padaria2,
        categoria:"padaria",
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:padaria3,
        categoria:"padaria",
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:padaria4,
        categoria:"padaria",
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:padaria5,
        categoria:"padaria",
        nome:"Uva",
        preco:2.99
        },{
          id:7,
        img:padaria6,
        categoria:"padaria",
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