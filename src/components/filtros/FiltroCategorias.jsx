const FiltroCategorias = ({ setCategoria }) => {
  return (
    <div>
      <p onClick={() => setCategoria("todos")}>Todos</p>
      <p onClick={() => setCategoria("fruta")}>Frutas</p>
      <p onClick={() => setCategoria("padaria")}>Padaria</p>
      <p onClick={() => setCategoria("carne")}>Açougue</p>
      <p onClick={() => setCategoria("bebidas")}>Bebidas</p>
    </div>
  );
};

export default FiltroCategorias;
