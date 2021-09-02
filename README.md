<h1> ValidandoCPF </h1>
<h2> Script em JavaScript verificando se um número de CPF é válido </h2>

Para conferir se um CPF no formato "ABC.DEF.GHI-JK" é válido existe um cálculo com os 9 primeiros dígitos 
onde o valor obtido é o décimo dígito 'J' (primeiro após o traço), da seguinte forma:<br/>
11*A + 10*B + 9*C + 8*D + 7*E + 6*F + 5*G + 4*H + 3*I = TotalParcial1 <br/>
Onde 11 - (TotalParcial1 % 11) = J; e se J>9 consideramos J = 0. [Primeiro dígito após o traço] <br/>
E para verificar 'K', o segundo dígito após o traço, acrescentemos 'J' na fórmula da seguinte forma:<br/>
11*A + 10*B + 9*C + 8*D + 7*E + 6*F + 5*G + 4*H + 3*I + 2*J = TotalParcial2 <br/>
Onde 11 - (TotalParcial2 % 11) = K; e se K>9 consideramos K = 0. [Segundo dígito após o traço] <br/>
<br/>
Se J ou K calculados forem diferentes dos fornecidos pelo usuário o CPF não é válido.
