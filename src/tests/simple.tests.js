const { pages } = require('./../po');

describe('Doctors page', () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await pages('dashboard').open();
  });

  it('Check page title', async () => {
    await expect(browser).toHaveTitle(
      'Appointment Planner - Syncfusion Angular Components Showcase App',
    );
  });

  it('Open modal window for adding a new doctor', async () => {
    await pages('dashboard').sideMenu.item('doctors').click();
    await pages('dashboard').doctorListHeader.addNewDoctorBtn.click();
    await expect(pages('doctors').addDoctorModal.rootEl).toBeDisplayed();
  });

  it('Add a new doctor', async () => {
    await pages('dashboard').sideMenu.item('doctors').click();
    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
    await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();

    await $('[name="Name"]').setValue('John Doe');
    await $('#DoctorMobile').setValue('111111111111111111');
    await $('[name="Email"]').setValue('test@test.com');
    await $('[name="Education"]').setValue('Basic');
    await $('[name="Designation"]').setValue('Test');

    await $('.button-container button.e-primary').click();

    await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();

    await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Doe');
    await expect($('#Specialist_8').$('.education')).toHaveText('Basic', {
      ignoreCase: true,
    });
  });

  it('Close a modal window for adding a new doctor', async () => {
    await pages('dashboard').sideMenu.item('doctors').click();
    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
    await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();
    await $('.e-dlg-closeicon-btn').click();
    await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
