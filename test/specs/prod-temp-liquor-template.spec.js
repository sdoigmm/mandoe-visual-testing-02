const HomePage = require('../pageobjects/home.page');



describe('Products template Liquor promotional template page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 100000 })   
        await browser.url('/templates/hospitality/liquor/cocktail-liquor-brand-promotion-template/'); 
        await browser.pause(2000)
        await(await HomePage.mandoeLogo).waitForDisplayed({timeout:120000})  
        await(await HomePage.mandoeLogo).moveTo() 
        await browser.pause(100) 
        await(await HomePage.locationimg).waitForDisplayed({timeout:120000})  
        await(await HomePage.locationimg).moveTo()  
        await(await HomePage.locationtxt).waitForClickable({timeout:120000})
        await browser.pause(1000)
        await(await HomePage.locationtxt).moveTo() 
        await browser.pause(1000)
        await(await HomePage.locationtxt).click()
        await browser.pause(2000)
        await(await HomePage.mandoeLogo).moveTo() 
        await browser.pause(4500)
    
     });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');     
        browser.deleteAllCookies()
        browser.execute('sessionStorage.clear()')
        
       
           
    });



// //===================================================temp-Liquor- page secton 1==============================================================================================================
    it('should save temp-Liquor  page section 1 screenshots', async () => {  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()
        await browser.saveScreen('prod-temp-Liquor-01', { });
    }); 
    it('should compare temp-Liquor page section 1 screenshots', async () => {  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()
        await expect(await browser.checkScreen('prod-temp-Liquor-01', { /* some options */ })).toEqual(0);
    });
//===================================================temp-Liquor page section 2 ================================================
    it('should save  temp-Liquor page section 2 screenshots', async () => {                        
        await(await HomePage.tempLiquorScroll2).scrollIntoView()
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()
        await browser.saveScreen('prod-temp-Liquor-02', { });
    }); 
    it('should compare temp-Liquor page section 2  screenshots', async () => {
        await(await HomePage.tempLiquorScroll2).scrollIntoView()  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()     
        await expect(await browser.checkScreen('prod-temp-Liquor-02', { /* some options */ })).toEqual(0);
    });
//===================================================temp-Liquor page section 3 ================================================
    it('should save  temp-Liquor page section 3 screenshots', async () => {
        await(await HomePage.tempLiquorScroll3).scrollIntoView()   
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()    
        await browser.saveScreen('prod-temp-Liquor-03', { });
    }); 
    it('should compare temp-Liquor page section 3  screenshots', async () => {                
        await(await HomePage.tempLiquorScroll3).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()       
        await expect(await browser.checkScreen('prod-temp-Liquor-03', { /* some options */ })).toEqual(0);
    });
//===================================================temp-Liquor page section 4 ================================================
    it('should save  temp-Liquor page section 4 screenshots', async () => {                 
        await(await HomePage.tempLiquorScroll4).scrollIntoView()  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()   
        await browser.saveScreen('prod-temp-Liquor-04', { });
    }); 
    it('should compare temp-Liquor page section 4  screenshots', async () => {
        await(await HomePage.tempLiquorScroll4).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()      
        await expect(await browser.checkScreen('prod-temp-Liquor-04', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-Liquor page section 5 ================================================
    it('should save  temp-Liquor page section 5 screenshots', async () => {                 
        await(await HomePage.tempLiquorScroll5).scrollIntoView()
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()     
        await browser.saveScreen('prod-temp-Liquor-05', { });
    }); 
    it('should compare temp-Liquor page section 5  screenshots', async () => {
        await(await HomePage.tempLiquorScroll5).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()       
        await expect(await browser.checkScreen('prod-temp-Liquor-05', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-Liquor page section 6 ================================================
    it('should save  temp-Liquor page section 6 screenshots', async () => {
        await(await HomePage.tempLiquorScroll6).scrollIntoView()  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()      
        await browser.saveScreen('prod-temp-Liquor-06', { });
    }); 
    it('should compare temp-Liquor page section 6  screenshots', async () => {                
        await(await HomePage.tempLiquorScroll6).scrollIntoView()  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()     
        await expect(await browser.checkScreen('prod-temp-Liquor-06', { /* some options */ })).toEqual(0);
    });













   


});