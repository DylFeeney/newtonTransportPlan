<script setup>
import { computed, ref, watch } from 'vue'
import mapSample from '../map_sample.svg'
import { stations } from './data/stations'

const start = ref('')
const end = ref('')

const endStations = computed(() =>
  stations.filter((station) => station.name !== start.value),
)

watch(start, () => {
  end.value = ''
})
</script>

<template>
  <main class="app-shell">
    <section class="map-field" aria-label="Newton transport map">
      <form class="journey-form" aria-label="Journey locations" @submit.prevent>
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
      </form>

      <div class="map-container">
        <img :src="mapSample" alt="Newton transport map" class="transport-map">
      </div>
    </section>
  </main>
</template>
