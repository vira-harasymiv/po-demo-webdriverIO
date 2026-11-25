const BaseComponent = require('./../common/base.component');

class AddDoctorComponent extends BaseComponent {
  constructor() {
    super('[target="body"].new-doctor-dialog');
  }

  get saveBtn() {
    return this.rootEl.$('.button-container button.e-primary');
  }

  get closeBtn() {
    return this.rootEl.$('.e-dlg-closeicon-btn');
  }

  /**
   *
   * @param {'name' | 'phone' | 'email' | 'education' | 'designation'} name
   * @returns {'name' | 'phone' | 'email' | 'education' | 'designation'}
   */
  input(name) {
    const selectors = {
      name: '[name="Name"]',
      phone: '#DoctorMobile',
      email: '[name="Email"]',
      education: '[name="Education"]',
      designation: '[name="Designation"]',
    };
    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = AddDoctorComponent;
