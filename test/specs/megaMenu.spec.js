const HomePage = require('../pageobjects/home.page');



describe(' Mega Menu page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 100000 }) 
        await browser.url('/'); 
        await browser.pause(2000)         
        await(await HomePage.mandoeLogo).moveTo()    
        await(await HomePage.locationtxt).waitForDisplayed({timeout:9000000000})
        await(await HomePage.locationtxt).moveTo() 
        await browser.pause(2000)
        await(await HomePage.locationtxt).click()
        await browser.pause(2000)
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(2000)
     });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');     
        browser.deleteAllCookies()
        browser.execute('sessionStorage.clear()')
        browser.refresh()
        
       
           
    });



//===================================================megaMenu section 1==============================================================================================================
    it('should save megaMenu  page section 1 screenshots', async () => {  
        await(await HomePage.productsLnk).moveTo()
        await browser.pause(500) 
        await browser.saveScreen('megaMenu-01', { });
    }); 
    it('should compare megaMenu page section 1 screenshots', async () => {  
        await(await HomePage.productsLnk).moveTo()
        await browser.pause(500) 
        await expect(await browser.checkScreen('megaMenu-01', { /* some options */ })).toEqual(0);
    });
//===================================================megaMenu page section 2 ================================================
    it('should save  megaMenu page section 2 screenshots', async () => {                        
        await(await HomePage.solutionsLnk).moveTo()
        await browser.pause(500) 
        await browser.saveScreen('megaMenu-02', { });
    }); 
    it('should compare megaMenu page section 2  screenshots', async () => {
        await(await HomePage.solutionsLnk).moveTo()
        await browser.pause(500) 
        await expect(await browser.checkScreen('megaMenu-02', { /* some options */ })).toEqual(0);
    });
    //===================================================megaMenu page section 3 ================================================
    it('should save  megaMenu page section 3 screenshots', async () => {                        
        await(await HomePage.resourcesLnk).moveTo()
        await browser.pause(500) 
        await browser.saveScreen('megaMenu-03', { });
    }); 
    it('should compare megaMenu page section 3  screenshots', async () => {
        await(await HomePage.resourcesLnk).moveTo()
        await browser.pause(500) 
        await expect(await browser.checkScreen('megaMenu-03', { /* some options */ })).toEqual(0);
    });










   


});


