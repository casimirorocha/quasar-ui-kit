import { useMeta } from 'quasar'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export function MetaTags(props) {
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
  const image =         ref(props.image ?? 'https://daddybrasilapp.test/img?user=Rafa70&file=1694525005.jpg&w=1200&h=628&size=large')
  const image_width =   ref(props.image_width ?? 1200)
  const image_height =  ref(props.image_height ?? 628)
  const image_type =    ref(props.image_type ?? 'image/jpg')
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
    meta: {
      // Primary Meta Tags
      'primary:title': {name: 'title', content: title.value},
      'primary:description': {name: 'description', content: description.value},
      'primary:keywords': {name: 'keywords', content: keywords.value},

      // Open Graph / Facebook
      'og:locale': {property: 'og:locale', content: locale.value},
      'og:type': {property: 'og:type', content: og_type.value},
      'og:site_name': {property: 'og:site_name', content: siteName.value},
      'og:url': {property: 'og:url', content: currentUrl.value},
      'og:title': {property: 'og:title', content: title.value},
      'og:description': {property: 'og:description', content: description.value},
      'ogImage': {property: 'og:image', content: image.value},
      'og:image:width': {property: 'og:image:width', content: image_width.value},
      'og:image:height': {property: 'og:image:height', content: image_height.value},
      'og:image:type': {property: 'og:image:type', content: image_type.value},

      // Twitter
      'twitter:card': {property: 'twitter:card', content: 'summary_large_image'},
      'twitter:url': {property: 'twitter:url', content: currentUrl.value},
      'twitter:title': {property: 'twitter:title', content: title.value},
      'twitter:description': {property: 'twitter:description', content: description.value},
      'twitter:image': {property: 'twitter:image', content: image.value},
      'twitter:site': {property: 'twitter:site', content: props.twitter_site ?? '@daddybrasil_app'},
    }
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
