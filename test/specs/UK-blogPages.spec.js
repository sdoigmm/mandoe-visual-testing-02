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
    await browser.url('en-gb/blog/elements-and-templates-food-sustainability/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)   
    await browser.saveFullPageScreen('UK-Food-blog', {});
  });
  it('should compare Food blog page screenshots', async () => {
    await browser.url('en-gb/blog/elements-and-templates-food-sustainability/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await expect(await browser.checkFullPageScreen('UK-Food-blog', { /* some options */ })).toEqual(0);
  });
  //  //===================================================increase Traffic blog=============================================================================================================
  it('should save Increase traffic blog page screenshotsscreenshots', async () => {
    await browser.url('en-gb/blog/how-to-increase-foot-traffic-to-your-store-and-boost-sales/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)      
    await browser.saveFullPageScreen('UK-increaseTrafficBLog', {});
  });
  it('should compare Increase traffic blog page screenshots', async () => {
    await browser.url('en-gb/blog/how-to-increase-foot-traffic-to-your-store-and-boost-sales/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)    
    await expect(await browser.checkFullPageScreen('UK-increaseTrafficBLog', { /* some options */ })).toEqual(0);
  });

  //  //==================================================Swimart blog==============================================================================================================
  it('should save Swimart blog page screenshotsscreenshots', async () => {
    await browser.url('en-gb/blog/customer-story-swimart/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)   
    await browser.saveFullPageScreen('UK-swimartBlog', {});
  });
  it('should compare Swimart blog page screenshots', async () => {
    await browser.url('en-gb/blog/customer-story-swimart/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)   
    await expect(await browser.checkFullPageScreen('UK-swimartBlog', { /* some options */ })).toEqual(0);
  });
  //  //==================================================Swimart blog==============================================================================================================
  it('should save promotion Template  screenshotsscreenshots', async () => {
    await browser.url('en-gb/templates/hospitality/liquor/cocktail-liquor-brand-promotion-template/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await browser.saveFullPageScreen('UK-promotionTemplate', {});
  });
  it('should compare promotion Template  screenshots', async () => {
    await browser.url('en-gb/templates/hospitality/liquor/cocktail-liquor-brand-promotion-template/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await expect(await browser.checkFullPageScreen('UK-promotionTemplate', { /* some options */ })).toEqual(0);
  });

  //  //==================================================Pricing==============================================================================================================
  it('should save Pricing page screenshotsscreenshots', async () => {
    await browser.url('en-gb/pricing/full-service-pricing/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await browser.saveFullPageScreen('UK-pricing', {});
  });
  it('should compare Pricing page screenshots', async () => {
    await browser.url('en-gb/pricing/full-service-pricing/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)    
    await expect(await browser.checkFullPageScreen('UK-pricing', { /* some options */ })).toEqual(0);
  });
  //  //==================================================Legal/==============================================================================================================
  it('should save Legal page screenshotsscreenshots', async () => {
    await browser.url('en-gb/mandoe-legal/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)   
    await browser.saveFullPageScreen('UK-legal', {});
  });
  it('should compare legal page screenshots', async () => {
    await browser.url('en-gb/mandoe-legal/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)    
    await expect(await browser.checkFullPageScreen('UK-legal', { /* some options */ })).toEqual(0);
  });
  //  //==================================================Terms of Use==============================================================================================================
  it('should save Terms of use page screenshotsscreenshots', async () => {
    await browser.url('en-gb/terms-of-use/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)     
    await browser.saveFullPageScreen('UK-terms-of-use', {});
  });
  it('should compare Terms of use page screenshots', async () => {
    await browser.url('en-gb/terms-of-use/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await expect(await browser.checkFullPageScreen('UK-terms-of-use', { /* some options */ })).toEqual(0);
  });
  //  //==================================================Safety warranty==============================================================================================================
  it('should save Safety warranty  page screenshotsscreenshots', async () => {
    await browser.url('en-gb/guides/safety-warranty-regulatory-guide/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)    
    await browser.saveFullPageScreen('UK-safetyWarranty', {});
  });
  it('should compare Safety warranty page screenshots', async () => {
    await browser.url('en-gb/guides/safety-warranty-regulatory-guide/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await expect(await browser.checkFullPageScreen('UK-safetyWarranty', { /* some options */ })).toEqual(0);
  });
  //  //==================================================Privacy policy==============================================================================================================
  it('should save privacypolicy  page screenshotsscreenshots', async () => {
    await browser.url('en-gb/privacypolicy/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000)   
    await browser.saveFullPageScreen('UK-privacypolicy', {});
  });
  it('should compare privacypolicy page screenshots', async () => {
    await browser.url('en-gb/privacypolicy/');
    await browser.pause(4000)
    // await (await HomePage.talktoSales).moveTo()
    // await browser.pause(15000)
    // await(await HomePage.intercomBtn).moveTo() 
    // await browser.pause(1000) 
    await expect(await browser.checkFullPageScreen('UK-privacypolicy', { /* some options */ })).toEqual(0);
  });
});