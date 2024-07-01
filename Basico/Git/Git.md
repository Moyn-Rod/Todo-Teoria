# Controlador De Versiones


***Version Control System (VSC)***

- un sistema de control de versiones o un controlador de versiones, nos permite guardar las distintas versiones de nuestro proyecto o repositorio que se van creando a travez del tiempo.Asi vamos a poder ingresar a cualquiera de ellas en caso de que se presente algun error o bug. 

- Tbm nos permite trabajar de manera organizada, ya que cada programador va a trabajar su propia version y despues se van a fusionar en una sola rama (hacer merge).


# Distintos Controladores de Versiones    
- Locales
    - Es un Repositorio en nuestra computadora.
    - Se trabaja con recursos locales.
    - Es un problema trabajar con otras personas,
    - Pueden generar fallas copiando distintpos archivos.

- centralizados
    - Es un Repositorio Remoto en donde todos los cambios se suben al mismo.
    - Cada cambio se sube a el mismo repositorio remoto.
    - Para trabajar en el mismo se debe descargar. 
    - Si se cae el servidor remoto nadie puede seguir trabajando. 
    - Para descargarlo se debe tener el permiso del administrador.

- Distribuidos 
    - Cada programador posee una version completa y descarga el repositorio global y lo trabaja de forma local, es decir, con recursos locales.
    - Si Se Cae cada programador posee una copia del mismo.

- Algunos otros controladores de versiones 

    - Para Python, C, C#, C++, java

        - mercurial :
            - Distribuido codigo abierto.
        
        - Subversion:
            - Centralizado.
            - Se utiliza para control de versiones robustos.

        - Apache Subversion:
            - Centralizado.

        - Perforce:
            - Centralizado.
            - Empresas de videojuegos lo utilizan.
            - Maneja grandes volumenes de datos.

        - Bazzar:
            - Distribuido.

        - Fossil:
            - Distribuido.

# Git y GitHub

- Git

    - Git es un controlador de versiones que nos permite trabajar de manera distribuida.
    - Almacena las distintas versiones de nuestros repos y nos permite ingresar a cualquiera de ellas.

- GitHub.
    
    - Basicamente  Nos permite alojar o almacenar nuestros repositorios.
    - Nos permite la colaboracion entre distintos programadores.
    - issues(problemas)
    - pull request(extracciones)

# Crear repositorio en github

**Primera Forma**

- Creo el repositorio en github.
- Realizo el git clone URL para clonarlo en mi repositorio local.
- Realizo git init  para iniciar el repositorio.
- git commit -m "nombre del commit". para guardar los archivos.
- git push para pushear los cambios.

**Segunda Forma(inicio el repositorio de forma local desde cero)**

- Git init para iniciar el repositorio.
- git add. para agregar los archivos al stagind area.
- git remote add origin URL para añadir el repositorio remoto a donde vamos a realizar el push.
- git breach -M main : cambio el nombre de mi rama a main (fuerzo el cambio por eso -M) 
- git commit -m "Nombre del commit" para guardar los cambios.
- git push URL main -u para pushear los cambios y los futuros cambios a la rama main.

**Tercera Forma (cuando ya tengo un repositorio local existente)**
- git remote add origin URL para añadir el repositorio remoto a mi repo local.
- git add . para agregar los archivos a la stagin area.
- git breach -M main para cambiar el nombre de mi rama  a main
- git commit -m "nombre del commit" para guardar los cambios en git.
- git push URL main -u para indicarle que los cambios se guarden en mi rama main. 


# En caso de Problemas con sistema Operativo 

- Linux y window poseen distinto formato de salto de linea.

    - Window:CRFL
            - Este es mas pesado que linux.
    - Linux: FL

- Cuando Instalamos Git nos da la opcion de elegir. 

    - Checkout Windows-Style, commit Unix-style:

        - Permite transformar los saltos de linea de LF A CRLF Cuando copiamos el repo de gita nuestro ordenador.

        - Y Cuando los envia los transforma a FL.

- Checkout as is, commit Unix-style:

    - Los transforma a FL cuando los envia 

    - Los descarga de forma FL

    - Si trabajamos con window es la opcion 1, si no es la 2 

**Para Saber como esta la configuracion**

-  git config --global core.autocrlf
        - true: esta para window
        - input: esta para linux

- Agregamos un archivo en la raiz 

    - .gitattributes:
         - *text=auto  : tenemos esta  configuracion de CRFL A LF y LF A LF.


# Estados 

- Los archivos viven en 3 tipos de estados


    - Modified: cuando modifique los archivos y todavia no hice commit, no lo guarde en mi disco local.

    - staged: Cuando ya realice el git add . ya estan preparados para guardarlos en mi disco local (staged area).

    - commited: Ya los guarde de forma  permanente en mi dico local.

**Ciclo de vida de los archivos**

- Unstraked: 
    - Cuando cree los archivos y todavia git no tiene idea de que existen.
    - Nunca lo mandamos a stagin area. 
    - Cuando modificamos los archivos y no lo mandamos a la staging area.

- Unstaged:
    - Cuando git sabe de la existencia de los archivos pero estos fueron modificados.
    - Todavia no se agregaron estos cambios a la stagin area.

- Unstraked:
    - Aqui ya hicimos el git add .
    - Git ya sabe de la existencia de estos archivos.
    - Estan en la stagin area(area de preparación). 

- Traked:
    - Ya se guardaron los cambios o los archivos nuevos de forma permante.
    - Ya se hizo el commit.

# Comandos de git.

- Git remote add 

- Git add `nombre de archivo` o git add . (agrega todos los cambios directamente) :
    - Envia los archivos al stagin area.
    
- git commit -m `Nombre del commit` :
    - Guarda los archivos de forma permante.

- git reset HEAD :
    - Mueve los archivos de la stagin area a unstaged es decir a antes de que git sepa de su existencia.

- Git reset HEAD  <nombre_del_archivo( debe ser el nombre completo con la direccion completa)>:
    - Muevo un unico archivo del area de preparacion (stagin area) a un estado anterior.

- Git reset --soft <Nombre_del_commit( el hash)>: 
    - Vuelvo a un commit anterior.
    - Los cambios en el commit actual vuelven a la stagin area. (es decir en git  add .).
    - No Modifica lo que ya estaba en  la stagind area
    - No cambia el directorio de trabajo.

- git reset mixed<Nombre_del_commit( el hash):
    - Vuelvo a un comit especifico.
    - Lo que se encuentre en el area de preparación se elimina
    - lo que posea los commits posteriores vuelve al area de trabajo. 

- git reset --hard <Nombre_del_commit( el hash):
    - vuelve Definitivamente al commit anterior.
    - Se elimina todo lo que estaba  en el area de preparación.
    - lo que estaba  en el directorio de trabajo tbm.

- git log:
    - Muesta la lista de commit completa 

- git log --oneline:
    - Muestra de manera abreviada el hash y el comentario del commit.

- git log --author=<nombre_del_autor>:
    - Muestra los commits de dicho author.

- git log --since=<fecha>:
    - Muestra los commit hechos despues de una fecha.

- git log --until<fecha>:
    - Muestra los commit antes de una fecha.

- git status: 
    - muestra la informacions de los archivos en la staging area.

- git status -s:
    - Muestra directamente la lista de los archivos.
        -M:modificados.
        - Eliminados.
        - Creados.


- git show:
    - Muesta la información de un comit especifico.

- git show <nombre_de_una_rama>:
    - Muestra información de una rama.

- git show <hash_de_un_commit><nombre_de_un_Archivo>:
    - Muestra informacion de un archivo unico de un commit.

- git diff 

    - Diferencias entre el area de trabajo y la stagin area.

- git diff<hash1> <hash2>:
    - Muestra diferencia de 2 commit.

- git diff <rama1> <rama2>:
    - Diferencias entre 2 ramas.

- git diff --staged:
    - Diferencias entre el area de preparación y el ultimo commit.

- git diff <nombre_De_un_archivo>:
    - diferencia de un archivo especifico en el directorio de trabajo y la stagind area.

- git diff --name-only

    - Muestra las diferencias de los archivos que cambiaron algo entre el ultimo commit y el area de trabajo. 

- git push:
    - Pusheo los cambios al repositorio.

- git pull:
    - Traigo los cambios del repositorio.

- git rm <nombre_del_Archivo>:
    - Elimina un archivo del area de trabajo 
    - Lo prepara para ser eliminado en el proximo commit.

- git rm -r <nombre_directorio>:
    - Elimina permanente un directorio completo.

- git rm --dry-run:
    - Simula la eliminacion para ver que efecto tendra.


**Ramas**

- git branch:
    - Muestra el nombre de cada una de las ramas.

- git branch <nombre_De_la_rama>:
    - Crea y nos mueve hacia esa rama.

-git branch -d <nombre_De_la_Rama>:
    - Para eliminar una rama.
    - Debo estar parado en otra misma rama. 
    - Si una rama no se a fusionado nunca se debera forzar la eliminacion con -D.

- git chekout <nombre_de_la_rama>:
    - Nos movemos a una rama especifica.

- git merge <nombre_De_la_Rama_a_fusionar>:
    - Es necesario moverse a la main siempre.
    - cuando fusiones una rama a otra los commits de ambas ramas no se alteran.

# Sintaxis de un commit 

- < type >(breve descripcion)[area o contexto]< descripcion >.
    - fix:
        - Cuando arreglamos un bug.
    - feat:
        - Le agregamos una nueva funcionalidad o una nueva caracteristica.

    - breaking change: 
        - subimos a una version mayor.

    - build:
        - cambio de dependencias o compilacion.

    - ci: 
        - cuando cambiamos los scripts.
    - doc:
        - Cuando cambiamos la documentación.
    - style:
        - Cuando cambiamos estilos.
    - chore:
        - Realice cambios menores que no molesta en nada ni modifica nada.

**Hash**


# Versiones:


- Las versiones nos muestan los cambios que se le van realizando a una app.
- existen distintos niveles de versioens 
    - Supongamos un 2.0.0

        - 2(mayor):
            - Indica la parte mayor de una versiones 
            -  Si se realiza un cambio importante que no permite compatibilidad con una version anterior.
            - caracteristicas nuevas o cambios estructurales importantes.

        - 2.1.0(menor):
            - Se realizan cambios en ciertas dependencias o caracteristicas pero continuca siendo compatible con la version anterior.  
            - una mejora o una nueva funcionalidad

        - 2.1.1(parche):
            - Cuando se corrigen errores.
            - pequeñas mejoras.
            - Se corrigen bugs.
        







