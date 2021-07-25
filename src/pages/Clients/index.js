import React from 'react';
import Fotter from '../../components/Fotter/footer';
import Menu from '../../components/menu';
import { Body } from '../../components/styleComponents';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import './style.css';

export default function Clients() {
  // const [usuario, setUsuario] = useState('');
  // const [email, setEmail] = useState('');

  function handleSalvar(e) {
    const MySwal = withReactContent(Swal)

    e.preventDefault();

    //Dados Pessoais
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let cpf = document.getElementById("cpf").value;

    //Endereço
    let logradouro = document.getElementById("logradouro").value;
    let cep = document.getElementById("cep").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;

    if (nome === '' || email === '' || phone === '' || cpf === '') {
      let campoEmBranco = (nome === '') ? 'nome' : 'email';
      let campoVazio = (cpf === '') ? 'cpf' : 'phone';
      mensagemRetorno('error', `Falha, Verifique o campo de  ${campoEmBranco || campoVazio}.`);
      return;
    }
    if (logradouro === '' || cep === '' || cidade === '' || bairro === '') {
      let campoEmBranco = (logradouro === '') ? 'logradouro' : 'cep';
      let campoVazio = (bairro === '') ? 'bairro' : 'cidade';
      mensagemRetorno('error', `Falha, Verifique o campo de  ${campoEmBranco || campoVazio}.`);
      return;
    }

    let dadosInseridos = {
      nome: nome,
      email: email,
      cpf: cpf,
      phone: phone,
      logradouro: logradouro,
      cep: cep,
      bairro: bairro,
      cidade: cidade,
    };

    localStorage.setItem('dataForm', JSON.stringify(dadosInseridos));
    mensagemRetorno('success', "Cadastro realizado com sucesso!!!");

    document.getElementById("nome").value = '';
    document.getElementById("email").value = '';
    document.getElementById("cpf").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("logradouro").value = '';
    document.getElementById("cep").value = '';
    document.getElementById("bairro").value = '';
    document.getElementById("cidade").value = '';

    function mensagemRetorno(tipo, msg) {
      MySwal.fire({
        position: 'center',
        icon: tipo,
        title: '',
        text: msg,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });

    }
  }


  return (
    <Body>
      <Menu />

      <div className="clientContainer">
        <img src="https://www.courrierdobrasil.com.br/images/clientes/banner_clientes.jpg" alt="" width="100%" height="auto" />
        {/* <h1>Clientes</h1> */}
        <form>
          <div>
            <h3>Dados Pessoais</h3>
            <hr></hr>
            <input type="text" id="nome" placeholder="Nome Completo" />
            <input type="number" id="cpf" placeholder="CPF" />
            <input type="text" id="email" placeholder="E-mail" />
            <input type="number" id="phone" placeholder="Telefone" />
          </div>

          <div>
            <h3>Endereço</h3>
            <hr></hr>
            <input type="text" id="logradouro" placeholder="Logradouro" />
            <input type="number" id="cep" placeholder="CEP" />
            <input type="text" id="bairro" placeholder="Bairro" />
            <input type="text" id="cidade" placeholder="Cidade" />
          </div>
          <button className="btnSalvar" type="button" onClick={handleSalvar}>Salvar</button>
        </form>
      </div>
      <Fotter />
    </Body>
  );
}
