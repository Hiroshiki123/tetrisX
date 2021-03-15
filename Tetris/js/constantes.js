'use strict';
const coluna = 10;
const linha = 20;
const tam_bloco = 30;
const KEY ={
    Left:37,
    Right:39,
    Down: 40,
    Space: 32
}
Object.freeze(KEY);
const movimento = {
    [KEY.Left]: p => ({ ...p, x: p.x - 1}),
    [KEY.Right]: p => ({ ...p, x: p.x + 1}),
    [KEY.Down]: p => ({ ...p, y: p.y + 1}),
    [KEY.Space]: p => ({ ...p, y: p.y + 1})
};