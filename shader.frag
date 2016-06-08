    precision mediump float;

    varying vec2 cord;
    uniform int size;
    uniform float size2;
    uniform sampler2D uSampler;

    int mandel( void )
    {
      vec2 c = vec2(cord.x, cord.y);
      vec2 z = c;
      for (int i = 0; i < 32000; i++)
        {
         if (i >= size)
           break;
         z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
         if ((z.x * z.x + z.y * z.y) > size2 * size2)
           return i;
        }
      return 0;
    }

    void main( void )
    {
       int n = mandel();
       gl_FragColor = texture2D(uSampler, vec2(float(n) / float(size), float(n) / float(size) * 3.0));
    }

