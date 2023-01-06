
# <span style="color: #FC8642; font-weight: bold;">HTML/CSS Learning</span>
Repositorio enfocado a almacenar el conocimiento adquirido durante diversos cursos de HTML y CSS.
# <span style="color: #FC8642; font-weight: bold;">Índice</span>
- [HTML/CSS Learning](#htmlcss-learning)
- [Índice](#índice)
- [Útiles](#útiles)
- [Historia HTML](#historia-html)
- [Historia CSS](#historia-css)
- [Motores de navegadores](#motores-de-navegadores)
  - [Google Chrome: Blink](#google-chrome-blink)
  - [Microsoft Edge: EdgeHtml](#microsoft-edge-edgehtml)
  - [Safari: Webkit](#safari-webkit)
  - [Firefox: Gecko](#firefox-gecko)
- [Proceso de un motor de renderizado](#proceso-de-un-motor-de-renderizado)
- [Aspectos Técnicos](#aspectos-técnicos)
  - [DOM](#dom)
  - [CSSDOM](#cssdom)
- [Sobre HTML](#sobre-html)
  - [Etiquetas](#etiquetas)
    - [Básicos](#básicos)
    - [Layout](#layout)
    - [Textos](#textos)
    - [Formulario](#formulario)
    - [Enlaces](#enlaces)
    - [Imágenes y video](#imágenes-y-video)
    - [Listas](#listas)
    - [Tablas](#tablas)
- [Sobre CSS](#sobre-css)
  - [Selectores](#selectores)
    - [Selectores de elemento](#selectores-de-elemento)
    - [Selectores de clase](#selectores-de-clase)
    - [Selectores de ID](#selectores-de-id)
    - [Selectores de atributo](#selectores-de-atributo)
    - [Selectores de hijo](#selectores-de-hijo)
    - [Selectores de hermano](#selectores-de-hermano)
    - [Selectores de precedencia](#selectores-de-precedencia)
    - [Selectores de pseudoclases](#selectores-de-pseudoclases)
    - [Selectores de pseudoelementos](#selectores-de-pseudoelementos)
# <span style="color: #FC8642; font-weight: bold;">Útiles</span>
- Generador de Favicon: [Link](https://favicon.io/favicon-converter/).
- Documentación etiquetas HTML y mas: [Link](https://htmlreference.io/).
# <span style="color: #FC8642; font-weight: bold;">Historia HTML</span>
HTML (Hypertext Markup Language) es un lenguaje de marcado utilizado para estructurar y dar formato a contenido en la World Wide Web. HTML fue creado en el año 1990 por el físico y matemático británico Tim Berners-Lee, mientras trabajaba en el Centro Europeo de Investigación Nuclear (CERN).

Berners-Lee utilizó HTML para crear un sistema de hipertexto que permitiera a los científicos compartir documentos e información de manera sencilla a través de internet. Originalmente, HTML consistía en un conjunto muy pequeño de etiquetas, pero ha ido evolucionando a lo largo de los años para incluir una amplia variedad de elementos y atributos que permiten crear contenido más sofisticado y mejorar la experiencia del usuario.

Hoy en día, HTML es uno de los lenguajes más importantes y ampliamente utilizados en la World Wide Web y es esencial para la creación de páginas web y aplicaciones web. La última versión de HTML es HTML5, que fue publicada en octubre de 2014.

[Volver al Índice 🔝](#índice)
# <span style="color: #FC8642; font-weight: bold;">Historia CSS</span>
CSS (Cascading Style Sheets) es un lenguaje de estilo utilizado para describir la presentación de documentos escritos en HTML y XML. CSS fue creado en el año 1996 por el World Wide Web Consortium (W3C), una organización internacional que establece estándares para la World Wide Web.

El principal objetivo de CSS era separar la información de contenido de la información de presentación en las páginas web. Antes de CSS, la información de presentación se mezclaba con la información de contenido en las páginas web utilizando atributos de estilo en las etiquetas HTML. Esto hacía que las páginas web fueran difíciles de mantener y modificar y no permitía una gran flexibilidad en la presentación del contenido.

Con CSS, los diseñadores pueden crear estilos centralizados que se aplican a varias páginas web, lo que permite una mayor flexibilidad y facilita el mantenimiento de las páginas web. Actualmente, hay varias versiones de CSS disponibles, incluyendo CSS2 y CSS3. La última versión de CSS es CSS3, que fue publicada en diciembre de 2017.

[Volver al Índice 🔝](#índice)
# <span style="color: #FC8642; font-weight: bold;">Motores de navegadores</span>
## <span style="color: #D67238; font-weight: bold;">Google Chrome: Blink</span>
Blink es el motor de renderizado utilizado por Google Chrome y otros navegadores basados en Chromium. El motor de renderizado es el software encargado de interpretar el código HTML, CSS y JavaScript de una página web y de dibujar el contenido en la pantalla del usuario.

Blink fue creado en 2013 por Google como una bifurcación de WebKit, el motor de renderizado originalmente utilizado por Chrome. La principal razón de la creación de Blink fue permitir a Google tener mayor control y flexibilidad en el desarrollo del motor de renderizado y poder implementar cambios y mejoras más rápidamente.

Blink utiliza el lenguaje de programación C++ y está diseñado para ser rápido, eficiente y compatible con los estándares web. Además, Blink incluye una serie de características avanzadas como soporte para gráficos en 3D y la capacidad de reproducir audio y vídeo de alta calidad.

[Volver al Índice 🔝](#índice)
## <span style="color: #D67238; font-weight: bold;">Microsoft Edge: EdgeHtml</span>
EdgeHTML fue creado por Microsoft como una bifurcación de Trident, el motor de renderizado originalmente utilizado por Internet Explorer. La principal razón de la creación de EdgeHTML fue permitir a Microsoft tener mayor control y flexibilidad en el desarrollo del motor de renderizado y poder implementar cambios y mejoras más rápidamente.

EdgeHTML utiliza el lenguaje de programación C++ y está diseñado para ser rápido, eficiente y compatible con los estándares web. Además, EdgeHTML incluye una serie de características avanzadas como soporte para gráficos en 3D y la capacidad de reproducir audio y vídeo de alta calidad.

EdgeHTML es plenamente compatible con los motores de diseño de Blink y Webkit, utilizados por Google Chrome y Safari, respectivamente. Microsoft ha declarado que "cualquier diferencia de Blink-WebKit son bugs que estamos interesados de solucionar."

[Volver al Índice 🔝](#índice)
## <span style="color: #D67238; font-weight: bold;">Safari: Webkit</span>
WebKit es el motor de renderizado utilizado por Safari, el navegador web de Apple, y por otros navegadores como Google Chrome y Opera.

WebKit fue creado en el año 1998 por la empresa de software Trolltech como un motor de renderizado para aplicaciones gráficas. En el año 2005, Apple utilizó WebKit como base para el desarrollo de Safari y lo hizo un proyecto de código abierto. Desde entonces, WebKit ha sido utilizado por varios navegadores web y ha evolucionado para incluir una amplia variedad de características y mejoras.

WebKit utiliza el lenguaje de programación C++ y está diseñado para ser rápido, eficiente y compatible con los estándares web. Además, WebKit incluye una serie de características avanzadas como soporte para gráficos en 3D y la capacidad de reproducir audio y vídeo de alta calidad.

[Volver al Índice 🔝](#índice)
## <span style="color: #D67238; font-weight: bold;">Firefox: Gecko</span>
Gecko fue creado por Netscape en el año 1998. El objetivo principal de Gecko era proporcionar un motor de renderizado libre y de código abierto que pudiera utilizarse en cualquier aplicación o plataforma.

Gecko es un motor de renderizado libre escrito en C++. Actualmente su desarrollo es gestionado por la Fundación Mozilla y la Corporación Mozilla.

Gecko es una plataforma para aplicaciones multiplataforma, es decir: permite ejecutar aplicaciones sobre su motor que se sirvan de tecnologías como XUL, XBL, PNG, HTTP, POP3, SMTP, RDS, CSS virtualmente en cualquier sistema operativo.

Anteriormente Gecko fue conocido con los nombres Raptor y NGLayout.

Gecko utiliza el lenguaje de programación C++.

[Volver al Índice 🔝](#índice)
# <span style="color: #FC8642; font-weight: bold;">Proceso de un motor de renderizado</span>
1) El navegador recibe una solicitud del usuario para cargar una página web.
2) El navegador envía una solicitud de red al servidor web para obtener el contenido de la página.
3) El servidor web envía una respuesta al navegador con el contenido de la página, que normalmente incluye código HTML, CSS y JavaScript.
4) El motor de renderizado del navegador comienza a interpretar el código HTML para comprender la estructura del contenido de la página.
5) Mientras interpreta el código HTML, el motor de renderizado también descarga los archivos CSS y JavaScript necesarios para dar formato y añadir interactividad a la página.
6) Una vez que ha descargado y parseado todos los archivos necesarios, el motor de renderizado comienza a construir el árbol de renderizado de la página. El árbol de renderizado es una representación.

Otra forma de describir estos pasos, y de manema mas tecnica, seria:
1) Transforma los archivos a un árbol de objetos HTML o CSS, estos se denominan DOM (Document Object Model) y CSSDOM (Cascade Style Sheet Object Model), respectivamente. Cada nodo en el árbol es una representación de los elementos que contiene el archivo HTML o CSS.
2) Calcula el estilo correspondiente a cada nodo del DOM relacionado al CSSDOM.
3) Calcula las dimensiones de cada nodo y dónde va en la pantalla.
4) Pinta o renderiza los diferentes elementos como cajas o contenedores.
5) Agrupa todas las cajas en diferentes capas para convertirlas en una imagen que se renderiza en pantalla.

[Volver al Índice 🔝](#índice)
# <span style="color: #FC8642; font-weight: bold;">Aspectos Técnicos</span>
## <span style="color: #D67238; font-weight: bold;">DOM</span>
El DOM (Modelo de Objeto del Documento) es una interface de programación de aplicaciones (API) para documentos HTML y XML. El DOM proporciona una representación estructurada del contenido de una página web como un árbol de objetos, con cada elemento HTML o XML convirtiéndose en un nodo del árbol. Esto permite a los programas acceder y manipular el contenido y el formato de una página web de manera dinámica.

Por ejemplo, si quieres cambiar el contenido de un elemento HTML, puedes utilizar el DOM para acceder al elemento y modificar su contenido. Del mismo modo, si quieres cambiar el estilo de un elemento, puedes utilizar el DOM para acceder al elemento y modificar sus propiedades de estilo.

El DOM es un estándar de la World Wide Web Consortium (W3C) y es ampliamente utilizado en la creación de aplicaciones web y en la implementación de funcionalidades avanzadas en las páginas web.

[Volver al Índice 🔝](#índice)
## <span style="color: #D67238; font-weight: bold;">CSSDOM</span>
El CSSDOM (Modelo de Objeto de Hoja de Estilo en Cascada) es una parte del DOM (Modelo de Objeto del Documento) que se encarga de gestionar y manipular el estilo de los elementos de una página web. El CSSDOM permite a los programas acceder y modificar las propiedades de estilo de los elementos HTML o XML de una página web de manera dinámica.

Por ejemplo, si quieres cambiar el color de fondo de un elemento HTML, puedes utilizar el CSSDOM para acceder al elemento y modificar su propiedad de estilo "background-color". Del mismo modo, si quieres cambiar el tipo de letra de un elemento, puedes utilizar el CSSDOM para acceder al elemento y modificar su propiedad de estilo "font-family".

El CSSDOM es una parte importante del DOM y es ampliamente utilizado en la creación de aplicaciones web y en la implementación de funcionalidades avanzadas en las páginas web.

[Volver al Índice 🔝](#índice)
# <span style="color: #FC8642; font-weight: bold;">Sobre HTML</span>
## <span style="color: #D67238; font-weight: bold;">Etiquetas</span>
Para ver un mejor resumen de las etiquetas, visitar el siguiente [Link](https://htmlreference.io/).
### <span style="color: #B05D2E; font-weight: bold;">Básicos</span>
- html: Es la etiqueta principal de HTML y define el inicio y el final de un documento HTML.
- head: Contiene información meta sobre el documento, como el título y los enlaces a archivos CSS y JavaScript.
- title: Define el título de la página, que se muestra en la pestaña del navegador.
- body: Contiene el contenido visible de la página web.
- div: Es la etiqueta de división y se utiliza para dividir el contenido en secciones lógicas.
- main: Define el contenido principal de un documento.

[Volver al Índice 🔝](#índice)
### <span style="color: #B05D2E; font-weight: bold;">Layout</span>
- header: Define un encabezado para una sección o una página.
- nav: Define una sección de navegación.
- section: Define una sección temática en un documento.
- article: Define un artículo autónomo.
- aside: Define un contenido secundario relacionado con el contenido principal.
- footer: Define un pie de página para una sección o una página.

[Volver al Índice 🔝](#índice)
### <span style="color: #B05D2E; font-weight: bold;">Textos</span>
- h1-h6: Son etiquetas de encabezado que se utilizan para definir títulos y subtítulos.
- p: Es la etiqueta de párrafo y se utiliza para definir bloques de texto.
- span: Es la etiqueta de span y se utiliza para aplicar estilos a fragmentos de texto sin afectar a otros elementos.

[Volver al Índice 🔝](#índice)
### <span style="color: #B05D2E; font-weight: bold;">Formulario</span>
- form: Es la etiqueta de formulario y se utiliza para crear formularios para recoger datos del usuario.
- input: Es la etiqueta de entrada y se utiliza para crear distintos tipos de campos de entrada en un formulario, como campos de texto, botones, etc.
- label: Se utiliza para asociar una etiqueta o una descripción con un elemento de formulario.
- button: Se utiliza para crear botones en una página web. Los botones pueden utilizarse para realizar distintas acciones, como enviar formularios, resetear formularios, enlazar a otras páginas, etc.

[Volver al Índice 🔝](#índice)
### <span style="color: #B05D2E; font-weight: bold;">Enlaces</span>
- a: Es la etiqueta de enlace y se utiliza para crear enlaces a otras páginas o a recursos externos.

[Volver al Índice 🔝](#índice)
### <span style="color: #B05D2E; font-weight: bold;">Imágenes y video</span>
- img: Es la etiqueta de imagen y se utiliza para insertar imágenes en la página.
- figure: Define contenido autónomo, como imágenes o diagramas, junto con una leyenda.
- svg: es una etiqueta de HTML que se utiliza para insertar gráficos vectoriales en una página web. SVG (Scalable Vector Graphics) es un lenguaje de marcado para gráficos vectoriales en línea.
- iframe: Es una etiqueta de HTML que se utiliza para insertar una página web dentro de otra página web. El contenido de la página se muestra en un marco o frame dentro de la página principal.
- video: Es una etiqueta de HTML que se utiliza para insertar vídeos en una página web.

[Volver al Índice 🔝](#índice)
### <span style="color: #B05D2E; font-weight: bold;">Listas</span>
- li: Se utiliza para definir un elemento de lista en una lista ordenada o desordenada.
- ul: Define una lista desordenada.
- ol: se utiliza para definir una lista ordenada en una página web.

[Volver al Índice 🔝](#índice)
### <span style="color: #B05D2E; font-weight: bold;">Tablas</span>
- table: Define una tabla.
- tr: Define una fila en una tabla.
- td: Define una celda en una tabla.
- th: Define una celda de encabezado en una tabla.

[Volver al Índice 🔝](#índice)
# <span style="color: #FC8642; font-weight: bold;">Sobre CSS</span>
Para busqueda de colores y sus códigos, visitar el siguiente [Link](https://htmlcolorcodes.com/es/).
## <span style="color: #D67238; font-weight: bold;">Selectores</span>
Los selectores de CSS son herramientas que se utilizan para seleccionar elementos de una página web y aplicarles estilos. Hay varios tipos de selectores en CSS, cada uno con distintas características y usos, a continuación, algunos de ellos.

[Volver al Índice 🔝](#índice)
### <span style="color: #B05D2E; font-weight: bold;">Selectores de elemento</span>
Seleccionan elementos de HTML en función de su nombre de etiqueta. Por ejemplo, el selector p seleccionaría todos los elementos <p> de la página.
```css
p {
    color: black;
}
```
[Volver al Índice 🔝](#índice)
### <span style="color: #B05D2E; font-weight: bold;">Selectores de clase</span>
Seleccionan elementos de HTML en función de su atributo class. Por ejemplo, el selector .mi-clase seleccionaría todos los elementos que tengan la clase mi-clase.
```css
.mi-clase {
    color: black;
}
```
[Volver al Índice 🔝](#índice)
### <span style="color: #B05D2E; font-weight: bold;">Selectores de ID</span>
Seleccionan elementos de HTML en función de su atributo id. Por ejemplo, el selector #mi-id seleccionaría el elemento con el id mi-id.
```css
#mi-id {
    color: black;
}
```
[Volver al Índice 🔝](#índice)
### <span style="color: #B05D2E; font-weight: bold;">Selectores de atributo</span>
Seleccionan elementos de HTML en función de un atributo específico y su valor. Por ejemplo, el selector "a[href='https://ejemplo.com']" seleccionaría todos los enlaces que apuntan a la URL https://ejemplo.com.
```css
a[href='https://ejemplo.com'] {
    color: black;
}
```
[Volver al Índice 🔝](#índice)
### <span style="color: #B05D2E; font-weight: bold;">Selectores de hijo</span>
 Seleccionan elementos que son hijos directos de otro elemento. Por ejemplo, el selector ul > li seleccionaría todos los elementos "li" que estén directamente dentro de un elemento "ul".
```css
ul > li {
    color: black;
}
```
 [Volver al Índice 🔝](#índice)
### <span style="color: #B05D2E; font-weight: bold;">Selectores de hermano</span>
Seleccionan elementos que tienen el mismo padre y están uno después del otro. Por ejemplo, el selector h1 + p seleccionaría todos los elementos "p" que vienen inmediatamente después de un elemento "h1".
```css
h1 + p {
    color: black;
}
```
[Volver al Índice 🔝](#índice)
### <span style="color: #B05D2E; font-weight: bold;">Selectores de precedencia</span>
Seleccionan elementos en función de la precedencia de sus selectores. Por ejemplo, el selector div p seleccionaría todos los elementos "p" que estén dentro de un elemento "div", mientras que el selector div > p sólo seleccionaría los elementos "p" que sean hijos directos de un elemento "div".
```css
/* Para seleccionar todos los elementos "p" que estén dentro de un elemento "div" */
div p { 
    color: black;
}

/* Para seleccionar los elementos "p" que sean hijos directos de un elemento "div" */
div > p { 
    color: black;
}
```
[Volver al Índice 🔝](#índice)
### <span style="color: #B05D2E; font-weight: bold;">Selectores de pseudoclases</span>
Los selectores de pseudoclases son un tipo especial de selectores en CSS que permiten seleccionar elementos en función de su estado o posición en la página. Los selectores de pseudoclases empiezan con dos puntos (:) y se utilizan para seleccionar elementos que no tienen un atributo específico, sino que tienen un estado determinado.

Algunos ejemplos de selectores de pseudoclases son:

- :hover: Selecciona elementos cuando el usuario pasa el cursor por encima de ellos.
- :active: Selecciona elementos cuando el usuario los está pulsando.
- :focus: Selecciona elementos cuando tienen el foco (por ejemplo, cuando se está escribiendo en un campo de texto).
- :first-child: Selecciona el primer hijo de un elemento.
- :last-child: Selecciona el último hijo de un elemento.
- :nth-child(n): Selecciona el n-ésimo hijo de un elemento.
```css
#button_send{
    color: black;
}

#button_send:hover{
    color: blue;
}
```
[Volver al Índice 🔝](#índice)
### <span style="color: #B05D2E; font-weight: bold;">Selectores de pseudoelementos</span>
Los selectores de pseudoelementos son un tipo especial de selectores en CSS que permiten seleccionar y dar estilos a partes específicas de un elemento. Los selectores de pseudoelementos empiezan con dos puntos y dos guiones bajos (::) y se utilizan para seleccionar elementos que no tienen un atributo específico, sino que representan una parte determinada de un elemento.

Algunos ejemplos de selectores de pseudoelementos son:

- ::before: Selecciona el contenido que se inserta antes de un elemento.
- ::after: Selecciona el contenido que se inserta después de un elemento.
- ::first-letter: Selecciona la primera letra de un elemento.
- ::first-line: Selecciona la primera línea de un elemento.
- ::selection: Selecciona el texto que el usuario ha seleccionado.

Por ejemplo, para añadir una flecha al final de todos los enlaces de una página, se puede utilizar el selector de pseudoelemento ::after de la siguiente manera:
```css
a::after {
  content: " ▶";
}
```
[Volver al Índice 🔝](#índice)


<!--
# <span style="color: #FC8642; font-weight: bold;">TITULO</span>
## <span style="color: #D67238; font-weight: bold;">TITULO</span>
### <span style="color: #B05D2E; font-weight: bold;">TITULO</span>
[Volver al Índice 🔝](#índice)
-->
