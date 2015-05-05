/* global require */

var setup = {
  domain: 'system',
  host: '',
  service: 'syslog-ng',
  dbconnection: 'mongodb://localhost:27017/syslog'
}

setup.headers = [{
  'collection':  'messages',
  'fields':     ['DATE', 'HOST', 'SOURCE', 'SOURCEIP', 'PROGRAM', 'PRIORITY', 'MESSAGE', 'SEQNUM', 'TAGS'],
  'file':        'syslog-ng',
  'header':     ['Date', 'Host', 'Originating host', 'Source address', 'Process', 'Priority', 'Log message', 'Sequence', 'Tags']
  }]

require('weblog-mongodb')(setup)
