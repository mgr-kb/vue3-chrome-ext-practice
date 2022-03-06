<template>
  <div>
    Hello World!!
    <p>
      {{ url }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Panel',
  setup() {
    const url = ref('Initial URL.')
    chrome.devtools.network.onRequestFinished.addListener(req => {
      url.value = req.request.url
    })
    return {
      url
    }
  },
})
</script>