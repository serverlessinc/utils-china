const util = require('util')
const querystring = require('querystring')
const crypto = require('crypto')

class ClsSign {
  constructor(secretId, secretKey) {
    this.secretId = secretId
    this.secretKey = secretKey
  }

  sign(method, path, params = {}, headers = {}) {
    const encrypt = (algorithm, content) => {
      const hash = crypto.createHash(algorithm)
      hash.update(content)
      return hash.digest('hex')
    }

    const hmacSha1 = (text, key) => {
      return crypto
        .createHmac('sha1', key)
        .update(text)
        .digest('hex')
    }

    const header_keys = Object.keys(headers).sort()
    const orderHeaders = []
    for (const key of header_keys) {
      orderHeaders.push(
        util.format('%s=%s', key.toLocaleLowerCase(), querystring.escape(headers[key]))
      )
    }

    const param_keys = Object.keys(params).sort()
    const orderParams = []
    for (const key of param_keys) {
      orderParams.push(
        util.format('%s=%s', key.toLocaleLowerCase(), querystring.escape(params[key]))
      )
    }
    const sign_raw_string = util.format(
      '%s\n%s\n%s\n%s\n',
      method.toLocaleLowerCase(),
      path,
      orderParams.join('&'),
      orderHeaders.join('&')
    )

    const timestamp = parseInt(new Date().getTime() / 1000)
    const sign_time = util.format('%s;%s', timestamp - 10, timestamp + 30 * 60)

    const sign_string = util.format('sha1\n%s\n%s\n', sign_time, encrypt('sha1', sign_raw_string))

    const sign_value = hmacSha1(sign_string, hmacSha1(sign_time, this.secretKey))

    const tmp_header_keys = header_keys.map((item) => {
      return item.toLocaleLowerCase()
    })
    const tmp_param_keys = param_keys.map((item) => {
      return item.toLocaleLowerCase()
    })

    return util.format(
      'q-sign-algorithm=sha1&q-ak=%s&q-sign-time=%s&q-key-time=%s&q-header-list=%s&q-url-param-list=%s&q-signature=%s',
      this.secretId,
      sign_time,
      sign_time,
      tmp_header_keys.join(';'),
      tmp_param_keys.join(';'),
      sign_value
    )
  }
}

module.exports = ClsSign
