
# Table of Contents

1.  [complexjs](#org269451e)


<a id="org269451e"></a>

# complexjs

This little script sees complex numbers as arrays with two
numeric elements. Initialize as follows:

    z = [1, 2];

You can of course also just use literals in the function call.
The supported operations are:

-   addition
-   substraction
-   multiplication
-   division
-   exponentiation
-   logarithm

Note that if you use a real number you should still give an
array of two values. So the real number \(1\) is represented
in code by `[1, 0]` and the imaginary number \(i\) is
represented as `[0, 1]`. This could be made neater by parsing,
but I want to keep this file small.

Examples:

    a = [1, 2];
    b = [3, 4];
    
    add(a, b);
    sub([33, 2], [-1, 3]);
    
    mul(a, [-1,0]);
    div(a, a);
    
    exp([0, Math.PI])
    log(exp(a));
    
    pow(a, [0,0]);
    logb([1,1], [2,2]);

More information can be found in my [blog post](http://jkatzy.nl/2020/01/04/its-complicated/).

