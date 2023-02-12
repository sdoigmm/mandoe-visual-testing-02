const HomePage = require('../pageobjects/home.page');



describe('About Us page snapshots', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/about-us/');         
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












//===================================================about page==============================================================================================================
    it('should save about  page section 1 screenshots', async () => {  
        await browser.saveScreen('about-01', { });
    }); 
    it('should compare about page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('about-01', { /* some options */ })).toEqual(0);
    });
//===================================================about page section 2 ================================================
    it('should save  about page section 2 screenshots', async () => {                        
        await(await HomePage.aboutScroll2).scrollIntoView()
       
        await browser.saveScreen('about-02', { });
    }); 
    it('should compare about page section 2  screenshots', async () => {
        await(await HomePage.aboutScroll2).scrollIntoView()
       
        await expect(await browser.checkScreen('about-02', { /* some options */ })).toEqual(0);
    });
//===================================================about page section 3 ================================================
    it('should save  about page section 3 screenshots', async () => {
        await(await HomePage.aboutScroll3).scrollIntoView()
       
        await browser.saveScreen('about-03', { });
    }); 
    it('should compare about page section 3  screenshots', async () => {                  
        await(await HomePage.aboutScroll3).scrollIntoView()
       
        await expect(await browser.checkScreen('about-03', { /* some options */ })).toEqual(0);
    });
//===================================================about page section 4 ================================================
    it('should save  about page section 4 screenshots', async () => {                                 
        await(await HomePage.aboutScroll4).scrollIntoView()
       
        await browser.saveScreen('about-04', { });
    }); 
    it('should compare about page section 4  screenshots', async () => {      
        await(await HomePage.aboutScroll4).scrollIntoView()
       
        await expect(await browser.checkScreen('about-04', { /* some options */ })).toEqual(0);
    });
    
//===================================================about page section 5 ================================================
    it('should save  about page section 5 screenshots', async () => {                                 
        await(await HomePage.aboutScroll5).scrollIntoView()
       
        await browser.saveScreen('about-05', { });
    }); 
    it('should compare about page section 5  screenshots', async () => {      
        await(await HomePage.aboutScroll5).scrollIntoView()
       
        await expect(await browser.checkScreen('about-05', { /* some options */ })).toEqual(0);
    });
    //===================================================about page section 6 ================================================
    it('should save  about page section 6 screenshots', async () => {                                 
        await(await HomePage.aboutScroll6).scrollIntoView()
       
        await browser.saveScreen('about-06', { });
    }); 
    it('should compare about page section 6  screenshots', async () => {      
        await(await HomePage.aboutScroll6).scrollIntoView()
       
        await expect(await browser.checkScreen('about-06', { /* some options */ })).toEqual(0);
    });

   //===================================================about page section 7 ================================================
    it('should save  about page section 7 screenshots', async () => {                                 
        await(await HomePage.aboutScroll7).scrollIntoView()
       
        await browser.saveScreen('about-07', { });
    }); 
    it('should compare about page section 7  screenshots', async () => {      
        await(await HomePage.aboutScroll7).scrollIntoView()
       
        await expect(await browser.checkScreen('about-07', { /* some options */ })).toEqual(0);
    });
     //===================================================about page section 8 ================================================
    it('should save  about page section 8 screenshots', async () => {                                 
        await(await HomePage.aboutScroll8).scrollIntoView()
       
        await browser.saveScreen('about-08', { });
    }); 
    it('should compare about page section 8  screenshots', async () => {      
        await(await HomePage.aboutScroll8).scrollIntoView()
       
        await expect(await browser.checkScreen('about-08', { /* some options */ })).toEqual(0);
    });










   


});


