export class HomeCtrl {
  constructor(gitService, cableService) {
    this.gitService = gitService;
    this.cableService = cableService;
    this.cableService = cableService;
    this.cableService = cableService;
  }

  $onInit() {
    this.gitService.fetchNotMergedBranches().then((result) => {
      this.branches = angular.copy(result.data.branches);
    });

    this.arrayData = [];
  }

  runDeploy() {
    this.arrayData.push('Line\n')
  }
}

export const HomeTemplate = `
<div ng-controller="homeCtrl as $ctrl">
  <md-toolbar class="deploy-bar">
    <div class="md-toolbar-tools">
      <md-select flex ng-model="$ctrl.envSelected" placeholder="Enviroment">
        <md-option value="9">Staging 9</md-option>
        <md-option value="8">Staging 8</md-option>
        <md-option value="7">Staging 7</md-option>
      </md-select>
      <md-select flex ng-model="$ctrl.branchSelected" placeholder="Branch">
        <md-option ng-repeat="b in $ctrl.branches" value="{{b}}">{{b}}</md-option>
      </md-select>
      <md-button class="md-fab md-mini md-hue-3" ng-click="$ctrl.runDeploy()" aria-label="Run">
          <md-icon flex ng-bind="'play_arrow'"></md-icon>
      </md-button>
    </div>
  </md-toolbar>
  <md-content>
    <console-component array-data='$ctrl.arrayData'></console-component>
  </md-content>
</div>
`;