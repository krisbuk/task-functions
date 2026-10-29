export function higherThan(num) {
    return (element) => element > num;
}

export function hasSubstring(substr) {
    return (element) => typeof element === 'string' && element.includes(substr);
}

export function multiply(num) {
    return (nextNum) => num * nextNum;
}
