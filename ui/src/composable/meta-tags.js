import { useMeta } from 'quasar'
import { useRouter } from 'vue-router'
import { inject, onBeforeMount, ref } from 'vue'

export async function metaTags(props) {
  props.site_name = undefined;
  props.twitter_site = undefined;
  props.image_width = undefined;
  props.image_height = undefined;
  props.image_type = undefined;

  const $router =       useRouter()
  const APP_NAME =      ref('DaddyBrasil')
  const APP_URL =       ref("https://daddybrasil.com.br/")
  const title =         ref(props.title.concat(' | ', APP_NAME.value ?? 'DaddyBrasil'))
  const siteName =      ref(props.site_name ?? APP_NAME.value)
  const description =   ref(props.description ?? 'Me chame e vamos conversar pra saber um pouco sobre mim tenho certeza que não ira se arrepender procuro alguém sou recíproca')
  const image =         ref(props.image ?? 'https://metatags.io/images/meta-tags.jpg')
  const image_width =   ref(props.image_width ?? 1200)
  const image_height =  ref(props.image_height ?? 628)
  const image_type =    ref(props.image_type ?? 'image/jpg')
  const image_alt =     ref(props.image_alt ?? title.value)
  const keywords =      ref(props.keywords ?? 'DaddyBrasil, Relacionamento Sugar, Sugar, Daddys, Daddies, DaddysBrasil, DaddiesBrasil, Daddy, DaddyBrazil, DaddysBrazil, DaddiesBrazil, DaddyBrasil, DaddysBrasil, DaddiesBrasil, DaddyBrazil, DaddysBrazil, DaddiesBrazil, DaddyBrasil, DaddysBrasil, DaddiesBrasil, DaddyBrazil, DaddysBrazil, DaddiesBrazil, DaddyBrasil, DaddysBrasil, DaddiesBrasil, DaddyBrazil, DaddysBrazil, DaddiesBrazil, DaddyBrasil, DaddysBrasil, DaddiesBrasil, DaddyBr')
  const locale =        ref(props.locale ?? 'pt_BR')
  const og_type =       ref(props.og_type ?? 'website')
  const currentUrl =    ref(props.url ?? APP_URL.value?.concat($router.currentRoute.value.fullPath.replaceAll('/', '')))

  useMeta({
    title: title.value,
    link: {
      canonical: {
        rel: 'canonical',
        href: currentUrl.value
      }
    },
    meta: [
      // Primary Meta Tags
      {name: 'title', content: title.value},
      {name: 'description', content: description.value},
      {name: 'keywords', content: keywords.value},

      // Open Graph / Facebook
      {property: 'og:locale', content: locale.value},
      {property: 'og:type', content: og_type.value},
      {property: 'og:site_name', content: siteName.value},
      {property: 'og:url', content: currentUrl.value},
      {property: 'og:title', content: title.value},
      {property: 'og:description', content: description.value},
      {property: 'og:image', content: image.value},
      {property: 'og:image:width', content: image_width.value},
      {property: 'og:image:height', content: image_height.value},
      {property: 'og:image:type', content: image_type.value},
      {property: 'og:image:alt', content: image_alt.value},

      // Twitter
      {property: 'twitter:card', content: 'summary_large_image'},
      {property: 'twitter:url', content: currentUrl.value},
      {property: 'twitter:title', content: title.value},
      {property: 'twitter:description', content: description.value},
      {property: 'twitter:image', content: image.value},
      {property: 'twitter:site', content: props.twitter_site ?? '@daddybrasil_app'},
    ]
  })
  
  onBeforeMount(() => {
    const bus = inject('bus') // inside setup()
    bus.emit('page:title', title.value)
  })

  return {
    title,
    siteName,
    description,
    image,
    image_width,
    image_height,
    image_type,
    keywords,
    locale,
    og_type,
    currentUrl
  }
}
