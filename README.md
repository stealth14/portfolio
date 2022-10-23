## Evaluación Frontend

Puede revisar el entregable directamente haciendo click en el siguiente enlace.

https://portfolio-stealth14.vercel.app

O si de sea puede ejecutarlo en su propio equipo.

1) Clonar este repositorio.
2) Abrir una terminal en el directorio del repositorio.
2) Ejecutar los siguientes comandos (se requiere tener instalados node y npm).

```bash
npm install
npm run dev
```

Hacer click en este enlace [http://localhost:3000](http://localhost:3000) .


## Evaluación Backend

La API se encuentra publicada en el siguiente enlace https://e03r16avmc.execute-api.us-east-1.amazonaws.com.

Repositorio: https://github.com/stealth14/ronny-cajas-portfolio-api.git

Puede consumir los endpoints desde postman o haciendo click en los siguientes enlaces:

## Ejercicio 1

#### Success
https://e03r16avmc.execute-api.us-east-1.amazonaws.com/users/84388700153047484344

#### Not found (Error 400)
https://e03r16avmc.execute-api.us-east-1.amazonaws.com/users/unknownuserid


# Ejercicio 2

#### Success
https://e03r16avmc.execute-api.us-east-1.amazonaws.com/users?position=admin

#### No results (Empty array)
https://e03r16avmc.execute-api.us-east-1.amazonaws.com/users?position=unknownposition





