# Informa (Frontend)

Aplicación web hecha con **Angular 19** para administrar artículos y sus catálogos (familias, tipos y clases). Consume la API [Informa-Java](https://github.com/DanielIncio/Informa-Java).


## Tecnologías

- Angular 19 (componentes standalone)
- TypeScript
- Bootstrap 5.3 y Bootstrap Icons (por CDN)
- SCSS
- HttpClient + RxJS para consumir la API REST

## Funcionalidades

- **Artículos:** listar, registrar, modificar y eliminar, con listas desplegables de tipo de producto, familia y clase
- **Familias, Tipos y Clases:** CRUD de cada catálogo
- Pantalla de inicio con accesos directos y menú lateral de navegación
- Carga perezosa (*lazy loading*) de las pantallas con `loadComponent`
- Dos layouts: uno principal (con menú) y otro para las pantallas de sesión
- Pantallas de login, registro y recuperación de contraseña (solo diseño, sin conexión al backend todavía)

## Cómo ejecutarlo

### Requisitos

- Node.js 20 LTS o superior y npm
- Angular CLI:
  ```bash
  npm install -g @angular/cli
  ```
- El backend [Informa-Java](https://github.com/DanielIncio/Informa-Java) corriendo en `http://localhost:9999`

### Pasos

1. Clona el repositorio:
   ```bash
   git clone https://github.com/DanielIncio/Informa.git
   cd Informa
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación:
   ```bash
   ng serve
   ```
4. Abre `http://localhost:4200` en el navegador.

> Si tu backend corre en otro puerto, cambia la URL (`http://localhost:9999/api/...`) en los archivos `*.service.ts` de cada módulo.


## Estructura del proyecto

```
src/app/
├── core/          → CrudService genérico (list, save, update, delete)
├── articulo/      → pantalla, servicio y modelo de artículos
├── ccmfam/        → familias
├── ccmtpt/        → tipos de producto
├── ccmcla/        → clases
├── home/          → página de inicio
├── layout/        → main-layout (con menú) y auth-layout
├── shared/        → sidebar
├── sessions/      → login, sign-up, forgot
└── app.routes.ts  → rutas con lazy loading
```

## Próximas mejoras

- Conectar el login con el backend usando JWT y proteger las rutas con un guard
- Validaciones en los formularios y mensajes de error al usuario
- Pantallas para el resto de catálogos (unidades de medida, almacenes, vendedores, etc.)

## Qué aprendí

- Clases genéricas en TypeScript: `CrudService<T, ID>` evita repetir el CRUD en cada servicio
- Componentes standalone, rutas con carga perezosa y layouts anidados
- Formularios con `ngModel` y listas desplegables enlazadas a objetos (`[ngValue]`)
- Cómo consumir una API de Spring Boot desde Angular (CORS incluido)

## Autor

**Daniel Incio** · [GitHub](https://github.com/DanielIncio)
