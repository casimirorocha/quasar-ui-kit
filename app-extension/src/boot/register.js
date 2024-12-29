import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-casimirorocha'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
