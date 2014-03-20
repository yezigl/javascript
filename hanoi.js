/**
 * hanoi tower
 * move n-disk from a to c
 */
function hanoi(n, a, b, c) {
    if (n >= 1) {
        hanoi(n - 1, a, c, b); // move n-1 disk from a to b
        c.push(a.pop()); // move the n disk from a to c
        console.log('move', n, 'from', a.name, 'to', c.name);
        hanoi(n - 1, b, a, c); // move n-1 disk from b to c
    }
}

var n = 5, a = [], b = [], c = []; // tower a, b, c
a.name = 'a', b.name = 'b', c.name = 'c'; // tower's name
hanoi(n, a, b, c);
