# Portfolio en React

Este repositorio contiene un proyecto de portafolio personal desarrollado con React. El proyecto consta de varios componentes que se combinan para crear un sitio web de portafolio interactivo. A continuación, se presenta una descripción general de los componentes principales.
[Visite el sitio aqui.](https://www.nicolas-menendez.com/)


![Mi Portfolio](https://github.com/Nicko25/porfolio3d/blob/deployed/page.png)

## Componentes

### `App.jsx`

El componente `App` es el componente principal de la aplicación. Contiene la estructura general de la página, incluyendo componentes como `Hero`, `Who`, `Works`, y otros. También define estilos de fondo y utiliza `BrowserRouter` para la navegación en la aplicación.

### `Hero`

El componente `Hero` representa la sección de la página de inicio. Contiene una animación de fondo, un título, información sobre el desarrollador y una escena 3D generada con la biblioteca `@react-three/fiber`. También incluye un control de órbita y un icono de flecha para indicar la capacidad de arrastrar la escena.

### `Who`

El componente `Who` representa la sección de la página "Acerca de mí". Muestra información sobre cómo trabaja el desarrollador, sus enfoques y un botón para ver proyectos en este mismo usuario. Esta sección también contiene una animación de fondo y se integra con los componentes `MouseIconUp` y `MouseIconDown` que son iconos para facilitar la navegación.

### `Works`

El componente `Works` representa la sección de la página que muestra los trabajos del desarrollador. Permite a los usuarios seleccionar entre diferentes categorías de trabajos, como "Web Design," "Development," y "Automation." Dependiendo de la selección, se mostrará el contenido relevante. Este componente también contiene una animación de fondo y se integra con el componente `MouseIconUp` para la navegación.

### `WebDesign`

El componente `WebDesign` es parte de la sección de "Works" y es similar a lso componentes "Development" u "Automation", representa la categoría de "Diseño web". Muestra información sobre la importancia del diseño web y contiene una escena 3D generada con `@react-three/fiber` para dar una vista previa visual de los diseños web. También incluye una descripción detallada del enfoque de diseño web.

### Estilos

El proyecto utiliza la biblioteca `styled-components` para gestionar los estilos de los componentes. Se definen varios componentes `styled` que se utilizan para dar estilo a diferentes elementos de la página, como títulos, descripciones, imágenes y contenedores.

## Cómo Ejecutar la Aplicación

Para ejecutar la aplicación en su entorno local, siga estos pasos:

1. Asegúrese de tener Node.js instalado en su sistema.

2. Clone el repositorio de GitHub en su máquina:

   ```bash
   git clone https://github.com/tu-usuario/portfolio-react.git
