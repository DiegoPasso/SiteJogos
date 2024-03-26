import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";

//imports padrão

function Registro() {
  const {
    register, //avisa quais inputs do formulario será registrado
    handleSubmit, //lida com os envios das informações do input
  } = useForm();
  const [image, setImage] = useState("");
  const carregar = (e) => setImage(e.target.files[0]);

  const formData = new FormData();
  formData.append("imagem", image);

  const headers = {
    Headers: {
      "Content-Type": "application/json",
    },
  };

  const modalDisplayTime = 1000; // 1 second
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let timeout;
    if (showModal) {
      timeout = setTimeout(() => {
        setShowModal(false);
        // history.push('/newpage')
      }, modalDisplayTime);
    }
    return () => clearTimeout(timeout);
  }, [showModal]);

  const handleClick = () => {
    setShowModal(true);
  };
  //armazena os dados do submit na api
  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/upImg", formData)
      .then((res) => {
        console.log(formData);
        console.log(res);
      })
      .catch(() => {
        console.log("putz deu ruim");
      });

    data.imagem = data.imagem[0].name;

    axios
      .post("http://localhost:3000/produtos", data, headers)
      .then(() => {
        console.log("ok");
        console.log(data);
      })
      .catch(() => {
        console.log("putz deu ruim");
      });
  };
  //formulario com register
  return (
    <div>
      <main>
        <div className="card-post">
          <div className="card-body-post">
            <h1>Registrar produto</h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              enctype="multipart/form-data"
            >
              <div className="fields">
                <label>Nome:</label>
                <input type="text" name="nome" {...register("nome")} />
              </div>

              <div className="fields">
                <label>Preco: </label>
                <input type="text" name="preco" {...register("preco")} />
              </div>

              <div className="fields">
                <label>Gênero: </label>
                <input type="text" name="genero" {...register("genero")} />
              </div>

              <div className="fields">
                <label>Plataforma: </label>
                <input
                  type="text"
                  name="tipo_plataforma"
                  {...register("tipo_plataforma")}
                />
              </div>

              <div className="fields">
                <label>Código do Produto: </label>
                <input
                  type="text"
                  name="codigo_produto"
                  {...register("codigo_produto")}
                />
              </div>

              <div className="fields">
                <label>Descrição: </label>
                <textarea
                  type="text"
                  name="descricao"
                  {...register("descricao")}
                ></textarea>
              </div>

              <div className="fields">
                <label>Insira uma imagem: </label>
                <input
                  type="file"
                  name="imagem"
                  {...register("imagem")}
                  onChange={carregar}
                />
              </div>

              <div className="btn-post">
                <button type="submit" name="botao" onClick={handleClick}>
                  Enviar
                </button>
                {showModal && (
                  <div className="modal">
                    <h1>Produto Cadastrado!</h1>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Registro;
