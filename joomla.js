/* global require */

var setup = {
  domain:  'joomla',
  host:     '',
  service: 'groups',
  pattern: '/var/www/intraweb/logs/users.edit.groups.log.php',
  header: ['Line', 'Date', 'Time',  'Priority',  'Clientip',  'Administrator', 'Modified user', 'Message'],
  comment: /^#/
}

setup.line2arr = function(i, line) {
  var arr
  arr = line.split('\t')
  arr.unshift(i)
  return arr
}

require('weblog-file')(setup)
