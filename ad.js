/* global require */

var setup = {
  domain: 'SZEFO',
  host: 'Info',
  service: 'Telefonkönyv',
  dbconnection: {
    url: 'ldap://szefofs.szefozrt.hu',
    user: 'CN=telefonkonyv,OU=SZEFO Technikai felhasználók,DC=szefozrt,DC=hu',
    password: 'xxx'
  }
}

setup.headers = [
  {
  'searchdn':  'OU=SZEFO Felhasználók,DC=szefozrt,DC=hu',
  'filter':    '(objectClass=user)',
  'scope':     'sub',
  'fields':   ['cn', 'mail', 'title', 'telephoneNumber', 'ipPhone', 'mobile', 'department', 'company', 'physicalDeliveryOfficeName'],
  'file':      'Teljes',
  'header':   ['Név', 'Email', 'Beosztás', 'Telefon', 'Mellék', 'Mobil', 'Szervezeti egység', 'Telephely', 'Iroda']
  },
  ]

require('weblog-ad')(setup)
