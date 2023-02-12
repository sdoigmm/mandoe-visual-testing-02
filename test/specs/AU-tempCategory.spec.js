const HomePage = require('../pageobjects/home.page');

describe('Template category page', () => {

  beforeEach(async () => {

    await browser.maximizeWindow()
    await browser.setTimeout({ 'pageLoad': 1000000 })
    await browser.refresh()

  });
  afterEach(() => {
    browser.execute('window.localStorage.clear()');
    browser.deleteAllCookies()
    browser.execute('sessionStorage.clear()')

  });

  //  //===================================================Template category 01 hospitality page secton 10 pages==============================================================================================================
  it('should save Solutions-hospitality page screenshotsscreenshots', async () => {
    await browser.url('en-au/templates/hospitality/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()  
    await browser.saveFullPageScreen('AU-TChospitality', {});
  });
  it('should compare Solutions-hospitality page screenshots', async () => {
    await browser.url('en-au/templates/hospitality/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()  
    await expect(await browser.checkFullPageScreen('AU-TChospitality', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Template category 01 freshfood page secton 1==============================================================================================================
  it('should save Solutions-freshfood page screenshotsscreenshots', async () => {
    await browser.url('en-au/templates/fresh-food/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()  
    await browser.saveFullPageScreen('AU-TCfreshfood', {});
  });
  it('should compare Solutions-freshfood page screenshots', async () => {
    await browser.url('en-au/templates/fresh-food/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()  
    await expect(await browser.checkFullPageScreen('AU-TCfreshfood', { /* some options */ })).toEqual(0);
  });

  //  //===================================================Template category 01 fitness page secton 1==============================================================================================================
  it('should save Solutions-fitness page screenshotsscreenshots', async () => {
    await browser.url('en-au/templates/fitness/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()  
    await browser.saveFullPageScreen('AU-TCfitness', {});
  });
  it('should compare Solutions-fitness page screenshots', async () => {
    await browser.url('en-au/templates/fitness/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()  
    await expect(await browser.checkFullPageScreen('AU-TCfitness', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Template category 01 health page secton 1==============================================================================================================
  it('should save Solutions-health page screenshotsscreenshots', async () => {
    await browser.url('en-au/templates/health/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()  
    await browser.saveFullPageScreen('AU-TChealth', {});
  });
  it('should compare Solutions-health page screenshots', async () => {
    await browser.url('en-au/templates/health/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()  
    await expect(await browser.checkFullPageScreen('AU-TChealth', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Template category 01 medical page secton 1==============================================================================================================
  it('should save Solutions-medical page screenshotsscreenshots', async () => {
    await browser.url('en-au/templates/medical/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()  
    await browser.saveFullPageScreen('AU-TCmedical', {});
  });
  it('should compare Solutions-medical page screenshots', async () => {
    await browser.url('en-au/templates/medical/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()  
    await expect(await browser.checkFullPageScreen('AU-TCmedical', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Template category 01 hair-beauty page secton 1==============================================================================================================
  it('should save Solutions-hair-beauty page screenshotsscreenshots', async () => {
    await browser.url('en-au/templates/hair-beauty/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()  
    await browser.saveFullPageScreen('AU-TChair-beauty', {});
  });
  it('should compare Solutions-hair-beauty page screenshots', async () => {
    await browser.url('en-au/templates/hair-beauty/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()  
    await expect(await browser.checkFullPageScreen('AU-TChair-beauty', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Template category 01 retail page secton 1==============================================================================================================
  it('should save Solutions-retail page screenshotsscreenshots', async () => {
    await browser.url('en-au/templates/retail/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()
    await browser.saveFullPageScreen('AU-TCretail', {});
  });
  it('should compare Solutions-retail page screenshots', async () => {
    await browser.url('en-au/templates/retail/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()    
    await expect(await browser.checkFullPageScreen('AU-TCretail', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Template category 01 corporate-hr page secton 1==============================================================================================================
  it('should save Solutions-corporate-hr page screenshotsscreenshots', async () => {
    await browser.url('en-au/templates/corporate-hr/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()  
    await browser.saveFullPageScreen('AU-TCcorporate-hr', {});
  });
  it('should compare Solutions-corporate-hr page screenshots', async () => {
    await browser.url('en-au/templates/corporate-hr/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()   
    await expect(await browser.checkFullPageScreen('AU-TCcorporate-hr', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Template category 01 financial page secton 1==============================================================================================================
  it('should save Solutions-financial page screenshotsscreenshots', async () => {
    await browser.url('en-au/templates/financial/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()  
    await browser.saveFullPageScreen('AU-TCfinancial', {});
  });
  it('should compare Solutions-financial page screenshots', async () => {
    await browser.url('en-au/templates/financial/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()  
    await expect(await browser.checkFullPageScreen('AU-TCfinancial', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Template category 01 real-estate page secton 1==============================================================================================================
  it('should save Solutions-real-estate page screenshotsscreenshots', async () => {
    await browser.url('en-au/templates/real-estate/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()  
    await browser.saveFullPageScreen('AU-TCreal-estate', {});
  });
  it('should compare Solutions-real-estate page screenshots', async () => {
    await browser.url('en-au/templates/real-estate/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()  
    await expect(await browser.checkFullPageScreen('AU-TCreal-estate', { /* some options */ })).toEqual(0);
  });
});