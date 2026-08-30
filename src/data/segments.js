// Maps a logical connection to the SVG element(s) that draw it.
// SVG IDs come directly from map_sample.svg.
//
// The network is bidirectional, so route-finding can traverse either direction.
// The SVG itself only needs one visual segment for each connection.

export const segments = {
  'm3-parkway:clonee': {
    svgId: 'c-m3parkway-clonee',
    from: 'm3-parkway',
    to: 'clonee',
    line: 'blue',
  },

  'clonee:hansfield': {
    svgId: 'c-clonee-hansfield',
    from: 'clonee',
    to: 'hansfield',
    line: 'blue',
  },

  'hansfield:clonsilla': {
    svgId: 'c-hansfield-clonsilla',
    from: 'hansfield',
    to: 'clonsilla',
    line: 'blue',
  },

  'clonsilla:intel': {
    svgId: 'c-clonsilla-intel',
    from: 'clonsilla',
    to: 'intel',
    line: 'blue',
  },

  'clonee:intel': {
    svgId: 'c-clonee-intel',
    from: 'clonee',
    to: 'intel',
    line: 'pink',
  },
}

// Return the segment regardless of which direction a route traverses it.
export function getSegment(from, to) {
  return (
    segments[`${from}:${to}`] ??
    segments[`${to}:${from}`] ??
    null
  )
}