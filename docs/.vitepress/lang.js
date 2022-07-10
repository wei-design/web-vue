;(() => {
    // 默认language设置
    const defaultLang = 'zh-CN';
    // 本地host检测
    const hostReg = /^(\d+\.\d+\.\d+\.\d+)|localhost$/;
    localStorage.setItem('default_language', defaultLang);
    if (location.pathname.indexOf(`${defaultLang}`) < 0) {
        // 本地host检测
        const isLocal = hostReg.test(location.hostname);
        // 线上pathname需要加上baseUrl
        const baseUrl = location.pathname.split('/').slice(1, 2);
        const toPath =
            '/' +
            (isLocal ? [] : baseUrl)
            .concat([`${defaultLang}`])
            .concat(location.pathname.split('/').slice(2))
            .join('/')
        location.pathname =
            toPath.endsWith('.html') || toPath.endsWith('/') ? toPath : toPath.concat('/')
    }
})();
