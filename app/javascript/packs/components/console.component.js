class ConsoleCtrl {
  constructor(cableService){
    this.cableService = cableService;
  }
  $onInit() {

  }
  $onChanges() {
  }
}

const template = `
<md-content flex layout-padding>
  <p ng-repeat="cmd in $ctrl.arrayData track by $index">{{cmd}}</p>
</md-content>
`;

const ConsoleComponent = {
  bindings: {
    arrayData: '<'
  },
  controller: ConsoleCtrl,
  template: template
};

export default ConsoleComponent;