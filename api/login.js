import Alerta from "./alertas";

export default async function Entrar(email, senha) {
  try {
    const requisicao = await fetch(
      `https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/auth/funcionario?nif=${email}&senha=${senha}`,
      {
        method: "POST",
      }
    );

    if (requisicao.ok) {
      const resposta = await requisicao.json();

      const decoded = decodeJwt(resposta.token);
      
      // {tipo: 'Cliente', idUser: '23', nbf: 1701712208, exp: 1701723008, iat: 1701712208}
      
      sessionStorage.setItem("token", resposta.token);
      sessionStorage.setItem('idUser', decoded.idUser);
      sessionStorage.setItem('cargo', decoded.tipo);
      
      sessionStorage.setItem('status', 'success');
      sessionStorage.setItem('mensagem', 'Bem-vindo!');

      if (decoded.tipo == 'Administrador') {
        window.location.href = '/adm' 
      } else if (decoded.tipo == 'Veterinario') {
        window.location.href = '/vet' 
      }

    } else {
      sessionStorage.setItem('status', 'error');
      sessionStorage.setItem('mensagem', 'NIF ou senha inválidos');

      Alerta();
    }
  } catch (error) {
    console.log(error);
  }
}

function decodeJwt(token) {
  const [headerBase64, payloadBase64, signature] = token.split('.');

  // Decodificar o cabeçalho e o payload
  const header = JSON.parse(atob(headerBase64));
  const payload = JSON.parse(atob(payloadBase64));

  return payload;
}

