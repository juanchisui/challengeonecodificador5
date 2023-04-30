const originalTextarea = document.getElementById('original-textarea');
const encriptadoTextarea = document.getElementById('encrypted-textarea');
const BotonEncriptar = document.getElementById('encrypt-button');
const BotonDesencriptar = document.getElementById('decrypt-button');
const BotonCopiar = document.getElementById('copy-button')




function encriptar(text) {
    // Reemplazar las letras según el enunciado
    const encriptar = text
      
      .replace(/e/gi, 'enter')
      .replace(/i/gi, 'imes')
      .replace(/o/gi, 'ober')
      .replace(/u/gi, 'ufat')
      .replace(/a/gi, "ai")
      .replace(/é/gi, 'enter')
      .replace(/í/gi, 'imes')
      .replace(/ó/gi, 'ober')
      .replace(/ú/gi, 'ufat')
      .replace(/á/gi, "ai");
  
    return encriptar;
  }
  
  
  function Desencriptar(text) {
    
    const desencriptar = text
      
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u')
      .replace(/ai/g, "a");
  
    return desencriptar;
  }
  
  
  function EventoEncriptar() {
    
    const TextoOriginal = originalTextarea.value;
  
    const TextoEncriptado = encriptar(TextoOriginal);
    
    encriptadoTextarea.value = TextoEncriptado;
    originalTextarea.value = ''
  }

 
  function EventoDesencriptar() {
   
    const TextoOriginal = originalTextarea.value;
   
    const TextoDesencriptado = Desencriptar(TextoOriginal);
    
    originalTextarea.value = TextoDesencriptado

  }

  function CopiarTexto (){
    const TextoOrigen = encriptadoTextarea.value

    originalTextarea.value = TextoOrigen
    
    encriptadoTextarea.value = ''
    
  }

  
  
  
  
  
  BotonEncriptar.addEventListener('click', EventoEncriptar);
  BotonDesencriptar.addEventListener('click', EventoDesencriptar);
  BotonCopiar.addEventListener('click', CopiarTexto);
  
  