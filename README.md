# Configuracion:

Crear en la raiz un archivo bajo el nombre .env

A este .env agregarle estos dos valores:

DATABASE_URL = "postgresql://postgres:SantiagoMentasti10!@localhost:5432/proyects-admin?schema=public" (aqui obviamente difiere en cada caso, yo puse un ejemplo, pero la estructura seria la siguiente: "postgresql://{usuario postgresql}:{contraseña del usuario}@localhost:{puerto elegido para correr la base de datos}/proyects-admin?schema={schema elegido}")

PORT = 8080

Crear una base de datos en postgresql, mediante el uso de pgAdmin 4 para mayor facilidad, con el nombre de proyects-admin

correr: npm install

correr: npx prisma generate

correr: npx prisma migrate dev


los 3 comandos deben ser corridos en la raiz del proyecto.

Para iniciar el servidor correr este comando en la raiz del proyecto: npx ts-node src/app.ts

Tecnología utilizadas:

Prisma

Express.js

Typescript


# Documentación de la API

Esta es la documentación de la API. A continuación, se describen las rutas y las funcionalidades disponibles.

## Rutas de Proyectos

### Obtener todos los proyectos

- **Ruta**: `/proyectos`
- **Método**: GET
- **Descripción**: Obtiene una lista de todos los proyectos registrados.
- **Controlador**: `proyectosController.obtenerProyectos`

### Obtener un proyecto por ID

- **Ruta**: `/proyectos/:id`
- **Método**: GET
- **Descripción**: Obtiene un proyecto específico según su ID.
- **Controlador**: `proyectosController.obtenerProyectoPorId`

### Crear un nuevo proyecto

- **Ruta**: `/proyectos`
- **Método**: POST
- **Descripción**: Crea un nuevo proyecto con nombre y descripción proporcionados.
- **Controlador**: `proyectosController.crearProyecto`

### Agregar un colaborador a un proyecto

- **Ruta**: `/proyectos/:id/colaboradores`
- **Método**: POST
- **Descripción**: Agrega un colaborador a un proyecto existente.
- **Controlador**: `proyectosController.agregarColaborador`

### Actualizar un proyecto existente

- **Ruta**: `/proyectos/:id`
- **Método**: PUT
- **Descripción**: Actualiza la información de un proyecto existente, como nombre y descripción.
- **Controlador**: `proyectosController.actualizarProyecto`

### Eliminar un proyecto

- **Ruta**: `/proyectos/:id`
- **Método**: DELETE
- **Descripción**: Elimina un proyecto específico según su ID.
- **Controlador**: `proyectosController.eliminarProyecto`

## Rutas de Colaboradores

### Obtener colaboradores de un proyecto

- **Ruta**: `/proyectos/:proyectoId/colaboradores`
- **Método**: GET
- **Descripción**: Obtiene la lista de colaboradores de un proyecto específico.
- **Controlador**: `colaboradoresController.obtenerColaboradoresDeProyecto`


## Rutas de Tareas

### Obtener todas las tareas

- **Ruta**: `/tareas`
- **Método**: GET
- **Descripción**: Obtiene una lista de todas las tareas registradas.
- **Controlador**: `tareasController.obtenerTareas`

### Obtener tareas por ID de proyecto

- **Ruta**: `/tareas/:proyectoId`
- **Método**: GET
- **Descripción**: Obtiene todas las tareas asociadas a un proyecto específico según su ID.
- **Controlador**: `tareasController.obtenerTareasPorProyectoId`

### Crear una nueva tarea

- **Ruta**: `/tareas`
- **Método**: POST
- **Descripción**: Crea una nueva tarea con título y descripción proporcionados.
- **Controlador**: `tareasController.crearTarea`

### Actualizar una tarea existente

- **Ruta**: `/tareas/:id`
- **Método**: PUT
- **Descripción**: Actualiza la información de una tarea existente, como título y descripción.
- **Controlador**: `tareasController.actualizarTarea`

### Marcar una tarea como completa

- **Ruta**: `/tareas/completar/:id`
- **Método**: PUT
- **Descripción**: Cambia el estado de una tarea a "completa".
- **Controlador**: `tareasController.marcarTareaComoCompleta`

### Eliminar una tarea

- **Ruta**: `/tareas/:id`
- **Método**: DELETE
- **Descripción**: Elimina una tarea específica según su ID.
- **Controlador**: `tareasController.eliminarTarea`

## Ruta de Usuarios

### Obtener todos los usuarios

- **Ruta**: `/usuarios`
- **Método**: GET
- **Descripción**: Obtiene una lista de todos los usuarios registrados en el sistema.
- **Controlador**: `usuariosController.obtenerUsuarios`


