var gl; //Variable global del contexto webGL

function loadGL() {
    //Seleccionar el objeto canvas
    var canvas = document.getElementById("canvasGL");

    //Iniciar el contexto webGL
    gl = initWebGL(canvas);
    
    //Verifica si webGL puede iniciar
    if (!gl) {
        alert("No webGL");
        return;
    }

    //Conficura el color del canvas
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    //Permite habilitar el test de profundidad
    gl.enable(gl.DEPTH_TEST);
    //Las cosas cercanas obscurecen las cosas lejanas
    gl.depthFunc(gl.LEQUAL);
    // Clear the color as well as the depth buffer.
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

function initWebGL(canvas) {
  gl = null;
  
  //Escoge el contexto apropiado
  gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  
  //Si no se seleciona ningún contexto
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser may not support it.");
  }
  
  return gl;
}
