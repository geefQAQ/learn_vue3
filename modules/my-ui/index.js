import Transfer from './Transfer/Transfer';
import Stars from './Stars';

const components = {
  Transfer,
  Stars
}

export default {
  install(app) {
    for(let comp in components) {
      app.component(comp, components[comp])
    }
  }
}