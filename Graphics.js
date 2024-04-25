class Graphics{
    constructor(){
        this.gl = document.createElement("canvas").getContext("webgl2");
        this.shader = new Shader(this.gl);
        this.shaderIndexes = [0,0];
        this.vertexes = [];
        this.fragements = [];
        this.programs = [];
        this.size = 3;
    }
    createShader(vertex,fragement){
        var i =  this.vertexes.length,
            ip = this.fragements.length,
            gl = this.gl,
            shader = this.shader;

        vertex = shader.createShader(gl.VERTEX_SHADER,vertex);
        fragement = shader.createShader(gl.FRAGMENT_SHADER,fragement);

        if (vertex)this.vertexes[i] = vertex;
        else{
            i =  this.shaderIndexes[0];
        }
        if (fragement)this.fragements[ip] = fragement;
        else{
            ip =  this.shaderIndexes[1];
        }

        return [i,ip];
    }
    currentShader(i,ip){
        this.shaderIndexes = [i,ip];

        this.shader.shaders[0] = this.vertexes[i];
        this.shader.shaders[1] = this.fragements[ip];

        return this;
    }
    createProgram(){
        this.currentShader(this.shaderIndexes[0],this.shaderIndexes[1]);
        var program = this.shader.createProgram();

        if (program){
            this.programs.push(program);
        }
    }
    init(i,stride,offset,normalize){
        
        i = i ? i : 0;
        stride = stride ? stride : 0;
        offset = offset ? offset : 0;
        normalize = normalize ? normalize : false;
        
        var program = this.programs[i];
        var gl = this.gl;
        
        gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer());
        gl.bindVertexArray(gl.createVertexArray());

        gl.enableVertexAttribArray(gl.getAttribLocation(program,"a_position"));
        gl.vertexAttribPointer(gl.getAttribLocation(program,"a_position"),this.size,gl.FLOAT,normalize,stride,offset);

        gl.useProgram(program);

        return this;
    }
    setSize(width,height){
        this.gl.canvas.width = width;
        this.gl.canvas.height = height;

        this.gl.viewport(0,0,width,height);

        return this;
    }
    clear(){
        this.gl.clearColor(0,0,0,1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        return this;
    }
    render(positions){
        var gl = this.gl;

        gl.uniform2f(gl.getUniformLocation(this.programs[0],"u_resolution"),gl.canvas.width,gl.canvas.height);

        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(positions),gl.STATIC_DRAW);

        gl.drawArrays(gl.TRIANGLES,0,positions.length/this.size);
    }
}