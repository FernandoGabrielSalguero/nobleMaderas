# 🌳 Noble Madera - Landing Page

Landing page profesional para **Noble Madera**, emprendimiento dedicado a la creación de artesanías en madera y decoración para el hogar.

---

## 📋 Descripción del Proyecto

Noble Madera es una página web moderna y elegante diseñada para mostrar los trabajos artesanales en madera, conectar con clientes potenciales y facilitar el contacto directo vía WhatsApp.

### Objetivo
Presentar de manera profesional y atractiva los productos y servicios de Noble Madera, destacando la calidad artesanal y el trabajo personalizado.

---

## 🎨 Paleta de Colores

La paleta de colores está inspirada en la madera y la naturaleza:

| Color | Hex | Uso |
|-------|-----|-----|
| **Nogal Oscuro** | `#4A3728` | Color principal (header, footer) |
| **Caoba** | `#8B5A3C` | Color secundario (acentos) |
| **Arena** | `#E8DCC4` | Fondos claros |
| **Verde Bosque** | `#2C5F2D` | Detalles y hover |
| **Crema** | `#F5F1E8` | Fondo principal |
| **Negro Suave** | `#2B2B2B` | Texto principal |
| **Dorado** | `#C9A961` | Acentos especiales |

---

## 📁 Estructura del Proyecto

```
NobleMaderas/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos CSS completos
├── js/
│   └── main.js             # JavaScript (carrusel, galería, interacciones)
├── assets/
│   ├── carrusel/           # Imágenes para el carrusel del inicio
│   ├── trabajo/            # Imágenes de trabajos realizados
│   └── equipo/             # Imagen del equipo
└── README.md               # Documentación
```

---

## 🚀 Características Principales

### ✅ Secciones Implementadas

1. **Header Fijo**
   - Logo y nombre de la marca "Noble Madera"
   - Menú de navegación responsive
   - Transiciones suaves

2. **Sección Inicio (Hero)**
   - Carrusel automático de imágenes (transición cada 4 segundos)
   - Carga dinámica de imágenes desde `assets/carrusel/`
   - Indicadores de navegación
   - Overlay con título y call-to-action

3. **Sección Quiénes Somos**
   - Diseño de 2 columnas (imagen + texto)
   - Copy profesional sobre el emprendimiento
   - Features destacadas con iconos
   - Responsive design

4. **Sección Nuestros Trabajos**
   - Galería de imágenes dinámica
   - Carga automática desde `assets/trabajo/`
   - Grid responsive
   - Efecto hover y modal de visualización
   - Lazy loading para mejor rendimiento

5. **Sección Contacto**
   - Botón directo a WhatsApp
   - Número: +54 9 261 596-1236
   - Mensaje predefinido
   - Diseño atractivo con gradientes

6. **Footer**
   - Información de copyright
   - Diseño elegante con gradientes

### 🎯 Funcionalidades JavaScript

- **Carrusel Automático**: Cambia de imagen cada 4 segundos
- **Carga Dinámica de Imágenes**: Lee automáticamente las imágenes de las carpetas especificadas
- **Galería Interactiva**: Click para ampliar imágenes
- **Navegación Suave**: Scroll suave entre secciones
- **Menú Móvil**: Hamburger menu para dispositivos móviles
- **Animaciones al Scroll**: Efectos al entrar en viewport
- **Placeholders**: Si no hay imágenes, muestra placeholders elegantes

---

## 📱 Responsive Design

La página está completamente optimizada para:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (320px - 767px)

---

## 🖼️ Cómo Agregar Imágenes

### Para el Carrusel (Inicio):
1. Coloca tus imágenes en la carpeta `assets/carrusel/`
2. Nombres recomendados: `imagen1.jpg`, `imagen2.jpg`, `imagen3.jpg`, etc.
3. Formato recomendado: JPG o PNG
4. Resolución recomendada: 1920x800px

### Para la Galería (Nuestros Trabajos):
1. Coloca tus imágenes en la carpeta `assets/trabajo/`
2. Nombres recomendados: `trabajo1.jpg`, `trabajo2.jpg`, etc.
3. Formato recomendado: JPG o PNG
4. Resolución recomendada: 800x800px (cuadradas)

### Para el Equipo:
1. Coloca la imagen del equipo en `assets/equipo/equipo.jpg`
2. Formato: JPG o PNG
3. Resolución recomendada: 800x600px

---

## 🛠️ Instalación y Uso

1. **Clonar o descargar** el proyecto
2. **Agregar imágenes** en las carpetas correspondientes
3. **Abrir** `index.html` en un navegador
4. ¡Listo! La página está funcionando

### Servidor Local (Opcional)

Para desarrollo local con live reload:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Con PHP
php -S localhost:8000
```

Luego visita: `http://localhost:8000`

---

## 📝 Personalización

### Cambiar el Número de WhatsApp

En `index.html`, línea 115, modifica:
```html
<a href="https://wa.me/TUNUMERO?text=Tu%20mensaje">
```

### Modificar Colores

En `css/styles.css`, líneas 11-21, ajusta las variables CSS:
```css
:root {
    --color-nogal: #4A3728;
    --color-caoba: #8B5A3C;
    /* ... */
}
```

### Editar Textos

Todos los textos están en `index.html` y pueden editarse directamente.

---

## 🎯 Copy Utilizado

### Hero
- **Título**: "Transformamos la Madera en Arte"
- **Subtítulo**: "Creaciones únicas que dan vida a tu hogar"

### Quiénes Somos
- Enfoque en la pasión por la madera
- Destacar la calidad artesanal
- Énfasis en piezas únicas y personalizadas

### Features
- 🌳 Maderas Nobles
- ✋ Trabajo Artesanal
- 💎 Piezas Únicas

---

## 🌐 SEO y Optimización

- ✅ Meta tags configurados
- ✅ Descripción optimizada
- ✅ Títulos semánticos (H1, H2, H3)
- ✅ Alt text en imágenes
- ✅ Lazy loading
- ✅ Código limpio y comentado

---

## 📊 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript Vanilla**: Sin dependencias externas
- **Responsive Design**: Mobile-first approach

---

## 🔮 Próximas Mejoras (Opcionales)

- [ ] Formulario de contacto con validación
- [ ] Integración con Instagram
- [ ] Blog de proyectos
- [ ] Sistema de testimonios
- [ ] Multilenguaje
- [ ] Modo oscuro

---

## 📄 Licencia

Este proyecto fue creado para **Noble Madera**. Todos los derechos reservados.

---

## 👤 Contacto

**Noble Madera**
- WhatsApp: +54 9 261 596-1236
- Emprendimiento de artesanías en madera y decoración

---

## 🙏 Créditos

Diseñado y desarrollado con dedicación para mostrar la belleza y calidad del trabajo artesanal en madera.

---

**🌳 Noble Madera - Donde la madera cobra vida**
