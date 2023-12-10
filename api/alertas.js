import Swal from 'sweetalert2';

export default function Alerta () {

    if (sessionStorage.getItem('mensagem') && sessionStorage.getItem('status')) {
        const status = sessionStorage.getItem('status');
        const mensagem = sessionStorage.getItem('mensagem');

        Swal.fire({
            icon: status,
            title: mensagem,
            timer: 1500,
            position: "top",
            showConfirmButton: false,
            timerProgressBar: true,
        });

        sessionStorage.removeItem('status');
        sessionStorage.removeItem('mensagem');
    }
}