const HomePage = require('../pageobjects/home.page');



describe('Products Features', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000}) 
        await browser.url('/features/'); 
        await browser.pause(2000)         
        await(await HomePage.mandoeLogo).moveTo()    
        await(await HomePage.locationtxt).waitForDisplayed({timeout:9000000})
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


//===================================================Features section 1==============================================================================================================
    it('should save features  page section 1 screenshots', async () => {  
        await browser.saveScreen('Prod-features-01', { });
    }); 
    it('should compare features page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('Prod-features-01', { /* some options */ })).toEqual(0);
    });
//===================================================features page section 2 ================================================
    it('should save  features page section 2 screenshots', async () => {                        
        await(await HomePage.featuresScroll2).scrollIntoView()
        await browser.saveScreen('Prod-features-02', { });
    }); 
    it('should compare features page section 2  screenshots', async () => {
        await(await HomePage.featuresScroll2).scrollIntoView()
        await expect(await browser.checkScreen('Prod-features-02', { /* some options */ })).toEqual(0);
    });
//===================================================features page section 3 ================================================
    it('should save  features page section 3 screenshots', async () => {     
        await(await HomePage.featuresScroll3).scrollIntoView()
        await browser.saveScreen('Prod-features-03', { });
    }); 
    it('should compare features page section 3  screenshots', async () => {                   
        await(await HomePage.featuresScroll3).scrollIntoView()
        await expect(await browser.checkScreen('Prod-features-03', { /* some options */ })).toEqual(0);
    });
//===================================================features page section 4 ================================================
    it('should save  features page section 4 screenshots', async () => {                
        await(await HomePage.featuresScroll4).scrollIntoView()
        await browser.saveScreen('Prod-features-04', { });
    }); 
    it('should compare features page section 4  screenshots', async () => {  
        await(await HomePage.featuresScroll4).scrollIntoView()
        await expect(await browser.checkScreen('Prod-features-04', { /* some options */ })).toEqual(0);
    });
    //===================================================features page section 5 ================================================
    it('should save  features page section 5 screenshots', async () => {               
        await(await HomePage.featuresScroll5).scrollIntoView()
        await browser.saveScreen('Prod-features-05', { });
    }); 
    it('should compare features page section 5  screenshots', async () => {
        await(await HomePage.featuresScroll5).scrollIntoView()
        await expect(await browser.checkScreen('Prod-features-05', { /* some options */ })).toEqual(0);
    });
    //===================================================features page section 6 ================================================
    it('should save  features page section 6 screenshots', async () => {
        await(await HomePage.featuresScroll6).scrollIntoView()
        await browser.saveScreen('Prod-features-06', { });
    }); 
    it('should compare features page section 6  screenshots', async () => {               
        await(await HomePage.featuresScroll6).scrollIntoView()
        await expect(await browser.checkScreen('Prod-features-06', { /* some options */ })).toEqual(0);
    });
//===================================================features page section 7 ================================================
    it('should save  features page section 7 screenshots', async () => {                
        await(await HomePage.featuresScroll7).scrollIntoView()
        await browser.saveScreen('Prod-features-07', { });
    }); 
    it('should compare features page section 7  screenshots', async () => {               
        await(await HomePage.featuresScroll7).scrollIntoView()
        await expect(await browser.checkScreen('Prod-features-07', { /* some options */ })).toEqual(0);
    });
//===================================================features page section 8 ================================================
    it('should save  features page section 8 screenshots', async () => {                
        await(await HomePage.featuresScroll8).scrollIntoView()
        await browser.saveScreen('Prod-features-08', { });
    }); 
    it('should compare features page section 8  screenshots', async () => {
        await(await HomePage.featuresScroll8).scrollIntoView()
        await expect(await browser.checkScreen('Prod-features-08', { /* some options */ })).toEqual(0);
    });
//===================================================features page section 9 ================================================
    it('should save  features page section 9 screenshots', async () => {                
        await(await HomePage.featuresScroll9).scrollIntoView()
        await browser.saveScreen('Prod-features-09', { });
    }); 
    it('should compare features page section 9  screenshots', async () => {               
        await(await HomePage.featuresScroll9).scrollIntoView()
        await expect(await browser.checkScreen('Prod-features-09', { /* some options */ })).toEqual(0);
    });
//===================================================features page section 10 ================================================
    it('should save  features page section 10 screenshots', async () => {
        await(await HomePage.featuresScroll10).scrollIntoView()
        await browser.saveScreen('Prod-features-10', { });
    }); 
    it('should compare features page section 10  screenshots', async () => {              
        await(await HomePage.featuresScroll10).scrollIntoView()
        await expect(await browser.checkScreen('Prod-features-10', { /* some options */ })).toEqual(0);
    });
//===================================================features page section 11 ================================================
    it('should save  features page section 11 screenshots', async () => {                
        await(await HomePage.featuresScroll11).scrollIntoView()
        await browser.saveScreen('Prod-features-11', { });
    }); 
    it('should compare features page section 11  screenshots', async () => {               
        await(await HomePage.featuresScroll11).scrollIntoView()
        await expect(await browser.checkScreen('Prod-features-11', { /* some options */ })).toEqual(0);
    });














   


});


