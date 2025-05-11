# Rick & Morty Explorer

Aplicación web construida con **React + Redux Toolkit**, basada en la API pública de Rick and Morty, que permite explorar, buscar, filtrar y ver en detalle personajes, incluyendo favoritos persistentes y un diseño responsive adaptable a distintas pantallas.

---

## 🚀 Instalación y ejecución

1. Clona el repositorio:

   ```bash
   git clone https://github.com/JoseEnriquez88/microfrontends.git
   cd microfrontends
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el entorno de desarrollo:
   ```bash
   npm run dev
   ```

La aplicación se ejecutará por defecto en `http://localhost:5173`.

---

## 🧠 Arquitectura del proyecto

Este proyecto sigue una arquitectura **modularizada por dominios**, organizada en carpetas según su responsabilidad:

```
src/
├── components/         # Componentes reutilizables (Cards, UI, sliders, filtros, etc.)
├── views/              # Vistas de alto nivel (Home, CharacterDetail, Hero)
├── store/              # Configuración de Redux Toolkit y slices
├── utils/              # Tipos (types.ts) y otras utilidades
├── App.tsx             # Definición de rutas y estructura base
```

Esta estructura facilita:

- **Escalabilidad**: cada parte puede evolucionar sin afectar al resto.
- **Reusabilidad**: separación clara entre vistas y componentes reutilizables.
- **Mantenibilidad**: los estados globales están centralizados en Redux.

---

## 🧩 Dependencias principales

- **React 19** – Librería base de UI
- **Redux Toolkit** – Manejo de estado global
- **React Router DOM v7** – Ruteo declarativo
- **Tailwind CSS v4** – Estilado rápido y responsive
- **Swiper** – Slider responsive para personajes relacionados
- **Axios** – Cliente HTTP para consumo de la API
- **Redux Persist** – Persistencia de favoritos en localStorage
- **Framer Motion** – Animaciones modernas y suaves en componentes como Hero y CharacterCard.

---

## 🛠️ Herramientas de desarrollo

- **Vite** – Bundler moderno ultrarrápido
- **ESLint** – Linter de código (con plugin de React)
- **Prettier** – Formateador automático de código (formateo constante aplicado)
- **TypeScript** – Tipado estático robusto

---

## 🧪 Testing

Actualmente, este proyecto **no implementa tests automatizados**. Se planea agregar soporte con herramientas como:

- [ ] `Jest` + `React Testing Library` para componentes
- [ ] Testeos unitarios de reducers/slices
- [ ] Testeos de integración con el flujo Redux + UI

---

## 📦 Scripts disponibles

```bash
npm run dev         # Ejecuta en modo desarrollo
npm run build       # Compila para producción
npm run lint        # Linter del código fuente
npm run preview     # Vista previa post-build
```

---

## 📁 Recursos

- API usada: [Rick & Morty API](https://rickandmortyapi.com/)
- Diseño base: Reto Figma Ionic (no incluido públicamente por derechos)

---

## 📌 Consideraciones Técnicas

> El reto menciona la implementación de microfrontends. Actualmente, esta arquitectura no fue aplicada en el proyecto debido a que aún no tuve oportunidad de implementarla en producción. Sin embargo, reconozco su importancia y la tengo como tema principal de investigación para aplicar próximamente. Algunas tecnologías que planeo explorar son **Webpack Module Federation** y **single-spa**.

---

## ✍️ Autor

Desarrollado por **<a href="https://enriquez-jose.vercel.app/" target="_blank" rel="noreferrer">Jose Enriquez</a>** – como parte de un reto técnico.
