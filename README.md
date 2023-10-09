# proyects-admin-backend
backend de proyects-admin. 

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
