// Direct station-to-station connections in the sample map.
// Connections are treated as bidirectional for route finding.

export const network = {
  'm3-parkway': ['clonee'],
  clonee: ['m3-parkway', 'hansfield', 'intel'],
  hansfield: ['clonee', 'clonsilla'],
  clonsilla: ['hansfield', 'intel'],
  intel: ['clonsilla', 'clonee'],
}