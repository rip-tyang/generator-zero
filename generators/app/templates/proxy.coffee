Proxy =
  '/api/*':
    target: 'http://localhost:3000/'
    # rewrite proxyed url, removing '/api'
    pathRewrite: (req) ->
      req = req.replace /^\/api/, ''
    secure: false

exports = module.exports = Proxy
