const HomePage = require('../pageobjects/home.page');



describe('Pricing page snapshots', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000})
        await browser.url('/full-service-pricing/'); 
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












//===================================================pricing page==============================================================================================================
    it('should save pricing  page section 1 screenshots', async () => {  
        await browser.saveScreen('pricing-01', { });
    }); 
    it('should compare pricing page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('pricing-01', { /* some options */ })).toEqual(0);
    });
//===================================================pricing page section 2 ================================================
    it('should save  pricing page section 2 screenshots', async () => {                        
        await(await HomePage.pricingScroll2).scrollIntoView()
        
        await browser.saveScreen('pricing-02', { });
    }); 
    it('should compare pricing page section 2  screenshots', async () => {
        await(await HomePage.pricingScroll2).scrollIntoView()
        
        await expect(await browser.checkScreen('pricing-02', { /* some options */ })).toEqual(0);
    });
//===================================================pricing page section 3 ================================================
    it('should save  pricing page section 3 screenshots', async () => {
        await(await HomePage.pricingScroll3).scrollIntoView()
      
        await browser.saveScreen('pricing-03', { });
    }); 
    it('should compare pricing page section 3  screenshots', async () => {                  
        await(await HomePage.pricingScroll3).scrollIntoView()
      
        await expect(await browser.checkScreen('pricing-03', { /* some options */ })).toEqual(0);
    });
//===================================================pricing page section 4 ================================================
    it('should save  pricing page section 4 screenshots', async () => {                                 
        await(await HomePage.pricingScroll4).scrollIntoView()
        
        await browser.saveScreen('pricing-04', { });
    }); 
    it('should compare pricing page section 4  screenshots', async () => {      
        await(await HomePage.pricingScroll4).scrollIntoView()
       
        await expect(await browser.checkScreen('pricing-04', { /* some options */ })).toEqual(0);
    });
    












   


});


