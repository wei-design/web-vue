export const isFunction = (val) => typeof val === 'function';
export const isArray = Array.isArray;
export const isString = (val) => typeof val === 'string';
export const isSymbol = (val) => typeof val === 'symbol';
export const isObject = (val) => val !== null && typeof val === 'object';
export const guid = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
};
// export { isOn, cacheStringFunction, camelize, hyphenate, capitalize };
//# sourceMappingURL=util.js.map