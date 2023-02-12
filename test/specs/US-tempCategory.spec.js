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
    await browser.url('/templates/hospitality/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()     
    await browser.saveFullPageScreen('US-TChospitality', {});
  });
  it('should compare Solutions-hospitality page screenshots', async () => {
    await browser.url('/templates/hospitality/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()     
    await expect(await browser.checkFullPageScreen('US-TChospitality', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Template category 01 freshfood page secton 1==============================================================================================================
  it('should save Solutions-freshfood page screenshotsscreenshots', async () => {
    await browser.url('/templates/fresh-food/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()     
    await browser.saveFullPageScreen('US-TCfreshfood', {});
  });
  it('should compare Solutions-freshfood page screenshots', async () => {
    await browser.url('/templates/fresh-food/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()     
    await expect(await browser.checkFullPageScreen('US-TCfreshfood', { /* some options */ })).toEqual(0);
  });

  //  //===================================================Template category 01 fitness page secton 1==============================================================================================================
  it('should save Solutions-fitness page screenshotsscreenshots', async () => {
    await browser.url('/templates/fitness/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()     
    await browser.saveFullPageScreen('US-TCfitness', {});
  });
  it('should compare Solutions-fitness page screenshots', async () => {
    await browser.url('/templates/fitness/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()     
    await expect(await browser.checkFullPageScreen('US-TCfitness', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Template category 01 health page secton 1==============================================================================================================
  it('should save Solutions-health page screenshotsscreenshots', async () => {
    await browser.url('/templates/health/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()     
    await browser.saveFullPageScreen('US-TChealth', {});
  });
  it('should compare Solutions-health page screenshots', async () => {
    await browser.url('/templates/health/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()     
    await expect(await browser.checkFullPageScreen('US-TChealth', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Template category 01 medical page secton 1==============================================================================================================
  it('should save Solutions-medical page screenshotsscreenshots', async () => {
    await browser.url('/templates/medical/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()     
    await browser.saveFullPageScreen('US-TCmedical', {});
  });
  it('should compare Solutions-medical page screenshots', async () => {
    await browser.url('/templates/medical/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()     
    await expect(await browser.checkFullPageScreen('US-TCmedical', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Template category 01 hair-beauty page secton 1==============================================================================================================
  it('should save Solutions-hair-beauty page screenshotsscreenshots', async () => {
    await browser.url('/templates/hair-beauty/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()     
    await browser.saveFullPageScreen('US-TChair-beauty', {});
  });
  it('should compare Solutions-hair-beauty page screenshots', async () => {
    await browser.url('/templates/hair-beauty/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()     
    await expect(await browser.checkFullPageScreen('US-TChair-beauty', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Template category 01 retail page secton 1==============================================================================================================
  it('should save Solutions-retail page screenshotsscreenshots', async () => {
    await browser.url('/templates/retail/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()         
    await browser.saveFullPageScreen('US-TCretail', {});
  });
  it('should compare Solutions-retail page screenshots', async () => {
    await browser.url('/templates/retail/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()       
    await expect(await browser.checkFullPageScreen('US-TCretail', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Template category 01 corporate-hr page secton 1==============================================================================================================
  it('should save Solutions-corporate-hr page screenshotsscreenshots', async () => {
    await browser.url('/templates/corporate-hr/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()     
    await browser.saveFullPageScreen('US-TCcorporate-hr', {});
  });
  it('should compare Solutions-corporate-hr page screenshots', async () => {
    await browser.url('/templates/corporate-hr/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()      
    await expect(await browser.checkFullPageScreen('US-TCcorporate-hr', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Template category 01 financial page secton 1==============================================================================================================
  it('should save Solutions-financial page screenshotsscreenshots', async () => {
    await browser.url('/templates/financial/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(8000)
    // await(await HomePage.intercomBtn).moveTo()     
    await browser.saveFullPageScreen('US-TCfinancial', {});
  });
  it('should compare Solutions-financial page screenshots', async () => {
    await browser.url('/templates/financial/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(8000)
    // await(await HomePage.intercomBtn).moveTo()     
    await expect(await browser.checkFullPageScreen('US-TCfinancial', { /* some options */ })).toEqual(0);
  });
  //  //===================================================Template category 01 real-estate page secton 1==============================================================================================================
  it('should save Solutions-real-estate page screenshotsscreenshots', async () => {
    await browser.url('/templates/real-estate/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(8000)
    // await(await HomePage.intercomBtn).moveTo()     
    await browser.saveFullPageScreen('US-TCreal-estate', {});
  });
  it('should compare Solutions-real-estate page screenshots', async () => {
    await browser.url('/templates/real-estate/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(8000)
    // await(await HomePage.intercomBtn).moveTo()     
    await expect(await browser.checkFullPageScreen('US-TCreal-estate', { /* some options */ })).toEqual(0);
  });
});