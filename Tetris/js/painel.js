class Painel {

    //reinicia o painel ao iniciar um jogo novo
    reset() {
        this.grid =this.getPainelVazio();
    } 

    //retorna a matriz preenchida com zeros
    getPainelVazio(){
    return Array.from(
        {length: linha}, () => Array(coluna) .fill(0)
    );
    }
    validar(p) {
        return p.shape.every((row, dy) => {
            return row.every((value, dx) => {
                let x = p.x +dx;
                let y = p.y + dy;
                return (
                    this.grid[y] && this.grid[y] [x] === 0 ||
                    (x >= 0 && x <coluna &&
                     y <= linha)
                );
            })

        })
        
    }
}