   IPLR          �  $     f���   �  p     d  #                    GLSL.std.450                     main       �           G            G  �          H  �       #       G  �      G  �   "       G  �   !   @        !                                        ;                       +     )   �>+     /   �OU@  6           +  6   7       +     Q     �?+     R       ,     S   Q   R   ,     Y   R   Q   ,     _   Q   Q   +     g     @@+     h      @+     �      ?+     �     �B,     �   �   �     �         +     �   @�`?+     �   Dw�>,     �   �   �   +     �   Dw��,     �   �   �   ,  �   �   �   �     �          +  �   �       +  �   �        �   +  �   �      +     �      �+     �   333?+     �   33�>,     �   �   �     �            �      �   ;  �   �        �          �      �   ;  �   �         �          ,         /   /   /   ,       g   g   6               �     =     �      �     �   �   �   �    �    �     �  �        	  �     �  �        	  �     �  R        	  �  �   �  �        	  �  �     �  �   �    	      �    	    �  	       +        �       -     
   �  Q     `  +      Q     a  +     P      c  `  a  `  �      d  c  )         e     
   d  O      h  e  e            �      j  h     �     k  e  j  P      m  k  k  k  �      n  e  m  Q     p  n      Q     r  n     �     s  p  r  Q     u  n     �     v  s  u       w     
   v  �     1  +  S   Q     }  1      Q     ~  1     P      �  }  ~  }  �      �  �  )         �     
   �  O      �  �  �            �      �  �     �     �  �  �  P      �  �  �  �  �      �  �  �  Q     �  �      Q     �  �     �     �  �  �  Q     �  �     �     �  �  �       �     
   �  �     4  +  Y   Q     �  4      Q     �  4     P      �  �  �  �  �      �  �  )         �     
   �  O      �  �  �            �      �  �     �     �  �  �  P      �  �  �  �  �      �  �  �  Q     �  �      Q     �  �     �     �  �  �  Q     �  �     �     �  �  �       �     
   �  �     7  +  _   Q     �  7      Q     �  7     P      �  �  �  �  �      �  �  )         �     
   �  O      �  �  �            �      �  �     �     �  �  �  P      �  �  �  �  �      �  �  �  Q     �  �      Q     �  �     �     �  �  �  Q     �  �     �     �  �  �       �     
   �  �     ;  -  -  �     =  -  h   �     ?    =  �     @  ;  ?  Q     D  @           E     .   w  �  D  �     H  �  w  Q     J  @     �     K  H  J  �     N  Q   D       P     2   K  N  E  �     S  �  �  �     V  S  D       Z     2   V  J  P            2   �  Z  �  �       �   �  �         h   �         �   �       �  �   �  �     �  �   �    �         �      2   �  �   �   �  �      �  7   �  �  �  �  �   �  �   �   �  �      �  �  �  �  �  �       �     2   �   �   h   �     �  �  �         �       �     2     �   Q   �  �  �  �  �     �  h   �   �     �  �  �   �  �  �  �  �  �  �  �     �  �  �  �  �  �     �   �  �   A  �   �   �   �   =      �   �   �      �   �   �   Q     �   �       Q     �   �      Q     �   �      P  �   �   �   �   �   �   >  �   �   �  8         $                   (         @                      1   _RESERVED_IDENTIFIER_FIXUP_gl_DefaultUniformBlock      pencil_fragment_main    ����   \
  $
     
  #version 100
precision mediump float;
precision highp int;

uniform highp vec3 uColor;

varying highp vec2 _fragCoord;

void main()
{
    highp float _505 = 0.0;
    highp vec2 _508 = vec2(0.0);
    _508 = _fragCoord * vec2(0.699999988079071044921875, 0.3499999940395355224609375);
    _505 = 0.0;
    highp float _270 = 0.0;
    highp vec2 _298 = vec2(0.0);
    highp vec2 _300 = vec2(0.0);
    highp vec2 _319 = vec2(0.0);
    highp float _323 = 0.0;
    highp float _329 = 0.0;
    highp vec3 _356 = vec3(0.0);
    highp vec3 _365 = vec3(0.0);
    highp float _374 = 0.0;
    highp vec3 _385 = vec3(0.0);
    highp vec3 _394 = vec3(0.0);
    highp float _403 = 0.0;
    highp vec3 _414 = vec3(0.0);
    highp vec3 _423 = vec3(0.0);
    highp vec3 _443 = vec3(0.0);
    highp vec3 _452 = vec3(0.0);
    int _504 = 0;
    highp float _507 = 0.5;
    for (; _504 < 5; _298 = floor(_508), _300 = fract(_508), _356 = fract(vec3(_298.xyx) * 0.12999999523162841796875), _365 = _356 + vec3(dot(_356, _356.yzx + vec3(3.3329999446868896484375))), _374 = fract((_365.x + _365.y) * _365.z), _385 = fract(vec3((_298 + vec2(1.0, 0.0)).xyx) * 0.12999999523162841796875), _394 = _385 + vec3(dot(_385, _385.yzx + vec3(3.3329999446868896484375))), _403 = fract((_394.x + _394.y) * _394.z), _414 = fract(vec3((_298 + vec2(0.0, 1.0)).xyx) * 0.12999999523162841796875), _423 = _414 + vec3(dot(_414, _414.yzx + vec3(3.3329999446868896484375))), _443 = fract(vec3((_298 + vec2(1.0)).xyx) * 0.12999999523162841796875), _452 = _443 + vec3(dot(_443, _443.yzx + vec3(3.3329999446868896484375))), _319 = (_300 * _300) * (vec2(3.0) - (_300 * 2.0)), _323 = _319.x, _329 = _319.y, _270 = _507 * (((fract((_452.x + _452.y) * _452.z) - _403) * _323) * _329 + (((fract((_423.x + _423.y) * _423.z) - _374) * _329) * (1.0 - _323) + mix(_374, _403, _323))) + _505, _508 = ((mat2(vec2(0.877582550048828125, 0.47942554950714111328125), vec2(-0.47942554950714111328125, 0.877582550048828125)) * _508) * 2.0) + vec2(100.0), _507 *= 0.5, _505 = _270, _504++)
    {
    }
    highp float _222 = _505 * 0.5 + 0.5;
    highp float _506 = 0.0;
    for (int spvDummy134 = 0; spvDummy134 < 1; spvDummy134++)
    {
        if (_222 < 0.5)
        {
            _506 = (2.0 * _222) * _222;
            break;
        }
        else
        {
            highp float _478 = (-2.0) * _222 + 2.0;
            _506 = (-(_478 * _478)) * 0.5 + 1.0;
            break;
        }
        break; // unreachable workaround
    }
    highp float _227 = _506 * 0.699999988079071044921875;
    gl_FragData[0] = vec4(uColor * _227, _227);
}

         "���                            uColor     pencil_fragment_main                �  t     g  // This SkSL shader is autogenerated by spirv-cross.

float4 flutter_FragCoord;

uniform vec3 uColor;

vec4 fragColor;

vec2 FLT_flutter_local_FlutterFragCoord()
{
    return flutter_FragCoord.xy;
}

float FLT_flutter_local_hash(vec2 p)
{
    vec3 p3 = fract(vec3(p.xyx) * 0.12999999523162841796875);
    p3 += vec3(dot(p3, p3.yzx + vec3(3.3329999446868896484375)));
    return fract((p3.x + p3.y) * p3.z);
}

float FLT_flutter_local_noise(vec2 x)
{
    vec2 i = floor(x);
    vec2 f = fract(x);
    vec2 param = i;
    float a = FLT_flutter_local_hash(param);
    vec2 param_1 = i + vec2(1.0, 0.0);
    float b = FLT_flutter_local_hash(param_1);
    vec2 param_2 = i + vec2(0.0, 1.0);
    float c = FLT_flutter_local_hash(param_2);
    vec2 param_3 = i + vec2(1.0);
    float d = FLT_flutter_local_hash(param_3);
    vec2 u = (f * f) * (vec2(3.0) - (f * 2.0));
    return (mix(a, b, u.x) + (((c - a) * u.y) * (1.0 - u.x))) + (((d - b) * u.x) * u.y);
}

float FLT_flutter_local_fbm(inout vec2 x)
{
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(vec2(0.877582550048828125, 0.47942554950714111328125), vec2(-0.47942554950714111328125, 0.877582550048828125));
    for (int i = 0; i < 5; i++)
    {
        vec2 param = x;
        v += (a * FLT_flutter_local_noise(param));
        x = ((rot * x) * 2.0) + shift;
        a *= 0.5;
    }
    return v;
}

float FLT_flutter_local_easeInOutQuad(float x)
{
    if (x < 0.5)
    {
        return (2.0 * x) * x;
    }
    else
    {
        float t = ((-2.0) * x) + 2.0;
        return 1.0 - ((t * t) / 2.0);
    }
}

void FLT_main()
{
    vec2 fragCoord = FLT_flutter_local_FlutterFragCoord();
    vec2 param = fragCoord * vec2(0.699999988079071044921875, 0.3499999940395355224609375);
    float _222 = FLT_flutter_local_fbm(param);
    float noise = (_222 * 0.5) + 0.5;
    float param_1 = noise;
    float opacity = FLT_flutter_local_easeInOutQuad(param_1) * 0.699999988079071044921875;
    fragColor = vec4(uColor * opacity, opacity);
}

half4 main(float2 iFragCoord)
{
      flutter_FragCoord = float4(iFragCoord, 0, 0);
      FLT_main();
      return fragColor;
}
                                                     uColor     pencil_fragment_main    