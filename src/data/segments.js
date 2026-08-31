// Maps a logical connection to the SVG element(s) that draw it.
// SVG IDs come directly from map_sample_v2.svg.

// The network is bidirectional, so route-finding can traverse either direction.
// A segment can contain more than one SVG path when a connection is drawn in parts.

export const segments = {
  'm3-parkway:clonee': { svgIds: ['c-m3parkway-clonee'], from: 'm3-parkway', to: 'clonee', line: 'blue' },
  'clonee:hansfield': { svgIds: ['c-clonee-hansfield'], from: 'clonee', to: 'hansfield', line: 'blue' },
  'hansfield:clonsilla': { svgIds: ['c-hansfield-clonsilla'], from: 'hansfield', to: 'clonsilla', line: 'blue' },
  'clonsilla:intel': { svgIds: ['c-clonsilla-intel'], from: 'clonsilla', to: 'intel', line: 'blue' },
  'intel:maynooth': { svgIds: ['c-intel-maynooth'], from: 'intel', to: 'maynooth', line: 'blue' },
  'clonee:intel': { svgIds: ['c-clonee-intel'], from: 'clonee', to: 'intel', line: 'pink' },
  'lucan-adamstown:peamount': { svgIds: ['c-lucanAdamstown-Peamount'], from: 'lucan-adamstown', to: 'peamount', line: 'pink' },
  'peamount:saggart': { svgIds: ['c-peamount-Saggart'], from: 'peamount', to: 'saggart', line: 'pink' },
  'lucan-adamstown:clondalkin-fonthill': { svgIds: ['c-lucanAdamstown-clondalkinFonthill'], from: 'lucan-adamstown', to: 'clondalkin-fonthill', line: 'blue' },
  'hazelhatch:lucan-adamstown': { svgIds: ['c-hazelhatch-lucanAdamstown'], from: 'hazelhatch', to: 'lucan-adamstown', line: 'blue' },
  'hazelhatch:sallins': { svgIds: ['c-hazelhatch-sallins'], from: 'hazelhatch', to: 'sallins', line: 'blue' },
  'lucan-adamstown:liffey-valley': { svgIds: ['c-lucanAdamstown-1', 'c-lucanAdamstown-LiffeyValley'], from: 'lucan-adamstown', to: 'liffey-valley', line: 'orange' },
  'clondalkin-fonthill:liffey-valley': { svgIds: ['c-clondalkin-fonthill'], from: 'clondalkin-fonthill', to: 'liffey-valley', line: 'orange' },
  'clondalkin-fonthill:clondalkin-village': { svgIds: ['c-clondalkinFontill-clondalkinVillage'], from: 'clondalkin-fonthill', to: 'clondalkin-village', line: 'orange' },
  'clondalkin-village:red-cow': { svgIds: ['c-clondalkinVillage-redCow'], from: 'clondalkin-village', to: 'red-cow', line: 'orange' },
  'palmerstown:chapelizod': { svgIds: ['c-palmerstown-chapelizod'], from: 'palmerstown', to: 'chapelizod', line: 'orange' },
  'chapelizod:ballyfermot': { svgIds: ['c-chapelizod-ballyfermot'], from: 'chapelizod', to: 'ballyfermot', line: 'orange' },
  'ballyfermot:kylemore': { svgIds: ['c-ballyfermot-kylemore'], from: 'ballyfermot', to: 'kylemore', line: 'orange' },
  'red-cow:kylemore': { svgIds: ['c-redCow-kylemore'], from: 'red-cow', to: 'kylemore', line: 'orange' },
  'blanchardstown-centre:blanchardstown-hospital': { svgIds: ['c-blanchardstownCentre-blanchardstownHospital'], from: 'blanchardstown-centre', to: 'blanchardstown-hospital', line: 'orange' },
  'blanchardstown-hospital:palmerstown': { svgIds: ['c-blanchardstownHospital-palmerstown'], from: 'blanchardstown-hospital', to: 'palmerstown', line: 'orange' },
  'blanchardstown-hospital:liffey-valley': { svgIds: ['c-blanchardstownHospital-liffeyValley'], from: 'blanchardstown-hospital', to: 'liffey-valley', line: 'orange' },
  'saggart:red-cow': { svgIds: ['c-saggart-redCow'], from: 'saggart', to: 'red-cow', line: 'red' },
}

// Return the segment regardless of which direction a route traverses it.
export function getSegment(from, to) {
  return segments[`${from}:${to}`] ?? segments[`${to}:${from}`] ?? null
}
