/*
var a = Number(prompt("Digite o primeiro numero"))
var b = Number(prompt("Digite o seg numero"))
var c = Number(prompt("Digite o ter numero"))
 if(a>b && b>c )
 {alert(`A ordem é ${a} - ${b} - ${c}` )}


 if(a>b && a>c && c>b )
 {alert(`A ordem é: ${a} - ${c} - ${b}` )}

 if(b>a && a>c)
 {alert(`A ordem é: ${b} - ${a} - ${c}` )}

 if(b>a && c>a && b>c)
 {alert(`A ordem é: ${b} - ${c} - ${a}` )}

 if(c>a && a>b)
 {alert(`A ordem é: ${c} - ${a} - ${b} `)}

 if(c>a && b>a && c>b)
 {alert(`A ordem é: ${c} - ${b} - ${a} `)}
 */
/*
 var idade = (prompt("Digite sua idade"))

 if(idade >= 10 && idade <=14){
     alert("Infantil")
 }
 if(idade >= 15 && idade <=17){
     alert("Adolecente")
   
 }
 if(idade >= 18 && idade <=25){
     alert("Adulto")
    
 }
 */
 var n = prompt("Digite um numero");
var total = n/2;

if(n && 1){
    alert(`Esse número é Impar e elevado ao quadrado é: ${n**2}`);
} else {
    alert(`Esse número é Par ${Math.sqrt(n)}`);
}