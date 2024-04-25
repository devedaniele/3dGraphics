var  gl = new Graphics();
document.body.appendChild(gl.gl.canvas);

gl.size = 2;

gl.shaderIndexes = gl.createShader(document.getElementById("vertex").innerHTML,document.getElementById("fragement").innerHTML);
gl.createProgram();

gl.init();

var resolution = gl.gl;

function render(){
    window.requestAnimationFrame(render);
    
    gl.setSize(window.innerWidth,window.innerHeight);
    gl.clear();
    gl.render([1, 1, -1, -1, -1, 1, 1, -1, 1, 1, -1, -1]);
}

window.requestAnimationFrame(render);