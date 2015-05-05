/* global require */

var setup = {
  domain: 'mysql',
  host: '',
  service: 'chinook',
  dbconnection: {
    host: 'localhost',
    user : 'root',
    password : 'password',
    database : 'Chinook'
  }
}

setup.headers = [{
  'select':    'SELECT  Album.*,  Artist.Name FROM Album JOIN  Artist ON Album.ArtistId =  Artist.ArtistId',
  'fields':   ['AlbumId', 'Title', 'Name'],
  'where':     '1',
  'orderby':   'AlbumId',
  'file':      'Album select',
  'header':   ['Sorszám', 'Cím', 'Előadó']
  },
  {
  'view':      'Album_view',
  'fields':   ['AlbumId', 'Title', 'Name'],
  'where':     '1',
  'orderby':   'AlbumId',
  'file':      'Album view',
  'header':   ['Sorszám', 'Cím', 'Előadó']
  },
  {
  'view':      'Track_view',
  'fields':   ['TrackId', 'Name', 'Composer', 'UnitPrice', 'AlbumTitle', 'ArtistName'],
  'where':     '1',
  'orderby':   'TrackId',
  'file':      'Track view',
  'header':   ['Sorszám', 'Név', 'Szerző', 'Egységár', 'Album címe', 'Előadó']
  }]

require('weblog-mysql')(setup)
