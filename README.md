```
<template>
  <q-button @click="onClick">click me</q-button>
</template>

<script setup>
  import { reass9 } from 'reass9';

  const initFormData = { input1: '', input2: '' };
  const formData = reactive({ ...initFormData });
  const onClick = () => reass9(formData, { ...initFormData });
</script>
```
