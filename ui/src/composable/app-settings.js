import { LocalStorage } from 'quasar'

export default async function addSettings(settings) {
  await  LocalStorage.set('settings', settings)
}

export async function getSettings() {
  const item = await LocalStorage.getItem('settings')
  if (item) {
    return item
  } else {
    return {}
  }
}