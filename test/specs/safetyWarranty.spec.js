const HomePage = require('../pageobjects/home.page');



describe(' Safety Warranty regulatory guide page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/guides/safety-warranty-regulatory-guide/'); 
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



//===================================================safetyWarranty section 1==============================================================================================================
    it('should save safetyWarranty  page section 1 screenshots', async () => {  
        await browser.saveScreen('safetyWarranty-01', { });
    }); 
    it('should compare safetyWarranty page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('safetyWarranty-01', { /* some options */ })).toEqual(0);
    });
//===================================================safetyWarranty page section 2 ================================================
    it('should save  safetyWarranty page section 2 screenshots', async () => {                        
        await(await HomePage.safetyWarrantyScroll2).scrollIntoView()
       
        await browser.saveScreen('safetyWarranty-02', { });
    }); 
    it('should compare safetyWarranty page section 2  screenshots', async () => {
        await(await HomePage.safetyWarrantyScroll2).scrollIntoView()
       
        await expect(await browser.checkScreen('safetyWarranty-02', { /* some options */ })).toEqual(0);
    });
//===================================================safetyWarranty page section 3 ================================================
    it('should save  safetyWarranty page section 3 screenshots', async () => {     
        await(await HomePage.safetyWarrantyScroll3).scrollIntoView()
       
        await browser.saveScreen('safetyWarranty-03', { });
    }); 
    it('should compare safetyWarranty page section 3  screenshots', async () => {                   
        await(await HomePage.safetyWarrantyScroll3).scrollIntoView()
       
        await expect(await browser.checkScreen('safetyWarranty-03', { /* some options */ })).toEqual(0);
    });
//===================================================safetyWarranty page section 4 ================================================
    it('should save  safetyWarranty page section 4 screenshots', async () => {     
        await(await HomePage.safetyWarrantyScroll4).scrollIntoView()
       
        await browser.saveScreen('safetyWarranty-04', { });
    }); 
    it('should compare safetyWarranty page section 4  screenshots', async () => {                   
        await(await HomePage.safetyWarrantyScroll4).scrollIntoView()
       
        await expect(await browser.checkScreen('safetyWarranty-04', { /* some options */ })).toEqual(0);
    });
    //===================================================safetyWarranty page section 5 ================================================
    it('should save  safetyWarranty page section 5 screenshots', async () => {     
        await(await HomePage.safetyWarrantyScroll5).scrollIntoView()
       
        await browser.saveScreen('safetyWarranty-05', { });
    }); 
    it('should compare safetyWarranty page section 5  screenshots', async () => {                   
        await(await HomePage.safetyWarrantyScroll5).scrollIntoView()
       
        await expect(await browser.checkScreen('safetyWarranty-05', { /* some options */ })).toEqual(0);
    });
//===================================================safetyWarranty page section 6 ================================================
    it('should save  safetyWarranty page section 6 screenshots', async () => {     
        await(await HomePage.safetyWarrantyScroll6).scrollIntoView()
       
        await browser.saveScreen('safetyWarranty-06', { });
    }); 
    it('should compare safetyWarranty page section 6  screenshots', async () => {                   
        await(await HomePage.safetyWarrantyScroll6).scrollIntoView()
       
        await expect(await browser.checkScreen('safetyWarranty-06', { /* some options */ })).toEqual(0);
    });

//===================================================safetyWarranty page section 7 ================================================
    it('should save  safetyWarranty page section 7 screenshots', async () => {     
        await(await HomePage.safetyWarrantyScroll7).scrollIntoView()
       
        await browser.saveScreen('safetyWarranty-07', { });
    }); 
    it('should compare safetyWarranty page section 7  screenshots', async () => {                   
        await(await HomePage.safetyWarrantyScroll7).scrollIntoView()
       
        await expect(await browser.checkScreen('safetyWarranty-07', { /* some options */ })).toEqual(0);
    });

//===================================================safetyWarranty page section 8 ================================================
    it('should save  safetyWarranty page section 8 screenshots', async () => {     
        await(await HomePage.safetyWarrantyScroll8).scrollIntoView()
       
        await browser.saveScreen('safetyWarranty-08', { });
    }); 
    it('should compare safetyWarranty page section 8  screenshots', async () => {                   
        await(await HomePage.safetyWarrantyScroll8).scrollIntoView()
       
        await expect(await browser.checkScreen('safetyWarranty-08', { /* some options */ })).toEqual(0);
    });









   


});


