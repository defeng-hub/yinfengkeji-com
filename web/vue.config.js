module.exports = {
	runtimeCompiler: true,
	devServer:{
		port: 4041,
		proxy: {
			"/api":{
				target: "http://localhost:4040/api",
				changeOrigin: true,
				pathRewrite:{
					'^/api':''
				}
			},
			'/upload':{
				target: "http://localhost:4040/upload",
				changeOrigin: true,
				pathRewrite: {
					'^/upload':''
				}
			}
		}
	},
	lintOnSave:false
}