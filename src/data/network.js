// Direct station-to-station connections in map_sample_v2.svg.
// Connections are treated as bidirectional for route finding.

export const network = {
  'm3-parkway': ['clonee'],
  clonee: ['m3-parkway', 'hansfield', 'intel'],
  hansfield: ['clonee', 'clonsilla'],
  clonsilla: ['hansfield', 'intel'],
  maynooth: ['intel'],
  intel: ['clonsilla', 'maynooth', 'clonee'],
  'celbridge-junction': [],
  hazelhatch: ['lucan-adamstown', 'sallins'],
  'lucan-adamstown': [
    'peamount',
    'clondalkin-fonthill',
    'hazelhatch',
    'liffey-valley',
  ],
  peamount: ['lucan-adamstown', 'saggart'],
  saggart: ['peamount', 'red-cow'],
  sallins: ['hazelhatch'],
  'clondalkin-fonthill': [
    'lucan-adamstown',
    'clondalkin-village',
    'liffey-valley',
  ],
  'clondalkin-village': ['clondalkin-fonthill', 'red-cow'],
  palmerstown: ['chapelizod', 'blanchardstown-hospital'],
  'liffey-valley': [
    'lucan-adamstown',
    'clondalkin-fonthill',
    'blanchardstown-hospital',
  ],
  chapelizod: ['palmerstown', 'ballyfermot'],
  ballyfermot: ['chapelizod', 'kylemore'],
  kylemore: ['ballyfermot', 'red-cow'],
  'red-cow': ['clondalkin-village', 'kylemore', 'saggart'],
  'blanchardstown-hospital': [
    'blanchardstown-centre',
    'palmerstown',
    'liffey-valley',
  ],
  'blanchardstown-centre': ['blanchardstown-hospital'],
}
