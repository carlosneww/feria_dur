// FIN DEL MUNDO — reparto. Sprites de 34x51 + contorno = 36x53 (Chispa es más chico).
pal({
  K: "#11001a", k: "#291426",                // contorno exterior / línea interior
  o: "#cf7a3d", r: "#a9502e", R: "#742c33",  // pelirrojo / sangre seca
  s: "#f9d48e", S: "#e08c70",                // piel
  G: "#fadc2b", g: "#eb8931", h: "#cc3434",  // acentos: brillo, naranja, rojo
  y: "#c9a23a", Y: "#9c6b2c",                // amarillo orejera
  l: "#8f915a", v: "#6f7340", V: "#474a33",  // olivo
  f: "#5c4141", e: "#3c2e32",                // ropa oscura
  w: "#878a7d", n: "#66655b",                // metal
  b: "#8f5a3c", B: "#5e3a2e", u: "#c79a6b",  // madera / pelaje café
  a: "#dbbf74", A: "#a8843f",                // rubio
  W: "#e3dccb", D: "#a59a98",                // blanco sucio
  c: "#c4c0b2", C: "#8a8489",                // canas
  j: "#bf6a30", J: "#84402c",                // chamarra naranja
  z: "#7d9c55", Z: "#4d6840",                // piel infectada
  X: "#eaffb0", x: "#9dee4a",                // ojos infectados
})

// ------------------------------------------------------------------ REX
const REX_HEAD = `
..........rr....rrr
.......rr.rrrr.rrrrr..rr
......rrrrrrrrrrrrrrrrrrr
.....rrrrrrRrrrrrRrrrrrrrr
....yrrrrrRrrrrrRrrrrrRrrrr
....yYrrrrrrrrrrrrrrrrrrrrrr
...yyYrrrrkrrrrkkrrrrkrrrrr
...yYrrrkksskrrksssskrkkssrr
..yyYrrsssssssssssssssssssrR
.yyyyYrkkkkkkkkkksskkkkkkkkkR
yyGyyYekGGggggggkkkkGGgggggkR
yyyyyYekGgggggggkeekGggggggkR
yyyYyYekggggggghkeekgggggghkR
yyyyyYrkhhhhhhhhksskhhhhhhhkR
.yyyYYrkkkkkkkkkksSkkkkkkkkkR
..YYYrrsssssssssSSsssssssrrR
....rrrsSSssoooosSoooossSsrR
....rrrrrooooorrrrroooorrrR
....RrrkrrrrrkkkkkkrrrkrrR
.....RrkrrrrrrRRRRrrrrkrR
.....RrrkrrrrrrrrrrrrkrrR
......RrrkrrkrrrrkrrkrR
.......RRrkrrkrrkrrkRR
.........RRRkrRkrRRR
...........RRRRRRR`

const REX_BODY = `
....vvllll........................
...vvlllllvvvvvvvvvvvvvvv.........
..vvllllllkvvvvvvvvvvvvvvkf.......
.vvvlllllvkkkkkkkkkkkkkkkkkkkkkkk.
.vVvvllvvkwwwwwwwwwwkwwwwwwwwwkwwk
fkVVvvvvkknnnnnnnnnnknnnnnnnnnknKk
fekkkkkkkknnkkkkkknnkkkkkkkkkkkkkk
feffffffeknnkeeeeknnkwwwwwwwwwkwwk
fefkfffeeknnkkkkkknnknnnnnnnnnknKk
feffkffeeknnnnnnnnnnkkkkkkkkkkkkkk
eeffkfeekknnnnwnnnnekbbbbbbbbbkee.
.eeffkekssskennnnneekbkssssskbkfe.
..eeeekssSskkeeeeeeekbksSsSskbkfe.
...kkkkSSSSkvkkkkkkkkRkSSSSSkRkee.
.......kkkkvvvVvvlllvkkkkkkkkk....
..........keeeeyyeeeeeek..........
...........eeeeyyeeeeee...........`

const LEGS = `
..........ffffffkkffffff..........
.........fefffek..kfffeff.........
........fefffek....kfffeff........
.......fefffek......keffeff.......
......fekkffk........kffkkef......
......feffek..........keffef......
.......feffe..........effef.......
.......feffe..........effef.......
......kkkkkkk........kkkkkkk......
.....bbbbbbbe........ebbbbbbb.....
.....bRRbbbbe........ebbbbRRb.....
.....eeeeeeee........eeeeeeee.....`

// ------------------------------------------------------------------ LUNA
const LUNA_HEAD = `
..............aaaa
...........aaaaaaaaaa
.........aaaaaaaaaaaaaa
..aaa...aaaaaaaaaaaaaaaa
.aaaaa.aaaaaaAaaaaaaaaaaa
.aaaaahaaaaaAaaaaaaaaaaaaa
aaaaaahaaaaAaaaaaaaaAaaaaa
aaAaaa.aaaaAaaaaaaaaaAaaaaa
aaAaaa.aaaaaaaAaaaaaaAaaaaa
aAaaa..aaaaaaAsaaaaaAssaaaa
aAaaa..aaaaaAsssAaaAssssaAa
aAaa...aaAaAsssssAAssssssAa
.aAa...aaAasskkssssskkssaA
.aAa...aAAasskWssssskWssaA
..aa...aAasssssssssssssssA
..aA....AasSSsssssssSSssa
...a....Aassssskkkssssssa
.........Aassssssssssssa
..........AAsssssssssS
............SSSsssSSS`

const LUNA_BODY = `
..............SSSSS
........WWWWWWWSSSWWWWWWW
......WWWWWWWWkWWWkWWWWWWWW
.....WWWWWWWWWWkWkWWWWWWWWWW
....WWhhWWDkkkkkkkkkkkkkDWWWW
....WhhhhWkWWWWWWWWWWWWWkWWWD
....WWhhWDkWWWWWhhhWWWWWkDWWD
....WWWWWDkWWWWWhhhWWWWWkDWWD
....WWDWDkkWWhhhhhhhhhWWkkDWD
....DWWDksskWhhhhhhhhhWksskDD
.....DDksssskWWWhhhWWWksssskD
......kksSSkDWWWhhhWWDkSSskk
........kkkkDDDDDDDDDDkkkk
..........kkkkkkkkkkkkkk
..........WWWWDWWkWWDWWW
..........WWWDDWWkWWDDWW
...........DDDDDDkDDDDD`

// ------------------------------------------------------------------ TOMÁS
const TOMAS_HEAD = `
...........eeeeeeeeeee
........eeeccccccccccceee
......eeccccccCccccccccccee
.....eecccccCcccccccCcccccee
....eeccccccccccccccccccccce
....ecccccckccccckkcccckcccce
...eecccckksskccksssskckssce
..eeeeccsssssssssssssssssceee
.eennekcsskkkkssssskkkksskeee
.ennnekssssssssssssssssssskene
.enwnekssskksssssssskkssskenne
.ennneksssssssssSssssssssskene
.ennnekcssssssSSSsssssssckene
.eennecccccccccsSccccccccceee
..eeeecCccccccccccccccccCc
....ecCcckccckkkkkkccckccCc
.....cCcckccccCCCCcccckcCc
.....CccckccccccccccckccC
......CcckccckccccckcckcC
.......CcckcckcccckcckcC
........CCckcckcckcckCC
..........CCCkcCkcCCC
............CCCCCCC`

const TOMAS_BODY = `
....jjjjjj............jjjj
...jjjjjjjjJjjjjjjjjJjjjjjjj
..jjjjjjjjjkJjjjjjjJkjjjjjjjj
.jjjgjjjjjkkkkkkkkkkkkkkkkkkkkkk
.jjgjjjjjJkwwwwwwwwwwwwwwwwwwwwk
jjjjjjjjJJknnnnnnnnnnnkkkkkkknnk
jjjjjkjjJkknkknkknkknnkGGgggknnk
jJjjjkjjJkknkknkknkknnkGggghknnk
jJjjjkjJJkknkknkknkknnkkkkkkknnk
JJjjkjJJkkknnnnnnnnnnnnnwnnwnnnk
.JJjjkksssknnnnnnnnnnnnnnnnnnnek
..JJJkssSskeeeeeeeeekssssskeeek
...kkkSSSSkkkkkkkkkkksSsSskkkk
.......kkkkjjjjJjjjjjkSSSSkj
..........kjjjjJjjjjjjkkkkjk
..........keeeeeyyeeeeeeeek
...........eeeeeyyeeeeeeee`

// ------------------------------------------------------------------ EL VACÍO
const VACIO_HEAD = `
...........eee.eee
.........eezzzzzzzee
.......ezzzzzzzzzzzzze
......zzzzzzzzzzzzzzzzz
.....zzzzzzzzzzzzzzzzzzz
.....zzzzzzzzzzzzzzzzzzzz
....zZzzzzzzzzzzzzzzzzzzz
....zZzzkkkkkzzzzzkkkkkzz
....zZzkXxxxkkzzzkXxxxkzz
....zZzkxxxxkzzzzkxxxxkzz
....zZzzkkkkzzzzzzkkkkzzZ
....zZZzzzzzzzzZzzzzzzzzZ
.....zZzzzzzzzZZzzzzzzzZ
.....zZzzkkkkkkkkkkkzzzZ
......ZzzkWkWkWkWkWkzzZ
......ZZzkRRRRRRRRRkzZ
.......ZzzkkkkkkkkkzzZ
........ZZzzzzzzzzzZZ
..........ZZZZZZZZZ`

const VACIO_BODY = `
..........ZZZZZ
.......DDDDZZZDDDDDD
.....DDDDDDDkDDDDDDDDD
....DDDDDDDDDkDDDDDkkkkkkkkkkk
....DDDRDDDDDDDDDDkzzzzzzzzzzzzk
....DDRRDDDDDDDDDDkzZzzzzzzzzkzzk
....DDDRDDDDkkkkkkkZZZZZZZZZZkzk
....DDDDDDDkzzzzzzzkkkkkkkkkkkk
....DDkDDDDkzZzzzzzzzzzzzzkzk
....DDkDDDDkZZZZZZZZZZZZzzkzzk
....DDkDRDDDkkkkkkkkkkkkkZZkzk
.....DkRRRDDDDDDDDDDDk..kkkk
.....DDDRDDDDDDDkDDDDD
......DDDDDD.DDDkDDDD
......DD.DDD.DDDDD.DD`

// ------------------------------------------------------------------ CHISPA
const CHISPA_TOP = `
..................bb....bb
.................bBbb..bbBb
.................bBbbbbbbBb
.................bbbbbbbbbbb
................bbbkbbbbkbbb
................bbbkbbbbkbbuu
................bbbbbbuuuuuuk
..b.............bbbbbuuuuuuu
.bb..............bbbuukkkuu
.bb..............hhhhhhhuu
.bbb...bbbbbbbbbbhhGGhhh
..bbbbbbbbbbbbbbbbbGGbb
..bbbbbbbbbbbbbbbbbbbbb
...bbbbbbbbbbbbbbbbbbbb
...bbBbbbbbbbbbbbuubbbb
...bbBBbbbbbuuuuuuubbb`

const CHISPA_LEGS = `
...bbkBBBBkkkkkkkbbkbb
...bbk.kbbk.....kbbkbb
...bBk.kbBk.....kbBkbB
...bBk.kbBk.....kbBkbB
...uuk.kuuk.....kuukuu`

// ------------------------------------------------------------------ armado
const tr = (s, map) => [...s].map((ch) => map[ch] ?? ch).join("")
// piernas compartidas: color de pantalón (claro/sombra) y de bota (claro/sombra)
const legs = (pm, ps, bm, bs) => {
  const rows = LEGS.trim().split("\n")
  return rows.map((r, i) => (i < 8 ? tr(r, { f: pm, e: ps }) : tr(r, { b: bm, R: bs }))).join("\n")
}

const DY = [0, 0, 1, 2, 1]        // reposo: los pies fijos, el cuerpo superior baja junto
const GLOW = [1, 2, 2, 1, 0]      // el brillo pulsa cuadro por cuadro

function character(name, { head, hx = 0, hy = 0, body, bx = 0, by = 23, legs, ly = 39, w = 34, h = 51, extra, dy = DY }) {
  for (let i = 0; i < 5; i++)
    sprite(`${name}_${i}`, { w, h, outline: "K" },
      layer("legs", grid(0, ly, legs)),
      layer("upper", { y: dy[i] }, ...(body ? [grid(bx, by, body)] : []), grid(hx, hy, head),
        (c) => { if (extra) extra(c, GLOW[i]) }))
  sprite(name, { base: `${name}_0` })
}

character("rex", {
  head: REX_HEAD, hy: 1, body: REX_BODY, legs: LEGS,
  extra: (c, glow) => {
    if (glow === 0) for (const x of [8, 20]) { c.px(x + 1, 11, "g"); c.px(x, 12, "g") }
    if (glow === 2) for (const x of [8, 20]) { c.hline(x, 11, 4, "G"); c.hline(x, 12, 2, "G"); c.px(x, 13, "G") }
  },
})

character("luna", { head: LUNA_HEAD, hy: 3, body: LUNA_BODY, legs: legs("W", "D", "f", "e") })

character("tomas", {
  head: TOMAS_HEAD, hy: 2, body: TOMAS_BODY, legs: legs("n", "e", "b", "R"),
  extra: (c, glow) => {
    c.vline(31, 6, 20, "w"); c.vline(32, 6, 20, "k"); c.px(31, 5, "h")       // antena
    if (glow === 0) { c.px(23, 29, "g"); c.px(24, 29, "g"); c.px(23, 30, "g") }
    if (glow === 2) { c.hline(23, 29, 5, "G"); c.hline(23, 30, 3, "G") }
  },
})

character("vacio", {
  head: VACIO_HEAD, hx: 2, hy: 4, body: VACIO_BODY, by: 23, legs: legs("f", "e", "e", "k"),
  extra: (c, glow) => {
    if (glow === 0) for (const x of [10, 20]) c.px(x, 12, "x")
    if (glow === 2) for (const x of [10, 20]) { c.hline(x, 12, 3, "X"); c.px(x, 13, "X") }
  },
})

character("chispa", {
  head: CHISPA_TOP, legs: CHISPA_LEGS, ly: 16, w: 30, h: 21, dy: [0, 0, 1, 1, 0],
  extra: (c, glow) => { if (glow === 2) c.px(1, 7, "_") },
})
