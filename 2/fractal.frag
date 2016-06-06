precision mediump float;

uniform float Usize;
uniform sampler2D uSampler;

varying vec2 cord;
varying vec2 vTextureCoord;

uniform float maxN;
uniform float maxM;
uniform float L;
uniform float R;
uniform float B;
uniform float T;              
int mandel( void )
{        
  float
    re = R + (cord.x + 1.0) * 0.5 * (R - L),
    im = T + (-cord.y + 1.0) * 0.5 * (B - T),
    tmpRe, tmpIm, zRe = re, zIm = im;
  int k = 0;

  for (int i = 0; i < 10000; i++)
  {
    tmpRe = zRe, tmpIm = zIm;
    zRe = tmpRe * tmpRe - tmpIm * tmpIm + re;
    zIm =  2.0 * tmpRe * tmpIm + im;
    if (zRe * zRe + zIm * zIm < maxM * maxM && float(i) < maxN)
      k++;
    else
      break;
  }   
  if (k == int(maxN))
    return 0;
  return k;
}

void main( void )
{
   vec3 texcolor = texture2D(uSampler,(cord - 2.0) / 3.5).rgb;
   float n = float(mandel()) / 15.0;
   gl_FragColor = vec4(texcolor * n, 1);
   /* gl_FragColor = vec4(texcolor, 1); */
}
