# A-Lyon Portfolio

Portfolio personal de Leonardo Hernández - Desarrollador Full Stack

## 🚀 Tecnologías

- **Frontend:** Angular 22, React, Vue, HTML5, CSS3, TypeScript, JavaScript
- **Backend:** Laravel, Node.js, Nest.js, Express
- **Mobile:** Ionic, Capacitor, Flutter, Cordova
- **Databases:** PostgreSQL, MySQL, SQL Server, MongoDB
- **UI/UX:** Figma, Adobe XD, Penpot, Balsamiq, Photoshop, Illustrator
- **DevOps:** Git, Docker, AWS S3

## 📦 Instalación

Requiere Node.js 24.15+ (o 22.22.3+). El repo incluye `.nvmrc`: ejecuta `nvm use` antes de instalar.

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
   - Usa el `base-href` `/` porque el sitio se publica en el dominio propio `cv.lyonincode.com`

### Dominio personalizado:

El sitio se publica en **https://cv.lyonincode.com/**.

En el DNS de `lyonincode.com` (Squarespace) debe existir este registro:

| Tipo | Host | Valor |
| --- | --- | --- |
| CNAME | `cv` | `lyonproducer.github.io` |

GitHub Pages toma el dominio del archivo `public/CNAME`, que se copia al build y a la rama `gh-pages`.

### Configuración de GitHub Pages:

1. Ve a tu repositorio en GitHub
2. Navega a **Settings** > **Pages**
3. Configura:
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
   - **Custom domain:** `cv.lyonincode.com`
4. Guarda los cambios y activa **Enforce HTTPS** cuando el certificado esté listo

### Notas importantes:

- El archivo `.nojekyll` evita que GitHub Pages procese los archivos con Jekyll
- El `base-href` está configurado en `/` para el dominio propio

## 📂 Estructura del proyecto

```
A-LeonardoPortfolio/
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

El portfolio está disponible en:

```
https://cv.lyonincode.com/
```

## 👤 Autor

**Leonardo Hernández**
- LinkedIn: [linkedin.com/in/lyonproducertv/](https://www.linkedin.com/in/lyonproducertv/)
- Email: hernandezleonardo085@gmail.com

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
