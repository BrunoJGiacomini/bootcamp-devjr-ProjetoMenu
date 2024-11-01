var prods = [
    { id: 1, name: "Bife com batata", price: 30.00 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.00 },
    { id: 3, name: "Carne de Panela", price: 22.00 },
    { id: 4, name: "Farofa", price: 10.00 },
    { id: 5, name: "Salada", price: 8.00 },
    { id: 6, name: "Torresmo", price: 12.00 },
];

function calc() {
    var quantities = document.getElementsByName("quantity");
    var output = document.getElementById("output");
    var total = 0;

    
    var intro = `Caro <span>Yuri Alberto</span><div class="title6">Seguem os dados do seu pedido.</div><div class="title7">O seu pedido é:</div>`;
    output.innerHTML = intro + "<ul>"; 

    for (var input of quantities) {
        var id = input.id;
        var quantity = parseFloat(input.value) || 0;

        
        if (quantity > 0) {
            output.innerHTML += `<li>Prato: ${prods[id - 1].name} - Preço unitário: R$ ${prods[id - 1].price.toFixed(2)} - Quantidade: ${quantity}</li>`;
            total += prods[id - 1].price * quantity;
        }
    }

    output.innerHTML += `</ul>`; 

    
    if (total > 0) {
        output.innerHTML += `<h2>Preço Final: R$ ${total.toFixed(2)}</h2>`;
    } else {
        output.innerHTML += `<h2>Nenhum item selecionado.</h2>`;
    }
}
