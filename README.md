# Altar en casa

© 2026 Rodhino. Todos los derechos reservados.

App web instalable (PWA) para proyectar el altar de muertos de cada hogar en una tableta, celular o tele.

- Cada familia agrega a sus seres queridos (foto, nombre, años, quién fue, qué le gustaba, unas palabras).
- Las fotos se guardan solo en el aparato (IndexedDB). No hay servidor ni cuentas.
- "Encender el altar": pantalla completa con papel picado, veladoras y pétalos. Tres vistas: retrato grande, altar de tres niveles y todos juntos. La pantalla no se apaga mientras está encendido.
- Funciona sin internet después de abrirla una vez (sw.js).
- Respaldo: un archivo .json para pasar el altar de un aparato a otro.

## Archivos
- `index.html`, `manifest.webmanifest`, `sw.js`, iconos `.png`: lo que se publica (cualquier hosting con https, por ejemplo GitHub Pages).
- `fuente/`: `plantilla.html` + `dibujo/` (dibujo del altar copiado del altar del evento). `python3 fuente/construir.py` vuelve a armar `index.html` dentro de `fuente/`.

Al publicar cambios, sube el número de `VERSION` en `sw.js` para que los aparatos tomen la versión nueva.
