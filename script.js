let x = parseInt(prompt('Digite seu saldo:'));
let y = parseInt(prompt('Digite o valor da compra:'));

if(x>=y)
{
    let saldo = x-y;
    alert(`Compra realizada com sucesso! Saldo atual de ${saldo} reais`);
}
else if(x<y)
{
    alert(`Não foi possivel realizar a compra, seu saldo é insuficiente! Saldo atual de ${x} reais`);
}