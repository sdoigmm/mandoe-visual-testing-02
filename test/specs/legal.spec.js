const HomePage = require('../pageobjects/home.page');



describe(' legal page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/legal/'); 
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



//===================================================legal section 1==============================================================================================================
    it('should save legal  page section 1 screenshots', async () => {  
        await browser.saveScreen('legal-01', { });
    }); 
    it('should compare legal page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('legal-01', { /* some options */ })).toEqual(0);
    });
//===================================================legal page section 2 ================================================
    it('should save  legal page section 2 screenshots', async () => {                        
        await(await HomePage.legalScroll2).scrollIntoView()
        await browser.saveScreen('legal-02', { });
    }); 
    it('should compare legal page section 2  screenshots', async () => {
        await(await HomePage.legalScroll2).scrollIntoView()
        await expect(await browser.checkScreen('legal-02', { /* some options */ })).toEqual(0);
    });










   


});


