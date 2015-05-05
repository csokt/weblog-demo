/* global require */

var setup = {
  domain:  'system',
  host:     '',
  service: 'authlog',
  pattern: '/var/log/auth.log*',
  header: ['Line', 'Date', 'Time', 'Host', 'Command', 'Message']

}

setup.line2arr = function(i, line) {
  var date, time, host, command, message, pos, arr
  pos = line.indexOf(':', 16)
  arr = line.slice(0, pos).split(/ +/)
  date = arr.slice(0,2).join(' ')
  time = arr[2]
  host = arr[3]
  command = arr[4]
  message = line.slice(pos+2)
  return [i, date, time, host, command, message]
}

require('weblog-file')(setup)
