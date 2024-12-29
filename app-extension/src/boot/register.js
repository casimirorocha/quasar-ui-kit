import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-daddybrasil'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
