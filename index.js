        function aleatorio(min, max) {
            return  Math.floor( Math.random() * (max - min + 1) + min)
        }
        function eleccion(jugada) {
            let resultado = ""
            if(jugador == 1) {
                resultado = "Piedra 👊 "
            } else if(jugador == 2) {
                resultado = "Papel 📄 "
            } else if(jugador == 3) {
                resultado = "Tijeras ✂ "
            } else {
                resultado = "Mal elegido"
            }
            return resultado
        }

        let jugador = 0;
        let pc = aleatorio(1,3)
        jugador = prompt("Elige: 1 para piedra, 2 para papel y 3 para tijera");
        
        alert("PC elige: " + eleccion(pc))
        alert("Tu eliges: " + eleccion(jugador))
    // Combate
        if(pc == jugador) {
            alert("Empate")
        } else if(jugador == 1 && pc == 3) {
            alert("Ganaste")
        } else if(jugador == 2 && pc == 1) {
            alert("ganaste")
        } else if(jugador == 3 && pc == 1){
            alert("Perdiste")
        } else {
            alert("perdiste")
        }

