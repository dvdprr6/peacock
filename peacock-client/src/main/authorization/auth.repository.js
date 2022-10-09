const { net } = require('electron')
const { LOCALHOST_URL, HTTP_GET, HTTP_POST, HTTP_PUT, HTTP_DELETE } = require('../utils/constants')

const PATH_AUTH_TOKEN = '/authToken'

async function getAll(){
  return new Promise(resolve => {
    const request = net.request({ method: HTTP_GET, url: LOCALHOST_URL + PATH_AUTH_TOKEN })
    request.setHeader('Content-Type', 'application/json')

    try{
      request.on('response', response => {
        response.on('data', chunk => {
          const data = Buffer.from(chunk.toJSON().data)
          const authTokenDto = JSON.parse(data.toString('utf8'))

          resolve(authTokenDto)
        })
      })
    }catch(e){
      console.log(e)
    }finally {
      request.end()
    }

  })
}

function createAuth(body){
  return new Promise(resolve => {
    const request = net.request({method: HTTP_POST, url: LOCALHOST_URL + PATH_AUTH_TOKEN})
    request.setHeader('Content-Type', 'application/json')
    request.write(JSON.stringify(body), 'utf-8')

    try {
      request.on('response', response => {
        response.on('data', chunk => {
          const data = Buffer.from(chunk.toJSON().data)
          const authTokenDto = JSON.parse(data.toString('utf8'))

          resolve(authTokenDto)
        })
      })
    } catch (e) {
      console.log(e)
    } finally {
      request.end()
    }
  })
}

module.exports = {
  getAll,
  createAuth
}