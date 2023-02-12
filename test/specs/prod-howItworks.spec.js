const HomePage = require('../pageobjects/home.page');



describe('Products How it works page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000})
        await browser.url('/how-it-works/'); 
        await browser.pause(2000)         
        await(await HomePage.mandoeLogo).moveTo()    
        await(await HomePage.locationtxt).waitForDisplayed({timeout:11000000})
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



//===================================================howItworks section 1==============================================================================================================
    it('should save howItworks  page section 1 screenshots', async () => {  
        await browser.saveScreen('Prod-howItworks-01', { });
    }); 
    it('should compare howItworks page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('Prod-howItworks-01', { /* some options */ })).toEqual(0);
    });
//===================================================howItworks page section 2 ================================================
    it('should save  howItworks page section 2 screenshots', async () => {                        
        await(await HomePage.howItworksScroll2).scrollIntoView()
        await browser.saveScreen('Prod-howItworks-02', { });
    }); 
    it('should compare howItworks page section 2  screenshots', async () => {
        await(await HomePage.howItworksScroll2).scrollIntoView()
        await expect(await browser.checkScreen('Prod-howItworks-02', { /* some options */ })).toEqual(0);
    });
//===================================================howItworks page section 3 ================================================
    it('should save  howItworks page section 3 screenshots', async () => {     
        await(await HomePage.howItworksScroll3).scrollIntoView()
        await browser.saveScreen('Prod-howItworks-03', { });
    }); 
    it('should compare howItworks page section 3  screenshots', async () => {                   
        await(await HomePage.howItworksScroll3).scrollIntoView()
        await expect(await browser.checkScreen('Prod-howItworks-03', { /* some options */ })).toEqual(0);
    });


//===================================================howItworks page section 4 ================================================
    it('should save  howItworks page section 4 screenshots', async () => {     
        await(await HomePage.howItworksScroll4).scrollIntoView()
        await browser.saveScreen('Prod-howItworks-04', { });
    }); 
    it('should compare howItworks page section 4  screenshots', async () => {                   
        await(await HomePage.howItworksScroll4).scrollIntoView()
        await expect(await browser.checkScreen('Prod-howItworks-04', { /* some options */ })).toEqual(0);
    });
//===================================================howItworks page section 5 ================================================
    it('should save  howItworks page section 5 screenshots', async () => {     
        await(await HomePage.howItworksScroll5).scrollIntoView()
        await browser.saveScreen('Prod-howItworks-05', { });
    }); 
    it('should compare howItworks page section 4  screenshots', async () => {                   
        await(await HomePage.howItworksScroll5).scrollIntoView()
        await expect(await browser.checkScreen('Prod-howItworks-05', { /* some options */ })).toEqual(0);
    });

//===================================================howItworks page section 6 ================================================
    it('should save  howItworks page section 6 screenshots', async () => {     
        await(await HomePage.howItworksScroll6).scrollIntoView()
        await browser.saveScreen('Prod-howItworks-06', { });
    }); 
    it('should compare howItworks page section 6  screenshots', async () => {                   
        await(await HomePage.howItworksScroll6).scrollIntoView()
        await expect(await browser.checkScreen('Prod-howItworks-06', { /* some options */ })).toEqual(0);
    });
    //===================================================howItworks page section 7 ================================================
    it('should save  howItworks page section 7 screenshots', async () => {     
        await(await HomePage.howItworksScroll7).scrollIntoView()
        await browser.saveScreen('Prod-howItworks-07', { });
    }); 
    it('should compare howItworks page section 7 screenshots', async () => {                   
        await(await HomePage.howItworksScroll7).scrollIntoView()
        await expect(await browser.checkScreen('Prod-howItworks-07', { /* some options */ })).toEqual(0);
    });
    //===================================================howItworks page section 8 ================================================
    it('should save  howItworks page section 8 screenshots', async () => {     
        await(await HomePage.featuresScroll11).scrollIntoView()
        await browser.saveScreen('Prod-howItworks-08', { });
    }); 
    it('should compare howItworks page section 8  screenshots', async () => {                   
        await(await HomePage.featuresScroll11).scrollIntoView()
        await expect(await browser.checkScreen('Prod-howItworks-08', { /* some options */ })).toEqual(0);
    });










   


});


