function inserir(num){
    var numero = document.querySelector('#res')
    numero.value += num
}
function resultado(){
    var calcular = document.querySelector('#res')
    var calculo = eval(calcular.value)
    calcular.value = calculo
}
function clean(){
    document.getElementById('res').value = ""

}
function delet(){
    let texto = res.value;
    res.value = texto.slice(0, -1);
}