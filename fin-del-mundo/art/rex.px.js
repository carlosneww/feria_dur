// REX — ex-mecánico, líder. 34x52 + contorno = 36x54
pal({
  k: "#291426",                              // contorno morado oscuro
  s: "#d9a27c", S: "#a8695e",                // piel
  o: "#e58a45", r: "#c2532f", R: "#8a2f33",  // pelo / barba pelirroja
  G: "#ffe9a0", g: "#f29a2e", h: "#b85a26",  // goggles (G = brillo)
  y: "#dfb640", Y: "#a3742f",                // orejera
  l: "#9a9c58", v: "#74783f", V: "#4c4a38",  // chaleco olivo
  t: "#6d5560", T: "#47323f",                // camisa / correas
  w: "#aaa6ad", m: "#6b6880", M: "#403a55",  // metal / pantalón
  b: "#7a4a38", B: "#4a2a30",                // madera / botas
})
ramps("kMmw", "kBb", "kRro", "kVvl", "kTt", "kSs", "kYy", "hgG")

const rexLegs = () => layer("legs", (c) => {
  // cadera
  c.rect(10, 39, 14, 3, "M")
  // pierna izq (vista) abierta, rodilla doblada
  c.poly([10, 40, 17, 40, 15, 47, 7, 47], "m")
  c.poly([14, 41, 17, 41, 15, 47, 13, 47], "M")
  c.poly([5, 46, 14, 46, 14, 52, 3, 52, 3, 49], "b")
  c.hline(3, 51, 11, "B"); c.vline(13, 47, 4, "B")
  c.hline(5, 46, 9, "k")
  // pierna der
  c.poly([17, 40, 24, 40, 27, 47, 19, 47], "m")
  c.poly([17, 41, 20, 41, 21, 47, 19, 47], "M")
  c.poly([20, 46, 28, 46, 31, 49, 31, 52, 20, 52], "b")
  c.hline(20, 51, 11, "B"); c.vline(20, 47, 4, "B")
  c.hline(20, 46, 8, "k")
  // entrepierna
  c.poly([16, 42, 18, 42, 19, 47, 15, 47], "_")
  c.px(8, 43, "w"); c.px(9, 42, "w"); c.px(25, 43, "w"); c.px(24, 42, "w")
})

const sh = (pts, dx, dy) => pts.map((v, i) => v + (i % 2 ? dy : dx))
const OL = (c, polys) => {          // grupo de polígonos con contorno interno
  for (const [pts] of polys) for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) c.poly(sh(pts, dx, dy), "k")
  for (const [pts, col] of polys) c.poly(pts, col)
}

const rexUpper = (dy = 0, glow = 0) => layer("upper", { y: dy }, (c) => {
  // --- torso / chaleco
  c.poly([9, 24, 26, 24, 25, 41, 9, 41], "v")
  c.rect(9, 24, 3, 17, "V")
  c.rect(9, 39, 16, 2, "T"); c.rect(16, 39, 2, 2, "y")     // cinturón
  c.vline(17, 27, 12, "V")
  c.rect(19, 36, 5, 2, "l"); c.hline(19, 36, 5, "V")
  // --- brazos
  OL(c, [[[3, 27, 9, 25, 9, 36, 3, 36], "t"], [[25, 25, 31, 27, 32, 31, 31, 37, 26, 37, 25, 33], "t"]])
  c.rect(3, 29, 2, 7, "T"); c.poly([29, 29, 32, 31, 31, 37, 29, 37], "T")
  // hombreras del chaleco
  OL(c, [[[5, 24, 12, 24, 12, 27, 5, 28], "l"], [[22, 24, 29, 24, 29, 28, 22, 27], "v"]])
  c.hline(6, 27, 6, "v")

  // --- escopeta cruzada (sube 1 px cada 5 hacia la derecha)
  const top = (x) => 28 + Math.floor((34 - x) / 5)
  const col = (x, y0, cols) => [...cols].forEach((k, i) => c.px(x, y0 + i, k))
  for (let x = 0; x <= 33; x++) {
    const t = top(x)
    if (x >= 18) col(x, t - 1, "kwmMk")                       // cañones
    else if (x >= 9) col(x, t - 1, "kwmmmMk")                 // cajón
    else col(x, t, x < 3 ? "kbbbbBBk" : "kbbbbBk")            // culata
  }
  c.vline(8, top(8), 6, "k"); c.px(33, top(33) + 1, "k")
  for (let x = 20; x <= 28; x++) col(x, top(x) + 2, "bbBk")   // corredera
  c.vline(19, top(19) + 3, 2, "k"); c.vline(29, top(29) + 3, 3, "k")
  // mano der bajo la corredera
  c.rect(21, 31, 7, 5, "k"); c.rect(22, 31, 5, 4, "s"); c.hline(22, 34, 5, "S"); c.vline(26, 32, 2, "S")
  c.hline(22, 30, 5, "w")
  c.px(24, 32, "S")
  // mano izq en la empuñadura
  c.rect(9, 36, 6, 5, "k"); c.rect(10, 36, 4, 4, "s"); c.hline(10, 39, 4, "S"); c.vline(13, 37, 2, "S")
  c.px(15, 38, "k"); c.px(16, 37, "k")

  // --- cabeza: pelo
  c.ellipse(16, 10, 10, 9, "r")
  c.poly([6, 5, 8, 1, 11, 2, 13, 0, 16, 1, 19, 0, 21, 2, 24, 1, 26, 5, 26, 9, 6, 9], "r")
  // cara
  c.poly([9, 5, 25, 5, 26, 10, 26, 18, 8, 18, 8, 10], "s")
  // flequillo en mechones
  c.poly([8, 4, 26, 4, 26, 10, 24, 6, 22, 9, 19, 6, 17, 9, 14, 6, 12, 9, 9, 6, 8, 10], "r")
  c.line(10, 2, 9, 6, "R"); c.line(14, 1, 14, 5, "R"); c.line(19, 1, 19, 5, "R"); c.line(23, 2, 24, 6, "R")
  c.hline(11, 2, 2, "o"); c.hline(16, 2, 2, "o"); c.hline(21, 3, 2, "o")
  c.rect(7, 9, 2, 8, "r"); c.rect(25, 9, 2, 8, "r")        // patillas
  // goggles
  c.rect(8, 11, 19, 3, "T")
  c.rect(9, 9, 8, 7, "k"); c.rect(18, 9, 8, 7, "k")
  c.rect(10, 10, 6, 5, "g"); c.rect(19, 10, 6, 5, "g")
  c.hline(10, 14, 6, "h"); c.hline(19, 14, 6, "h"); c.px(15, 13, "h"); c.px(24, 13, "h")
  c.px(11, 10, "G"); c.px(20, 10, "G")
  if (glow >= 1) { c.px(12, 10, "G"); c.px(11, 11, "G"); c.px(21, 10, "G"); c.px(20, 11, "G") }
  if (glow >= 2) { c.hline(11, 10, 4, "G"); c.hline(20, 10, 4, "G"); c.px(12, 11, "G"); c.px(21, 11, "G") }
  // orejera + diadema
  c.line(6, 9, 9, 2, "Y"); c.line(5, 9, 8, 2, "y")
  c.ellipse(5, 13, 2, 4, "y"); c.rect(6, 11, 2, 5, "Y"); c.hline(4, 17, 3, "Y"); c.px(4, 11, "G")
  c.vline(8, 10, 7, "k")
  c.rect(27, 10, 1, 7, "Y")
  // nariz
  c.rect(17, 15, 2, 3, "s"); c.px(18, 17, "S"); c.px(16, 16, "S"); c.px(19, 16, "S")
  // barba
  const beard = [7, 16, 11, 17, 14, 18, 20, 18, 23, 17, 27, 16, 27, 20, 25, 25, 21, 28, 17, 30, 13, 28, 9, 25, 7, 20]
  c.poly(sh(beard, 0, 1), "k")
  c.poly(beard, "r")
  c.poly([8, 21, 10, 24, 13, 26, 17, 28, 21, 26, 24, 24, 26, 21, 25, 25, 21, 28, 17, 30, 13, 28, 9, 25], "R")
  c.hline(13, 18, 4, "o"); c.hline(19, 18, 4, "o"); c.hline(12, 19, 4, "o"); c.hline(20, 19, 4, "o")  // bigote
  c.hline(15, 21, 5, "k"); c.hline(16, 22, 3, "R")                                                    // boca
  c.line(11, 20, 12, 24, "R"); c.line(23, 20, 22, 24, "R")
  c.line(15, 24, 15, 27, "R"); c.line(19, 24, 19, 27, "R")

})

// quita el contorno interno que quedó en el borde: el contorno final siempre mide 1 px
const trim = (c) => {
  for (let pass = 0; pass < 4; pass++) {
    const kill = []
    for (let y = 0; y < c.h; y++) for (let x = 0; x < c.w; x++) {
      if (!c.is(x, y, "k")) continue
      const open = (px, py) => px < 0 || py < 0 || px >= c.w || py >= c.h || c.is(px, py, ".")
      if (open(x - 1, y) || open(x + 1, y) || open(x, y - 1) || open(x, y + 1)) kill.push([x, y])
    }
    if (!kill.length) break
    for (const [x, y] of kill) c.px(x, y, "_")
  }
}

sprite("rex", { w: 34, h: 52, outline: "k" }, rexLegs(), rexUpper(0, 0), trim)
