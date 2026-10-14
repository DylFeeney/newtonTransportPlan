import { segments } from './segments'
import { stations } from './stations'

// Build adjacency from the v3 segment source so the route graph cannot drift
// out of sync with the map connections.
export const network = Object.fromEntries(stations.map(({ id }) => [id, []]))

for (const { from, to } of Object.values(segments)) {
  network[from].push(to)
  network[to].push(from)
}
