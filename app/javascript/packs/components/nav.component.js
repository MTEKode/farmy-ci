class NavCtrl {
  constructor() {
    console.log('Nav Loaded!')
  }
}

const template = `<ul>
<li><a ng-href="/"> home</a></li>
<li><a ng-href="/about"> about</a></li>
<li><a ng-href="/test"> test</a></li>
</ul>`;

const NavComponent = {
  bindings: {},
  controller: NavCtrl,
  template: template
};

export default NavComponent;
