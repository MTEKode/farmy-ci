class DeployCtrl {
  constructor() {
    console.log('Initializer Deploy')
  }
}

const DeployComponent = {
  bindings: {},
  controller: DeployCtrl,
  template: '<md-toolbar class="md-accent">'
};

export default DeployComponent;
