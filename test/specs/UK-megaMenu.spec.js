const HomePage = require('../pageobjects/home.page');

describe(' Mega Menu page', () => {

    beforeEach(async () => {  
        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad':15000000 })  
        await browser.refresh()
     });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');     
        browser.deleteAllCookies()
        browser.execute('sessionStorage.clear()')    
    });

//===================================================megaMenu section 1==============================================================================================================
    it('should save megaMenu  page section 1 screenshots', async () => { 
        await browser.url('/en-gb/'); 
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(15000) 
        // await(await HomePage.productsLnk).moveTo()
        // await browser.pause(500) 
        await browser.saveScreen('UKmegaMenu-01', { });
    }); 
    it('should compare megaMenu page section 1 screenshots', async () => {  
        await browser.url('/en-gb/'); 
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(15000) 
        // await(await HomePage.productsLnk).moveTo()
        // await browser.pause(500) 
        await expect(await browser.checkScreen('UKmegaMenu-01', { /* some options */ })).toEqual(0);
    });
//===================================================megaMenu page section 2 ================================================
    it('should save  megaMenu page section 2 screenshots', async () => { 
        await browser.url('/en-gb/'); 
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(15000)                        
        // await(await HomePage.solutionsLnk).moveTo()
        // await browser.pause(500) 
        await browser.saveScreen('UKmegaMenu-02', { });
    }); 
    it('should compare megaMenu page section 2  screenshots', async () => {
        await browser.url('/en-gb/'); 
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(15000) 
        // await(await HomePage.solutionsLnk).moveTo()
        // await browser.pause(500) 
        await expect(await browser.checkScreen('UKmegaMenu-02', { /* some options */ })).toEqual(0);
    });
    //===================================================megaMenu page section 3 ================================================
    it('should save  megaMenu page section 3 screenshots', async () => {  
        await browser.url('/en-gb/'); 
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(15000) 
        // await(await HomePage.resourcesLnk).moveTo()
        // await browser.pause(500) 
        await browser.saveScreen('UKmegaMenu-03', { });
    }); 
    it('should compare megaMenu page section 3  screenshots', async () => {
        await browser.url('/en-gb/'); 
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(15000) 
        // await(await HomePage.resourcesLnk).moveTo()
        // await browser.pause(500) 
        await expect(await browser.checkScreen('UKmegaMenu-03', { /* some options */ })).toEqual(0);
    });
   //  //================================================  Home page ============================================================================================================
   it('should save Home page screenshotsscreenshots', async () => { 
        await browser.url('/en-gb/'); 
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(15000)
        await browser.saveFullPageScreen('UK-homePage', { });
    }); 
    it('should compare Home page screenshots', async () => {  
        await browser.url('/en-gb/');
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(15000)
        await expect(await browser.checkFullPageScreen('UK-homePage', { /* some options */ })).toEqual(0);
    });
});