# Diseño Las Carbelli - Especificación UI/UX 2026

## Paleta de Colores
- **Fondo Principal**: #09090B (zinc-950)
- **Fondo Secundario**: #18181B (zinc-900)
- **Fondo Tarjetas**: #27272A (zinc-800)
- **Texto Principal**: #FAFAFA (white)
- **Texto Secundario**: #A1A1AA (zinc-400)
- **Acento Primary**: #22D3EE (cyan-400) - Principal
- **Acento Secondary**: #A855F7 (purple-500)
- **Acento Tertiary**: #EC4899 (pink-500)
- **Success**: #34D399 (green-400)
- **Error**: #F87171 (red-400)

## Tipografía
- **Display/Títulos**: Outfit (Google Fonts)
- **Body/Texto**: Space Grotesk (Google Fonts)
- **Tamaños**:
  - Hero: clamp(3rem, 12vw, 8rem) / font-black
  - H1: 4rem / 6rem md / font-bold
  - H2: 2.5rem / 3rem md / font-bold
  - H3: 1.5rem / font-semibold
  - Body: 1rem / font-normal
  - Small: 0.875rem / font-medium

## Espaciado (Sistema 4px)
- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 3rem (48px)
- 3xl: 4rem (64px)

## Componentes

### 1. Navigation (Fixed)
- Fondo: bg-zinc-950/90 con backdrop-blur-xl
- Altura: h-16 (mobile) / h-20 (desktop)
- Logo: texto "Las" white + "Carbelli" gradiente cyan→pink
- Links: text-zinc-400, hover:text-white
- BotónCTA: bg-gradient-to-r from-cyan-500 to-purple-500

### 2. Hero Section
- Video fondo con overlay gradient
- Gradientes animados de colores (blob)
- Título grande con gradiente
- Subtítulo en zinc-300
- Botones: primario (gradiente) + secundario (border)

### 3. About Section
- Tags con badge style
- Fotos con border y hover effect
- Texto descriptive

### 4. Services Section
- Cards con números grandes
- Icons de lucide-react
- Hover effects con glow

### 5. Portfolio Section
- Grid de negocios
- Hover scale effect
- Botón Instagram

### 6. Contact Section
- Form con inputs estilizados
- Campos con focus states
- Submit button con loading state

### 7. Footer
- Minimal, centrado
- Links funcionales

## Animaciones
- Framer Motion para entrdas
- spring physics
- duraction: 0.5-0.8s
- ease: [0.16, 1, 0.3, 1]

## Mobile First
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px