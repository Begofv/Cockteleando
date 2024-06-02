# Proyecto de COCKTELEANDO

Este es un proyecto de React que utiliza una API de cócteles para buscar y mostrar información sobre diferentes cócteles. Puedes buscar cócteles por nombre o por letra, y ver los detalles de cada cóctel en un modal que incluye el nombre, los ingredientes, la preparación y una foto. También puedes marcar tus cócteles favoritos.

## Características

- **Buscar Cócteles por Nombre**: Busca cócteles ingresando el nombre en la barra de búsqueda.
- **Buscar Cócteles por Letra**: Busca cócteles ingresando una letra en la barra de búsqueda.
- **Listado de Cócteles**: Muestra un listado de cócteles según los criterios de búsqueda.
- **Detalle de Cócteles**: Al hacer clic en un cóctel, se muestra un modal con los detalles del cóctel.
  - **Nombre del Cóctel**
  - **Ingredientes**
  - **Preparación**
  - **Foto del Cóctel**
- **Favoritos**: Marca tus cócteles favoritos para acceder a ellos fácilmente.

## Tecnologías Utilizadas

- **React + Vite**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Axios**: Cliente HTTP basado en promesas para hacer solicitudes a la API de cócteles.
- **React Bootstrap**: Biblioteca de componentes React basada en Bootstrap para estilizar la aplicación.
- **API de Cócteles**: [TheCocktailDB](https://www.thecocktaildb.com/api.php) es la API utilizada para obtener los datos de los cócteles.

## Instalación

1. Clona el repositorio a tu máquina local:
   ```bash
   git clone https://github.com/tuusuario/buscador-cocteles.git
   cd buscador-cocteles
2. Instala las dependencias del proyecto: npm install
3. Para iniciar la aplicación: npm run dev
4. Abre tu navegador en http://localhost:5173 para ver la aplicación en funcionamiento.

## Uso

1. Buscar Cócteles: Usa la barra de búsqueda para encontrar cócteles por nombre o por letra.
2. Ver Detalles: Haz clic en un cóctel de la lista para ver sus detalles en un modal.
3. Marcar como Favorito: Haz clic en el botón de favorito para marcar un cóctel como favorito.

## Contribución
Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva función (git checkout -b nueva-funcion).
3. Haz commit de tus cambios (git commit -am 'Añadir nueva función').
4. Sube tus cambios a tu rama (git push origin nueva-funcion).
5. Crea un Pull Request.