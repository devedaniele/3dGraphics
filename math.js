class Vec2{
    constructor(x,y){
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }
    set(x,y){
        this.x = x;
        this.y = y;

        return this;
    }
    length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    normalize(){
        var l = this.length() != 0 ? this.length() : 1;

        this.x /= l;
        this.y /= l;

        return this;
    }
    add(v){
        this.x += v.x;
        this.y += v.y;

        return this;
    }
    sub(v){
        this.x -= v.x;
        this.y -= v.y;

        return this;
    }
    multiply(s){
        this.x *= s;
        this.y *= s;

        return this;
    }
    dot(v){
        return this.x * v.x + this.y * v.y;
    }
    angle(v){
        return Math.acos(this.dot(v)/(this.length() * v.length()));
    }
    project(v){
        return this.dot(v)/v.length();
    }
    toArray(array = [],i = 0){
        array[i] = this.x;
        array[i + 1] = this.y;

        return array;
    }
    fromArray(array,i = 0){
        this.x = array[i];
        this.y = array[i + 1];

        return this;
    }
    copy(v){
        this.x = v.x;
        this.y = v.y;

        return this;
    }
    clone(){
        return new this.constructor().copy(this);
    }
}

class Vec3{
    constructor(x,y,z){
        this.x = x ? x : 0;
        this.y = y ? y : 0;
        this.z = z ? z : 0;
    }
    set(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;

        return this;
    }
    length(){
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    normalize(){
        var l = this.length() ? this.length() : 1;

        this.x /= l;
        this.y /= l;
        this.z /= l;

        return this;
    }
    add(v){
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;

        return this;
    }
    sub(v){
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;

        return this;
    }
    multiply(s){
        this.x *= s;
        this.y *= s;
        this.z *= s;

        return this;
    }
    dot(v){
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    angle(v){
        return Math.acos(this.dot(v)/(this.length() * v.length()));
    }
    project(v){
        return this.dot(v)/v.length();
    }
    cross(v){
        var x = this.x;
        var y = this.y;

        this.x = y * v.z - v.y * this.z;
        this.y = v.x * this.z - x * v.z;
        this.z = x * v.y - v.x * y;

        return this;
    }
    toArray(array = [],i = 0){
        array[i] = this.x;
        array[i + 1] = this.y;
        array[i + 2] = this.z;

        return array;
    }
    fromArray(array,i = 0){
        this.x = array[i];
        this.y = array[i + 1];
        this.z = array[i + 2];

        return this;
    }
    copy(v){
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;

        return this;
    }
    clone(){
        return new this.constructor().copy(this);
    }
}

class Vec4{
    constructor(x,y,z,w){
        this.x = x ? x : 0;
        this.y = y ? y : 0;
        this.z = z ? z : 0;
        this.w = w ? w : 0;
    }
    set(x,y,z,w){
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;

        return this;
    }
    length(){
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    normalize(){
        var l = this.length() ? this.length() : 1;

        this.x /= l;
        this.y /= l;
        this.z /= l;
        this.w /= l;

        return this;
    }
    add(v){
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        this.w += v.w;

        return this;
    }
    sub(v){
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        this.w -= v.w;

        return this;
    }
    multiply(s){
        this.x *= s;
        this.y *= s;
        this.z *= s;
        this.w *= s;

        return this;
    }
    dot(v){
        return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
    }
    angle(v){
        return Math.acos(this.dot(v)/(this.length() * v.length()));
    }
    project(v){
        return this.dot(v)/v.length();
    }
    /* cross(v){
        var x = this.x;
        var y = this.y;

        this.x = y * v.z - v.y * this.z;
        this.y = v.x * this.z - x * v.z;
        this.z = x * v.y - v.x * y;

        return this;
    } */
    toArray(array = [],i = 0){
        array[i] = this.x;
        array[i + 1] = this.y;
        array[i + 2] = this.z;
        array[i + 3] = this.w;

        return array;
    }
    fromArray(array,i = 0){
        this.x = array[i];
        this.y = array[i + 1];
        this.z = array[i + 2];
        this.w = array[i + 3];

        return this;
    }
    copy(v){
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        this.w = v.w;

        return this;
    }
    clone(){
        return new this.constructor().copy(this);
    }
}

class Quaternion{
    constructor(w,x,y,z){
        this.w = w ? w : 1;
        this.x = x ? x : 0;
        this.y = y ? y : 0;
        this.z = z ? z : 0;
    }
    set(w,x,y,z){
        this.w = w;
        this.x = x;
        this.y = y;
        this.z = z;

        return this;
    }
    length(){
        return Math.sqrt(this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z);
    }
    setFromAxisAngle(axis,angle){
        this.w = Math.cos(angle/2);
        this.x = axis.x * Math.sin(angle/2);
        this.y = axis.y * Math.sin(angle/2);
        this.z = axis.z * Math.sin(angle/2);
        
        return this;
    }
    identity(){
        this.w = 1;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        
        return this;
    }
    normalize(){
        var l = this.length();
        
        if (l === 0){
            this.w = 1;
            
            return this;
        }
        
        this.w /= l;
        this.x /= l;
        this.y /= l;
        this.z /= l;
        
        return this;
    }
    add(q){
        this.w += q.w;
        this.x += q.x;
        this.y += q.y;
        this.z += q.z;
        
        return this;
    }
    sub(q){
        this.w -= q.w;
        this.x -= q.x;
        this.y -= q.y;
        this.z -= q.z;
        
        return this;
    }
    multiplyScalar(s){
        this.w *= s;
        this.x *= s;
        this.y *= s;
        this.z *= s;
        
        return this;
    }
    conjugate(){
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        
        return this;
    }
    invert(){
        var l = this.length();
        
        l = l * l;
        
        this.w /= l;
        this.x /= -l;
        this.y /= -l;
        this.z /= -l;
        
        return this;
    }
    multiply(q){
        var w = this.w,x = this.x,y = this.y;
        
        this.w = w * q.w - x * q.x - y * q.y - this.z * q.z;
        this.x = w * q.x + x * q.w + y * q.z - this.z * q.y;
        this.y = w * q.y - x * q.z + y * q.w + this.z * q.x;
        this.z = w * q.z + x * q.y - y * q.x + this.z * q.w;
        
        return this;
    }
    dot(q){
        return this.w * q.w + this.x * q.x + this.y * q.y + this.z * q.z;
    }
    angle(q){
        return Math.acos((this.w * q.w + this.x * q.x + this.y * q.y + this.z * q.z)/(this.length() * q.length()));
    }
    copy(q){
        this.w = q.w;
        this.x = q.x;
        this.y = q.y;
        this.z = q.z;
        
        return this;
    }
    clone(){
        return new this.constructor(this.w,this.x,this.y,this.z);
    }
    toArray(array = [],offset = 0){
        array[offset] = this.w;
        array[offset + 1] = this.x;
        array[offset + 2] = this.y;
        array[offset + 3] = this.z;
        
        return array;
    }
}

class Mat3{
    constructor(){
        this.elements  = [1,0,0,0,1,0,0,0,1];
    }
    set(n11,n12,n13,n21,n22,n23,n31,n32,n33){
        this.elements[0] = n11;
        this.elements[1] = n12;
        this.elements[2] = n13;
        this.elements[3] = n21;
        this.elements[4] = n22;
        this.elements[5] = n23;
        this.elements[6] = n31;
        this.elements[7] = n32;
        this.elements[8] = n33;

        return this;
    }
    identity(){
        this.elements[0] = 1;
        this.elements[1] = 0;
        this.elements[2] = 0;
        this.elements[3] = 0;
        this.elements[4] = 1;
        this.elements[5] = 0;
        this.elements[6] = 0;
        this.elements[7] = 0;
        this.elements[8] = 1;

        return this;
    }
    add(m){
        this.elements[0] += m.elements[0];
        this.elements[1] += m.elements[1];
        this.elements[2] += m.elements[2];
        this.elements[3] += m.elements[3];
        this.elements[4] += m.elements[4];
        this.elements[5] += m.elements[5];
        this.elements[6] += m.elements[6];
        this.elements[7] += m.elements[7];
        this.elements[8] += m.elements[8];

        return this;
    }
    sub(m){
        this.elements[0] -= m.elements[0];
        this.elements[1] -= m.elements[1];
        this.elements[2] -= m.elements[2];
        this.elements[3] -= m.elements[3];
        this.elements[4] -= m.elements[4];
        this.elements[5] -= m.elements[5];
        this.elements[6] -= m.elements[6];
        this.elements[7] -= m.elements[7];
        this.elements[8] -= m.elements[8];

        return this;
    }
    transpose(){
        var tmp = this.elements[1];

        this.elements[1] = this.elements[3];
        this.elements[3] = tmp;
        tmp = this.elements[2];
        this.elements[2] = this.elements[6];
        this.elements[6] = tmp;
        tmp = this.elements[5];
        this.elements[5] = this.elements[7];
        this.elements[7] = tmp;

        return this;
    }
    det(){
        return this.elements[0] * (this.elements[4] * this.elements[8] - this.elements[7] * this.elements[5]) - this.elements[1] * (this.elements[3] * this.elements[8] - this.elements[6] * this.elements[5]) + this.elements[2] * (this.elements[3] * this.elements[7] - this.elements[6] * this.elements[4]);
    }
    multiplyScalar(s){
        this.elements[0] *= s;
        this.elements[1] *= s;
        this.elements[2] *= s;
        this.elements[3] *= s;
        this.elements[4] *= s;
        this.elements[5] *= s;
        this.elements[6] *= s;
        this.elements[7] *= s;
        this.elements[8] *= s;

        return this;
    }
    multiply(m){
        var  n11 = this.elements[0];
        var  n12 = this.elements[1];
        var  n13 = this.elements[2];
        var  n21 = this.elements[3];
        var  n22 = this.elements[4];
        var  n23 = this.elements[5];
        var  n31 = this.elements[6];
        var  n32 = this.elements[7];
        var  n33 = this.elements[8];

        this.elements[0] = n11 * m.elements[0] + n12 * m.elements[3] + n13 * m.elements[6];
        this.elements[1] = n11 * m.elements[1] + n12 * m.elements[4] + n13 * m.elements[7];
        this.elements[2] = n11 * m.elements[2] + n12 * m.elements[5] + n13 * m.elements[8];
        this.elements[3] = n21 * m.elements[0] + n22 * m.elements[3] + n23 * m.elements[6];
        this.elements[4] = n21 * m.elements[1] + n22 * m.elements[4] + n23 * m.elements[7];
        this.elements[5] = n21 * m.elements[2] + n22 * m.elements[5] + n23 * m.elements[8];
        this.elements[6] = n31 * m.elements[0] + n32 * m.elements[3] + n33 * m.elements[6];
        this.elements[7] = n31 * m.elements[1] + n32 * m.elements[4] + n33 * m.elements[7];
        this.elements[8] = n31 * m.elements[2] + n32 * m.elements[5] + n33 * m.elements[8];
        
        return this;
    }
    adj(){
        var c11 = this.elements[4] * this.elements[8] - this.elements[7] * this.elements[5];
        var c12 = this.elements[6] * this.elements[5] - this.elements[3] * this.elements[8];
        var c13 = this.elements[3] * this.elements[7] - this.elements[6] * this.elements[4];

        var c21 = this.elements[7] * this.elements[2] - this.elements[1] * this.elements[8];
        var c22 = this.elements[0] * this.elements[8] - this.elements[6] * this.elements[2];
        var c23 = this.elements[6] * this.elements[1] - this.elements[0] * this.elements[7];

        var c31 = this.elements[1] * this.elements[5] - this.elements[4] * this.elements[2];
        var c32 = this.elements[3] * this.elements[2] - this.elements[0] * this.elements[5];
        var c33 = this.elements[0] * this.elements[4] - this.elements[3] * this.elements[1];

        this.elements[0] = c11;
        this.elements[1] = c21;
        this.elements[2] = c31;
        this.elements[3] = c12;
        this.elements[4] = c22;
        this.elements[5] = c32;
        this.elements[6] = c13;
        this.elements[7] = c23;
        this.elements[8] = c33;

        return this;
    }
    invert(){
        var det = this.det();

        if (det == 0)return this;

        var c11 = this.elements[4] * this.elements[8] - this.elements[7] * this.elements[5];
        var c12 = this.elements[6] * this.elements[5] - this.elements[3] * this.elements[8];
        var c13 = this.elements[3] * this.elements[7] - this.elements[6] * this.elements[4];

        var c21 = this.elements[7] * this.elements[2] - this.elements[1] * this.elements[8];
        var c22 = this.elements[0] * this.elements[8] - this.elements[6] * this.elements[2];
        var c23 = this.elements[6] * this.elements[1] - this.elements[0] * this.elements[7];

        var c31 = this.elements[1] * this.elements[5] - this.elements[4] * this.elements[2];
        var c32 = this.elements[3] * this.elements[2] - this.elements[0] * this.elements[5];
        var c33 = this.elements[0] * this.elements[4] - this.elements[3] * this.elements[1];

        this.elements[0] = c11/det;
        this.elements[1] = c21/det;
        this.elements[2] = c31/det;
        this.elements[3] = c12/det;
        this.elements[4] = c22/det;
        this.elements[5] = c32/det;
        this.elements[6] = c13/det;
        this.elements[7] = c23/det;
        this.elements[8] = c33/det;

        return this;
    }
    copy(m){
        this.elements[0] = m.elements[0];
        this.elements[1] = m.elements[1];
        this.elements[2] = m.elements[2];
        this.elements[3] = m.elements[3];
        this.elements[4] = m.elements[4];
        this.elements[5] = m.elements[5];
        this.elements[6] = m.elements[6];
        this.elements[7] = m.elements[7];
        this.elements[8] = m.elements[8];

        return this;
    }
    clone(){
        return new this.constructor().copy(this);
    }
}

class Mat4{
    constructor(){
        this.elements  = [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
    }
    set(n11,n12,n13,n14,n21,n22,n23,n24,n31,n32,n33,n34,n41,n42,n43,n44){
        this.elements[0] = n11;
        this.elements[1] = n12;
        this.elements[2] = n13;
        this.elements[3] = n14;
        this.elements[4] = n21;
        this.elements[5] = n22;
        this.elements[6] = n23;
        this.elements[7] = n24;
        this.elements[8] = n31;
        this.elements[9] = n32;
        this.elements[10] = n33;
        this.elements[11] = n34;
        this.elements[12] = n41;
        this.elements[13] = n42;
        this.elements[14] = n43;
        this.elements[15] = n44;

        return this;
    }
    identity(){
        this.elements[0] = 1;
        this.elements[1] = 0;
        this.elements[2] = 0;
        this.elements[3] = 0;
        this.elements[4] = 0;
        this.elements[5] = 1;
        this.elements[6] = 0;
        this.elements[7] = 0;
        this.elements[8] = 0;
        this.elements[9] = 0;
        this.elements[10] = 1;
        this.elements[11] = 0;
        this.elements[12] = 0;
        this.elements[13] = 0;
        this.elements[14] = 0;
        this.elements[15] = 1;

        return this;
    }
    add(m){
        this.elements[0] += m.elements[0];
        this.elements[1] += m.elements[1];
        this.elements[2] += m.elements[2];
        this.elements[3] += m.elements[3];
        this.elements[4] += m.elements[4];
        this.elements[5] += m.elements[5];
        this.elements[6] += m.elements[6];
        this.elements[7] += m.elements[7];
        this.elements[8] += m.elements[8];
        this.elements[9] += m.elements[9];
        this.elements[10] += m.elements[10];
        this.elements[11] += m.elements[11];
        this.elements[12] += m.elements[12];
        this.elements[13] += m.elements[13];
        this.elements[14] += m.elements[14];
        this.elements[15] += m.elements[15];

        return this;
    }
    sub(m){
        this.elements[0] -= m.elements[0];
        this.elements[1] -= m.elements[1];
        this.elements[2] -= m.elements[2];
        this.elements[3] -= m.elements[3];
        this.elements[4] -= m.elements[4];
        this.elements[5] -= m.elements[5];
        this.elements[6] -= m.elements[6];
        this.elements[7] -= m.elements[7];
        this.elements[8] -= m.elements[8];
        this.elements[9] -= m.elements[9];
        this.elements[10] -= m.elements[10];
        this.elements[11] -= m.elements[11];
        this.elements[12] -= m.elements[12];
        this.elements[13] -= m.elements[13];
        this.elements[14] -= m.elements[14];
        this.elements[15] -= m.elements[15];

        return this;
    }
    transpose(){
        var tmp = this.elements[1];

        this.elements[1] = this.elements[4];
        this.elements[4] = tmp;
        tmp = this.elements[2];
        this.elements[2] = this.elements[8];
        this.elements[8] = tmp;
        tmp = this.elements[3];
        this.elements[3] = this.elements[12];
        this.elements[12] = tmp;
        tmp = this.elements[6];
        this.elements[6] = this.elements[9];
        this.elements[9] = tmp;
        tmp = this.elements[7];
        this.elements[7] = this.elements[13];
        this.elements[13] = tmp;
        tmp = this.elements[11];
        this.elements[11] = this.elements[14];
        this.elements[14] = tmp;

        return this;
    }
    det(){
        var  n11 = this.elements[0];
        var  n12 = this.elements[1];
        var  n13 = this.elements[2];
        var  n14 = this.elements[3];
        var  n21 = this.elements[4];
        var  n22 = this.elements[5];
        var  n23 = this.elements[6];
        var  n24 = this.elements[7];
        var  n31 = this.elements[8];
        var  n32 = this.elements[9];
        var  n33 = this.elements[10];
        var  n34 = this.elements[11];
        var  n41 = this.elements[12];
        var  n42 = this.elements[13];
        var  n43 = this.elements[14];
        var  n44 = this.elements[15];

        var c12 = n21 * (n43 * n34 - n33  * n44) + n23 (n31 * n44 - n41 * n34) + n24 (n41 * n33 - n31 * n43);
        var c13 = n21 * (n32  * n44 - n42 * n34) - n22 (n31 * n44 - n41 * n34) + n24 (n31 * n42  - n41 * n32);
        var c14 = n21 * (n42 * n33 - n32  * n43) + n22 (n31 * n43 - n41 * n33) + n23 (n41 * n32 - n31 * n42);
        var c11 = n22 * (n33  * n44 - n43 * n34) - n23 (n32 * n44 - n42 * n34) + n24 (n32 * n43  - n42 * n33);

        var det = n11 * c11 + n12  * c12  + n13 * c13 + n14 * c14;

        return det;
    }
    multiplyScalar(s){
        this.elements[0] *= s;
        this.elements[1] *= s;
        this.elements[2] *= s;
        this.elements[3] *= s;
        this.elements[4] *= s;
        this.elements[5] *= s;
        this.elements[6] *= s;
        this.elements[7] *= s;
        this.elements[8] *= s;
        this.elements[9] *= s;
        this.elements[10] *= s;
        this.elements[11] *= s;
        this.elements[12] *= s;
        this.elements[13] *= s;
        this.elements[14] *= s;
        this.elements[15] *= s;

        return this;
    }
    multiply(m){
        var  n11 = this.elements[0];
        var  n12 = this.elements[1];
        var  n13 = this.elements[2];
        var  n14 = this.elements[3];
        var  n21 = this.elements[4];
        var  n22 = this.elements[5];
        var  n23 = this.elements[6];
        var  n24 = this.elements[7];
        var  n31 = this.elements[8];
        var  n32 = this.elements[9];
        var  n33 = this.elements[10];
        var  n34 = this.elements[11];
        var  n41 = this.elements[12];
        var  n42 = this.elements[13];
        var  n43 = this.elements[14];
        var  n44 = this.elements[15];

        this.elements[0] = n11 * m.elements[0] + n12 * m.elements[4] + n13 * m.elements[8] + n14 * m.elements[12];
        this.elements[1] = n11 * m.elements[1] + n12 * m.elements[5] + n13 * m.elements[9] + n14 * m.elements[13];
        this.elements[2] = n11 * m.elements[2] + n12 * m.elements[6] + n13 * m.elements[10] + n14 * m.elements[14];
        this.elements[3] = n11 * m.elements[3] + n12 * m.elements[7] + n13 * m.elements[11] + n14 * m.elements[15];
        this.elements[4] = n21 * m.elements[0] + n22 * m.elements[4] + n23 * m.elements[8] + n24 * m.elements[12];
        this.elements[5] = n21 * m.elements[1] + n22 * m.elements[5] + n23 * m.elements[9] + n24 * m.elements[13];
        this.elements[6] = n21 * m.elements[2] + n22 * m.elements[6] + n23 * m.elements[10] + n24 * m.elements[14];
        this.elements[7] = n21 * m.elements[3] + n22 * m.elements[7] + n23 * m.elements[11] + n24 * m.elements[15];
        this.elements[8] = n31 * m.elements[0] + n32 * m.elements[4] + n33 * m.elements[8] + n34 * m.elements[12];
        this.elements[9] = n31 * m.elements[1] + n32 * m.elements[5] + n33 * m.elements[9] + n34 * m.elements[13];
        this.elements[10] = n31 * m.elements[2] + n32 * m.elements[6] + n33 * m.elements[10] + n34 * m.elements[14];
        this.elements[11] = n31 * m.elements[3] + n32 * m.elements[7] + n33 * m.elements[11] + n34 * m.elements[15];
        this.elements[12] = n41 * m.elements[0] + n42 * m.elements[4] + n43 * m.elements[8] + n44 * m.elements[12];
        this.elements[13] = n41 * m.elements[1] + n42 * m.elements[5] + n43 * m.elements[9] + n44 * m.elements[13];
        this.elements[14] = n41 * m.elements[2] + n42 * m.elements[6] + n43 * m.elements[10] + n44 * m.elements[14];
        this.elements[15] = n41 * m.elements[3] + n42 * m.elements[7] + n43 * m.elements[11] + n44 * m.elements[15];
        
        return this;
    }
    adj(){
        var  n11 = this.elements[0];
        var  n12 = this.elements[1];
        var  n13 = this.elements[2];
        var  n14 = this.elements[3];
        var  n21 = this.elements[4];
        var  n22 = this.elements[5];
        var  n23 = this.elements[6];
        var  n24 = this.elements[7];
        var  n31 = this.elements[8];
        var  n32 = this.elements[9];
        var  n33 = this.elements[10];
        var  n34 = this.elements[11];
        var  n41 = this.elements[12];
        var  n42 = this.elements[13];
        var  n43 = this.elements[14];
        var  n44 = this.elements[15];

        var c11 = n22 * (n33  * n44 - n43 * n34) - n23 (n32 * n44 - n42 * n34) + n24 (n32 * n43 - n42 * n33);
        var c12 = n21 * (n43 * n34 - n33  * n44) + n23 (n31 * n44 - n41 * n34) + n24 (n41 * n33 - n31 * n43);
        var c13 = n21 * (n32  * n44 - n42 * n34) - n22 (n31 * n44 - n41 * n34) + n24 (n31 * n42 - n41 * n32);
        var c14 = n21 * (n42 * n33 - n32  * n43) + n22 (n31 * n43 - n41 * n33) + n23 (n41 * n32 - n31 * n42);
        
        var c21 = n12 * (n43 * n34 - n33 * n44) + n13 (n32 * n44 - n42 * n34) + n14 (n42 * n33 - n32 * n43);
        var c22 = n11 * (n33 * n44 - n43 * n34) - n13 (n31 * n44 - n41 * n34) + n14 (n31 * n43 - n41 * n33);
        var c23 = n11 * (n42 * n34 - n32 * n44) + n12 (n31 * n44 - n41 * n34) + n14 (n41 * n32 - n31 * n42);
        var c24 = n11 * (n32 * n43 - n42 * n33) - n12 (n31 * n43 - n41 * n33) + n13 (n31 * n42 - n41 * n32);
        
        var c31 = n12 * (n23  * n44 - n43 * n24) - n13 (n22 * n44 - n42 * n24) + n14 (n22 * n43 - n42 * n23);
        var c32 = n11 * (n23  * n44 - n43 * n24) - n13 (n21 * n44 - n41 * n24) + n14 (n21 * n43 - n41 * n23);
        var c33 = n11 * (n22  * n44 - n42 * n24) - n12 (n21 * n44 - n41 * n24) + n14 (n21 * n42 - n41 * n22);
        var c34 = n11 * (n22  * n43 - n42 * n23) - n12 (n21 * n43 - n41 * n23) + n13 (n21 * n42 - n41 * n22);

        var c41 = n12 * (n33 * n24 - n23  * n34) + n13 (n22 * n34 - n32 * n24) + n14 (n32 * n23 - n22 * n33);
        var c42 = n11 * (n23  * n34 - n33 * n24) - n13 (n21 * n34 - n31 * n24) + n14 (n21 * n33 - n31 * n23);
        var c43 = n11 * (n32 * n24 - n22  * n34) + n12 (n21 * n34 - n31 * n24) + n14 (n31 * n22 - n21 * n32);
        var c44 = n11 * (n22  * n33 - n32 * n23) - n12 (n21 * n33 - n31 * n23) + n13 (n21 * n32 - n31 * n22);

        this.elements[0] = c11;
        this.elements[1] = c21;
        this.elements[2] = c31;
        this.elements[3] = c41;
        this.elements[4] = c12;
        this.elements[5] = c22;
        this.elements[6] = c32;
        this.elements[7] = c42;
        this.elements[8] = c13;
        this.elements[9] = c23;
        this.elements[10] = c33;
        this.elements[11] = c43;
        this.elements[12] = c14;
        this.elements[13] = c24;
        this.elements[14] = c34;
        this.elements[15] = c44;

        return this;
    }
    invert(){
        var det = this.det();

        if (det == 0)return this;

        var  n11 = this.elements[0];
        var  n12 = this.elements[1];
        var  n13 = this.elements[2];
        var  n14 = this.elements[3];
        var  n21 = this.elements[4];
        var  n22 = this.elements[5];
        var  n23 = this.elements[6];
        var  n24 = this.elements[7];
        var  n31 = this.elements[8];
        var  n32 = this.elements[9];
        var  n33 = this.elements[10];
        var  n34 = this.elements[11];
        var  n41 = this.elements[12];
        var  n42 = this.elements[13];
        var  n43 = this.elements[14];
        var  n44 = this.elements[15];

        var c11 = n22 * (n33  * n44 - n43 * n34) - n23 (n32 * n44 - n42 * n34) + n24 (n32 * n43 - n42 * n33);
        var c12 = n21 * (n43 * n34 - n33  * n44) + n23 (n31 * n44 - n41 * n34) + n24 (n41 * n33 - n31 * n43);
        var c13 = n21 * (n32  * n44 - n42 * n34) - n22 (n31 * n44 - n41 * n34) + n24 (n31 * n42 - n41 * n32);
        var c14 = n21 * (n42 * n33 - n32  * n43) + n22 (n31 * n43 - n41 * n33) + n23 (n41 * n32 - n31 * n42);
        
        var c21 = n12 * (n43 * n34 - n33 * n44) + n13 (n32 * n44 - n42 * n34) + n14 (n42 * n33 - n32 * n43);
        var c22 = n11 * (n33 * n44 - n43 * n34) - n13 (n31 * n44 - n41 * n34) + n14 (n31 * n43 - n41 * n33);
        var c23 = n11 * (n42 * n34 - n32 * n44) + n12 (n31 * n44 - n41 * n34) + n14 (n41 * n32 - n31 * n42);
        var c24 = n11 * (n32 * n43 - n42 * n33) - n12 (n31 * n43 - n41 * n33) + n13 (n31 * n42 - n41 * n32);
        
        var c31 = n12 * (n23  * n44 - n43 * n24) - n13 (n22 * n44 - n42 * n24) + n14 (n22 * n43 - n42 * n23);
        var c32 = n11 * (n23  * n44 - n43 * n24) - n13 (n21 * n44 - n41 * n24) + n14 (n21 * n43 - n41 * n23);
        var c33 = n11 * (n22  * n44 - n42 * n24) - n12 (n21 * n44 - n41 * n24) + n14 (n21 * n42 - n41 * n22);
        var c34 = n11 * (n22  * n43 - n42 * n23) - n12 (n21 * n43 - n41 * n23) + n13 (n21 * n42 - n41 * n22);

        var c41 = n12 * (n33 * n24 - n23  * n34) + n13 (n22 * n34 - n32 * n24) + n14 (n32 * n23 - n22 * n33);
        var c42 = n11 * (n23  * n34 - n33 * n24) - n13 (n21 * n34 - n31 * n24) + n14 (n21 * n33 - n31 * n23);
        var c43 = n11 * (n32 * n24 - n22  * n34) + n12 (n21 * n34 - n31 * n24) + n14 (n31 * n22 - n21 * n32);
        var c44 = n11 * (n22  * n33 - n32 * n23) - n12 (n21 * n33 - n31 * n23) + n13 (n21 * n32 - n31 * n22);

        this.elements[0] = c11/det;
        this.elements[1] = c21/det;
        this.elements[2] = c31/det;
        this.elements[3] = c41/det;
        this.elements[4] = c12/det;
        this.elements[5] = c22/det;
        this.elements[6] = c32/det;
        this.elements[7] = c42/det;
        this.elements[8] = c13/det;
        this.elements[9] = c23/det;
        this.elements[10] = c33/det;
        this.elements[11] = c43/det;
        this.elements[12] = c14/det;
        this.elements[13] = c24/det;
        this.elements[14] = c34/det;
        this.elements[15] = c44/det;

        return this;
    }
    copy(m){
        this.elements[0] = m.elements[0];
        this.elements[1] = m.elements[1];
        this.elements[2] = m.elements[2];
        this.elements[3] = m.elements[3];
        this.elements[4] = m.elements[4];
        this.elements[5] = m.elements[5];
        this.elements[6] = m.elements[6];
        this.elements[7] = m.elements[7];
        this.elements[8] = m.elements[8];
        this.elements[9] = m.elements[9];
        this.elements[10] = m.elements[10];
        this.elements[11] = m.elements[11];
        this.elements[12] = m.elements[12];
        this.elements[13] = m.elements[13];
        this.elements[14] = m.elements[14];
        this.elements[15] = m.elements[15];

        return this;
    }
    clone(){
        return new this.constructor().copy(this);
    }
}

const map = function(n,r,p,u,v){
    /* converts (p - r) range to (v - u) range */
    
    return u + (n - r) * (v - u)/(p - r);
};