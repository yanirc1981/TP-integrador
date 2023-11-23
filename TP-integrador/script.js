// valor de ticket
const valorTicket = 200;

// porcentajes de descuento 
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;


let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria       = document.getElementById("categoriaSelect");

// quitar el estilo de error a los elementos del form
function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

//  total a pagar
function total_a_pagar() {

    // quita todos los estilos de error en los campos que los tuvieran
    quitarClaseError();

    // Multiplico cantidad de tickets por el valor
    let totalValorTickets = (cantidadTickets.value) * valorTicket;

    // Aplico descuentos x categoria
    if (categoria.value == 0) {
        totalValorTickets = totalValorTickets ;
    }
    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - ( (descuentoEstudiante / 100) * totalValorTickets);
    }
    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
    }
    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
    }

    // Inserto el valor en el HTML
    totalPago.innerHTML = totalValorTickets;
}

// calcula el total
btnResumen.addEventListener('click', total_a_pagar);

// borra el valor
function reset_total_a_pagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
}
btnBorrar.addEventListener('click', reset_total_a_pagar);