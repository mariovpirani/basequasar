<template>
  <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="abreMenu()"
          v-if="!this.$route.meta.hideMenu"
        />
        <q-toolbar-title>
          Bross APP
        </q-toolbar-title>

        <div>Version 0.0.1</div>
      </q-toolbar>
    </q-header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
      abreMenu () {
          this.controleMenu = !this.controleMenu
          this.$emit('leftDrawerOpen', this.controleMenu)
          return this.controleMenu
      }
  },
  data () {
    return {
        controleMenu: false
    }
  }
}
</script>
