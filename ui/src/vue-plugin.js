// This file is used to register the components, directive and meta-tags globally.
import Component from './components/Component'

// Import the LoginForm component. This is used to display the login form.
import LoginForm from './components/Forms/LoginForm/LoginForm.vue'
import RegisterForm from './components/Forms/RegisterForm/RegisterForm.vue'
import Card from './components/Cards/Card.vue'
import Intersection from './components/Intersection/Intersection.vue'

// Import the Directive component. This is used to handle events.
import Directive from './directives/Directive'

// Import the MetaTags composable. This is used to add meta-tags to the head of the page.
import { metaTags } from './composable'

// The __UI_VERSION__ variable is replaced by the actual version number during the build process using the webpack.
const version = __UI_VERSION__

// The installation function is used to register the components, directive and meta-tags globally.
function install (app) {
  // Register the component globally.
  app.component(Component.name, Component)

  // Register the login form component globally.
  app.component(LoginForm.name, LoginForm)

  // Register the register form component globally.
  app.component(RegisterForm.name, RegisterForm)

  // Register the intersection component globally.
  app.component(Intersection.name, Intersection);

  // Register the card component globally.
  app.component(Card.name, Card)

  // Register the directive globally.
  app.directive(Directive.name, Directive)

  // Add $meta to the Vue instance, so it can be used in components.
  app.config.globalProperties.$metaTags = metaTags
}

// Export the version, component, directive and install function.
export {
  version, // The version number of the UI.
  Component, // The component that is used to display the UI.
  LoginForm, // The login form component.
  RegisterForm, // The register form component.
  Intersection, // The intersection component
  Card, // The card component.
  Directive, // The directive that is used to handle events.
  install // The function that is used to register the components, directive and meta tags globally.
}
