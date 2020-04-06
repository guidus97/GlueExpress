const TokenService = require('../services/tokenService')

class TokenRouter{

    constructor(router){
        this.router = router
        this.registerRoutes()
    }

    registerRoutes(){
        this.router.get('/', this.getToken.bind(this))
    }

    getToken(req,res){
      setInterval(() => {
        TokenService.getRequestForToken()
      }, 30000)
    }
}

module.exports = TokenRouter