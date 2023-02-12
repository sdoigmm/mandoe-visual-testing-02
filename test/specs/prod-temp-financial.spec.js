const HomePage = require('../pageobjects/home.page');



describe('Products template Financial page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 })  
        await browser.url('/templates/financial/');             
        await browser.pause(2000)         
        await(await HomePage.mandoeLogo).moveTo()    
        await(await HomePage.locationtxt).waitForDisplayed({timeout:9000000000})
        await(await HomePage.locationtxt).moveTo() 
        await browser.pause(2000)
        await(await HomePage.locationtxt).click()
        await browser.pause(2000)
     });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');     
        browser.deleteAllCookies()
        browser.execute('sessionStorage.clear()')
        browser.refresh()
    });


// //===================================================temp-Financial- page secton 1==============================================================================================================
    it('should save temp-Financial  page section 1 screenshots', async () => {  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-Financial-01', { });
    }); 
    it('should compare temp-Financial page section 1 screenshots', async () => { 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-Financial-01', { /* some options */ })).toEqual(0);
    });
//===================================================temp-Financial page section 2 ================================================
    it('should save  temp-Financial page section 2 screenshots', async () => {                        
        await(await HomePage.tempFinancialScroll2).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-Financial-02', { });
    }); 
    it('should compare temp-Financial page section 2  screenshots', async () => {
        await(await HomePage.tempFinancialScroll2).scrollIntoView()   
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await expect(await browser.checkScreen('prod-temp-Financial-02', { /* some options */ })).toEqual(0);
    });
//===================================================temp-Financial page section 3 ================================================
    it('should save  temp-Financial page section 3 screenshots', async () => {
        await(await HomePage.tempFinancialScroll3).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('prod-temp-Financial-03', { });
    }); 
    it('should compare temp-Financial page section 3  screenshots', async () => {                
        await(await HomePage.tempFinancialScroll3).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await expect(await browser.checkScreen('prod-temp-Financial-03', { /* some options */ })).toEqual(0);
    });
//===================================================temp-Financial page section 4 ================================================
    it('should save  temp-Financial page section 4 screenshots', async () => {                 
        await(await HomePage.tempFinancialScroll4).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await browser.saveScreen('prod-temp-Financial-04', { });
    }); 
    it('should compare temp-Financial page section 4  screenshots', async () => {
        await(await HomePage.tempFinancialScroll4).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await expect(await browser.checkScreen('prod-temp-Financial-04', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-Financial page section 5 ================================================
    it('should save  temp-Financial page section 5 screenshots', async () => {                 
        await(await HomePage.tempFinancialScroll5).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await browser.saveScreen('prod-temp-Financial-05', { });
    }); 
    it('should compare temp-Financial page section 5  screenshots', async () => {
        await(await HomePage.tempFinancialScroll5).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await expect(await browser.checkScreen('prod-temp-Financial-05', { /* some options */ })).toEqual(0);
    });











   


});