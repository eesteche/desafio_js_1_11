

var bCalc = document.getElementById('calcular');
bCalc.addEventListener('click', Calcular)

function Calcular() {
var qtyUnDia = Number(document.getElementById('pase_dia').value);
var qtyCompleto = Number(document.getElementById('pase_completo').value);
var qtyDosDias = Number(document.getElementById('pase_dosdias').value);

qtyUnDia < 0 ? qtyUnDia = 0 : qtyUnDia;
qtyCompleto < 0 ? qtyCompleto = 0 : qtyCompleto;
qtyDosDias < 0 ? qtyDosDias = 0 : qtyDosDias;

var totalPedido = 
       `<p><b> ${qtyUnDia} </b> Boletos pase por día</p>
        <p><b> ${qtyCompleto} </b> Boletos pase todos los días</p>
        <p><b> ${qtyDosDias} </b> Boletos pase por 2 días</p> `;

document.getElementById('lista-productos').innerHTML = totalPedido;
document.getElementById('suma-total').textContent = 
        ` $ ${(qtyUnDia *30) + (qtyCompleto *50) + (qtyDosDias *45) }`;
}

