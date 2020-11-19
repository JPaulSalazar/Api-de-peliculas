 Proyecto 2: AJAX y API's:

En este proyecto se implementará el uso de una api con AJAX.

 	En primer lugar es necesario ingresar en la página de la documentación de la api y generar una cuenta mediante la cual se enviará un ID único de usuario para usarlo en los links para fetch la api.

Seguidamente se creará un documento tipo HTML que incluya un div wrapper con un título h1, otro div en el que haya un form con un input que será la barra de búsqueda del usuario y un botón que validara el value ingresado en el input, luego otro div con un ul dentro y por último un div con un botón en él para cargar más.

A continuación, en el JAVASCRIPT se creará una función nombrada addMovie en donde se cumpliran varias fucionalidades:
Se llamará al ul mediante el id con getElementById y se igualara el ul con string vacío para que cada vez que se reinicie una busque la pagina este en blanco, luego con un for se recorrerá la cantidad de resultados para crear la cantidad de li con sus elementos necesarios para agregar la información pertinente para cada resultado, esto estará dentro de un fetch con un link que tendrá el parámetro i para jalar informacion extra y añadirla al elemento li mencionado anteriormente, dentro del mismo se hará un componente acordeón que compara los estilos de un div para ponerlo none o display según corresponda.

Más adelante se declarara una constante que jala el botón para cargar más y se usa en una función en la que se incluirá la mejora de cargar más páginas, que se llama more: en donde mediante un evento tipo click que contiene un contador que se va sumando por cada click y luego tiene un fetch que utiliza el parámetro s que lleva dentro el valor ingresado por el usuario en el input y el parámetro page en que se colocará el contador para saber en que pagina estamos, a partir de la página 2 cuando se ejecuta el evento click se empieza a regir este fetch y mete el valor data.Search en la funcion addMovie.

	En última instancia se llamará al el form desde el HTML para utilizar el input y extraer el value ingresado por el usuario y en el fetch principal que usa el parámetros incluir dicho valor, para finalizar el enunciado de dicha función se envían dos valores uno en la función addMovie para la primera página y otro para la función more en el que se incluye el value del input ingresado por el usuario para las próximas páginas a partir de la página 2.
