/*Para botones encriptar y desencriptar*/ 
document.getElementById('botonEncriptar').addEventListener('click', function() {
  document.getElementById('pregunta').style.display = 'none';
  document.getElementById('img-batman').style.display = 'none';
  document.getElementById('img-acertijo').style.display = 'block';

  let inputText = document.getElementById('textoDeEntrada').value;
  let outputText = '';
  let caracMayNum = /[!@#$%^&*(),.?":{}|<>A-Z0-9]/g;
  
  if (inputText.trim() === ''){
      outputText = ('No has ingresado un texto.');
      document.getElementById('textoDeSalida').value = outputText;
      } else if (caracMayNum.test(inputText)) {
        outputText = ('Recuerda que el texto no debe contener caracteres especiales ni mayúsculas.');
        document.getElementById('textoDeSalida').value = outputText;
        }else {
            outputText = encriptar(inputText);
            document.getElementById('textoDeSalida').value = outputText;
          } 
})

document.getElementById('botonDesencriptar').addEventListener('click', function() {
  document.getElementById('pregunta').style.display = 'none';
  document.getElementById('img-batman').style.display = 'block';

  let inputText = document.getElementById('textoDeEntrada').value;
  let outputText = '';
    
  if (inputText.trim() === ""){
      outputText = ('No has ingresado un texto.')
      document.getElementById('textoDeSalida').value = outputText;
      }else {
        outputText = desencriptar(inputText);
        document.getElementById('textoDeSalida').value= desencriptar(inputText);
        limpiar();
      }
  }   
)

/*Para botón copiar*/
document.getElementById('botonCopiar').addEventListener('click', function() {
  document.getElementById('img-acertijo').style.display = 'none';
  document.getElementById('img-batman').style.display = 'none';
  document.getElementById('pregunta').style.display = 'block';

  var textoEncr = document.getElementById('textoDeSalida').value;
  navigator.clipboard.writeText(textoEncr);
  document.getElementById('textoDeEntrada').value = textoEncr;
  document.getElementById('textoDeSalida').value = '';
})

/*Para botón Nuevo*/
document.getElementById('botonNuevo').addEventListener('click', function() {
  document.getElementById('img-acertijo').style.display = 'none';
  document.getElementById('img-batman').style.display = 'none';
  document.getElementById('pregunta').style.display = 'block';
  document.querySelector('#textoDeSalida').value = 'No se ha encontrado ningún texto.';
})

/*Funciones de Encriptado*/
function encriptar(texto) {
  let encripta = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat'};
  return texto.split('').map(caracter => encripta[caracter] || caracter).join('');
}

function desencriptar(texto) {
  let desencrip = {'enter': 'e', 'imes': 'i', 'ai': 'a','ober': 'o', 'ufat': 'u'};
  return texto.replace(/enter|imes|ai|ober|ufat/g, match => desencrip[match]);
}
  
/*funcion para limpiar*/
function limpiar (){
  document.querySelector('#textoDeEntrada').value = '';
}

