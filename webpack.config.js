module.exports = {
    output: {
        filename:'bundle.js'
    },
    resolve:{
        extensions:['.ts','.js','.json']
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx|ts)$/,
                exclude: /(node_modules)/,
                loader:'ts-loader'
                
            }
        ]
    }
}