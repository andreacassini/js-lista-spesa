let listaSpesa = ['Zucchero', 'Lievito', 'Cacao', 'Sale', 'Cioccolato fondente', 'Farina 00', 'Uova', 'Burro'];


const lista = document.getElementById('lista-spesa');
let i = 0;
while(i < listaSpesa.length){
    let item = listaSpesa[i]
    i++;
    let list_item = document.createElement('li');
    list_item.innerText =  item;
    lista.append(list_item);
}

