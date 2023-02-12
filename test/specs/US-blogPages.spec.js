const HomePage = require('../pageobjects/home.page');

describe('Solutions page', () => {

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

  //  //===================================================Food blog page 8 ==============================================================================================================
  it('should save Food blog page screenshotsscreenshots', async () => {
    await browser.url('/blog/elements-and-templates-food-sustainability/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)  
    await browser.saveFullPageScreen('US-Food-blog', {});
  });
  it('should compare Food blog page screenshots', async () => {
    await browser.url('/blog/elements-and-templates-food-sustainability/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    await expect(await browser.checkFullPageScreen('US-Food-blog', { /* some options */ })).toEqual(0);
  });
  //  //===================================================increase Traffic blog=============================================================================================================
  it('should save Increase traffic blog page screenshotsscreenshots', async () => {
    await browser.url('/blog/how-to-increase-foot-traffic-to-your-store-and-boost-sales/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)      
    await browser.saveFullPageScreen('US-increaseTrafficBLog', {});
  });
  it('should compare Increase traffic blog page screenshots', async () => {
    await browser.url('/blog/how-to-increase-foot-traffic-to-your-store-and-boost-sales/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)    
    await expect(await browser.checkFullPageScreen('US-increaseTrafficBLog', { /* some options */ })).toEqual(0);
  });

  //  //==================================================Swimart blog==============================================================================================================
  it('should save Swimart blog page screenshotsscreenshots', async () => {
    await browser.url('/blog/customer-story-swimart/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)   
    await browser.saveFullPageScreen('US-swimartBlog', {});
  });
  it('should compare Swimart blog page screenshots', async () => {
    await browser.url('/blog/customer-story-swimart/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)   
    await expect(await browser.checkFullPageScreen('US-swimartBlog', { /* some options */ })).toEqual(0);
  });
  //  //==================================================Swimart blog==============================================================================================================
  it('should save promotion Template  screenshotsscreenshots', async () => {
    await browser.url('/templates/hospitality/liquor/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await browser.saveFullPageScreen('US-promotionTemplate', {});
  });
  it('should compare promotion Template  screenshots', async () => {
    await browser.url('/templates/hospitality/liquor/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await expect(await browser.checkFullPageScreen('US-promotionTemplate', { /* some options */ })).toEqual(0);
  });

  //  //==================================================Pricing==============================================================================================================
  it('should save Pricing page screenshotsscreenshots', async () => {
    await browser.url('/pricing/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await browser.saveFullPageScreen('US-pricing', {});
  });
  it('should compare Pricing page screenshots', async () => {
    await browser.url('/pricing/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)    
    await expect(await browser.checkFullPageScreen('US-pricing', { /* some options */ })).toEqual(0);
  });
  //  //==================================================Legal/==============================================================================================================
  it('should save Legal page screenshotsscreenshots', async () => {
    await browser.url('/mandoe-legal/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)   
    await browser.saveFullPageScreen('US-legal', {});
  });
  it('should compare legal page screenshots', async () => {
    await browser.url('/mandoe-legal/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)    
    await expect(await browser.checkFullPageScreen('US-legal', { /* some options */ })).toEqual(0);
  });
  //  //==================================================Terms of Use==============================================================================================================
  it('should save Terms of use page screenshotsscreenshots', async () => {
    await browser.url('/terms-of-use/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)     
    await browser.saveFullPageScreen('US-terms-of-use', {});
  });
  it('should compare Terms of use page screenshots', async () => {
    await browser.url('/terms-of-use/');
    await browser.pause(4000)
    // await (await HomePage.startFreeTrial).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 

    await expect(await browser.checkFullPageScreen('US-terms-of-use', { /* some options */ })).toEqual(0);
  });
  //  //==================================================Safety warranty==============================================================================================================
  /*it('should save Safety warranty  page screenshotsscreenshots', async () => {
    await browser.url('/guides/safety-warranty-regulatory-guide/');



    await browser.pause(4000)
    await (await HomePage.startFreeTrial).moveTo()
    await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)    

    await browser.saveFullPageScreen('US-safetyWarranty', {});
  });
  it('should compare Safety warranty page screenshots', async () => {
    await browser.url('/guides/safety-warranty-regulatory-guide/');



    await browser.pause(4000)
    await (await HomePage.startFreeTrial).moveTo()
    await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 

    await expect(await browser.checkFullPageScreen('US-safetyWarranty', { /* some options  })).toEqual(0);
  });*/
  //  //==================================================Privacy policy==============================================================================================================
  it('should save privacypolicy  page screenshotsscreenshots', async () => {
    await browser.url('/privacypolicy/');

    await browser.pause(4000)
    //await (await HomePage.startFreeTrial).moveTo()
    //await browser.pause(15000)
    //await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)   

    await browser.saveFullPageScreen('US-privacypolicy', {});
  });
  it('should compare privacypolicy page screenshots', async () => {
    await browser.url('/privacypolicy/');
    await browser.pause(4000)
    //await (await HomePage.startFreeTrial).moveTo()
    //await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await expect(await browser.checkFullPageScreen('US-privacypolicy', { /* some options */ })).toEqual(0);
  });



});