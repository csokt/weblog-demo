/* global require */
/* global console */
/* global __dirname */

// In production you may use Crossbar.io
var Router = require('wamp.rt')
new Router(
  { port: 8080,
    handleProtocols: function(protocols,cb) {
      console.log(protocols)
      cb(true,protocols[0])
    }
  }
)

// Static web server, or simply open the index.html file
var connect = require('connect')
var serveStatic = require('serve-static')
connect().use(serveStatic(__dirname + '/node_modules/weblog-frontend/build')).listen(3000)


var forever = require('forever-monitor')

function spawn(proc) {

  var child = new (forever.Monitor)(__dirname + '/node_modules/weblog-backend/' + proc + '.js', {
    max: 3,
    silent: true,
    args: []
  })

  child.on('exit', function () {
    console.log(proc + '.js has exited after 3 restarts')
  })

  child.start()
}

// Write your own modules using this samples
spawn('authlog')
spawn('syslog')
spawn('apache')
spawn('chinook')
spawn('syslogng')
