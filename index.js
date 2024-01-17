function calculoDoNivel(vitorias, derrotas) {
	//calcula o saldo de rankeadas
    let historicoDePartida= vitorias - derrotas
    //determina o nível com base na quantidade de vitórias
    let nivel
    //estrutura de decisão
    if(vitorias <= 10){
		nivel = "Ferro"
	}else if (vitorias >= 11 && vitorias <= 20){
		nivel = "Bronze"
	}else if (vitorias >=  21 && vitorias <= 50){
		nivel = "Prata"
	}else if (vitorias >= 51 && vitorias <= 80){
		nivel = "Ouro"
	}else if (vitorias >= 81 && vitorias <= 90){
		nivel = "Diamante"
	}else if (vitorias >= 91 && vitorias <= 100){
		nivel = "Lendario"
	}else{
		nivel = "Imortal"
	}
	return { historicoDePartida, nivel}
 }

const { historicoDePartida, nivel } = calculoDoNivel(86,26)
   //mensagem final
        console.log(`O herói tem um saldo de ${historicoDePartida} e está no nível ${nivel}`)
