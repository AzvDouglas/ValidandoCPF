function ValidaCPF(cpfEnviado) {
	Object.defineProperty(this, 'cpfLimpo', {
		enumerable: true,
		get: function() {
			return cpfEnviado.replace(/\D+/g, ''); /*==> '/g'  indica achar todas as ocorrências da regex 	==> '\D'means “not digit” 	==>	*/
		} 
	});
}

ValidaCPF.prototype.valida = function() {
	if(typeof this.cpfLimpo === 'undefined') return false;
	if(this.cpfLimpo.length !== 11) return false;
	if(this.isSequencia()) return false;

	const cpfParcial = this.cpfLimpo.slice(0, -2);
	const J = this.criaDigito(cpfParcial);		//Primeiro digito depois do traço
	const K = this.criaDigito(cpfParcial + J);	//Segundo digito depois do traço

	const novoCPF = cpfParcial + J + K;

	return novoCPF === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
	const cpfArray = Array.from(cpfParcial);

	let regressivo = cpfArray.length + 1;
	const totalParcial1 = cpfArray.reduce((ac, val) => {
		ac += (regressivo * Number(val));
		regressivo--;
		return ac;
	}, 0);	//console.log(totalParcial1);

	const J = 11 - (totalParcial1 % 11); 	//console.log(J);
	return J > 9 ? '0' : String(J); 
};

ValidaCPF.prototype.isSequencia = function () {
	const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
	return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('070.987.720-03');

if (cpf.valida()) {
	console.log ('CPF Válido');
} else {
	console.log('CPF Inválido!')
}


/* cpf1 = '705.484.450-52';
cpf2 = '070.987.720-03';
cpfRandom = '420.420.420-13';
let cpfLimpo = cpf.replace(/\D+/g, ' ');  
cpfArray = Array.from(cpfLimpo); //transformando em array para poder usar o método .map */
