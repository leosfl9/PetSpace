export default async function Autenticar (cargos) {
    const cargo = sessionStorage.getItem('cargo');

    if (!cargos.includes(cargo)) {
        sessionStorage.clear();
        
        window.location.href = '/error';
    };
};