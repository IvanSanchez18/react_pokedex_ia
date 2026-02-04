# React Pokédex IA

Una aplicación de Pokédex moderna construida con React 19 y Vite, diseñada para explorar el mundo Pokémon de manera interactiva. Este proyecto utiliza la [PokéAPI](https://pokeapi.co/) para obtener datos en tiempo real.

## 🚀 Características

- **Exploración de Pokémon:** Lista completa de Pokémon con detalles básicos.
- **Búsqueda Dinámica:** Filtra Pokémon por nombre o tipo directamente desde la barra de navegación.
- **Filtrado por Generación:** Explora Pokémon específicos de las primeras generaciones.
- **Diseño Responsivo:** Interfaz moderna y adaptable utilizando React Bootstrap.
- **Servicios:** Consumo eficiente de API mediante servicios dedicados.

## 🛠️ Tecnologías Utilizadas

- **Core:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **Estilos:** [Bootstrap 5](https://getbootstrap.com/) y [React Bootstrap](https://react-bootstrap.github.io/)
- **Iconos:** [Bootstrap Icons](https://icons.getbootstrap.com/)
- **API:** [PokéAPI](https://pokeapi.co/)

## 📦 Instalación y Configuración Local

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd react_pokedex_ia
```

### 2. Instalar dependencias

Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego ejecuta:

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

Para ejecutar la aplicación en modo desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

### 4. Construir para producción

Si deseas generar los archivos para despliegue:

```bash
npm run build
```

## 📂 Estructura del Proyecto

- `src/components`: Componentes reutilizables como la tarjeta de Pokémon.
- `src/pages`: Páginas principales de la aplicación (Home, Page1, Page2).
- `src/services`: Lógica para el consumo de la PokéAPI y helpers.
- `src/assets`: Recursos estáticos como imágenes y logos.

## ✒️ Autor

- **Andriufit** - _Desarrollo Inicial_
