class Shader{
    constructor(gl){
        this.gl = gl;
        this.shaders = [];
    }
    createShader(type,source){
        var gl = this.gl;
        var shader = gl.createShader(type);

        gl.shaderSource(shader,source);
        gl.compileShader(shader);

        if (gl.getShaderParameter(shader,gl.COMPILE_STATUS))return shader;
        console.log(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
    }
    createProgram(){
        var gl = this.gl;
        var program = gl.createProgram();
        
        gl.attachShader(program,this.shaders[0]);
        gl.attachShader(program,this.shaders[1]);

        gl.linkProgram(program);
        
        if (gl.getProgramParameter(program,gl.LINK_STATUS))return program;
        console.log(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
    }
}