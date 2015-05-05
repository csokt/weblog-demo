/* global require */

var setup = {
  domain: 'Legrand',
  host: 'Szentes',
  service: 'Keresés',
  dbconnection: {
    user: 'demo',
    password: 'xxx',
    server: '192.168.0.2\\PROLIANTML350',
    database: 'SzentesModulKeszlet',
  }
}

setup.headers = [
  {
  'select':    "SELECT * FROM dbo.beepules",
  'fields':   ['cikkszam', 'cikkmegnevezes', 'alkatreszcikkszam', 'alkatreszmegnevezes', 'merteke', 'termekcsalad', 'szukseglet', 'ervk', 'ervv'],
  'where':     '1=1',
  'orderby':   'cikkszam',
  'file':      'beépülés jegyzék',
  'header':   ['Cikkszám', 'Cikknév', 'Alkatrész cikkszám', 'Alkatrész név', 'Mértekegység', 'Termékcsalád', 'Szükséglet', 'Érvenyesség kezdete', 'Érvenyesség vége']
  },
  {
  'select':    "SELECT * FROM dbo.bizsor",
  'fields':   ['hsz', 'biztipus', 'bizszam', 'bizsor', 'raktar1', 'raktar2', 'termekcikkszam', 'cikkszam', 'cikktipus', 'termekcsalad', 'megnevezes', 'rendelesszam',
               'mennyiseg', 'datum'],
  'where':     '1=1',
  'orderby':   'hsz',
  'file':      'bizonylat sorok',
  'header':   ['hsz', 'biztipus', 'bizszam', 'bizsor', 'raktar1', 'raktar2', 'termekcikkszam', 'cikkszam', 'cikktipus', 'termekcsalad', 'megnevezes', 'rendelesszam',
               'mennyiseg', 'datum'],
  },
  ]

require('weblog-mssql')(setup)
