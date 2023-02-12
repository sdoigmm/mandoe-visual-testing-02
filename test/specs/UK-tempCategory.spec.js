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
    await browser.url('en-gb/templates/hospitality/');
    await browser.pause(4000)
    // await(await HomePage.talktoSales).moveTo()  
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()  
    await browser.saveFullPageScreen('UK-TChospitality', {});
  });
  it('should compare Solutions-hospitality page screenshots', async () => {
    await browser.url('en-gb/templates/hospitality/');
    // await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()              
    await expect(await browser.checkFullPageScreen('UK-TChospitality', { /* some options */ })).toEqual(0);
  });

  //  //===================================================Template category 01 freshfood page secton 1==============================================================================================================
  it('should save Solutions-freshfood page screenshotsscreenshots', async () => {
    await browser.url('en-gb/templates/fresh-food/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()  
    await browser.saveFullPageScreen('UK-TCfreshfood', {});
  });
  it('should compare Solutions-freshfood page screenshots', async () => {
    await browser.url('en-gb/templates/fresh-food/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()          
    await expect(await browser.checkFullPageScreen('UK-TCfreshfood', { /* some options */ })).toEqual(0);
  });

  //  //===================================================Template category 01 fitness page secton 1==============================================================================================================
  it('should save Solutions-fitness page screenshotsscreenshots', async () => {
    await browser.url('en-gb/templates/fitness/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo()  
    await browser.saveFullPageScreen('UK-TCfitness', {});
  });
  it('should compare Solutions-fitness page screenshots', async () => {
    await browser.url('en-gb/templates/fitness/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()         
    await expect(await browser.checkFullPageScreen('UK-TCfitness', { /* some options */ })).toEqual(0);
  });

  //  //===================================================Template category 01 health page secton 1==============================================================================================================

  it('should save Solutions-health page screenshotsscreenshots', async () => {
    await browser.url('en-gb/templates/health/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()         
    await browser.saveFullPageScreen('UK-TChealth', {});
  });

  it('should compare Solutions-health page screenshots', async () => {
    await browser.url('en-gb/templates/health/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()  
    await expect(await browser.checkFullPageScreen('UK-TChealth', { /* some options */ })).toEqual(0);
  });

  //===================================================Template category 01 medical page secton 1==============================================================================================================
  it('should save Solutions-medical page screenshotsscreenshots', async () => {
    await browser.url('en-gb/templates/medical/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()        
    await browser.saveFullPageScreen('UK-TCmedical', {});
  });
  it('should compare Solutions-medical page screenshots', async () => {
    await browser.url('en-gb/templates/medical/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()         
    await expect(await browser.checkFullPageScreen('UK-TCmedical', { /* some options */ })).toEqual(0);
  });

  //===================================================Template category 01 hair-beauty page secton 1==============================================================================================================
  it('should save Solutions-hair-beauty page screenshotsscreenshots', async () => {
    await browser.url('en-gb/templates/hair-beauty/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()  
    await browser.saveFullPageScreen('UK-TChair-beauty', {});
  });
  it('should compare Solutions-hair-beauty page screenshots', async () => {
    await browser.url('en-gb/templates/hair-beauty/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()         
    await expect(await browser.checkFullPageScreen('UK-TChair-beauty', { /* some options */ })).toEqual(0);
  });

  //===================================================Template category 01 retail page secton 1==============================================================================================================
  it('should save Solutions-retail page screenshotsscreenshots', async () => {
    await browser.url('en-gb/templates/retail/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()      
    await browser.saveFullPageScreen('UK-TCretail', {});
  });
  it('should compare Solutions-retail page screenshots', async () => {
    await browser.url('en-gb/templates/retail/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()                    
    await expect(await browser.checkFullPageScreen('UK-TCretail', { /* some options */ })).toEqual(0);
  });
  //===================================================Template category 01 corporate-hr page secton 1==============================================================================================================
  it('should save Solutions-corporate-hr page screenshotsscreenshots', async () => {
    await browser.url('en-gb/templates/corporate-hr/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()        
    await browser.saveFullPageScreen('UK-TCcorporate-hr', {});
  });
  it('should compare Solutions-corporate-hr page screenshots', async () => {
    await browser.url('en-gb/templates/corporate-hr/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()   
    await expect(await browser.checkFullPageScreen('UK-TCcorporate-hr', { /* some options */ })).toEqual(0);
  });

  //===================================================Template category 01 financial page secton 1==============================================================================================================
  it('should save Solutions-financial page screenshotsscreenshots', async () => {
    await browser.url('en-gb/templates/financial/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()  
    await browser.saveFullPageScreen('UK-TCfinancial', {});
  });
  it('should compare Solutions-financial page screenshots', async () => {
    await browser.url('en-gb/templates/financial/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()  
    await expect(await browser.checkFullPageScreen('UK-TCfinancial', { /* some options */ })).toEqual(0);
  });
  //===================================================Template category 01 real-estate page secton 1==============================================================================================================
  it('should save Solutions-real-estate page screenshotsscreenshots', async () => {
    await browser.url('en-gb/templates/real-estate/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()  
    await browser.saveFullPageScreen('UK-TCreal-estate', {});
  });
  it('should compare Solutions-real-estate page screenshots', async () => {
    await browser.url('en-gb/templates/real-estate/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo()            
    await expect(await browser.checkFullPageScreen('UK-TCreal-estate', { /* some options */ })).toEqual(0);
  });
});