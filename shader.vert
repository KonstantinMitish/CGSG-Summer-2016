    attribute vec3 aVertexPosition;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    varying vec2 vTextureCoord;
    varying vec2 cord;
    uniform float L;
    uniform float R;
    uniform float T;
    uniform float B;


    void main(void)
    {
        gl_Position = vec4(aVertexPosition, 1.0);
        cord = vec2(L + (aVertexPosition.x + 1.0) * 0.5 * (R - L),
                    B + (-aVertexPosition.y + 1.0) * 0.5 * (T - B));
    }


