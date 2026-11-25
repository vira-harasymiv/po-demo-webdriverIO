const { AddDoctorComponent, ListHeaderComponent } = require('./../components');

const BasePage = require('./../pages/base.page');

class DoctorsPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/doctors');
    this.doctorListHeader = new ListHeaderComponent();
    this.addDoctorModal = new AddDoctorComponent();
  }
}

module.exports = DoctorsPage;
