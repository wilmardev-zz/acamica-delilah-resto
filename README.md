# Acamica Delilah Restó

Proyecto Blque 3, donde se hará un seguimiento clase a clase de todos los ejercicios
propuestos por Acámica con el fin de que sirva de repaso en cualquier momento del bloque.

## Comando útiles para git

### Los siguientes son comandos básicos para utilizar en tu proyecto:

#### Guardar y subir tus cambios al repositorio

- Conocer en que rama me encuentro

  ```
  git branch
  ```

- Conocer el estado de la rama (si hay cambios sin guardar)

  ```
  git status
  ```

- Guardar **todos** los cambios

  ```
  git add .
  ```

- Asociat un comentario sobre los cambios guardados recientemente

  ```bash
  git commit -m "<<mi comentario>>"
  ```

- Subir tus cambios al servidor de git

  ```bash
  git push origin "<<nombre_rama>>"
  ```

- Obterner cambios del servidor de git

  ```bash
  git pull origin "<<nombre_rama>>"
  ```

### Crear una nueva rama a partir de otra rama

- Clonar el repositorio

  ```bash
  git clone "<<nombre_repositorio>>"
  git clone https://github.com/wilmardev/acamica-delilah-resto
  ```

- Actualizar su repositorio

  ```
  git fetch origin
  ```

- Pasarme a cualquier rama

  ```bash
  git checkout "<<nombre_rama>>"
  git checkout development
  ```

- Crear una nueva rama
  ```bash
  git checkout -b feature/class-"numeroClase-nombreEstudiante"
  ```

## Comando basicos con npm

- Inicializar el proyecto:

  ```
  npm init
  ```

- instalar una dependencia

  ```bash
  npm install "nombre_libreria" --save
  ```

- Instalar una dependencia de desarrollo

  ```bash
  npm install "nombre_libreria" --save-dev
  ```

- Instalar una libreria de manera global

  ```bash
  npm install "nombre_libreria" -g
  ```

  - **Nota:** Si clonaste un proyecto debes de ejecutar el siguiente comando
    para obtener todas las depencias y este funcione correctamente:

    ```
    npm install
    ```

## Para ejecutar el nuestra aplicación (index.js)

```bash
  node src/classes/"nombreClase"/index.js
```
