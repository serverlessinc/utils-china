const http = require('http')
const os = require('os')

class DataReport {
  async report(inputs = {}) {
    try {
      const data = {
        name: inputs.name,
        pid: process.pid,
        project: inputs.project,
        remark: inputs.remark,
        uin: inputs.uin,
        os_platform: os.platform(),
        os_release: os.release(),
        os_type: os.type(),
        action: inputs.action
      }
      const requestData = JSON.stringify(data)
      const options = {
        host: 'service-ocnymoks-1258344699.gz.apigw.tencentcs.com',
        port: '80',
        path: '/release/dataReport',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const req = http.request(options, function(res) {
        res.setEncoding('utf8')
        res.on('data', function(chunk) {
          // console.log(chunk)
        })
      })
      req.on('error', function(e) {})
      req.write(requestData)
      req.end()
    } catch (e) {}
    return true
  }
}

module.exports = {
  DataReport
}
