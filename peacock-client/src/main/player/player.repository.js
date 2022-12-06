const { net } = require('electron')
const { LOCALHOST_URL, HTTP_GET, HTTP_POST, HTTP_PUT, HTTP_DELETE, REQ_TIMEOUT } = require('../utils/constants')

const PATH_PLAYER = '/player'

async function getCurrentTrack(){
  return new Promise(resolve => {
    const request = net.request({ method: HTTP_GET, url: LOCALHOST_URL + PATH_PLAYER + "/current" })
    request.setHeader('Content-Type', 'application/json')

    try{
      request.on('response', response => {
        response.on('data', chunk => {
          const data = Buffer.from(chunk.toJSON().data)
          const currentTrackDto = JSON.parse(data.toString('utf8'))

          resolve(currentTrackDto)
        })
      })
    }catch(e){
      console.log(e)
    }finally {
      request.end()
    }
  }, [REQ_TIMEOUT])
}

module.exports = {
  getCurrentTrack
}