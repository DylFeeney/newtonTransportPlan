import { network } from '../data/network'
import { getSegment } from '../data/segments'

export function findRoute(start, destination) {
  if (start === destination) {
    return [start]
  }

  const queue = [[start]]
  const visited = new Set([start])

  while (queue.length > 0) {
    const route = queue.shift()
    const currentStation = route[route.length - 1]

    for (const nextStation of network[currentStation] || []) {
      if (visited.has(nextStation)) {
        continue
      }

      const newRoute = [...route, nextStation]

      if (nextStation === destination) {
        return newRoute
      }

      visited.add(nextStation)
      queue.push(newRoute)
    }
  }

  return null
}

export function getRouteSegments(route) {
  if (!route || route.length < 2) {
    return []
  }

  const segments = []

  for (let i = 0; i < route.length - 1; i++) {
    const segment = getSegment(
      route[i],
      route[i + 1]
    )

    if (segment) {
      segments.push(segment)
    }
  }

  return segments
}