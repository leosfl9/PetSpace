import { Login, Adm, Veterinario, Error404, ErroAcesso } from "./pages"


function App() {
  const getPathnameComponent = () => {
    const pathname = window.location.pathname;

    switch (pathname) {
      case '/':
        return <Login />;
      case '/adm':
        return <Adm/>;
      case '/vet':
        return <Veterinario/>;
      case '/error':
        return <ErroAcesso/>
          default:
            // Renderizar algum componente padrão ou mostrar uma mensagem de rota não encontrada
            return <Error404/>;
    }
  };  




  return (

    <div className="App">
      {getPathnameComponent()}
    </div>

  )
}

export default App


