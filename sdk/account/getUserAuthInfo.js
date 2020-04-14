const http = require('http')
const os = require('os')

class GetUserAuthInfo {
  async isAuth(ownerUin, inputs = {}) {
    const data = {
      uin: ownerUin,
      os_platform: os.platform(),
      os_release: os.release(),
      os_type: os.type(),
      client: inputs.client,
      remark: inputs.remark,
      pid: process.pid,
      project: inputs.project
    }
    const requestData = JSON.stringify(data)

    const options = {
      host: 'service-ocnymoks-1258344699.gz.apigw.tencentcs.com',
      port: '80',
      path: '/release/getUserAuthInfo',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return new Promise(function(resolve, reject) {
      const req = http.request(options, function(res) {
        res.setEncoding('utf8')
        res.on('data', function(chunk) {
          resolve(JSON.parse(chunk))
        })
      })

      req.on('error', function(e) {
        reject(e.message)
      })

      // write data to request body
      req.write(requestData)

      req.end()
    })
  }
}

module.exports = {
  GetUserAuthInfo
}
