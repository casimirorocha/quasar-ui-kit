<script setup>
import { ref } from 'vue'
import { metaTags, postRegister } from '../../../composable'

defineOptions({
  name: 'RegisterForm',
})

metaTags({
  title: 'Register',
  description: 'Register to access our platform',
  keywords: 'register, sign up, sign-up, signup, sign-in, login, sign in, signing, daddybrasil'
})

const form = ref({
  name: "Casimiro",
  email: "casimiroaf@gmail.com",
  password: "14253678",
  password_confirmation: "14253678",
})

const submit = async () => {
  await postRegister(form.value).finally(() => {
    form.value.password = ""
  })
}
</script>

<template>
  <q-page class="flex flex-center" padding>
    <Intersection>
      <Card class="register-form">
        <template #title>
          <q-icon class="q-mr-xs" name="person_add" /> Register
        </template>

        <template #body>
          <q-form class="q-col-gutter-lg q-pa-xs" @submit.prevent="submit">
            <q-input
                v-model="form.name"
                autofocus
                filled
                label="Name"
                required
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>

            <q-input
                v-model="form.email"
                autocomplete="new-username"
                filled
                label="Email"
                required
                type="email"
            >
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
            </q-input>

            <q-input
                v-model="form.password"
                autocomplete="new-password"
                filled
                label="Password"
                required
                type="password"
            >
              <template v-slot:prepend>
                <q-icon name="password" />
              </template>
            </q-input>

            <q-input
                v-model="form.password_confirmation"
                autocomplete="new-password"
                filled
                label="Password Confirmation"
                required type="password"
            >
              <template v-slot:prepend>
                <q-icon name="password" />
              </template>
            </q-input>

            <div>
              <q-btn class="full-width"
                     color="primary"
                     glossy
                     icon-right="check"
                     label="Finish"
                     size="1.1rem"
                     type="submit"
              />
            </div>
          </q-form>
        </template>
      </Card>
    </Intersection>
  </q-page>
</template>

<style lang="sass" scoped src="./RegisterForm.sass" />