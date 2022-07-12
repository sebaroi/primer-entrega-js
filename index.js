

   const montoCafe = 200 
   const montoCapuchino = 270
   const montoCortado = 220
   const montoLagrima = 220
   const montoChocolate = 350

   let nombre = prompt("Ingrese su nombre:")
   let elegir = Number(prompt(nombre +  "  Elija la opcion que desea tomar(Ingresando el numero): 1-CAFE / 2-CAPUCHINO / 3-CORTADO / 4-CHOCOLATE CALIENTE / 5-SALIR "))

switch (elegir)
{
   case 1:
      {
         alert (`el precio del cafe es de ${montoCafe}`)
         montoEscrito = Number (prompt("Ingrese el monto de la infusion selecionada"))
         while (montoEscrito < montoCafe)
         {
               alert (`El monto del dinero es insuficiente, le falta abonar $${montoCafe-montoEscrito}`)
               montoEscrito = Number (prompt("Ingrese el monto de la infusion selecionada"))
         }
      
         if (montoEscrito > montoCafe ) 
         {
            alert (`${nombre} Su vuelto es $${montoEscrito - montoCafe}`) 
         }
         
         alert(`${nombre} "Gracias por su compra" ¡PRECAUCION ESTA MUY CALIENTE!`)
         
         elegir = Number(prompt(nombre +  " Elija la opcion que desea tomar(Ingresando el numero): 1-CAFE / 2-CAPUCHINO / 3-CORTADO / 4-CHOCOLATE CALIENTE / 5-SALIR "))
      }
   break      

   case 2:
      {
         alert (`el precio del capuchino es de ${montoCapuchino}`)
         montoEscrito = Number (prompt("Ingrese el monto de la infusion selecionada"))
         while (montoEscrito < montoCapuchino)
         {
         alert (`El monto del dinero es insuficiente, le falta abonar $${montoCapuchino-montoEscrito}`)
         montoEscrito = Number (prompt("Ingrese el monto de la infusion selecionada"))
         }

         if (montoEscrito > montoCapuchino ) {
            alert (`${nombre} Su vuelto es $${montoEscrito - montoCapuchino}`) 
         }
         
         alert(`${nombre} "Gracias por su compra" ¡PRECAUCION ESTA MUY CALIENTE!`)
         
         elegir = Number (prompt(nombre + "Elija la opcion que desea tomar (Ingresando el numero): 1-CAFE / 2-CAPUCHINO / 3-CORTADO / 4-CHOCOLATE CALIENTE / 5-SALIR "))
         eleccion()
      }
   break  

   case 3:
      {
         alert (`el precio del cortado es de ${montoCortado}`)
         montoEscrito = Number (prompt("Ingrese el monto de la bebida selecionada"))
         while (montoEscrito < montoCortado)
         {
            alert (`El monto del dinero es insuficiente, le falta abonar $${montoCortado-montoEscrito}`)
            montoEscrito = Number (prompt("Ingrese el monto de la bebida selecionada"))
         }

         if (montoEscrito > montoCortado ) {
            alert (`${nombre} Su vuelto es $${montoEscrito - montoCortado}`) 
         }
         
         alert(`${nombre} "Gracias por su compra" ¡PRECAUCION ESTA MUY CALIENTE!`)
         
         elegir = Number(prompt(nombre + "Elija la opcion que desea tomar(Ingresando el numero): 1-CAFE / 2-CAPUCHINO / 3-CORTADO / 4-CHOCOLATE CALIENTE / 5-SALIR "))
         eleccion()
      }
   break

   case 4:
      {
         alert (`el precio del chocolate es de ${montoChocolate}`)
         montoEscrito = Number (prompt("Ingrese el monto de la bebida selecionada"))
         while (montoEscrito < montoChocolate)
         {
            alert (`El monto del dinero es insuficiente, le falta abonar $${montoBebida-montoEscrito}`)
            montoEscrito = Number (prompt("Ingrese el monto de la bebida selecionada"))
         }

         if (montoEscrito > montoChocolate) {
            alert (`${nombre} Su vuelto es $${montoEscrito - montoChocolate}`) 
         }
         
         alert(`${nombre} "Gracias por su compra" ¡PRECAUCION ESTA MUY CALIENTE!`)
         
         elegir = Number(prompt(nombre + "Elija la opcion que desea tomar(Ingresando el numero): 1-CAFE / 2-CAPUCHINO / 3-CORTADO / 4-CHOCOLATE CALIENTE / 5-SALIR "))
         eleccion()
      }
   break

   case 5:      
   {

   }
   break
}
