<template>
    <div>simple vuex</div>
</template>

<script>
export default {
  name: 'app',
  created() {
    console.log('打印出this.$store.state.count的结果',this.$store.state.count);
  },
}
</script>