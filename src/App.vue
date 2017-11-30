<script src="main.js"></script>
<template>
  <div id="app">
    <d-header></d-header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <reader></reader>
  </div>
</template>

<script>
  import DHeader from 'components/d-header/d-header';
  import Tab from 'components/tab/tab';
  import Reader from 'components/reader/reader';

  export default {
    name: 'app',
    components: {
      DHeader,
      Tab,
      Reader
    }
  };
</script>

<style>

</style>
