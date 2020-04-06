fetch = require('node-fetch')

class TokenService {

    constructor() {

    }

    getRequestForToken() {

        console.log('Getting response...');


        fetch('https://identity.auth.theplatform.eu/idm/web/Authentication/signIn?schema=1.1&form=json', {

            headers: {
                'Authorization': 'Basic ' + this.basicAuth('service/mediaset-test-fincons-apigw', 'wk5bHOREX8wU')
            },

            method: 'GET'

        }).then((res) => {

            if (res.ok) {

                return res.json().then((json) => {
                    global.token = json['signInResponse'].token
                    console.log(global.token);
                    
                })

            } else if (res.status == '401') {
                console.log('Error with code: ' + res.status);

            } else {
                console.log('Error with code:' + res.status);

            }

        }).catch((error) => {
            console.log(error);

        })
    }

    basicAuth(username, pass) {

        return Buffer.from(username + ':' + pass).toString('base64')
    }

}

module.exports = new TokenService()