# Arma index.html: plantilla.html + el dibujo del altar (copiado de la fuente del altar del evento a dibujo/)
import os
aqui = os.path.dirname(os.path.abspath(__file__))
leer = lambda n: open(os.path.join(aqui, n)).read()
s = leer("plantilla.html")
dibujo = "\n".join(l for l in leer("dibujo/dibujo.js").split("\n") if "const enPantalla" not in l)
s = s.replace("/*@@MASCARA@@*/", leer("dibujo/mascara.js")).replace("/*@@DIBUJO@@*/", dibujo)
open(os.path.join(aqui, "index.html"), "w").write(s)
