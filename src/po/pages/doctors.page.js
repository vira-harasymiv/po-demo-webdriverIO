const {
  AddDoctorComponent,
  ListHeaderComponent,
  SpecialistCardComponent,
} = require('./../components');

const BasePage = require('./../pages/base.page');

class DoctorsPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/doctors');
    this.doctorListHeader = new ListHeaderComponent();
    this.addDoctorModal = new AddDoctorComponent();
  }

  specialistCard(id) {
    return new SpecialistCardComponent(id);
  }
}

module.exports = DoctorsPage;
