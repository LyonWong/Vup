module.exports = {
    pages: {
        index: {
            entry: 'src/index.js',
            template: 'public/index.html'
        },
        sign: {
            entry: 'src/sign.js',
            template: 'public/wap.html',
        }
    },
    css: {
        loaderOptions: {
        }
    }
}