Trabajo Practico de la Clase 3

Para levantar el servidor utilizar el siguiente comando en la terminal:
npm run dev

Se le cambio el favicon y el nombre de la paguina.
En este trabajo se creo una paguina de detalle de producto la cual es responsiva y podriamos escalarla utilizando una funcion map para extraer la informacion de la tienda y luego volcarla a la paguina de detalle de forma dinamica.

El comportamiento de los botones solo falta indicar la logica para continuar la paguina.

En el boton de 'Comprar' tiene una logica que cuando el Stock es igual a 0 se deshabilita el boton y cuando es distinto de 0 se habilita, conjunto a esto el comportamiento de cuando el stock es 1 a su lado dice 'unidad' y si el stock es mayor dice 'unidades'.

Se utiliza la libreria de Chakra Ui para darle estilo a la paguina sin necesidad de utilizar CSS.