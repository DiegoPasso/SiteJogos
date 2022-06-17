import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Produtos() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const handleProduct = (product) => {
    navigate(`/produto?id=${product.id}`);
  }
  useEffect(() => {
    //buscando os dados da api e jogando na const setProducts
    axios.get("http://localhost:3000/produtos").then((res) => {

      console.log(res);
      const data = res.data;

      setProducts(data);
    });
  }, []);
  return (
    <div className="cardContainer">
      {products.map((product) => {
        //consumindo os dados da API e gerando o card baseado na informação que é obtida pelo array
        return (


          <div onClick={() => handleProduct(product)} className=" card shadow-lg shadow-indigo-500/50">
            <div><p>{product.nome}</p></div>
            <div><p>{product.tipo_plataforma}</p></div>
            <div><p>R$:{product.preco}</p></div>
            <div className="cardImg">
              <img src={"http://localhost:3000/getI?img=" + product.imagem} width='250px' />
            </div>
          </div>

        );
      })}
    </div>
  )
}

export default React.memo(Produtos);