

# Enlazando mi proyecto con GitHub: 
  
Angel Remote Repo link : https://github.com/angelpb0904/js-curso-12-5b.git


## TODO-LIST: 
  *  [x] Crear cuenta de GitHub
  *  [x] Crear un reporsorio en GitHub - Nombre del repo = js.curso-12-5to b
  *  [x] Cambiar el nombre de mi rama local master -> main. 
  *  [x] Agregar cambios a la zona de preparacion en el comando **git add  .**
  *  [x] Confirmar los cambios con coamando **git commit -am  "Primer commit remoto"**
  *  [x] Agregar mi reporsorio remot a mi reporsorio local usando **git remote add origin url_remote**
  *  [x] Subir mis cambios al remoto usando **git push origin main**
  *  [x] Comprobar que mi remoto tenga los ultimos cambios agregados. 



## Temas puntuales:

### Lab 8.1 Instalaciones de paquetes.  
 * [X]  Instalar paquetes de codigo con NPM.
   * [X] Istarlar **yargs** con el comando ```npm install yargs``` 
   * [X] Agregar archivo **.gitignore**.
   * [X] Editar archivo **.gitignore** para ignorar la carpeta **node_modules**
   * [X] Editar archivo **.gitignore** para ignorar la carpeta **package-lock.json**
   * [X] Instalar **colors** con el comando ```npm i colors``` cambio install por i.
   * [X] Confirmar mi **package.json** tenga las dependencias de **yargs** y **colors**.
   * [X] Usar comando **git add .** para preparar los cambios.
   * [X] Usar comando **git commit -am "Instalar paquetes Yargs y Colors"**
   * [X] Usar comando **git push** para subir mis cambios al remoto.


### Lab 8.2 Creacion Organizacion de Proyecto
  * [X] Crear el archivo **node-CLI/app.js**
      * [X] Hacemos **git add .**
      * [X] Hacemos **git commit -am "Crea app.js"**
      * [X] Hacemos **git push**
  * [X] Crear directorio **node-CLI/tools** con
      * [X] Crear **node-CLI/tools/index.js**
      * [X] Crear **node-CLI/tools/argvs.js**
      * [X] Crear **node-CLI/tools/files.js**
      * [X] Crear **node-CLI/tools/options.js**
      * [X] Crear **node-CLI/tools/task.js**
  * [X] Crear directorio **node-CLI/db** con
      * [X] Crear **node-CLI/db/taks.json**
      * [X] Hacemos **git add .**
      * [X] Hacemos **git commit -am "Crea tools settings"**
      * [X] Hacemos **git push**
   

### Lab 8.3 Trabajando con ficheros en Node
  * [X] Empezamos a trabajar con **file.js**
      * [X] Importamos paquetes **path** y **Colors**
  * [X] Usamos paquetes importados en nuestro codigo con la funcion **loadTask()**
      * [X] Exportamos nuestra funcion **loadTask()**
      * [X] Pruebas de loadTask
      * [X] Hacemos **git add .**
      * [X] Hacemos **git commit -am "Crea funcion loadTask()"**
      * [X] Hacemos **git push**
  * [X] Usamos paquetes importados en nuestro codigo con la funcion **saveTask()**
      * [X] Exportamos nuestra funcion **saveTask()**
      * [X] Pruebas de saveTask
      * [X] Hacemos **git add .**
      * [X] Hacemos **git commit -am "Crea una funcion"**
      * [X] Hacemos **git push**



### Lab 8.4 Trabajando con opciones de Yargs
  * [X] Empezamos a trabajar con  **options.js** 
    * [X] Creamos los objetos para nuestros comandos:
          * description
          * title
          * completed 
          * erased 
    * [X] Creamos los opciones para nuestros comandos:
          * opcionsCreate
          * opcionsUpdate
          * opcionsErase
    * [X] Exportamos nuestras opciones
    * [X] Hacemos **git add .**
    * [X] Hacemos **git commit -am "Configura argvs con opciones para los comandos"**
    * [X] Hacemos **git push**
    

### Lab 8.5 Trabajamos en funciones para los tasks o tareas.
* [X] Empezamos a trabajar con **tasks.js**
  * [X] Creamos funciones para trabajar los tasks: 
          * createTask 
          * updateTask 
          * eraseTask
  * [X] Exportamos nuestras funciones.
  * [X] Hacemos **git add .**
  * [X] Hacemos **git commit -am "Configura arvgs con opciones para los comandos"**
  * [X] Hacemos **git push**

     

### Lab 8.6 Trabajamos con la configuracion de Yargs.       
* [X] Empezamos a trabajar con el fichero **argvs.js**
  * [X] Agregando los comandos que usara Yargs
  * [X] Exporto el objeto ```argv``` para nuestro proyecto.
* [X] Empezamos a trabajar con ```index.js```
  * [X] Importamos y exportamos nuestras herramientas.
* [X] Hacemos **git add .**
* [X] Hacemos **git commit -am "Exportar tools components"**
* [X] Hacemos **git push**


### Lab 8.7 Trabajamos con nuestra aplicacion principal.
* [X] Empezamos a trabajar con el fichero **app.js**
* [X] Importamos las herramientas ```tasks argv``` y el paquete ```colors```
  * [X] Usamos estructura ```switch```
    * [X] Filtramos los comandos ```create update delete```
* [X] Hacemos **git add .**
* [X] Hacemos **git commit -am "Finaliza proyecto-pruebas de funcionamiento"**
* [X] Hacemos **git push**