const HomePage = require('../pageobjects/home.page');



describe('Terms Of use page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/terms-of-use/'); 
        await(await HomePage.mandoeLogo).moveTo() 
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



//===================================================termsOfuse section 1==============================================================================================================
    it('should save termsOfuse  page section 1 screenshots', async () => {  
        await browser.saveScreen('termsOfuse-01', { });
    }); 
    it('should compare termsOfuse page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('termsOfuse-01', { /* some options */ })).toEqual(0);
    });
//===================================================termsOfuse page section 2 ================================================
    it('should save  termsOfuse page section 2 screenshots', async () => {                        
        await(await HomePage.termsOfuseScroll2).scrollIntoView()
      
        await browser.saveScreen('termsOfuse-02', { });
    }); 
    it('should compare termsOfuse page section 2  screenshots', async () => {
        await(await HomePage.termsOfuseScroll2).scrollIntoView()
      
        await expect(await browser.checkScreen('termsOfuse-02', { /* some options */ })).toEqual(0);
    });
//===================================================termsOfuse page section 3 ================================================
    it('should save  termsOfuse page section 3 screenshots', async () => {     
        await(await HomePage.termsOfuseScroll3).scrollIntoView()
      
        await browser.saveScreen('termsOfuse-03', { });
    }); 
    it('should compare termsOfuse page section 3  screenshots', async () => {                   
        await(await HomePage.termsOfuseScroll3).scrollIntoView()
      
        await expect(await browser.checkScreen('termsOfuse-03', { /* some options */ })).toEqual(0);
    });

//===================================================termsOfuse page section 4 ================================================
    it('should save  termsOfuse page section 4 screenshots', async () => {     
        await(await HomePage.termsOfuseScroll4).scrollIntoView()
      
        await browser.saveScreen('termsOfuse-04', { });
    }); 
    it('should compare termsOfuse page section 4  screenshots', async () => {                   
        await(await HomePage.termsOfuseScroll4).scrollIntoView()
      
        await expect(await browser.checkScreen('termsOfuse-04', { /* some options */ })).toEqual(0);
    });
//===================================================termsOfuse page section 5 ================================================
    it('should save  termsOfuse page section 5 screenshots', async () => {     
        await(await HomePage.termsOfuseScroll5).scrollIntoView()
      
        await browser.saveScreen('termsOfuse-05', { });
    }); 
    it('should compare termsOfuse page section 5  screenshots', async () => {                   
        await(await HomePage.termsOfuseScroll5).scrollIntoView()
      
        await expect(await browser.checkScreen('termsOfuse-05', { /* some options */ })).toEqual(0);
    });
    //===================================================termsOfuse page section 6 ================================================
    it('should save  termsOfuse page section 6 screenshots', async () => {     
        await(await HomePage.termsOfuseScroll6).scrollIntoView()
      
        await browser.saveScreen('termsOfuse-06', { });
    }); 
    it('should compare termsOfuse page section 6  screenshots', async () => {                   
        await(await HomePage.termsOfuseScroll6).scrollIntoView()
      
        await expect(await browser.checkScreen('termsOfuse-06', { /* some options */ })).toEqual(0);
    });
     //===================================================termsOfuse page section 7 ================================================
    it('should save  termsOfuse page section 7 screenshots', async () => {     
        await(await HomePage.termsOfuseScroll7).scrollIntoView()
      
        await browser.saveScreen('termsOfuse-07', { });
    }); 
    it('should compare termsOfuse page section 7  screenshots', async () => {                   
        await(await HomePage.termsOfuseScroll7).scrollIntoView()
      
        await expect(await browser.checkScreen('termsOfuse-07', { /* some options */ })).toEqual(0);
    });

     //===================================================termsOfuse page section 8 ================================================
    it('should save  termsOfuse page section 8 screenshots', async () => {     
        await(await HomePage.termsOfuseScroll8).scrollIntoView()
      
        await browser.saveScreen('termsOfuse-08', { });
    }); 
    it('should compare termsOfuse page section 8  screenshots', async () => {                   
        await(await HomePage.termsOfuseScroll8).scrollIntoView()
      
        await expect(await browser.checkScreen('termsOfuse-08', { /* some options */ })).toEqual(0);
    });

     //===================================================termsOfuse page section 9 ================================================
    it('should save  termsOfuse page section 9 screenshots', async () => {     
        await(await HomePage.termsOfuseScroll9).scrollIntoView()
      
        await browser.saveScreen('termsOfuse-09', { });
    }); 
    it('should compare termsOfuse page section 9  screenshots', async () => {                   
        await(await HomePage.termsOfuseScroll9).scrollIntoView()
      
        await expect(await browser.checkScreen('termsOfuse-09', { /* some options */ })).toEqual(0);
    });
     //===================================================termsOfuse page section 10 ================================================
    it('should save  termsOfuse page section 10 screenshots', async () => {     
        await(await HomePage.termsOfuseScroll10).scrollIntoView()
      
        await browser.saveScreen('termsOfuse-10', { });
    }); 
    it('should compare termsOfuse page section 10  screenshots', async () => {                   
        await(await HomePage.termsOfuseScroll10).scrollIntoView()
      
        await expect(await browser.checkScreen('termsOfuse-10', { /* some options */ })).toEqual(0);
    });

   //===================================================termsOfuse page section 11 ================================================
    it('should save  termsOfuse page section 11 screenshots', async () => {     
        await(await HomePage.termsOfuseScroll11).scrollIntoView()
      
        await browser.saveScreen('termsOfuse-11', { });
    }); 
    it('should compare termsOfuse page section 11  screenshots', async () => {                   
        await(await HomePage.termsOfuseScroll11).scrollIntoView()
      
        await expect(await browser.checkScreen('termsOfuse-11', { /* some options */ })).toEqual(0);
    });
     //===================================================termsOfuse page section 12 ================================================
    it('should save  termsOfuse page section 12 screenshots', async () => {     
        await(await HomePage.termsOfuseScroll12).scrollIntoView()
      
        await browser.saveScreen('termsOfuse-12', { });
    }); 
    it('should compare termsOfuse page section 12  screenshots', async () => {                   
        await(await HomePage.termsOfuseScroll12).scrollIntoView()
      
        await expect(await browser.checkScreen('termsOfuse-12', { /* some options */ })).toEqual(0);
    });





   


});


