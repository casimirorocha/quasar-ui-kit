// This file is used to register the components, directive and meta tags globally.
import Component from './components/Component'

// Import the Directive component. This is used to handle events.
import Directive from './directives/Directive'

// Import the MetaTags composable. This is used to add meta tags to the head of the page.
import { MetaTags } from './composable'

// The __UI_VERSION__ variable is replaced by the actual version number during the build process using the webpack.
const version = __UI_VERSION__

// The installation function is used to register the components, directive and meta tags globally.
function install (app) {
  // Register the component globally.
  app.component(Component.name, Component)

  // Register the directive globally.
  app.directive(Directive.name, Directive)

  // Add $meta to the Vue instance, so it can be used in components.
  app.config.globalProperties.$meta = MetaTags
}

// Export the version, component, directive and install function.
export {
  version, // The version number of the UI.
  Component, // The component that is used to display the UI.
  Directive, // The directive that is used to handle events.
  install // The function that is used to register the components, directive and meta tags globally.
}
