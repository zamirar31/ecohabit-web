# 🌍 EcoHabit - Sistema de Diseño

## 📋 Descripción General

Este documento describe el sistema de diseño completo de **EcoHabit**, una aplicación web moderna enfocada en promover hábitos sostenibles. El diseño combina elementos ecológicos con animaciones espectaculares para crear una experiencia visual cautivadora.

---

## 🎨 Paleta de Colores

### Colores Primarios Ecológicos
- **Verde Esmeralda Principal**: `#10b981`
- **Verde Esmeralda Oscuro**: `#059669`
- **Verde Claro**: `#6ee7b7`

### Colores Secundarios
- **Marrón Tierra**: `#8b5a3c`
- **Marrón Oscuro**: `#6d4423`
- **Verde Salvia**: `#78a873`

### Acentos
- **Ámbar/Oro**: `#f59e0b`
- **Cyan Ecológico**: `#06b6d4`

### Escala de Grises Moderna
- **Azul Noche Profundo**: `#0f172a`
- **Gris Oscuro**: `#1e293b`
- **Gris Medio-Oscuro**: `#334155`
- **Gris Claro**: `#cbd5e1`
- **Casi Blanco**: `#f1f5f9`

---

## ✨ Animaciones Clave

### 1. **Float** - Flotación Suave
Animación infinita que hace que los elementos floten suavemente.
```css
animation: float 3s ease-in-out infinite;
```

### 2. **Falling Leaves** - Hojas Cayendo
Hojas animadas que caen desde la parte superior.
```css
animation: fallingleaves 12s linear infinite;
```

### 3. **Glow** - Brillo Suave
Efecto de brillo que aumenta y disminuye.
```css
animation: gentleglow 2s ease-in-out infinite;
```

### 4. **Slide In** - Entrada Deslizante
Elementos que entran suavemente desde arriba.
```css
animation: slideInUp 0.8s ease;
```

### 5. **Pulse** - Pulso de Luz
Efecto de pulso radiante.
```css
animation: ecopulse 2s infinite;
```

### 6. **Zoom In** - Zoom de Entrada
Elementos que aumentan de tamaño al entrar.
```css
animation: zoomin 0.6s ease;
```

---

## 🧩 Componentes Principales

### Botones

#### Botón Primario
```html
<button class="btn btn-primary">Acción Principal</button>
```
**Características**:
- Gradiente verde ecológico
- Efecto hover elevado
- Transiciones suaves

#### Botón Secundario
```html
<button class="btn btn-secondary">Acción Secundaria</button>
```

#### Botón Outline
```html
<button class="btn btn-outline">Acción Opcional</button>
```

### Inputs y Formularios

```html
<input type="text" placeholder="Tu texto aquí" />
```
**Características**:
- Fondo semitransparente
- Borde animado en focus
- Glow effect en interacción

### Cards
```html
<div class="card">
  Contenido aquí
</div>
```
**Características**:
- Backdrop filter (glassmorphism)
- Hover effect con transform
- Shadow glow al pasar mouse

---

## 🎬 Clases de Utilidad

### Animaciones
```html
<!-- Entrada con deslizamiento -->
<div class="animate-in">Contenido</div>

<!-- Desvanecimiento -->
<div class="animate-fade">Contenido</div>

<!-- Zoom -->
<div class="animate-zoom">Contenido</div>

<!-- Flotación -->
<div class="float-animation">Contenido</div>

<!-- Brillo -->
<div class="glow-animation">Contenido</div>
```

### Espaciado
```html
<div class="mt-2 mb-4 p-4">Contenido</div>
```

### Texto
```html
<p class="text-center text-primary">Texto destacado</p>
```

---

## 📐 Tipografía

- **Fuente**: Segoe UI, Trebuchet MS
- **Tamaños**:
  - H1: 2.5rem
  - H2: 2rem
  - H3: 1.5rem
  - Párrafo: 1rem
  - Pequeño: 0.9rem

---

## 🌐 Sistema de Grid

### Grid 2 Columnas
```html
<div class="grid grid-2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Grid 3 Columnas
```html
<div class="grid grid-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Grid 4 Columnas
```html
<div class="grid grid-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

---

## 🔲 Espaciado (Spacing Scale)

```
xs:  0.25rem (4px)
sm:  0.5rem  (8px)
md:  1rem    (16px)
lg:  1.5rem  (24px)
xl:  2rem    (32px)
2xl: 3rem    (48px)
```

---

## ⚡ Transiciones

- **Fast**: 150ms
- **Smooth**: 300ms (cubic-bezier)
- **Slow**: 500ms (cubic-bezier)

---

## 🎯 Ejemplos de Uso

### Componente Hero
```html
<section class="hero-section">
  <h1 class="hero-title animate-in">Título Principal</h1>
  <p class="hero-subtitle">Subtítulo descriptivo</p>
  <button class="btn btn-primary">Acción Principal</button>
</section>
```

### Tarjeta de Feature
```html
<div class="feature-card">
  <div class="feature-icon">🌱</div>
  <h3>Título</h3>
  <p>Descripción del feature</p>
</div>
```

### Formulario
```html
<form class="login-form">
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" />
  </div>
  <button type="submit" class="btn btn-primary btn-block">Enviar</button>
</form>
```

---

## 🚀 Mejores Prácticas

1. **Siempre usar variables CSS** para mantener consistencia
2. **Aplicar animaciones con moderación** - máximo 2-3 por sección
3. **Garantizar accesibilidad** - mantener buen contraste
4. **Responsive first** - diseñar móvil primero
5. **Performance** - usar `will-change` solo cuando sea necesario
6. **Efectos de hover** - añadir siempre `:not(:disabled)`

---

## 📱 Breakpoints de Responsividad

```css
/* Desktop: 1200px+ */
/* Tablet: 768px - 1199px */
/* Mobile: < 768px */
```

---

## 🌟 Características Especiales

### Glassmorphism
Efecto de cristal con blur y transparencia:
```css
background: rgba(30, 41, 59, 0.8);
backdrop-filter: blur(10px);
border: 1px solid rgba(148, 163, 184, 0.1);
```

### Gradientes Animados
```css
background: linear-gradient(135deg, var(--eco-primary), var(--eco-primary-dark));
animation: gradientShift 15s ease infinite;
```

### Sombra con Glow
```css
box-shadow: 0 0 30px rgba(16, 185, 129, 0.3);
```

---

## ✅ Checklist para Nuevos Componentes

- [ ] Usa las variables CSS del sistema
- [ ] Incluye transiciones suaves
- [ ] Agrega animación de entrada
- [ ] Verifica contraste de colores
- [ ] Prueba en dispositivos móviles
- [ ] Añade estados hover/focus/active
- [ ] Documenta cualquier comportamiento especial

---

**Última actualización**: Noviembre 2025
**Creado para**: Proyecto EcoHabit - CEUTEC
