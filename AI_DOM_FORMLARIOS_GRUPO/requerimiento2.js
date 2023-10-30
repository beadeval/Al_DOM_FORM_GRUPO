//Creamos una función donde se valide el formulario, con distintas condiciones:
function validacion() {
    //Validación de campos de texto (todos los campos completos). En el caso de que algún campo "texto"
    //esté incompleto, se arrojará un "evento alert" donde se indique el error.
    console.log("Validando los datos del formulario...")
   
    if (document.getElementById("nombre").value === "" ||
        document.getElementById("direccion").value === "" ||
        document.getElementById("telefono").value === "" ||
        document.getElementById("email").value === "") {
        
        alert('[ERROR] Todos los campos de texto deben estar rellenos');
        return false;
    }
    
    //Validando radio button (al menos un tamaño elegido) En el caso de que no se haya seleccionado
    //ningún radio button, se arrojará un "evento alert" donde se indique el error. Se selecciona el primer
    //radio button seleccionado, en el caso de que no esté ninguno seleccionado, será null y lanzará el mensaje.
    tamano = document.querySelector('input[name="tamano"]:checked');

    if (!tamano) {
        alert('[ERROR] Debe seleccionar un tamaño');
        return false;
    }

    //Validando checkbox (al menos un ingrediente). En el caso de que no se haya seleccionado ningún 
    //checkbox, se arrojará un "evento alert" donde se indique el error.Se selecciona el primer
    //checkbox seleccionado, en el caso de que no esté ninguno seleccionado, será null y lanzará el mensaje.
    quesos = document.querySelector('input[name="quesos"]:checked');

    if (!quesos) {
        alert('[ERROR] Debe seleccionar al menos un ingrediente');
        return false;
    }


    //En el caso de que el formulario sea válido (y SOLO si lo es), se procederá a llamar a la función calcularprecio()
    //que se comentará más adelantes

    calcularPrecio();

 } 

    
//Creamos una función para calcular el precio del pedido que será llamada si la función de validacion()
//retorna true
    function  calcularPrecio(){
    //Declaramos ambas variables. Se selecciona un elemento input cuyos atributos name sean 'tamano y 'quesos'
    //previamente seleccionados por el usuario y busca entre los que han salido seleccionados
      let tamano = document.querySelector('input[name="tamano"]:checked');
      let ingredientes = document.querySelectorAll('input[name="quesos"]:checked');

     //Inicializasmos la variable precioTamano a 0 que más tarde tomará valores
      let precioTamano = 0;
      
      //Cogiendo la variable "tamano", calcularemos el precio en función del valor del radio
      //button seleccionado
        if (tamano) {
           
            if (tamano.value === "pequena") {
                precioTamano = 5;
            } else if (tamano.value === "mediana") {
                precioTamano = 10;
            } else if (tamano.value === "grande") {
                precioTamano = 15;
            }
        }

        //Inicializamos la variable precioIngredientes a 0 que más tarde tomará valores
        let precioIngredientes = 0;

        //A través de un bucle 'for' recorremos los elementos con name= ingredientes para poder contar
        //cuántos elementos del checkbox se han marcado y así sumarlos al precio final, teniendo en cuenta que el valor
        //de cada ingrediente es '1'.
        for (let i = 0; i < ingredientes.length; i++) {
            precioIngredientes += 1;
        }

        //Declaramos la variable precioTotal que será la suma de las dos anteriores
         let precioTotal = precioTamano + precioIngredientes;

        //Actualizamos el contenido de elemento con id=precioTotal del form 
         document.getElementById("precioTotal").textContent = `Precio Total: ${precioTotal}€`;
            
    }
