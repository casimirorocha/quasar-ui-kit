<script setup>
import { inject, ref } from 'vue'
import { postLogin } from '../../../composable'

defineOptions({
  name: 'LoginForm',
})
const meta = inject('meta') // inside setup()

meta({
  title: 'Login',
  description: 'Login to your account to access our services',
  keywords: 'login, registration, authentication, daddybrasil'
})

const form = ref({
  email: "",
  password: "",
  remember: true,
})

const submit = async () => {
  await postLogin(form.value).finally(() => {
    form.value.password = ""
  })
}
</script>

<template>
  <q-page class="flex flex-center" padding>
     <Intersection>
       <Card class="login-form">
         <template #title>
           <q-icon class="q-mr-xs" name="lock" /> Login
         </template>

         <template #body>
           <q-form class="q-col-gutter-lg q-pa-xs" @submit.prevent="submit">
             <q-input
                 v-model="form.email"
                 autocomplete="username"
                 autofocus filled
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

             <div>
               <q-toggle
                   v-model="form.remember"
                   label="Remember me"
               />
             </div>

             <div>
               <q-btn class="full-width"
                      color="primary"
                      glossy
                      icon-right="login"
                      label="Login"
                      size="1.1rem"
                      type="submit"
               />
             </div>
             <div class="text-center q-gutter-xs">
               <div>
                 <q-btn color="primary" flat icon-right="arrow_right" label="Create an Account" size="md" to="/register" />
               </div>
               <div>
                 <q-btn color="grey" flat label="Forgot Password?" size="sm" />
               </div>
             </div>
           </q-form>
         </template>
       </Card>
     </Intersection>
  </q-page>
</template>

<style lang="sass" scoped src="./LoginForm.sass" />