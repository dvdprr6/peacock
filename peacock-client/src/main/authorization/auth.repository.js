const { net } = require('electron')

function saveAccessTokens(body){
  const request = net.request({ method: 'POST', url: 'http:localhost:8080/peacock-api/api/authentication/initialize' })
  request.setHeader('Content-Type', 'application/json')
  request.write(JSON.stringify(body), 'utf-8')

  try{
    request.on('response', response => {
      console.log(response.statusCode)
    })
  }catch(e){
    console.log(e)
  }finally {
    request.end()
  }

}

module.exports = {
  saveAccessTokens
}