import {
  Title,
  Headline,
  Header,
  Input,
  Button,
  InputPassword,
} from "../../components";
import imgPesquisa from "../../assets/png/first-page-dog.png";
import { useEffect } from "react";
import Autenticar from "../../../api/autenticacao";
import Alerta from "../../../api/alertas";

import Sair from "../../../api/sair";

import { useState } from "react";

import {
  Bone,
  SquareUser,
  SquareEqual,
  FolderClosed,
  AlertCircle,
} from "lucide-react";

import Modal from "antd/es/modal/Modal";

export default function Adm() {
  const [nomeUser, setNomeUser] = useState("Zé da manga");
  const [nif, setNif] = useState();
  const [data, setData] = useState();
  const [nifCad, setNifCad] = useState();
  const [cargo, setCargo] = useState();
  const [nome, setNome] = useState();
  const [senha, setSenha] = useState();
  const [novaSenha, setNovaSenha] = useState()
  const [novaSenha2, setNovaSenha2] = useState()

  useEffect(() => {
    Autenticar(["Administrador"]);
    fetch(
      `https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/funcionario/pesquisarFuncionario?nif=${sessionStorage.getItem(
        "idUser"
      )}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNomeUser(data.nome);
        Alerta();
      })
      .catch((error) => console.log(error));
  }, []);

    function pesquisar() {
        if (nif) {
            fetch(
                `https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/funcionario/pesquisarFuncionario?nif=${nif}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setData(data)
                })
                .catch(error => {
                    sessionStorage.setItem('status', 'error');
                    sessionStorage.setItem('mensagem', 'NIF do funcionário não existe!');
              
                    Alerta();
                    setData()
                })
        } else {
            setData()
        }
    }

    function cadastrarFuncionario(){
        console.log(senha)
        setIsModalOpen(false)
        if (nifCad && cargo && nome && senha) {
            fetch(
                `https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/funcionario`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${sessionStorage.getItem("token")}`
                    },
                    body:JSON.stringify({
                        nif: Number(nifCad),
                        nome: nome,
                        senha: senha,
                        cargo: Number(cargo)
                    })
                }
            )
                .then((response) => response.json())
                .then((data) => {
                  if (data.message == "Funcionario Cadastrado"){
                    sessionStorage.setItem('status', 'success');
                    sessionStorage.setItem('mensagem', 'Funcionário cadastrado com sucesso!');
                    Alerta();
                  } else {
                    sessionStorage.setItem('status', 'error');
                    sessionStorage.setItem('mensagem', 'NIF já existe!');
                    Alerta();
                  }
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
          sessionStorage.setItem('status', 'error');
          sessionStorage.setItem('mensagem', 'Erro ao cadastrar funcionário!');
          Alerta();
        }
    }

    function demitirFuncionario(nif) {
      if (nif) {
        fetch(
          `https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/funcionario?nif=${nif}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.message == 'Funcionario Demitido'){
              sessionStorage.setItem('status', 'success');
              sessionStorage.setItem('mensagem', 'Funcionário demitido com sucesso!');
              Alerta();
            } else {
              sessionStorage.setItem('status', 'error');
              sessionStorage.setItem('mensagem', 'Erro na demissão do funcionário!');
              Alerta();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        sessionStorage.setItem('status', 'error');
        sessionStorage.setItem('mensagem', 'Falha na demissão do funcionário!');
        Alerta();
      }
    }

    function trocarSenha() {
      if (novaSenha && novaSenha2 && novaSenha == novaSenha2) {
        fetch(
          `https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/funcionario?nif=${nif}&senha=${novaSenha}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.message == 'Perfil Editado'){
              sessionStorage.setItem('status', 'success');
              sessionStorage.setItem('mensagem', 'Senha editada com sucesso!');
              Alerta();
            } else {
              sessionStorage.setItem('status', 'error');
              sessionStorage.setItem('mensagem', 'Erro na edição de senha!');
              Alerta();
            }

          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        sessionStorage.setItem('status', 'error');
        sessionStorage.setItem('mensagem', 'Erro ao editar a senha do funcionário!');
        Alerta();
      }
    }

    // MODAL CADASTRAR FUNCIONÁRIO
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        trocarSenha()
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


  // MODAL SENHA
  const [isModalOpenPassword, setIsModalOpenPassword] = useState(false);
  const showModalPassword = () => {
    setIsModalOpenPassword(true);
  };

  const handleOkPassword = () => {
    cadastrarFuncionario();
    setIsModalOpenPassword(false);
  };

  const handleCancelPassword = () => {
    setIsModalOpenPassword(false);
  };

  // MODAL DE CONFIRMAÇÃO DEMISSÃO
  const [isModalOpenDemissao, setIsModalOpenDemissao] = useState(false);
  const showModalDemissao = () => {
    setIsModalOpenDemissao(true);
  };

  const handleOkDemissao = () => {
    setIsModalOpenDemissao(false);
  };

  const handleCancelDemissao = () => {
    demitirFuncionario(nif);
    setIsModalOpenDemissao(false);
  };

  return (
    <>
      <Header logoff={true} func={Sair} />
      <Headline
        name={nomeUser}
        txt="Cadastrar funcionário"
        funcao={showModal}
      />
      <div className="p-8 sm:px-28">
        <Title title="Gerencie sua equipe" />

        <div className="flex gap-4 flex-wrap lg:flex-nowrap">
          <div className=" flex flex-col justify-center items-center gap-3 py-4 px-9 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-xl mt-6 w-full   sm:w-full/4 ">
            <img src={imgPesquisa} alt="gato da pesquisa" className="w-48" />

                        <form action="" className="w-full">
                            <Input id='nif' label='NIF' placeholder='Digite o NIF do funcionário' type='number' width='w-full' func={(e) => setNif(e.target.value)} />
                            <Button style='purple' txt='Pesquisar' width='w-full' func={() => pesquisar()} />
                        </form>
                    </div>

          <div
            className={`flex flex-col justify-center items-center gap-3 p-12 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-xl mt-6 text-center w-full ${
              data ? "hidden" : null
            }`}
          >
            <Bone size={50} />
            <h2 className="font-bold text-[#424242]">
              Pesquise um funcionário pelo NIF!
            </h2>
            <span className="text-[#939393]">
              Cadastre, edite ou demita um colaborador!
            </span>
          </div>

          <div
            className={`flex flex-col justify-center items-center gap-3 p-12 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-xl mt-6 w-full ${
              data ? null : "hidden"
            }`}
          >
            <div className=" flex flex-col w-full gap-3">
              <div className="flex bg-[#F6F6F6] w-full p-3 rounded-xl gap-3">
                <SquareUser size={22} />
                <span>Nome: {data ? data.nome : null}</span>
              </div>

              <div className="flex bg-[#F6F6F6] w-full p-3 rounded-xl gap-3">
                <SquareEqual size={22} />
                <span>NIF: {data ? data.nif : null}</span>
              </div>

              <div className="flex bg-[#F6F6F6] w-full p-3 rounded-xl gap-3">
                <FolderClosed size={22} />
                <span>
                  Cargo:{" "}
                  {data ? data.status == 1 ? "Demitido"
                    : data.cargo == 0
                      ? "Administrador"
                      : "Veterinário"
                    : null}
                </span>
              </div>
            </div>

            <div className="flex w-full gap-3">
              <Button
                style="purple"
                txt="Editar senha"
                width="w-full"
                func={showModalPassword}
                disable={data ? data.status == 1 ? true : false : null}
              />
              <Button
                style="demitir"
                txt={data ? data.status == 1 ? "Demitido" : "Demitir" : null}
                width="w-full"
                func={setIsModalOpenDemissao}
                disable={data ? data.status == 1 ? true : false : null}
              />
            </div>
          </div>

                    <Modal className="modal" width={600} title={<h1 className="text-[#424242] text-2xl font-bold">Cadastrar funcionário</h1>} open={isModalOpen} onOk={handleOkPassword} onCancel={handleCancel} okButtonProps={{ style: { backgroundColor: '#8C52FF' } }} okText="Cadastrar" cancelText="Cancelar" centered>
                        <form className="flex flex-col gap-4 w-full">
                            <div className="flex flex-row gap-3 w-full">
                                <Input id='nif' width='w-full' type='text' label='NIF' placeholder='Digite o NIF do funcionário' func={(e)=> setNifCad(e.target.value)} />
                                <div className='flex flex-col gap-1 mt-4 w-full'> 
                                    <label htmlFor='cargo' className='font-medium'>Cargo</label>
                                    <select id='cargo' value={cargo} className='h-14 w-full px-4 rounded-xl border-2 outline-pink-300 focus:shadow-pink-200 focus:shadow-md text-sm valid:bg-pink-100 valid:border-pink-300' onChange={(e)=> setCargo(e.target.value)} required > 
                                        <option value="" selected disabled>Selecione o cargo</option>
                                        <option value="1">Veterinário</option>
                                        <option value="0">Administrador</option>
                                    </select>
                                </div>
                            </div>
                            <Input id='nome' width='w-full' type='text' label='Nome' placeholder='Digite o nome do funcionário' func={(e)=> setNome(e.target.value)} />
                            <InputPassword id='senha' width='w-full' type='text' label='Senha' placeholder='Digite a senha do funcionário' func={(e)=> setSenha(e.target.value)} />
                        </form>
                    </Modal>

          <Modal
            className="modal"
            width={600}
            title={
              <h1 className="text-[#424242] text-2xl font-bold">
                Editar senha
              </h1>
            }
            open={isModalOpenPassword}
            onOk={handleOk}
            onCancel={handleCancelPassword}
            okButtonProps={{ style: { backgroundColor: "#8C52FF" } }}
            okText="Cadastrar"
            cancelText="Cancelar"
            centered
          >
            <form className="flex flex-col gap-4 w-full">
              <Input
                id="nif"
                label="NIF"
                placeholder="Digite o NIF do funcionário"
              />
              <InputPassword
                id="newPassword"
                label="Nova senha"
                placeholder="Digite a nova senha"
                width="w-full"
                func={(e)=> setNovaSenha(e.target.value)}
              />
              <InputPassword
                id="newPasswordConfirm"
                label="Confirmar senha"
                placeholder="Confirmar a nova senha"
                width="w-full"
                func={(e)=> setNovaSenha2(e.target.value)}
              />
            </form>
          </Modal>

          <Modal
            className="confirma"
            open={isModalOpenDemissao}
            onOk={handleOkDemissao}
            onCancel={handleCancelDemissao}
            okButtonProps={{
              style: {
                border: "2px solid red",
                color: "red",
                fontWeight: "bold",
              },
            }}
            cancelButtonProps={{
              style: {
                border: "2px solid #08C046",
                color: "#08C046",
                fontWeight: "bold",
              },
            }}
            okText="Não"
            cancelText="Sim"
            centered
          >
            <div className="flex flex-col gap-3 w-full justify-center items-center ">
              <AlertCircle color="#424242" size={50} />
              <p className="text-lg font-semibold text-[#424242] w-56">
                Tem certeza que deseja demitir o funcionário?
              </p>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}
