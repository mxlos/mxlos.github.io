# Sitio oficial de Mexicali Open Source

[Mexicali Open Source](http://mxlos.org) es una comunidad que promueve el uso de tecnologías de código libre en la ciudad de Mexicali, BC México.


#### Requerimientos

Para poder correr el proyecto en tu máquina local o servidor, es necesario tener previamente instalados algunos componentes:

- Ruby 1.9.*
- RubyGems 1.8+
- Jekyll 2.3.* (gema de ruby )

### Instalación de Componentes

1. Ruby: revisar documentación oficial en [su sitio web](https://www.ruby-lang.org/).
2. GemFile: revisar documentación oficial en [su sitio web](http://rubygems.org/).
3. Jekyll: correr el comando `gem install jekyll`.


## Correr el Proyecto

Para correr el proyecto solo hace falta posicionarse dentro de la carpeta principal del mismo y ejecturar el comando `jekyll serve`, una vez hecho eso podremos ver que nos genera una dirección IP (usualmente `http://0.0.0.0:4000`) a la cual podemos acceder para visitar el sitio generado.

Si deseamos que Jekyll actualice los cambios en tiempo real sin necesidad de tener que re-generar el sitio corremos el servidor agregando el parámetro `--watch` quedando entonces de la siguiente forma: `jekyll serve --watch`.


## Contribuye

Si consideras que puedes mejorar el proyecto, agregarle valor con nuevas funcionalidades o simplemente has encontrado un error y deseas corregirlo, siéntete libre de proponer tus cambios. Para hacerlo solo debes seguir unos pasos:

1. Haz un *fork* de este proyecto.
2. Reliza los cambios que consideres pertinentes.
3. Haz el clásico *pull-request* con los comentarios apropiados para identificar tu aporte y subirlo al proyecto principal.


### Autores

- [Tonny](http://tonny.org)


### Por hacer

Cosas por hacer para implementar en el website.

- [ ] Implementar galerías en eventos