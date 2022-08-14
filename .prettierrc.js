module.exports = {
    printWidth: 120, // 单行输出（不折行）的（最大）长度
    semi: false, // 结尾使用分号, 默认true
    useTabs: false, // 使用tab缩进，默认false
    tabWidth: 4, // tab缩进大小,默认为2
    singleQuote: true, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    jsxSingleQuote: true, // jsx 不使用单引号，而使用双引号
    trailingComma: 'none', // 行尾逗号,默认none,可选 none|es5|all es5 包括es5中的数组、对象，all 包括函数对象等所有可选
    bracketSpacing: true, // 对象中的空格 默认true，true: { foo: bar }，false: {foo: bar}
    htmlWhitespaceSensitivity: 'ignore', // 指定 HTML 文件的全局空白区域敏感度, "ignore" - 空格被认为是不敏感的
    jsxBracketSameLine: false,
    arrowParens: 'avoid', // 箭头函数参数括号 默认avoid 可选 avoid| always， avoid 能省略括号的时候就省略 例如x => x，always 总是有括号
    proseWrap: 'always', // 当超出print width（上面有这个参数）时就折行
}
