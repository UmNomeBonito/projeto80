var listaGuest = [];

function click1() {
    var names=document.getElementById("id").value;
    listaGuest.push(names);
    var comprimento_lista=listaGuest.length;
    document.getElementById("nomes1").innerHTML=listaGuest.toString();
}

function Mostrar()
{
var i =listaGuest.join("<br>");
document.getElementById("paragrafo").innerHTML=i.toString();

}

function listaDESGRAMADA()
{
listaGuest.sort()
var a =listaGuest.join("<br>");
document.getElementById("DIV_FINAL_MUAHAHAHA").innerHTML=a.toString();
}

function click2()
{
    var pesq =document.getElementById("id2").value;
    var um = 0;
    var lupforno;
    for(lupforno = 0; lupforno<listaGuest.length; lupforno++)
    {
        if( pesq == listaGuest[lupforno]){
            um=um+1;
        }
    }
document.getElementById("banana").innerHTML="nome encontrado " +um+ " vez(es)";
}