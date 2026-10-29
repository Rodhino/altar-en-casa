  const MASCARA = (() => {
    let g = "";
    for (let x=9; x<=91; x+=10.25) g += `<circle cx='${x}' cy='8' r='2.2'/>`;
    for (let y=20; y<=96; y+=11) g += `<path d='M7 ${y-2.6}L9.6 ${y}L7 ${y+2.6}L4.4 ${y}Z'/><path d='M93 ${y-2.6}L95.6 ${y}L93 ${y+2.6}L90.4 ${y}Z'/>`;
    for (let x=17; x<=83; x+=11) g += `<circle cx='${x}' cy='103' r='2.6'/>`;
    for (let k=0;k<5;k++){ const t=k*1.2566-1.5708; g += `<circle cx='${(50+4.6*Math.cos(t)).toFixed(2)}' cy='${(37+4.6*Math.sin(t)).toFixed(2)}' r='2.5'/>`; }
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'><mask id='m'><rect width='100' height='125' fill='white'/><g fill='black'>${g}
      <circle cx='41' cy='54' r='8'/><circle cx='59' cy='54' r='8'/>
      <path d='M50 62L45.5 71Q50 69 54.5 71Z'/>
      <rect x='36' y='79' width='28' height='1.8'/>
      <rect x='40.5' y='75' width='1.6' height='9'/><rect x='46' y='75' width='1.6' height='9'/><rect x='52.4' y='75' width='1.6' height='9'/><rect x='57.9' y='75' width='1.6' height='9'/>
      <path d='M27 60q-4 4 0 8M73 60q4 4 0 8' fill='none' stroke='black' stroke-width='1.8'/>
      </g>
      <path d='M50 21C29 21 20 36 22 54C23 64 28 68 31 71L31 89Q50 95 69 89L69 71C72 68 77 64 78 54C80 36 71 21 50 21Z' fill='none' stroke='black' stroke-width='2.6'/>
      <circle cx='41' cy='54' r='2.6' fill='white'/><circle cx='59' cy='54' r='2.6' fill='white'/><circle cx='50' cy='37' r='1.6' fill='white'/></mask><rect width='100' height='125' fill='black' mask='url(#m)'/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  })();
