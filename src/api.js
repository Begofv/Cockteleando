async function BuscarNombre(name) {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+name);
    const bebidas = await response.json();
    return (bebidas)
}


async function BuscarLetra(letter) {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f="+letter);
    const bebidas = await response.json();
    return (bebidas)
}



export {
    BuscarNombre,
    BuscarLetra
}