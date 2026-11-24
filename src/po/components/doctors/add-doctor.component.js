const BaseComponent = require('./../common/base.component');

class AddDoctorComponent extends BaseComponent {
  constructor() {
    super('[target="body"].new-doctor-dialog');
  }
}

module.exports = AddDoctorComponent;
