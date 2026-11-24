class SideMenuComponent {
  get rootEl() {
    return $('#plannerSiderBar');
  }

  get name() {
    return this.rootEl.$('.name');
  }

  item(param) {
    const selectors = {
      dashboard: '[routerlink="/dashboard"]',
      schedule: '[routerlink="/calendar"]',
      doctors: '[title="doctors"]',
    };
    return this.rootEl.$(selectors[param.toLowerCase()]);
  }
}

module.exports = SideMenuComponent;
