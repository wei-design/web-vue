;(() => {
    // 默认language设置
    const defaultLang = 'zh-CN';
    localStorage.setItem('pre_language', defaultLang);
    if (!location.pathname.startsWith(`/${defaultLang}`)) {
        const toPath = [`/${defaultLang}`]
        .concat(location.pathname.split('/').slice(2))
        .join('/')
        console.log(toPath);
        // location.pathname =
        //     toPath.endsWith('.html') || toPath.endsWith('/') ? toPath : toPath.concat('/')
    }
})();
