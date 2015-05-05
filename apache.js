/* global require */

var setup = {
  domain:  'system',
  host:     '',
  service: 'apache',
  pattern: '/var/log/apache2/access.log*',
  header: ['Line', 'Host', 'Date', 'HTTP']

}

setup.line2arr = function(i, line) {
  var host = line.match(/[^ ]+/)[0]
  var date = line.match(/\[[^\]]+\]/)[0]
  var http  = line.match(/".*/)[0]
  return [i, host, date, http]
}

require('weblog-file')(setup)
