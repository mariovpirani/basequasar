<template>
  <q-layout view="lHh Lpr lFf">
    <Header v-on:leftDrawerOpen="trocaMenu($event)"/>
    <q-drawer
      v-if="leftDrawerOpen"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    > 
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from 'components/Header.vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Menu',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  }
];

export default {
  name: 'MainLayout',
  components: { Header, EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  methods: {
      trocaMenu (event) {
          this.leftDrawerOpen = event
      }
  },
  mounted () {
      this.leftDrawerOpen = false
  }
}
</script>
