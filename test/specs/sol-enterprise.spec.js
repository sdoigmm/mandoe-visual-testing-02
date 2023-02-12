const HomePage = require('../pageobjects/home.page');



describe('Solutions enterprise', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000})
        await browser.url('/enterprise/'); 
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












//===================================================enterprise page==============================================================================================================
    it('should save enterprise  page section 1 screenshots', async () => {  
        await browser.saveScreen('Sol-enterprise-01', { });
    }); 
    it('should compare enterprise page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('Sol-enterprise-01', { /* some options */ })).toEqual(0);
    });
//===================================================enterprise page section 2 ================================================
    it('should save  enterprise page section 2 screenshots', async () => {                        
        await(await HomePage.enterpriseScroll2).scrollIntoView()
        
        await browser.saveScreen('Sol-enterprise-02', { });
    }); 
    it('should compare enterprise page section 2  screenshots', async () => {
        await(await HomePage.enterpriseScroll2).scrollIntoView()
      
        await expect(await browser.checkScreen('Sol-enterprise-02', { /* some options */ })).toEqual(0);
    });
//===================================================enterprise page section 3 ================================================
    it('should save  enterprise page section 3 screenshots', async () => {
        await(await HomePage.enterpriseScroll3).scrollIntoView()
       
        await browser.saveScreen('Sol-enterprise-03', { });
    }); 
    it('should compare enterprise page section 3  screenshots', async () => {                  
        await(await HomePage.enterpriseScroll3).scrollIntoView()
       
        await expect(await browser.checkScreen('Sol-enterprise-03', { /* some options */ })).toEqual(0);
    });
//===================================================enterprise page section 4 ================================================
    it('should save  enterprise page section 4 screenshots', async () => {                                 
        await(await HomePage.enterpriseScroll4).scrollIntoView()
        
        await browser.saveScreen('Sol-enterprise-04', { });
    }); 
    it('should compare enterprise page section 4  screenshots', async () => {      
        await(await HomePage.enterpriseScroll4).scrollIntoView()
        
        await expect(await browser.checkScreen('Sol-enterprise-04', { /* some options */ })).toEqual(0);
    });
    //===================================================enterprise page section 5 ================================================
    it('should save  enterprise page section 5 screenshots', async () => {                    
        await(await HomePage.enterpriseScroll5).scrollIntoView()
       
        await browser.saveScreen('Sol-enterprise-05', { });
    }); 
    it('should compare enterprise page section 5  screenshots', async () => {  
        await(await HomePage.enterpriseScroll5).scrollIntoView()
        
        await expect(await browser.checkScreen('Sol-enterprise-05', { /* some options */ })).toEqual(0);
    });
    //===================================================enterprise page section 6 ================================================
    it('should save  enterprise page section 6 screenshots', async () => {
        await(await HomePage.enterpriseScroll6).scrollIntoView()
        
        await browser.saveScreen('Sol-enterprise-06', { });
    }); 
    it('should compare enterprise page section 6  screenshots', async () => {               
        await(await HomePage.enterpriseScroll6).scrollIntoView()
       
        await expect(await browser.checkScreen('Sol-enterprise-06', { /* some options */ })).toEqual(0);
    });
//===================================================enterprise page section 7 ================================================
    it('should save  enterprise page section 7 screenshots', async () => {               
        await(await HomePage.enterpriseScroll7).scrollIntoView()
        
        await browser.saveScreen('Sol-enterprise-07', { });
    }); 
    it('should compare enterprise page section 7  screenshots', async () => {               
        await(await HomePage.enterpriseScroll7).scrollIntoView()
        
        await expect(await browser.checkScreen('Sol-enterprise-07', { /* some options */ })).toEqual(0);
    });
//===================================================enterprise page section 8 ================================================
    it('should save  enterprise page section 8 screenshots', async () => {                
        await(await HomePage.enterpriseScroll8).scrollIntoView()
      
        await browser.saveScreen('Sol-enterprise-08', { });
    }); 
    it('should compare enterprise page section 8  screenshots', async () => {
        await(await HomePage.enterpriseScroll8).scrollIntoView()
       
        await expect(await browser.checkScreen('Sol-enterprise-08', { /* some options */ })).toEqual(0);
    });
//===================================================enterprise page section 9 ================================================
    it('should save  enterprise page section 9 screenshots', async () => {              
        await(await HomePage.enterpriseScroll9).scrollIntoView()
       
        await browser.saveScreen('Sol-enterprise-09', { });
    }); 
    it('should compare enterprise page section 9  screenshots', async () => {               
        await(await HomePage.enterpriseScroll9).scrollIntoView()
       
        await expect(await browser.checkScreen('Sol-enterprise-09', { /* some options */ })).toEqual(0);
    });
//===================================================enterprise page section 10 ================================================
    it('should save  enterprise page section 10 screenshots', async () => {
        await(await HomePage.enterpriseScroll10).scrollIntoView()
       
        await browser.saveScreen('Sol-enterprise-10', { });
    }); 
    it('should compare enterprise page section 10  screenshots', async () => {                 
        await(await HomePage.enterpriseScroll10).scrollIntoView()
 
        await expect(await browser.checkScreen('Sol-enterprise-10', { /* some options */ })).toEqual(0);
    });

//===================================================enterprise page section 11 ================================================
    it('should save  enterprise page section 11 screenshots', async () => {
        await(await HomePage.enterpriseScroll11).scrollIntoView()
      
        await browser.saveScreen('Sol-enterprise-11', { });
    }); 
    it('should compare enterprise page section 11  screenshots', async () => {                 
        await(await HomePage.enterpriseScroll11).scrollIntoView()
      
        await expect(await browser.checkScreen('Sol-enterprise-11', { /* some options */ })).toEqual(0);
    });


//===================================================enterprise page section 12 ================================================
    it('should save  enterprise page section 12 screenshots', async () => {
        await(await HomePage.enterpriseScroll12).scrollIntoView()
     
        await browser.saveScreen('Sol-enterprise-12', { });
    }); 
    it('should compare enterprise page section 12  screenshots', async () => {                 
        await(await HomePage.enterpriseScroll12).scrollIntoView()
     
        await expect(await browser.checkScreen('Sol-enterprise-12', { /* some options */ })).toEqual(0);
    });
//===================================================enterprise page section 13 ================================================
    it('should save  enterprise page section 12 screenshots', async () => {
        await(await HomePage.enterpriseScroll13).scrollIntoView()
        
        await browser.saveScreen('Sol-enterprise-13', { });
    }); 
    it('should compare enterprise page section 13  screenshots', async () => {                 
        await(await HomePage.enterpriseScroll13).scrollIntoView()
        
        await expect(await browser.checkScreen('Sol-enterprise-13', { /* some options */ })).toEqual(0);
    });
//===================================================enterprise page section 14 ================================================
    it('should save  enterprise page section 14 screenshots', async () => {
        await(await HomePage.enterpriseScroll14).scrollIntoView()
       
        await browser.saveScreen('Sol-enterprise-14', { });
    }); 
    it('should compare enterprise page section 14  screenshots', async () => {                 
        await(await HomePage.enterpriseScroll14).scrollIntoView()
        
        await expect(await browser.checkScreen('Sol-enterprise-14', { /* some options */ })).toEqual(0);
    });












   


});


