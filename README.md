# creditos-dev

Franja de créditos del desarrollador para el final del footer: el texto
"Desarrollado y diseñado por:" se escribe y se borra como en un editor, y al lado va la
firma animada de jeatdeam (Lottie). En celular usa el texto corto "Desarrollado por:".

## Instalar

```bash
npm install github:jeatdeam/creditos-dev#v1.1.0
```

Necesita `react` (18 o más) y `lottie-web`. Si el proyecto no tiene `lottie-web`, npm lo
instala solo.

## Usar

```tsx
import {Creditos} from 'creditos-dev';

<footer>
    {/* ...el footer del proyecto... */}
    <Creditos/>
</footer>
```

No hay que importar estilos ni fuentes aparte: el componente trae su CSS (clases con
prefijo `cd-`, sin Tailwind) y carga la fuente Doto desde Google Fonts. En Next.js ya es un
componente de cliente (`"use client"`).

### Props (todas opcionales)

| Prop | Por defecto |
| --- | --- |
| `texto` | `"Desarrollado y diseñado por:"` |
| `textoCorto` | `"Desarrollado por:"` (celular) |
| `enlace` | `"https://github.com/jeatdeam"` |
| `className` | clase extra para el contenedor |

## Cambiar algo y sacar una versión nueva

1. Edita `src/` (`Creditos.tsx`, `creditos.css`, `TextoEscritura.tsx`...).
2. `npm run build` y sube también la carpeta `dist/` (es lo que instalan los proyectos).
3. Sube la versión en `package.json`, haz commit y crea el tag:

   ```bash
   git tag v1.2.0
   git push origin main v1.2.0
   ```

4. En cada proyecto, cambia `#v1.1.0` por `#v1.2.0` y vuelve a correr `npm install`.
