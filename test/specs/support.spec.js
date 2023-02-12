const HomePage = require('../pageobjects/home.page');



describe('Support page snapshots', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/contact/support/'); 
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












//===================================================support page==============================================================================================================
    it('should save support  page section 1 screenshots', async () => {  
        await browser.saveScreen('support-01', { });
    }); 
    it('should compare support page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('support-01', { /* some options */ })).toEqual(0);
    });
//===================================================support page section 2 ================================================
    it('should save  support page section 2 screenshots', async () => {                        
        await(await HomePage.supportScroll2).scrollIntoView()
      
        await browser.saveScreen('support-02', { });
    }); 
    it('should compare support page section 2  screenshots', async () => {
        await(await HomePage.supportScroll2).scrollIntoView()      
        await expect(await browser.checkScreen('support-02', { /* some options */ })).toEqual(0);
    });
//===================================================support page section 3 ================================================
    it('should save  support page section 3 screenshots', async () => {
        await(await HomePage.supportScroll3).scrollIntoView()      
        await browser.saveScreen('support-03', { });
    }); 
    it('should compare support page section 3  screenshots', async () => {                  
        await(await HomePage.supportScroll3).scrollIntoView()      
        await expect(await browser.checkScreen('support-03', { /* some options */ })).toEqual(0);
    });
//===================================================support page section 4 ================================================
    it('should save  support page section 4 screenshots', async () => {                                 
        await(await HomePage.supportScroll4).scrollIntoView()      
        await browser.saveScreen('support-04', { });
    }); 
    it('should compare support page section 4  screenshots', async () => {      
        await(await HomePage.supportScroll4).scrollIntoView()      
        await expect(await browser.checkScreen('support-04', { /* some options */ })).toEqual(0);
    });
    












   


});


