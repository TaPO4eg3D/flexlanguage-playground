<template lang="pug">
.editor-view
  button(
    @click="eval()"
  ) RUN
  .editor
    textarea(
      v-model="inputValue",
    )
  .result
    textarea(disabled, :value="evalValue")
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { wasm_eval } from 'flexwasm';

export default defineComponent({
    name: 'EditorView',
    data() {
      return {
        inputValue: '',
        evalValue: '',
      }
    },
    methods: {
      eval() {
        this.evalValue = wasm_eval(this.inputValue);
      }
    },
    mounted() {
      console.log(wasm_eval("1 + 1 * 3;"));
    },
})
</script>

<style lang="scss">
.editor-view {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

button {
  width: 80px;
  height: 60px;
  margin-top: 20px;
  margin-left: 20px;
}

textarea {
  width: 100%;
  height: 100%;
  resize: none;

  &:focus {
    outline: none;
  }
}

.editor {
  height: 100%;
  padding: 20px;
}
.result {
  height: 100%;
  padding: 20px;
  padding-top: 10px;
}
</style>