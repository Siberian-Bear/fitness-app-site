// Все утверждённые палитры для формы варианта 8 (кроме «Глубина + Неон» — это исходные цвета варианта 8).
export const SURF = '.card,.group,.item,.box,.set,.iconbtn,.tile .media,.ex-hero'
// [фон, стекло, стекло2, текст, приглушённый, рамка, акцент, акцент сплошной, на акценте, акцентный текст, видео, свечение, пятно1, пятно2, меню, лист]
const P = {
  neon: {
    dark: ['#0e0f12','#181a1f','#22252c','#f3f4f6','#9aa0ad','#2a2d35','#c6ff3d','#c6ff3d','#0e0f12','#c6ff3d','#23262d','#00000000','#0e0f12','#0e0f12','#0e0f12f2','#0e0f12'],
    light: ['#f5f6f8','#ffffff','#eef0f3','#0e0f12','#5d6270','#e3e5ea','#c6ff3d','#c6ff3d','#0e0f12','#4f7a00','#e7e9ee','#00000000','#f5f6f8','#f5f6f8','#f5f6f8f2','#ffffff'] },
  deep: {
    dark: ['#0a0f1e','rgba(255,255,255,.06)','rgba(255,255,255,.1)','#eef1ff','#93a0c4','rgba(255,255,255,.1)','linear-gradient(135deg,#7c5cff,#3fa9ff)','#6f7bff','#ffffff','#9db4ff','#151c33','#6f7bff55','#2a1f6b','#0d3a66','#141a30cc','#161d36f2'],
    light: ['#eef1f8','rgba(255,255,255,.85)','#e3e8f4','#111733','#5d6788','#dde3f0','linear-gradient(135deg,#7c5cff,#3fa9ff)','#5b62f0','#ffffff','#4b52e0','#dde3f2','#5b62f055','#e2dcff','#d6ecff','#ffffffe6','#ffffff'] },
  ocean: {
    dark: ['#0a1517','rgba(255,255,255,.055)','rgba(255,255,255,.09)','#eaf4f3','#8fa7a6','rgba(255,255,255,.09)','linear-gradient(135deg,#6fd8c9,#2a9d8f)','#3fbfae','#062221','#6fd6c8','#12222a','#3fbfae40','#0f3b3d','#0e2a35','#0f1d20cc','#11201ff2'],
    light: ['#eef5f4','rgba(255,255,255,.88)','#e0ecea','#0d1f1e','#577271','#d5e4e2','linear-gradient(135deg,#6fd8c9,#2a9d8f)','#2a9d8f','#062221','#1d7a70','#dbe8e6','#2a9d8f40','#cdeee9','#d6ecf2','#ffffffe6','#ffffff'] },
  champagne: {
    dark: ['#0b0e1a','rgba(255,255,255,.05)','rgba(255,255,255,.085)','#f1ece2','#a39d92','rgba(255,255,255,.08)','linear-gradient(135deg,#ecd9b4,#b8976a)','#d6bd91','#14110b','#e1c99c','#161a2b','#d6bd9133','#1d2340','#151a30','#121628cc','#131729f2'],
    light: ['#f6f2ea','rgba(255,255,255,.9)','#ece5d8','#1a1c2b','#6c6a72','#e3dccd','linear-gradient(135deg,#2f3a66,#1c2340)','#1c2340','#f6efe0','#1c2340','#ebe5d9','#1c234033','#ece3d0','#e6e9f2','#fffdf8e6','#fffdf8'] },
  emerald: {
    dark: ['#08120f','rgba(255,255,255,.05)','rgba(255,255,255,.085)','#f2efe6','#9aa79f','rgba(255,255,255,.08)','linear-gradient(135deg,#e8cc8a,#b08a3e)','#d4b062','#1a1406','#e0c27a','#12201b','#d4b06233','#0f3b2c','#14281d','#0e1c17cc','#0f1d18f2'],
    light: ['#f3f1ea','rgba(255,255,255,.9)','#e6e8df','#0f2a20','#5f6f66','#dde0d5','linear-gradient(135deg,#2a7a5b,#0f4a36)','#1f6b4f','#ffffff','#1f6b4f','#e2e6dc','#1f6b4f33','#dcefe5','#f0e7cf','#fffef9e6','#fffef9'] },
  ab2: {
    dark: ['#0f1214','rgba(255,255,255,.035)','rgba(255,255,255,.07)','#edf1f5','#8f9aa5','rgba(255,255,255,.08)','linear-gradient(135deg,#b9d0ee 0%,#6a90c2 40%,#a7c2e6 55%,#4e74a7 100%)','#7aa0d2','#0b1622','#a3c0e6','#161a1e','#7aa0d238','#1e3046','#18222c','#13171be6','#15191df2'],
    light: ['#e3e7eb','rgba(255,255,255,.72)','#d6dce2','#111519','#5a6570','rgba(0,0,0,.07)','linear-gradient(135deg,#5a83b8 0%,#2f5687 55%,#46699a 100%)','#3a6299','#ffffff','#2d5689','#d2d8de','#3a629933','#dbe7f4','#e3e7eb','#f1f4f6e6','#f5f7f9'] },
  mono3: {
    dark: ['#0e0e10','rgba(255,255,255,.045)','rgba(255,255,255,.085)','#ececf0','#9a9aa3','rgba(255,255,255,.08)','linear-gradient(150deg,#ffffff 0%,#e7e7ec 40%,#c9c9d1 100%)','#e3e3e8','#111113','#f0f0f4','#17171a','#ffffff24','#3d3d45','#26262d','#141416d9','#17171af2'],
    light: ['#f1f1ee','rgba(255,255,255,.8)','#e6e6e2','#18181a','#6e6e72','rgba(0,0,0,.06)','linear-gradient(150deg,#3a3a3f 0%,#1d1d21 100%)','#232327','#f7f7f4','#232327','#e2e2de','#00000022','#ffffff','#ecece8','#fbfbf9e6','#fbfbf9'] },
  cr1: {
    dark: ['#08090a','rgba(255,255,255,.035)','rgba(255,255,255,.07)','#f1f3f5','#8c9299','rgba(255,255,255,.08)','linear-gradient(135deg,#f4f6f8 0%,#9aa1a9 42%,#e4e8ec 55%,#757c84 100%)','#c9ced4','#0a0b0c','#d9dde2','#141618','#c9ced41f','#262b30','#120f10','#0e1012e6','#121416f2'],
    light: ['#dfe1e4','rgba(255,255,255,.7)','#d2d5d9','#0e1012','#5b6168','rgba(0,0,0,.08)','linear-gradient(135deg,#3a3f45 0%,#16191c 50%,#2e3338 100%)','#1d2024','#ffffff','#1d2024','#cfd2d6','#00000026','#f3f4f6','#dfe1e4','#eef0f2e6','#f4f5f6'] },
}
let css = Object.entries(P).map(([k, v]) => Object.entries(v).map(([t, c]) => `
.phone.p-${k}.${t} { --bg:${c[0]}; --surface:${c[1]}; --surface2:${c[2]}; --text:${c[3]}; --muted:${c[4]}; --border:${c[5]}; --accent:${c[6]}; --accent-solid:${c[7]}; --on-accent:${c[8]}; --accent-text:${c[9]}; --media:${c[10]}; --glow:${c[11]};
  background: radial-gradient(120% 60% at 100% 0%, ${c[12]} 0%, transparent 60%), radial-gradient(90% 50% at 0% 100%, ${c[13]} 0%, transparent 60%), ${c[0]}; }
.phone.p-${k}.${t} .tabbar { background:${c[14]}; } .phone.p-${k}.${t} .sheet { background:${c[15]}; }
.phone.p-${k}.${t} .cartbar .go { background:${c[8]}; color:${c[7]}; }`).join('')).join('\n')
css += `
/* Неон: плоско, без стекла и свечения */
.phone.p-neon :is(${SURF}) { backdrop-filter: none; box-shadow: none; }
.phone.p-neon.dark :is(${SURF}) { background: #181a1f; }
.phone.p-neon .plus, .phone.p-neon .tplus, .phone.p-neon .btn { box-shadow: none; }
.phone.p-neon .tabbar { backdrop-filter: none; }
/* Монохром 3.0 */
.phone.p-mono3.dark { background: radial-gradient(70% 38% at 50% -6%, #3d3d45 0%, transparent 72%), radial-gradient(60% 35% at 100% 105%, #26262d 0%, transparent 70%), linear-gradient(180deg, #111114, #0b0b0d); }
.phone.p-mono3.light { background: radial-gradient(70% 40% at 50% -6%, #ffffff 0%, transparent 72%), #ecece8; }
.phone.p-mono3.dark :is(${SURF}) { background: linear-gradient(180deg, rgba(255,255,255,.075) 0%, rgba(255,255,255,.025) 100%); box-shadow: inset 0 1px 0 rgba(255,255,255,.14), inset 0 -1px 0 rgba(0,0,0,.5), 0 16px 36px #000b; backdrop-filter: blur(24px); }
.phone.p-mono3.light :is(${SURF}) { background: linear-gradient(180deg, #ffffff, #f6f6f3); box-shadow: inset 0 1px 0 #fff, 0 10px 26px #00000014, 0 2px 6px #0000000d; border-color: transparent; }
.phone.p-mono3 .plus:not(.added), .phone.p-mono3 .tplus:not(.added), .phone.p-mono3 .btn { box-shadow: inset 0 1px 0 rgba(255,255,255,.7), 0 10px 26px var(--glow); }
/* Асфальт + стальной синий 2.0 */
.phone.p-ab2.dark { background: repeating-linear-gradient(45deg, rgba(255,255,255,.018) 0 2px, transparent 2px 6px), repeating-linear-gradient(-45deg, rgba(0,0,0,.3) 0 2px, transparent 2px 6px), radial-gradient(90% 50% at 100% 0%, #1e3046 0%, transparent 60%), radial-gradient(70% 40% at 0% 100%, #18222c 0%, transparent 60%), #0f1214; }
.phone.p-ab2.dark :is(${SURF}) { background: linear-gradient(170deg, #20262c 0%, #161a1e 55%, #1a1f24 100%); box-shadow: inset 0 1px 0 rgba(255,255,255,.11), inset 0 -1px 0 rgba(0,0,0,.55), 0 12px 30px #000b; }
.phone.p-ab2.light :is(${SURF}) { background: linear-gradient(180deg, #ffffff, #eef1f4); box-shadow: inset 0 1px 0 #fff, 0 8px 22px #1b2a3a1f; border-color: rgba(0,0,0,.05); }
.phone.p-ab2 .plus:not(.added), .phone.p-ab2 .tplus:not(.added), .phone.p-ab2 .btn { box-shadow: inset 0 1px 0 rgba(255,255,255,.55), 0 8px 22px var(--glow); }
/* Карбон 2.0 + ярко-красные значки */
.phone.p-cr1.dark { background: repeating-linear-gradient(45deg, rgba(255,255,255,.022) 0 2px, transparent 2px 6px), repeating-linear-gradient(-45deg, rgba(0,0,0,.35) 0 2px, transparent 2px 6px), radial-gradient(90% 50% at 100% 0%, #262b30 0%, transparent 60%), #08090a; }
.phone.p-cr1.dark :is(${SURF}) { background: linear-gradient(180deg, #1c1f22 0%, #121416 100%); box-shadow: inset 0 1px 0 rgba(255,255,255,.12), inset 0 -1px 0 rgba(0,0,0,.6), 0 12px 30px #000c; }
.phone.p-cr1.light :is(${SURF}) { background: linear-gradient(180deg, #f7f8f9, #e6e8eb); box-shadow: inset 0 1px 0 #fff, 0 8px 22px #0000001f; border-color: rgba(0,0,0,.06); }
.phone.p-cr1 .plus, .phone.p-cr1 .tplus, .phone.p-cr1 .btn { box-shadow: inset 0 1px 0 rgba(255,255,255,.6), 0 8px 20px #0008; }
.phone.p-cr1 .badge { background: #e3121c; color: #fff; box-shadow: 0 0 12px #e3121c88; }
.phone.p-cr1 .progress i.on { background: #e3121c; }
.phone.p-cr1 .tab.on svg, .phone.p-cr1 .tab.on { color: #e3121c !important; }
/* Значки ⓘ и истории на видео красные только в тёмной теме; в светлой — как в остальном дизайне (решение владельца). */
.phone.p-cr1.dark .cards .cactions .mini, .phone.p-cr1 .shelf-h span { color: #ff3b42 !important; }
.phone.p-cr1 .plus.added, .phone.p-cr1 .tplus.added { color: #e3121c; }
.phone.p-cr1 .set.done .check { background: #e3121c; color: #fff; }
.phone.p-cr1 .ring { color: #e3121c; }
`
export const CSS = css
export const ORDER = [[null, 'Глубина + Неон'], ['neon', 'Неон'], ['deep', 'Глубина'], ['ocean', 'Океан'], ['champagne', 'Шампань'], ['emerald', 'Изумруд'], ['ab2', 'Асфальт + сталь. синий'], ['mono3', 'Монохром 3.0'], ['cr1', 'Карбон + красный']]
