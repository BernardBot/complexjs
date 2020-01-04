// elementaries
function add([a, b], [c, d]) {
    return [a + c, b + d];
}
function sub([a, b], [c, d]) {
    return [a - c, b - d];
}
function mul([a, b], [c, d]) {
    return [a * c - b * d, a * d + b * c];
}
function div([a, b], [c, d]) {
    let e, f, g;
    e = a * c + b * d;
    f = b * c - a * d;
    g = c * c + d * d;
    return [e / g, f / g];
}
function exp([a, b]) {
    a = Math.exp(a);
    return [a * Math.cos(b), a * Math.sin(b)];
}
function log([a, b]) {
    return [.5 * Math.log(a * a + b * b), Math.atan2(b, a)];
}
// extensions
function pow([a, b], [c, d]) {
    return exp(mul([c, d], log([a, b])));
}
function logb([a, b], [c, d]) {
    return div(log([c, d]), log([a, b]));
}
function cos([a, b]) {
    return div(add(exp([-b, a]), exp([b, -a])), [2, 0]);
}
function acos([a, b]) {
    let x;
    x = mul([a, b], [a, b]);
    x = sub([1, 0], x);
    x = pow(x, [.5, 0]);
    x = mul([0, 1], x);
    x = add([a, b], x);
    x = log(x);
    return mul([0, -1], x);
}
