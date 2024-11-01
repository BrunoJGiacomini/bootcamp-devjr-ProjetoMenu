

function calc(){

    var quantities = document.getElementsByName("quantity");
    var output = document.getElementById("output");
    var total = 0;

    output.innerHTML = "";


    for (var input of quantities) {
        var id = input.id;

        output.innerHTML += `Prato: ${prods[id-1].name} - Preço unitário: ${prods[id-1].value} - Quantidade: ${input.quantity} </br>`
        total            += prods[id-1].price * input.value
    }

    output.innerHTML += `<h2>Total: ${total}</h2>`;
}