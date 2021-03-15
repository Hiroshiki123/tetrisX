const canvas = document.getElementById('painel');
const ctx = canvas.getContext('2d');
ctx.canvas.width=coluna*tam_bloco;
ctx.canvas.height=linha*tam_bloco;
ctx.scale(tam_bloco,tam_bloco);

let painel = new Painel() ;

function play () {
    painel.reset();
    let peca = new Peca(ctx);
    peca.desenho();
    painel.peca = peca;
    console.table(painel.grid);
}
document.addEventListener('keydown', event =>{
    if (movimento[event.keyCode]) {
        event.preventDefault();
        let p=movimento[event.keyCode] (painel.peca);
        if(painel.validar(p)) {
            painel.peca.mover(p);
            ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
            painel.peca.desenho();
        }
    }

if(event.keyCode === KEY.Space) {
    p = movimento[KEY.Down](painel.peca);
    while (painel.validar(p)) {
        painel.peca.mover(p);
        p = movimento[KEY.Down] (painel.peca);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        painel.peca.desenho();
    }
}
});

