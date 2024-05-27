async function BuscarNombre(name) {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+name);
    const bebidas = await response.json();
    return (response)
}


async function BuscarLetra(letter) {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f="+letter);
    const bebidas = await response.json();
    return (response)
}


async function Ingredientes() {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
    const bebidas = await response.json();
    return (response)
}


async function Random() {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const bebidas = await response.json();
    return (response)
}


async function Alcohol(alcohol) {
    const response = await fetch("www.thecocktaildb.com/api/json/v1/1/filter.php?a="+alcohol);
    const bebidas = await response.json();
    return (response)
}


export {
    BuscarNombre,
    BuscarLetra,
    Ingredientes,
    Alcohol,
    Random
}