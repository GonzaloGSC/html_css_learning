
# <span style="color: #FC8642; font-weight: bold;">HTML/CSS Learning</span>
Repositorio enfocado a almacenar el conocimiento adquirido durante diversos cursos de HTML y CSS.
# <span style="color: #FC8642; font-weight: bold;">Índice</span>
- [HTML/CSS Learning](#htmlcss-learning)
- [Índice](#índice)
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





<!--
# <span style="color: #FC8642; font-weight: bold;">TITULO</span>
## <span style="color: #D67238; font-weight: bold;">TITULO</span>
### <span style="color: #B05D2E; font-weight: bold;">TITULO</span>
[Volver al Índice 🔝](#índice)
-->
