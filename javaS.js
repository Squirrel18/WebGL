var gl; // A global variable for the WebGL context

function loadGL() {
    var canvas = document.getElementById("canvasGL");

    // Initialize the GL context
    gl = initWebGL(canvas);
    
    // Only continue if WebGL is available and working
    if (!gl) {
        alert("No webGL");
        return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Enable depth testing
    gl.enable(gl.DEPTH_TEST);
    // Near things obscure far things
    gl.depthFunc(gl.LEQUAL);
    // Clear the color as well as the depth buffer.
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}
