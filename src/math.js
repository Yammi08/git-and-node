function clamp(value,min,max)
{
    if(min > max)
        throw 'min value is greater than max';
    
    if(value < min)
        return min;
    if(value > max)
        return max;
    return value;
}
function sqrt(a)
{
    return Math.sqrt(a);
}
function pow(a,b)
{
    return Math.pow(a,b);
}
function lerp(a,b,t)
{
    return a+(b-a)*t;
}
function smootherstep(a,b,x)
{
    x = clamp((x-a)/(b-a),0,1);
    return x*x*x*(x*(x*6-15)+10);
}
function smoothstep(a,b,x)
{
    x = clamp((x-a)/(b-a),0,1);
    return x*x*(3-2*x);
}
function sawtooth(time)
{
    return time - Math.floor(time);
}

module.exports = 
{
    clamp,
    sqrt,
    pow,
    lerp,
    smootherstep,
    smoothstep,
    sawtooth
}
