<template>
  <q-page
    class="row justify-center items-center"
    style="background-image: url(../imgs/0cFvKO.jpg); background-size:cover;"
  >
    <div class="column q-pa-sm">
      <div class="row">
        <q-card square class="shadow-24">
              <q-card-section>
            <q-form class="q-px-sm">
              <q-input square clearable v-model="email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable v-model="password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="purple-4" class="full-width text-white" label="Sign In" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Forgot your password?</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
        email: '',
        password: ''
    }
  },
}
</script>
