- [泰勒展开](#泰勒展开)
  - [定义](#定义)
  - [常用公式](#常用公式)

# 泰勒展开

## 定义

设$$f(x)$$在$$x=x_0$$处存在$$n$$阶导数，则有公式
$$f(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{1}{2!}f''(x_0)(x-x_0)^2+...+\frac{1}{n!}f^{(n)}(x_0)(x-x_0)^n+o((x-x_0)^n)$$
其中
$$\lim\limits_{x \to x_0}\frac{o((x-x_0)^n)}{(x-x_0)^n}=0$$

## 常用公式

$$e^x=1+x+\frac{x^2}{2}+...+\frac{x^n}{n!}+o(x^n)$$

$$sinx=x-\frac{x^3}{3!}+\frac{x^5}{5!}+...+(-1)^{n-1}\frac{x^{2n-1}}{(2n-1)!}+o(x^{2n})$$

$$cosx=x-\frac{x^2}{2!}+\frac{x^4}{4!}+...+(-1)^{n-1}\frac{x^{2n}}{(2n)!}+o(x^{2n+1})$$

$$ln(1+x)=x-\frac{x^2}{2!}+\frac{x^3}{3!}+...+(-1)^{n-1}\frac{x^n}{n!}+o(x^n)$$

$$(1+x)^m=1+mx+\frac{m(m-1)}{2!}x^2+...+\frac{m(m-1)...(m-n+1)}{n!}x^n+o(x^n)$$

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
