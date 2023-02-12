const HomePage = require('../pageobjects/home.page');



describe(' thanks page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/thanks'); 
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



//===================================================thanks section 1==============================================================================================================
    it('should save thanks  page section 1 screenshots', async () => {  
        await browser.saveScreen('thanks-01', { });
    }); 
    it('should compare thanks page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('thanks-01', { /* some options */ })).toEqual(0);
    });
//===================================================thanks page section 2 ================================================
    it('should save  thanks page section 2 screenshots', async () => {                        
        await(await HomePage.thanksScroll2).scrollIntoView()
        await browser.saveScreen('thanks-02', { });
    }); 
    it('should compare thanks page section 2  screenshots', async () => {
        await(await HomePage.thanksScroll2).scrollIntoView()
        await expect(await browser.checkScreen('thanks-02', { /* some options */ })).toEqual(0);
    });
    //===================================================thanks page section 3 ================================================
    it('should save  thanks page section 3 screenshots', async () => {                        
        await(await HomePage.thanksScroll3).scrollIntoView()
        await browser.saveScreen('thanks-03', { });
    }); 
    it('should compare thanks page section 3  screenshots', async () => {
        await(await HomePage.thanksScroll3).scrollIntoView()
        await expect(await browser.checkScreen('thanks-03', { /* some options */ })).toEqual(0);
    });










   


});


