  const esc = t => String(t).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const corta = (t,n) => t.length>n ? t.slice(0,n-1)+"…" : t;
  let uid = 0;
  function azar(sem){ let x = sem; return () => (x = (x*16807) % 2147483647) / 2147483647; }
  const flor = (x,y,r,c1="#f59a1b",c2="#ffc35a") =>
    `<circle cx="${x}" cy="${y}" r="${r}" fill="${c1}"/><circle cx="${x}" cy="${y}" r="${r*.62}" fill="${c2}"/><circle cx="${x}" cy="${y}" r="${r*.22}" fill="#9a4a06"/>`;
  function veladora(x, base, h, vidrio, id){
    const w = h*.44, top = base-h, fy = top+6;
    return `<circle class="halo" cx="${x}" cy="${fy-10}" r="${h*.75}" fill="url(#luz${id})"/>
      <rect x="${x-w/2}" y="${top}" width="${w}" height="${h}" rx="3" fill="${vidrio}" opacity=".9"/>
      <rect x="${x-w/2+3}" y="${top+h*.28}" width="${w-6}" height="${h*.42}" rx="2" fill="#fbf3dc" opacity=".85"/>
      <path d="M${x} ${top+h*.34}c-5 4-5 10 0 13c5-3 5-9 0-13Z" fill="#2f6fb0" opacity=".8"/>
      <rect x="${x-w/2+2}" y="${top+3}" width="3" height="${h-8}" fill="#fff" opacity=".35"/>
      <ellipse cx="${x}" cy="${top}" rx="${w/2}" ry="3" fill="#ffe7a8" opacity=".9"/>
      <path class="flama${x%2?" b":""}" d="M${x} ${fy-24}C${x+7} ${fy-12} ${x+7} ${fy} ${x} ${fy}C${x-7} ${fy} ${x-7} ${fy-12} ${x} ${fy-24}Z" fill="#ffae22"/>
      <path class="flama${x%2?" b":""}" d="M${x} ${fy-15}C${x+3.5} ${fy-8} ${x+3.5} ${fy-1} ${x} ${fy-1}C${x-3.5} ${fy-1} ${x-3.5} ${fy-8} ${x} ${fy-15}Z" fill="#fff3c4"/>`;
  }
  function calaverita(x, base, k, ojo="#e0337f"){
    const cy = base-30*k;
    return `<circle cx="${x}" cy="${cy}" r="${22*k}" fill="#fbf6ee"/><rect x="${x-14*k}" y="${cy}" width="${28*k}" height="${30*k}" rx="${6*k}" fill="#fbf6ee"/>
      <circle cx="${x-9*k}" cy="${cy+2*k}" r="${7*k}" fill="${ojo}"/><circle cx="${x+9*k}" cy="${cy+2*k}" r="${7*k}" fill="${ojo}"/>
      <circle cx="${x-9*k}" cy="${cy+2*k}" r="${3*k}" fill="#fbf6ee"/><circle cx="${x+9*k}" cy="${cy+2*k}" r="${3*k}" fill="#fbf6ee"/>
      <path d="M${x} ${cy+9*k}l-3 ${5*k}h6Z" fill="#2f9e6e"/>
      <path d="M${x-10*k} ${base-8*k}h${20*k}M${x-5*k} ${base-12*k}v${8*k}M${x} ${base-12*k}v${8*k}M${x+5*k} ${base-12*k}v${8*k}" stroke="#7b3fa8" stroke-width="${1.6*k}"/>
      ${flor(x, cy-13*k, 5*k, "#2f9e6e", "#ffc35a")}
      <path d="M${x-20*k} ${cy-4*k}q4 -8 9 -4M${x+20*k} ${cy-4*k}q-4 -8 -9 -4" stroke="#f59a1b" stroke-width="${2*k}" fill="none"/>`;
  }
  function pan(x, base, k){
    return `<path d="M${x-32*k} ${base}Q${x-34*k} ${base-40*k} ${x} ${base-42*k}Q${x+34*k} ${base-40*k} ${x+32*k} ${base}Z" fill="#c97a2b"/>
      <path d="M${x-26*k} ${base-8*k}Q${x} ${base-44*k} ${x+26*k} ${base-8*k}M${x-26*k} ${base-30*k}Q${x} ${base-10*k} ${x+26*k} ${base-30*k}" stroke="#9b5414" stroke-width="${5*k}" fill="none" stroke-linecap="round"/>
      <circle cx="${x}" cy="${base-43*k}" r="${7*k}" fill="#a65a17"/>
      <path d="M${x-22*k} ${base-20*k}h2M${x+14*k} ${base-34*k}h2M${x-8*k} ${base-36*k}h2M${x+20*k} ${base-16*k}h2M${x-14*k} ${base-28*k}h2" stroke="#f7e3b8" stroke-width="${3*k}" stroke-linecap="round"/>`;
  }
  function florero(x, base, k){
    let f = `<path d="M${x-14*k} ${base-50*k}h${28*k}l-6 ${50*k}h-${16*k}Z" fill="#b5652e"/><path d="M${x-12*k} ${base-38*k}h${24*k}" stroke="#f3ead8" stroke-width="${2.5*k}" stroke-dasharray="${4*k} ${3*k}"/>
      <path d="M${x} ${base-50*k}l-10 -${26*k}M${x} ${base-50*k}l10 -${26*k}M${x} ${base-50*k}v-${34*k}" stroke="#2f6b3a" stroke-width="${2.5*k}"/>`;
    [[-12,-78],[12,-78],[0,-88],[-20,-64],[20,-64],[-6,-66],[8,-68]].forEach(([dx,dy],i) => f += flor(x+dx*k, base+dy*k, (i==2?11:9)*k));
    return f;
  }
  function plato(x, base, p, i, id, k){
    let g = `<g transform="translate(${x} ${base}) scale(${k})"><ellipse cx="0" cy="-4" rx="62" ry="13" fill="#8f4a1e"/><ellipse cx="0" cy="-8" rx="58" ry="11" fill="#b5652e"/>
      <circle cx="0" cy="-46" r="49" fill="#b5652e"/><circle cx="0" cy="-46" r="49" fill="none" stroke="#f3ead8" stroke-width="2.5" stroke-dasharray="5 5"/>`;
    if (p.foto){
      g += `<clipPath id="pl${id}_${i}"><circle cx="0" cy="-46" r="43"/></clipPath>
        <image href="${p.foto}" x="-43" y="-89" width="86" height="86" preserveAspectRatio="xMidYMid slice" clip-path="url(#pl${id}_${i})"/>`;
    } else {
      g += `<circle cx="0" cy="-46" r="43" fill="#5a1a12"/><circle cx="-12" cy="-54" r="9" fill="#7a2a18"/><circle cx="14" cy="-40" r="11" fill="#7a2a18"/>
        <path d="M-20 -32h2M4 -64h2M-4 -44h2M22 -56h2" stroke="#f3ead8" stroke-width="3" stroke-linecap="round"/>`;
    }
    if (p.nombre){
      const t = esc(corta(p.nombre, 18));
      g += `<rect x="-74" y="6" width="148" height="28" rx="5" fill="#fbf3dc"/><text x="0" y="25" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-size="16" font-weight="600" fill="#3a1630">${t}</text>`;
    }
    return g + `</g>`;
  }
  function nivel(x1, x2, ySup, yCara, yBase, cara, tira){
    let g = `<rect x="${x1}" y="${ySup}" width="${x2-x1}" height="${yCara-ySup}" fill="#efe4cf"/><rect x="${x1}" y="${yCara-4}" width="${x2-x1}" height="4" fill="#d9c9a8"/>
      <rect x="${x1}" y="${yCara}" width="${x2-x1}" height="${yBase-yCara}" fill="${cara}"/>`;
    const n = Math.round((x2-x1)/44), w = (x2-x1)/n;
    for (let i=0;i<n;i++){
      const a = x1+i*w, c = tira[i%tira.length];
      g += `<path d="M${a} ${yCara}h${w}v18l-${w/6} 7l-${w/6}-7l-${w/6} 7l-${w/6}-7l-${w/6} 7l-${w/6}-7Z" fill="${c}"/><circle cx="${a+w/2}" cy="${yCara+9}" r="3.5" fill="${cara}"/>`;
    }
    return g + `<rect x="${x1}" y="${yBase-6}" width="${x2-x1}" height="6" fill="#000" opacity=".18"/>`;
  }
  // calavera de azúcar decorada, con corona de flores
  function calaveraGrande(x, base, k, c1="#e0337f", c2="#2f9e6e", c3="#f59a1b"){
    const cy = base-34*k; let g = "";
    for (let i=0;i<7;i++){ const t = Math.PI*(1.12+ i*0.127); const fx = x+27*k*Math.cos(t), fy = cy+27*k*Math.sin(t);
      g += `<ellipse cx="${fx-6*k}" cy="${fy+3*k}" rx="${6*k}" ry="${2.6*k}" fill="#2f6b3a" transform="rotate(${-30+i*10} ${fx} ${fy})"/>`; }
    for (let i=0;i<7;i++){ const t = Math.PI*(1.1+ i*0.133); g += flor(x+25*k*Math.cos(t), cy+25*k*Math.sin(t), (i%3===1?8:7)*k, i%3===1?"#c2185b":"#f59a1b", i%3===1?"#e0337f":"#ffc35a"); }
    g += `<circle cx="${x}" cy="${cy}" r="${24*k}" fill="#fbf6ee"/><rect x="${x-15*k}" y="${cy}" width="${30*k}" height="${34*k}" rx="${7*k}" fill="#fbf6ee"/>`;
    [-1,1].forEach(sd => { const ex = x+sd*10*k, ey = cy+3*k;
      for (let i=0;i<8;i++){ const t=i*Math.PI/4; g += `<circle cx="${ex+10.5*k*Math.cos(t)}" cy="${ey+10.5*k*Math.sin(t)}" r="${2.8*k}" fill="${i%2?c2:c3}"/>`; }
      g += `<circle cx="${ex}" cy="${ey}" r="${8*k}" fill="${c1}"/><circle cx="${ex}" cy="${ey}" r="${3.4*k}" fill="#fbf6ee"/>`;
      g += `<path d="M${x+sd*20*k} ${cy+14*k}q${sd*-4*k} ${5*k} ${sd*-9*k} ${2*k}" stroke="${c2}" stroke-width="${1.8*k}" fill="none"/>`; });
    g += `<path d="M${x} ${cy+19*k}c-2 ${-3*k} ${-6*k} ${-3*k} ${-5*k} ${1*k}l${5*k} ${5*k}l${5*k} ${-5*k}c${1*k} ${-4*k} ${-3*k} ${-4*k} ${-5*k} ${-1*k}Z" fill="${c1}"/>`;
    g += `<rect x="${x-12*k}" y="${base-11*k}" width="${24*k}" height="${7*k}" rx="${2*k}" fill="#fff"/>`;
    for (let i=-2;i<=2;i++) g += `<path d="M${x+i*4.5*k} ${base-11*k}v${7*k}" stroke="#7b3fa8" stroke-width="${1.2*k}"/>`;
    g += `<path d="M${x-12*k} ${base-7.5*k}h${24*k}" stroke="#7b3fa8" stroke-width="${1.2*k}"/>`;
    g += flor(x, cy-13*k, 5*k, c2, "#ffc35a");
    for (let i=-2;i<=2;i++) g += `<circle cx="${x+i*5*k}" cy="${cy-4*k-Math.abs(i)*1.5*k}" r="${1.4*k}" fill="${c3}"/>`;
    return g;
  }
  // pantalla del evento: el retrato grande, enmarcado de cempasúchil, con calaveras, veladoras y tapete
  function retratoSVG(o){
    const id = ++uid, rnd = azar(11);
    let g = `<defs><radialGradient id="luz${id}"><stop offset="0" stop-color="#ffcf6b" stop-opacity=".55"/><stop offset="1" stop-color="#ffcf6b" stop-opacity="0"/></radialGradient>
      <radialGradient id="pared${id}" cx=".5" cy=".5" r=".6"><stop offset="0" stop-color="#5a2358" stop-opacity=".95"/><stop offset="1" stop-color="#170d1f" stop-opacity="0"/></radialGradient>
      <clipPath id="foto${id}"><path d="M328 718V310A172 172 0 0 1 672 310V718Z"/></clipPath></defs>
      <ellipse cx="500" cy="440" rx="560" ry="470" fill="url(#pared${id})"/>`;
    // tapete de aserrín
    const tap = ["#e0337f","#f59a1b","#7b3fa8","#2f9e6e","#ffc35a","#2f6fb0"];
    g += `<rect x="0" y="812" width="1000" height="88" fill="#2b1810"/>`;
    for (let i=0;i<20;i++){ const x = i*50;
      g += `<path d="M${x} 856L${x+25} 816L${x+50} 856L${x+25} 896Z" fill="${tap[i%6]}"/><path d="M${x+25} 836L${x+37} 856L${x+25} 876L${x+13} 856Z" fill="${tap[(i+3)%6]}"/>`; }
    for (let i=0;i<60;i++) g += `<ellipse cx="${(rnd()*1000).toFixed(1)}" cy="${(818+rnd()*78).toFixed(1)}" rx="${(3+rnd()*3).toFixed(1)}" ry="2" fill="${rnd()<.7?"#ffc35a":"#fff"}" opacity=".7"/>`;
    // marco áureo 380 × 615 con guirnalda de cempasúchil
    g += `<circle cx="500" cy="430" r="330" fill="url(#luz${id})"/>`;
    const puntos = [];
    for (let y=740; y>=310; y-=26) puntos.push([288, y]);
    for (let i=0;i<=24;i++){ const t = Math.PI*(1 + i/24); puntos.push([500+212*Math.cos(t), 310+212*Math.sin(t)]); }
    for (let y=310; y<=740; y+=26) puntos.push([712, y]);
    puntos.forEach(([x,y],i) => g += `<ellipse cx="${x+9}" cy="${y+9}" rx="11" ry="5" fill="#2f6b3a" transform="rotate(${(i*47)%180} ${x} ${y})"/>`);
    puntos.forEach(([x,y],i) => g += i%5===2 ? flor(x, y, 15, "#c2185b", "#e0337f") : flor(x, y, 17 + (i%2)*3));
    g += `<path d="M310 738V310A190 190 0 0 1 690 310V738Z" fill="#c8902e"/><path d="M319 730V310A181 181 0 0 1 681 310V730Z" fill="none" stroke="#7a4a12" stroke-width="3"/>
      <rect x="328" y="138" width="344" height="580" fill="#24142f" clip-path="url(#foto${id})"/>`;
    g += o ? `<image href="${o.foto}" x="328" y="138" width="344" height="580" preserveAspectRatio="xMidYMid slice" clip-path="url(#foto${id})"/>` : flor(500, 430, 70);
    g += flor(500, 112, 24, "#c2185b", "#e0337f");
    // a los lados: floreros, calaveras y pan
    g += florero(78, 815, 1.7) + florero(922, 815, 1.7);
    g += calaveraGrande(178, 812, 2.3) + calaveraGrande(822, 812, 2.3, "#7b3fa8", "#e0337f", "#2f9e6e");
    g += pan(258, 812, .9) + pan(742, 812, .9);
    // veladoras al pie del retrato
    [[392,"#c62828",62],[446,"#f4efe4",50],[500,"#c62828",70],[554,"#f4efe4",50],[608,"#c62828",62]].forEach(([x,c,h]) => g += veladora(x, 808, h, c, id));
    [[24,"#2e7d4f",54],[976,"#2e7d4f",54]].forEach(([x,c,h]) => g += veladora(x, 808, h, c, id));
    return `<svg viewBox="0 70 1000 830" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${o ? "Retrato de " + esc(o.nombre) : "Retrato enmarcado de cempasúchil"}">${g}</svg>`;
  }
  const enPantalla = () => location.hash.startsWith("#pantalla");

  function altarSVG(o){
    const id = ++uid, rnd = azar(7);
    const tira = ["#e0337f","#f59a1b","#2f9e6e","#7b3fa8","#ffc35a"];
    let g = `<defs><radialGradient id="luz${id}"><stop offset="0" stop-color="#ffcf6b" stop-opacity=".55"/><stop offset="1" stop-color="#ffcf6b" stop-opacity="0"/></radialGradient>
      <radialGradient id="pared${id}" cx=".5" cy=".55" r=".6"><stop offset="0" stop-color="#4a2148" stop-opacity=".9"/><stop offset="1" stop-color="#170d1f" stop-opacity="0"/></radialGradient>
      <clipPath id="foto${id}"><path d="M414 473V259A86 86 0 0 1 586 259V473Z"/></clipPath></defs>
      <ellipse cx="500" cy="470" rx="520" ry="470" fill="url(#pared${id})"/>`;
    // proporción áurea: cada nivel mide 1/φ del de abajo en ancho y en alto; el marco es un rectángulo áureo
    g += nivel(80, 920, 652, 712, 842, "#1f6e4c", tira);     // 840 × 190
    g += nivel(240, 760, 535, 572, 652, "#b3174f", tira);    // 520 × 117
    // arco de cempasúchil sobre la foto
    g += `<path d="M262 560A238 470 0 0 1 738 560" fill="none" stroke="#2f6b3a" stroke-width="7"/>`;
    for (let i=0;i<=36;i++){ const t = Math.PI*i/36; const x = 500-238*Math.cos(t), y = 560-470*Math.sin(t);
      g += i%6===3 ? flor(x, y, 13, "#c2185b", "#e0337f") : flor(x, y, 15 + (i%2)*2); }
    g += nivel(340, 660, 463, 486, 535, "#5b2a86", tira);    // 320 × 72
    // primer nivel: la foto en un marco de 198 × 320
    g += `<circle cx="500" cy="320" r="210" fill="url(#luz${id})"/>
      <path d="M401 482V259A99 99 0 0 1 599 259V482Z" fill="#c8902e"/><path d="M408 478V259A92 92 0 0 1 592 259V478Z" fill="none" stroke="#7a4a12" stroke-width="3"/>`;
    g += `<rect x="414" y="173" width="172" height="300" fill="#24142f" clip-path="url(#foto${id})"/>` + (o
      ? `<image href="${o.foto}" x="414" y="173" width="172" height="300" preserveAspectRatio="xMidYMid slice" clip-path="url(#foto${id})"/>`
      : flor(500, 320, 44));
    g += flor(401, 480, 14) + flor(599, 480, 14) + flor(500, 160, 17, "#c2185b", "#e0337f");
    g += florero(368, 484, .75) + florero(632, 484, .75);
    // segundo nivel: la ofrenda
    const ps = o ? platillosDe(o) : [];
    const lista = ps.length ? ps : [{nombre:""}];
    const xs = lista.length===1 ? [500] : lista.length===2 ? [435,565] : [375,500,625];
    g += pan(275, 568, .85) + calaverita(725, 568, .9, "#2f9e6e");
    lista.forEach((p,i) => g += plato(xs[i], 568, p, i, id, .85));
    if (lista.length === 1) g += pan(395, 568, .7) + calaverita(605, 568, .7);
    if (lista.length === 2) g += pan(345, 568, .65) + calaverita(655, 568, .65);
    // tercer nivel: veladoras, agua, sal, copal, frutas
    [[118,"#c62828",86],[178,"#f4efe4",72],[822,"#f4efe4",72],[882,"#c62828",86],[440,"#2e7d4f",58],[560,"#2e7d4f",58]].forEach(([x,c,h]) => g += veladora(x, 708, h, c, id));
    g += `<rect x="304" y="660" width="40" height="52" rx="4" fill="#cfe9f5" opacity=".55"/><rect x="306" y="676" width="36" height="34" rx="3" fill="#4aa3d1" opacity=".75"/><rect x="309" y="664" width="4" height="44" fill="#fff" opacity=".5"/>`;
    g += `<ellipse cx="380" cy="708" rx="30" ry="8" fill="#b5652e"/><path d="M356 704q24 -22 48 0Z" fill="#fbfaf6"/><path d="M362 702h2M376 696h2M390 700h2" stroke="#d8d0c0" stroke-width="2"/>`;
    g += `<path d="M650 712h40l-6-10h-28Z" fill="#8f4a1e"/><path d="M640 680q30 30 60 0Z" fill="#b5652e"/><ellipse cx="670" cy="680" rx="30" ry="6" fill="#5a2a10"/><circle cx="662" cy="678" r="4" fill="#ff8a3d"/><circle cx="676" cy="679" r="3" fill="#ffc35a"/>
      <path class="humo" d="M666 672c-12-18 12-30 0-48s12-30 0-48" stroke="#e8e0f0" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path class="humo b" d="M674 672c12-18-12-30 0-48s-12-30 0-48" stroke="#e8e0f0" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path class="humo c" d="M670 672c-8-16 10-28 0-46" stroke="#e8e0f0" stroke-width="4" fill="none" stroke-linecap="round"/>`;
    [[250,700],[268,700],[259,686]].forEach(([x,y]) => g += `<circle cx="${x}" cy="${y}" r="11" fill="#f08a1c"/><path d="M${x} ${y-11}l4 -5" stroke="#2f6b3a" stroke-width="3"/>`);
    g += calaverita(745, 712, .75, "#f59a1b");
    // al pie: piso, camino de pétalos y cruz de sal
    g += `<rect x="20" y="842" width="960" height="58" fill="#2b1810"/>`;
    for (let i=0;i<70;i++){ const x = 40+rnd()*920, y = 848+rnd()*48, cerca = Math.abs(x-500) < 120;
      if (cerca && y > 852) continue;
      g += `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${(4+rnd()*4).toFixed(1)}" ry="2.6" fill="${rnd()<.85?"#f59a1b":"#ffc35a"}"/>`; }
    for (let i=0;i<14;i++){ const x = 420+i*12+rnd()*6; g += `<ellipse cx="${x}" cy="${896-rnd()*6}" rx="5" ry="2.6" fill="#f59a1b"/>`; }
    g += `<path d="M492 850h16v12h40v12h-40v20h-16v-20h-40v-12h40Z" fill="#f4f1ea"/>`;
    for (let i=0;i<40;i++){ const x = 454+rnd()*92, y = 852+rnd()*40;
      if ((Math.abs(x-500)<8 || (y>862 && y<874))) g += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.2" fill="#cfc6b4"/>`; }
    return `<svg viewBox="0 64 1000 836" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${o ? "Altar de " + esc(o.nombre) : "Altar de tres niveles"}">${g}</svg>`;
  }
