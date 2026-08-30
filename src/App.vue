<script setup>
import { computed, ref, watch } from 'vue'
import mapSample from '../map_sample.svg?raw'
import { stations } from './data/stations'
import { segments } from './data/segments'
import { findRoute, getRouteSegments } from './services/routeFinder'

const start = ref('')
const end = ref('')
const mapElement = ref(null)
const hasHighlightedRoute = ref(false)

const endStations = computed(() =>
  stations.filter((station) => station.name !== start.value),
)

function clearRouteHighlight() {
  hasHighlightedRoute.value = false
  mapElement.value?.querySelectorAll('.is-route-element').forEach((element) => {
    element.classList.remove('is-route-element')
  })
}

watch(start, () => {
  end.value = ''
  clearRouteHighlight()
})

watch(end, clearRouteHighlight)

function highlightRoute() {
  const startStation = stations.find((station) => station.name === start.value)
  const endStation = stations.find((station) => station.name === end.value)

  if (!startStation || !endStation) {
    return
  }

  const route = findRoute(startStation.id, endStation.id)
  const routeSegments = getRouteSegments(route)

  if (!route) {
    clearRouteHighlight()
    return
  }

  const routeElementIds = new Set([
    ...routeSegments.map((segment) => segment.svgId),
    ...route.flatMap((stationId) => {
      const station = stations.find((item) => item.id === stationId)
      return [station?.svgId, station?.labelSvgId].filter(Boolean)
    }),
  ])

  const mapElementIds = [
    ...Object.values(segments).map((segment) => segment.svgId),
    ...stations.flatMap((station) => [station.svgId, station.labelSvgId].filter(Boolean)),
  ]

  mapElementIds.forEach((id) => {
    const element = mapElement.value?.querySelector(`#${id}`)
    element?.classList.add('is-route-target')
    element?.classList.toggle('is-route-element', routeElementIds.has(id))
  })

  hasHighlightedRoute.value = true
}
</script>

<template>
  <main class="app-shell">
    <section class="map-field" aria-label="Newton transport map">
      <form class="journey-form" aria-label="Journey locations" @submit.prevent="highlightRoute">
        <div class="field-row">
          <label for="start">Start:</label>
          <select id="start" v-model="start" name="start">
            <option disabled value="">Choose a starting point</option>
            <option v-for="station in stations" :key="station.id" :value="station.name">
              {{ station.name }}
            </option>
          </select>
        </div>

        <div class="field-row">
          <label for="end">End:</label>
          <select id="end" v-model="end" name="end" :disabled="!start">
            <option disabled value="">Choose a destination</option>
            <option v-for="station in endStations" :key="station.id" :value="station.name">
              {{ station.name }}
            </option>
          </select>
        </div>

        <button type="submit" :disabled="!start || !end">Highlight route(s)</button>
      </form>

      <div class="map-container">
        <div
          ref="mapElement"
          class="transport-map"
          :class="{ 'has-highlighted-route': hasHighlightedRoute }"
          role="img"
          aria-label="Newton transport map"
          v-html="mapSample"
        ></div>
      </div>
    </section>
  </main>
</template>
