import { h } from 'vue'
import { QBtn } from 'quasar'

export default {
  name: 'MyComponent',

  setup () {
    return () => h(QBtn, {
      size: 'lg',
      icon: 'add',
      glossy: true,
      color: 'red',
      class: 'MyComponent',
      label: 'MyComponent'
    })
  }
}