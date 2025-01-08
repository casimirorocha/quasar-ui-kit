import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'
import { boot } from 'quasar/wrappers'
import { getSettings } from '../../../src/composable'

export default boot(async ({ app }) => {
  // Get settings from server
  const settings = await getSettings()

  const i18n = createI18n({
    locale: settings?.locale || 'en-US',
    globalInjection: true,
    legacy: false, // for latest vuei18n with compo API
    messages
  })

  // Set i18n instance on app
  app.use(i18n)
})
