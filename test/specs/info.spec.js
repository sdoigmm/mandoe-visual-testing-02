const HomePage = require('../pageobjects/home.page');



describe(' Info page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/ids/info/');        
        await browser.pause(2000)         
        await(await HomePage.mandoeLogo).moveTo()    
        await(await HomePage.locationtxt).waitForDisplayed({timeout:900000000})
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



//===================================================info section 1==============================================================================================================
    it('should save info  page section 1 screenshots', async () => {  
        await browser.saveScreen('info-01', { });
    }); 
    it('should compare info page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('info-01', { /* some options */ })).toEqual(0);
    });
//===================================================info page section 2 ================================================
    it('should save  info page section 2 screenshots', async () => {                        
        await(await HomePage.infoScroll2).scrollIntoView()      
        await browser.saveScreen('info-02', { });
    }); 
    it('should compare info page section 2  screenshots', async () => {
        await(await HomePage.infoScroll2).scrollIntoView()      
        await expect(await browser.checkScreen('info-02', { /* some options */ })).toEqual(0);
    });
//===================================================info page section 3 ================================================
    it('should save  info page section 3 screenshots', async () => {     
        await(await HomePage.infoScroll3).scrollIntoView()      
        await browser.saveScreen('info-03', { });
    }); 
    it('should compare info page section 3  screenshots', async () => {                   
        await(await HomePage.infoScroll3).scrollIntoView()      
        await expect(await browser.checkScreen('info-03', { /* some options */ })).toEqual(0);
    });










   


});


