export const GuardarEnStorage = (clave, elemento) => {
    // conseguir los elementos que ya tenemos en el localStorage
    let elementos = JSON.parse(localStorage.getItem(clave));

    // Comprobar si es un array
    if(Array.isArray(elementos)){
      //Añadir dentro del array un elemento nuevo
      elementos.push(elemento);
    } else {
      //Crear un array con la nueva pelicula
      elementos = [elemento];
    }    

    // Guardar en el localStorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    // Devolver objeto
    return elemento;    
    
  }