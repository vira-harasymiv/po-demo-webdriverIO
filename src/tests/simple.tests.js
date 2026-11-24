describe('Doctors page', () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await browser.url(
      'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard',
    );
  });

  it('Check page title', async () => {
    await expect(browser).toHaveTitle(
      'Appointment Planner - Syncfusion Angular Components Showcase App',
    );
  });

  it('Open modal window for adding a new doctor', async () => {
    // click on doctors item in the side menu
    await $('[routerlink="/doctors"].sidebar-item.doctors').click();
    // click on add new doctor btw
    await $('.specialization-types button.e-control').click();
    // check that a modal window is displayed
    await expect($('[target="body"].new-doctor-dialog')).toBeDisplayed();
  });

  it('Add a new doctor', async () => {
    //click on doctors item in the side menu
    await $('[routerlink="/doctors"].sidebar-item.doctors').click();
    //click on add new doctor btw
    await $('.specialization-types button.e-control').click();
    //wait for visibility of modal window
    await $('[target="body"].new-doctor-dialog').waitForDisplayed();

    await $('[name="Name"]').setValue('John Doe');
    await $('#DoctorMobile').setValue('111111111111111111');
    await $('[name="Email"]').setValue('test@test.com');
    await $('[name="Education"]').setValue('Basic');
    await $('[name="Designation"]').setValue('Test');

    await $('.button-container button.e-primary').click();

    await expect($('[target="body"].new-doctor-dialog')).not.toBeDisplayed();

    await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Doe');
    await expect($('#Specialist_8').$('.education')).toHaveText('Basic', {
      ignoreCase: true,
    });
  });

  it('Close a modal window for adding a new doctor', async () => {
    //click on doctors item in the side menu
    await $('[routerlink="/doctors"].sidebar-item.doctors').click();
    //click on add new doctor btw
    await $('.specialization-types button.e-control').click();
    //wait for visibility of modal window
    await $('[target="body"].new-doctor-dialog').waitForDisplayed();
    await $('.e-dlg-closeicon-btn').click();
    await expect($('[target="body"].new-doctor-dialog')).not.toBeDisplayed();
  });
});
