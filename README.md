# A-Lyon Portfolio

Portfolio personal de Leonardo Hernández - Desarrollador Full Stack

## 🚀 Tecnologías

- **Frontend:** Angular, React, Vue, HTML5, CSS3, TypeScript, JavaScript
- **Backend:** Laravel, Node.js, Nest.js, Express
- **Mobile:** Ionic, Capacitor, Flutter, Cordova
- **Databases:** PostgreSQL, MySQL, SQL Server, MongoDB
- **UI/UX:** Figma, Adobe XD, Penpot, Balsamiq, Photoshop, Illustrator
- **DevOps:** Git, Docker, AWS S3

## 📦 Instalación

```bash
npm install
```

## 🏃 Ejecutar en desarrollo

```bash
npm start
```

## 🔨 Build para producción

```bash
npm run build
```

## 🚀 Desplegar en GitHub Pages

### Prerrequisitos:
1. Tener un repositorio en GitHub
2. Configurar GitHub Pages en la rama `main` o `gh-pages`

### Pasos para desplegar:

1. **Construir el proyecto:**
   ```bash
   npm run build
   ```
   Esto generará la carpeta `docs/` con los archivos compilados.

2. **Desplegar en GitHub Pages:**
   ```bash
   npm run deploy
   ```
   Este comando:
   - Compila el proyecto en modo producción
   - Sube los archivos a la rama `gh-pages`
   - Configura el base-href en `/a-lyon-portfolio/`

### Configuración de GitHub Pages:

1. Ve a tu repositorio en GitHub
2. Navega a **Settings** > **Pages**
3. Configura:
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
4. Guarda los cambios

### Notas importantes:

- El archivo `.nojekyll` evita que GitHub Pages procese los archivos con Jekyll
- La carpeta `docs/` está excluida en `.gitignore` para evitar conflictos
- El `base-href` está configurado en `/a-lyon-portfolio/` para el subdirectorio

## 📂 Estructura del proyecto

```
a-lyon-portfolio/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── about-me/
│   │   │   ├── contact/
│   │   │   ├── experience/
│   │   │   └── skills/
│   │   └── shared/
│   │       └── components/
│   ├── assets/
│   │   └── i18n/
│   │       ├── en.json
│   │       └── es.json
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── public/
│   └── assets/
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🌐 URL del sitio

Una vez desplegado, el portfolio estará disponible en:
```
https://[tu-usuario].github.io/a-lyon-portfolio/
```

## 👤 Autor

**Leonardo Hernández**
- LinkedIn: [linkedin.com/in/leonardo-hernandez](https://linkedin.com/in/leonardo-hernandez)
- Email: leonardo.hernandez@email.com

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
