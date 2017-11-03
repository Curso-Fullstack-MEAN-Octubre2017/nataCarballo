

# Fullstack: MongoDB+Express+AngularJS+NodeJS

## MEAN-PetStore

Aplicación Demo parte del curso Fullstack-Mean. Empleada para gestionar las citas a una imaginaría clínica veterinaría.

Utilizaremos la pila MEAN para implementar la gestion de Clientes/Mascotas y dar de alta Citas en un Calendario.

## Instalación

```bash
git clone https://github.com/Curso-Fullstack-MEAN-Octubre2017/MEAN-PetStore.git
cd MEAN-PetStore
npm install
npm start

```

## Diagrama de Arquitectura 

![Arquitectura Mean](https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/master/public/image/image1.jpg)
## Modelo de datos

El principal objeto del modelo de negocio es:

- Cita, que teniendo una 
	-  fecha y hora de inicio y fin, estaría 
	-  relacionada con una sola mascota, que a su vez estaría 
		-  relacionada con un solo cliente.
    
![Modelo de Datos](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/MEAN-PetStore/master/public/images/modelo-datos.png)


## Diagrama Flujo Clientes-Mascotas

Diagrama de flujo que representa como se dan de alta Mascotas y Clientes en la aplicacion.

![Diagrama Flujo Clientes-Mascotas.png](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/MEAN-PetStore/master/public/images/Diagrama_Flujo_Clientes-Mascotas.png)


## Diagrama Flujo Calendario-Citas

Diagrama de flujo que representa como se dan de alta Citas en el calendario y horario de citas

![Diagrama Flujo Calendario-Citas.png](https://raw.githubusercontent.com/Curso-Fullstack-MEAN-Octubre2017/MEAN-PetStore/master/public/images/Diagrama_Flujo_Calendario-Citas.png)


## RESTfull Services API

| Método | URL | Body | Response |
|---|---|---|---|
| get | /customers/:id' | << vacio >> | res.json(customer) |
| get | /pets | << vacio >> | res.json(pets) |
| get | /customers/:id/pets | << vacio >> | es.json(pets) |
| get | /appointments | << vacio >> | res.json(appointments) |
| get | /appointments/:id | << vacio >> | res.json(appointments) |
| get | /appointments/:fromdate/:todate | << vacio >> | res.json(appointments) |
| get | /pets/:id | << vacio >> | res.sendStatus(200); |
| post | /customers | {JSON} | res.json(createcustomers); |
| post | /appointments | {JSON} | res.json(createappointment) |
| post | /pets | {JSON} | res.json(createpet) |
| put | /customers/:id' | {JSON} | res.json(updatedCustomer); |
| put | /appointments/:id | {JSON} | res.json(updatedappointment) |
| put | /pets/:id | {JSON} | res.json(updatedpet) |


Ficheros encargados de publicar estas 'routes':

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/master/routes/appointments.js

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/master/routes/customers.js

https://github.com/Curso-Fullstack-MEAN-Octubre2017/MEAN-PetStore/blob/master/routes/appointments.js


# Implementación


## SchemaparaMongoDB 

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/master/models/customer.js#L5

## Controlador Angular

  a. Componente.js:

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/master/public/app/customerDetails/customerDetails.Component.js#L12

  b. Componente.html:

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/master/public/app/customerDetails/customerDetails.html

  c. Configuración delMódulo: 

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/master/public/app/customerDetails/customerDetails.Component.js#L3

  d. Ficheros <script> incluidos en el index.html: 

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/master/public/index.html#L28

#  Memoría por días

## Oct 7 2017

- Empezamos clonando el proyecto de github.
- Instalar dependencias en Node. 
- Vemos que irá en cada carpeta y en cada archivo.
- Conexión con Mongo y prueba de routes de una vista /customers
- Solicitamos mongoose para conectarnos a la base de datos de mongoDB.

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/409ea269befc25b9af0b62e2073efb0f3464f555/app.js#L11

- Compruebo que aparece mongoose en package.json.
- Creo modelos (/models/customer.js y pets.js)

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/409ea269befc25b9af0b62e2073efb0f3464f555/models/customer.js#L8

- Creo ruta en public/app/app.config.js
- En public/index.html se crean las vistas

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/409ea269befc25b9af0b62e2073efb0f3464f555/public/index.html#L29

- En /routes/customers.js las rutas API RES:
- get(/customers) con find() (buscar todos los clientes)
- get(/customers/:id) con findById({id:req.params.id})(buscar uno en particular para mostrar detalles)
- post(/customers) con .save() (para dar de alta un nuevo cliente)
- put(/customers/:id) con el método .findByIdAndUpdate({id:req.params.id})(modificar un cliente ya existente)
- delete(/customers/:id) con el método.findByIdAndDelete({id:req.params.id})(no era necesario hacerlo)

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/409ea269befc25b9af0b62e2073efb0f3464f555/routes/customers.js#L6

## Oct 13 2017

- En /routes/pets.js realizo las rutas API RES, con pets. 

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/2dd86f6038f98e3c6adbb6a1bf04f4df05c4a009/routes/pets.js#L7

## Oct 16 2017

- En app.js añado las nuevas rutas de customers y pets

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/84082a0f2afc617a624c941773068b3b0d4f1ebb/app.js#L28

- En app.config.js indico los módulos que se van a llamar según la ruta q tenga el navegador.

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/84082a0f2afc617a624c941773068b3b0d4f1ebb/public/app/app.config.js#L14

- En app.module.js voy añadiendo los módulos a medida que los voy creando.

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/84082a0f2afc617a624c941773068b3b0d4f1ebb/public/app/app.module.js#L6

- En app/customerDetails/customerDetails.Components.js declaro el módulo “customerDetailsModule” indico el archivo html al que responde y creo el controlador
https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/84082a0f2afc617a624c941773068b3b0d4f1ebb/public/app/customerDetails/customerDetails.Component.js#L5

- En este controlador tengo diferentes funciones:
    - Una que responde al evento del botón insert() ,que está en ‘/app/customerDetails/customerDetails.html', y que añade un nuevo cliente haciento una petición al servidor http.post() y enviando los datos obtenidos en el html a "/api/customers/" 
    
https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/84082a0f2afc617a624c941773068b3b0d4f1ebb/public/app/customerDetails/customerDetails.Component.js#L29

    -- Otra función es update(), para modificar. 
    -- Y una sin llamada que es la de buscar el cliente por id, y buscar todas las mascotas que compartan el id del cliente. 
    
https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/84082a0f2afc617a624c941773068b3b0d4f1ebb/public/app/customerDetails/customerDetails.Component.js#L16

- En customerDetails.html muestro los detalles del cliente seleccionado mediante un click y se da la posibilidad mendiante botones de modificar o crear un nuevo cliente.

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/84082a0f2afc617a624c941773068b3b0d4f1ebb/public/app/customerDetails/customerDetails.Component.js#L16

- En app/customerList/customerList.Components.js declaro el módulo “customerListModule” indico el archivo html al que responde y creo el controlador.
    -- Este controlador lo que va a hacer es listar todos los clientes que tenemos en nuestra bbdd.
- Mediante un click el usuario selecciona un cliente que se abrirá mediante la búsqueda por id que se pasa como parámetro a la petición http que en controlador de customerDetails se hace al servidor. Este a su vez hará una consulta a la bbdd mediante la .get(/customers/:id)

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/84082a0f2afc617a624c941773068b3b0d4f1ebb/routes/customers.js#L19

## Oct 17 2017

- Creo modelo appointment.

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/fa54235d0e69bbbe092729e28480bccd0947d955/models/appointment.js#L5

- Realizo pruebas con el módulo Customers.
- Empiezo con el Controlador de pets. Para poder buscar todas las que comparten el mismo id customer, ver detalle de una seleccionada por el usuario y poder modificarla. Además de poder crear nuevas mascotas dentro de la pantalla detalle customers.

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/fa54235d0e69bbbe092729e28480bccd0947d955/public/app/petDetails/petDetails.Component.js#L12

- Añado nuevas rutas en el index.html

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/fa54235d0e69bbbe092729e28480bccd0947d955/public/app/petDetails/petDetails.Component.js#L12

- Y módulos en   app.module.js y en routes/pets.js hago el API RES de pets.

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/8cee46124a2f3414c2caacd9eea285245b07d1a5/routes/pets.js#L8

- Empleo lo mismo q en customers.

## Oct 18 2017

- Controlador de appointment, html y api res, siguiendo el modelo de customers y pets.
- Empezamos por listar todas las citas. luego búsqueda por id para mostrar los detalles.

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/3dc1bb58c7e832c7300f95b6088992af4a6859e5/routes/appointments.js#L10

- Luego hago la función para buscar por rango de fecha y así empezar el calendario

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/3dc1bb58c7e832c7300f95b6088992af4a6859e5/routes/appointments.js#L24


## Oct 19 2017

- Se instalan librerías moment y jquery, también materialize

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/1496c2daab2fb2c9eb4efb5ae6fbe54bf3ec2e80/public/index.html#L9

- En routes/appointments.js hago búsqueda por id y con el método populate lo enlazo con customers y así con pets.

## Oct 20 2017

- Empiezo con el GRID del calendario. 

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/3dc1bb58c7e832c7300f95b6088992af4a6859e5/routes/appointments.js#L49

## Oct 23 2017

- Controlador calendario y api res

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/2833244b21a4c518a3d76fbe02ad5c47bfaa7bb0/public/app/appointmentsCalendar/appointmentsCalendar.Component.js#L13

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/2833244b21a4c518a3d76fbe02ad5c47bfaa7bb0/routes/appointments.js#L24

## Oct 26 2017

- Horario, para ello en el controlador hago búsqueda de citas de ese día y las listo.

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/e2f7e82e3c747b5ab5119ab3f1c22a820e37bd09/public/app/appointmentDayList/appointmentDayList.Component.js#L25

- Y los pinto en pantalla.

## Oct 27 2017

- Hago servicios para limitar las consultas a la bbdd y validacion 

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/d3b1528d27047a3c91a9ffe484ab2355fee5755c/public/app/servicie/appointmentService.js#L1

## Oct 30 2017

- Comunicación entre componentes mediante eventos.

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/d3b1528d27047a3c91a9ffe484ab2355fee5755c/public/app/appointments/appointmentDetails/appointmentDetails.Component.js#L18

## Oct 31 2017

- Validaciones

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/d3b1528d27047a3c91a9ffe484ab2355fee5755c/public/app/validation/validators.js#L3

## Nov 2017

- Directivas

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/master/public/app/directives/directives.js



#Gestión de clientes y mascotas

## Lista Cliente

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/tree/master/public/app/customerList

![Modelo de Datos](https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/master/public/image/image4.png)



## Detalle Cliente con lista de sus mascotas

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/tree/master/public/app/customerDetails

![Modelo de Datos](https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/master/public/image/image7.png)



## Detalle mascota

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/tree/master/public/app/petDetails

![Modelo de Datos](https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/master/public/image/image6.png)



## Gestion de citas

# Calendario Citas

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/tree/master/public/app/appointmentsCalendar

![Modelo de Datos](https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/master/public/image/image5.png)



# Horarios y Detalles Citas

https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/tree/master/public/app/appointments

![Modelo de Datos](https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/master/public/image/image2.png)

![Modelo de Datos](https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/master/public/image/image3.png)

![Modelo de Datos](https://github.com/Curso-Fullstack-MEAN-Octubre2017/nataCarballo/blob/master/public/image/image8.png)
