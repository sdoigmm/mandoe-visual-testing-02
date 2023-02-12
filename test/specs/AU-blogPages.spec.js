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
    await browser.url('en-au/blog/elements-and-templates-food-sustainability/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)   
    await browser.saveFullPageScreen('AU-Food-blog', {});
  });
  it('should compare Food blog page screenshots', async () => {
    await browser.url('en-au/blog/elements-and-templates-food-sustainability/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await expect(await browser.checkFullPageScreen('AU-Food-blog', { /* some options */ })).toEqual(0);
  });
  //  //===================================================increase Traffic blog=============================================================================================================
  it('should save Increase traffic blog page screenshotsscreenshots', async () => {
    await browser.url('en-au/blog/how-to-increase-foot-traffic-to-your-store-and-boost-sales/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)      
    await browser.saveFullPageScreen('AU-increaseTrafficBLog', {});
  });
  it('should compare Increase traffic blog page screenshots', async () => {
    await browser.url('en-au/blog/how-to-increase-foot-traffic-to-your-store-and-boost-sales/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)    
    await expect(await browser.checkFullPageScreen('AU-increaseTrafficBLog', { /* some options */ })).toEqual(0);
  });

  //  //==================================================Swimart blog==============================================================================================================
  it('should save Swimart blog page screenshotsscreenshots', async () => {
    await browser.url('en-au/blog/customer-story-swimart/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)   
    await browser.saveFullPageScreen('AU-swimartBlog', {});
  });
  it('should compare Swimart blog page screenshots', async () => {
    await browser.url('en-au/blog/customer-story-swimart/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)   
    await expect(await browser.checkFullPageScreen('AU-swimartBlog', { /* some options */ })).toEqual(0);
  });
  //  //==================================================Swimart blog==============================================================================================================
  it('should save promotion Template  screenshotsscreenshots', async () => {
    await browser.url('en-au/templates/hospitality/liquor/cocktail-liquor-brand-promotion-template/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await browser.saveFullPageScreen('AU-promotionTemplate', {});
  });
  it('should compare promotion Template  screenshots', async () => {
    await browser.url('en-au/templates/hospitality/liquor/cocktail-liquor-brand-promotion-template/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await expect(await browser.checkFullPageScreen('AU-promotionTemplate', { /* some options */ })).toEqual(0);
  });

  //  //==================================================Pricing==============================================================================================================
  it('should save Pricing page screenshotsscreenshots', async () => {
    await browser.url('en-au/pricing/full-service-pricing/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await browser.saveFullPageScreen('AU-pricing', {});
  });
  it('should compare Pricing page screenshots', async () => {
    await browser.url('en-au/pricing/full-service-pricing/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)    
    await expect(await browser.checkFullPageScreen('AU-pricing', { /* some options */ })).toEqual(0);
  });
  //  //==================================================Legal/==============================================================================================================
  it('should save Legal page screenshotsscreenshots', async () => {
    await browser.url('en-au/mandoe-legal/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)   
    await browser.saveFullPageScreen('AU-legal', {});
  });
  it('should compare legal page screenshots', async () => {
    await browser.url('en-au/mandoe-legal/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)    
    await expect(await browser.checkFullPageScreen('AU-legal', { /* some options */ })).toEqual(0);
  });
  //  //==================================================Terms of Use==============================================================================================================
  it('should save Terms of use page screenshotsscreenshots', async () => {
    await browser.url('en-au/terms-of-use/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)     
    await browser.saveFullPageScreen('AU-terms-of-use', {});
  });
  it('should compare Terms of use page screenshots', async () => {
    await browser.url('en-au/terms-of-use/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await expect(await browser.checkFullPageScreen('AU-terms-of-use', { /* some options */ })).toEqual(0);
  });
  //  //==================================================Safety warranty==============================================================================================================
  it('should save Safety warranty  page screenshotsscreenshots', async () => {
    await browser.url('en-au/guides/safety-warranty-regulatory-guide/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)    
    await browser.saveFullPageScreen('AU-safetyWarranty', {});
  });
  it('should compare Safety warranty page screenshots', async () => {
    await browser.url('en-au/guides/safety-warranty-regulatory-guide/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await expect(await browser.checkFullPageScreen('AU-safetyWarranty', { /* some options */ })).toEqual(0);
  });
  //  //==================================================Privacy policy==============================================================================================================
  it('should save privacypolicy  page screenshotsscreenshots', async () => {
    await browser.url('en-au/privacypolicy/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)   
    await browser.saveFullPageScreen('AU-privacypolicy', {});
  });
  it('should compare privacypolicy page screenshots', async () => {
    await browser.url('en-au/privacypolicy/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await expect(await browser.checkFullPageScreen('AU-privacypolicy', { /* some options */ })).toEqual(0);
  });
});