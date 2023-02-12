const HomePage = require('../pageobjects/home.page');

describe(' Mega Menu page', () => {

    beforeEach(async () => {  
        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad':12000000 })  
        await browser.refresh()
     });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');     
        browser.deleteAllCookies()
        browser.execute('sessionStorage.clear()')           
    });

//===================================================megaMenu section 1==============================================================================================================
    it('should save megaMenu  page section 1 screenshots', async () => { 
        await browser.url('/'); 
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(120000) 
        // await(await HomePage.productsLnk).moveTo()
        // await browser.pause(2000)
        await browser.saveScreen('USmegaMenu-01', { });
    }); 
    it('should compare megaMenu page section 1 screenshots', async () => {  
        await browser.url('/'); 
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(120000) 
        // await(await HomePage.productsLnk).moveTo()
        // await browser.pause(2000)
        await expect(await browser.checkScreen('USmegaMenu-01', { /* some options */ })).toEqual(0);
    });
//===================================================megaMenu page section 2 ================================================
    it('should save  megaMenu page section 2 screenshots', async () => { 
        await browser.url('/'); 
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(120000) 
        // await(await HomePage.templatesLnk).moveTo()
        // await browser.pause(2000) 
        await browser.saveScreen('USmegaMenu-02', { });
    }); 
    it('should compare megaMenu page section 2  screenshots', async () => {
        await browser.url('/'); 
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(120000) 
        // await(await HomePage.templatesLnk).moveTo()
        // await browser.pause(2000) 
        await expect(await browser.checkScreen('USmegaMenu-02', { /* some options */ })).toEqual(0);
    });
    //===================================================megaMenu page section 3 ================================================
    it('should save  megaMenu page section 3 screenshots', async () => {  
        await browser.url('/'); 
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(120000) 
        // await(await HomePage.signtypesLnk).moveTo()
        // await browser.pause(2000) 
        await browser.saveScreen('USmegaMenu-03', { });
    }); 
    it('should compare megaMenu page section 3  screenshots', async () => {
        await browser.url('/'); 
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(120000) 
        // await(await HomePage.signtypesLnk).moveTo()
        // await browser.pause(2000)
        await expect(await browser.checkScreen('USmegaMenu-03', { /* some options */ })).toEqual(0);
    });
       //  //================================================  Home page ============================================================================================================
       it('should save Home page screenshotsscreenshots', async () => { 
        await browser.url('/'); 
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(120000)
        // await(await HomePage.intercomBtn).moveTo()     
        await browser.saveFullPageScreen('US-homePage', { });
    }); 
    it('should compare Home page screenshots', async () => {  
        await browser.url('/');
        await browser.pause(4000) 
        // await(await HomePage.talktoSales).moveTo()  
        // await browser.pause(120000)
        // await(await HomePage.intercomBtn).moveTo()  
        await expect(await browser.checkFullPageScreen('US-homePage', { /* some options */ })).toEqual(0);
    });
});