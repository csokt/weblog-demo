/* global require */

var setup = {
  domain:  'voip',
  host:     '',
  service: 'freeswitch',
  pattern: '/var/log/freeswitch/cdr-csv/Master.csv',
  header: ['Line', 'Caller', 'Caller addr', 'Destination', 'Context', 'Call started', 'Duration', 'Hangup cause', 'Read codec', 'Write codec'],

}

setup.line2arr = function(i, line) {
  var arr
  arr = line.split('\t')
  arr.unshift(i)
  return arr
}

require('weblog-file')(setup)
