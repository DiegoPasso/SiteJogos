import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useLocation } from "react-router-dom";

const Produto = () => {
    const { id } = useParams();

    const search = useLocation().search;
    const queryId = new URLSearchParams(search).get('id');

    const [product, setProduct] = useState({});
    const fetchProduct = (id) => {

        axios.get(`http://localhost:3000/produtosPage?id=` + queryId).then(res => {
            const data = res.data;
            console.log(data);

            setProduct(data[0])

        })
    }
    useEffect(() => {
        fetchProduct(id);

    }, [id])

    return (

        <div className='prodPage'>

            <div className='prodCard'>

                <div className='prodCardImg'>
                    <img src={"http://localhost:3000/getI?img=" + product.imagem} />
                </div>

                <div className='prodCardInfo'>

                    <h3>{product.nome}</h3>
                    <div>
                        <p>{product.genero}</p>
                        <p>{product.tipo_plataforma}</p>
                    </div>
                    <div>{product.preco}</div>
                    <div>{product.descricao}</div>

                </div>
            </div>

        </div>

    );
}

export default Produto;