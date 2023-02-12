const HomePage = require('../pageobjects/home.page');



describe('Products templates hospitality page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/templates/hospitality/'); 
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



// //===================================================temp-hospitality-hospitality page secton 1==============================================================================================================
    it('should save temp-hospitality-hospitality  page section 1 screenshots', async () => {  
      
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
      
        await browser.saveScreen('prod-temp-hospitality-01', { });
    }); 
    it('should compare temp-hospitality page section 1 screenshots', async () => {  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('prod-temp-hospitality-01', { /* some options */ })).toEqual(0);
    });
//===================================================temp-hospitality page section 2 ================================================
    it('should save  temp-hospitality page section 2 screenshots', async () => {                        
        await(await HomePage.tempHospScroll2).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('prod-temp-hospitality-02', { });
    }); 
    it('should compare temp-hospitality page section 2  screenshots', async () => {
        await(await HomePage.tempHospScroll2).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('prod-temp-hospitality-02', { /* some options */ })).toEqual(0);
    });
//===================================================temp-hospitality page section 3 ================================================
    it('should save  temp-hospitality page section 3 screenshots', async () => {
        await(await HomePage.tempHospScroll3).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await browser.saveScreen('prod-temp-hospitality-03', { });
    }); 
    it('should compare temp-hospitality page section 3  screenshots', async () => {                
        await(await HomePage.tempHospScroll3).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-hospitality-03', { /* some options */ })).toEqual(0);
    });
//===================================================temp-hospitality page section 4 ================================================
    it('should save  temp-hospitality page section 4 screenshots', async () => {                 
        await(await HomePage.tempHospScroll4).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('prod-temp-hospitality-04', { });
    }); 
    it('should compare temp-hospitality page section 4  screenshots', async () => {
        await(await HomePage.tempHospScroll4).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('prod-temp-hospitality-04', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-hospitality page section 5 ================================================
    it('should save  temp-hospitality page section 5 screenshots', async () => {                 
        await(await HomePage.tempHospScroll5).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('prod-temp-hospitality-05', { });
    }); 
    it('should compare temp-hospitality page section 5  screenshots', async () => {
        await(await HomePage.tempHospScroll5).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('prod-temp-hospitality-05', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-hospitality page section 6 ================================================
    it('should save  temp-hospitality page section 6 screenshots', async () => {
        await(await HomePage.tempHospScroll6).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('prod-temp-hospitality-06', { });
    }); 
    it('should compare temp-hospitality page section 6  screenshots', async () => {                
        await(await HomePage.tempHospScroll6).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
               
        await browser.pause(3000)
        await expect(await browser.checkScreen('prod-temp-hospitality-06', { /* some options */ })).toEqual(0);
    });
//===================================================temp-hospitality page section 7 ================================================
    it('should save  temp-hospitality page section 7 screenshots', async () => {               
        await(await HomePage.tempHospScroll7).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await browser.saveScreen('prod-temp-hospitality-07', { });
    }); 
    it('should compare temp-hospitality page section 7  screenshots', async () => {                
        await(await HomePage.tempHospScroll7).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('prod-temp-hospitality-07', { /* some options */ })).toEqual(0);
    });
//===================================================temp-hospitality page section 8 ================================================
    it('should save  temp-hospitality page section 8 screenshots', async () => {                
        await(await HomePage.tempHospScroll8).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)       
        await browser.saveScreen('prod-temp-hospitality-08', { });
    }); 
    it('should compare temp-hospitality page section 8  screenshots', async () => {
        await(await HomePage.tempHospScroll8).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await expect(await browser.checkScreen('prod-temp-hospitality-08', { /* some options */ })).toEqual(0);
    });
//===================================================temp-hospitality page section 9 ================================================
    it('should save  temp-hospitality page section 9 screenshots', async () => {                   
        await(await HomePage.tempHospScroll9).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('prod-temp-hospitality-09', { });
    }); 
    it('should compare temp-hospitality page section 9  screenshots', async () => {                
        await(await HomePage.tempHospScroll9).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await expect(await browser.checkScreen('prod-temp-hospitality-09', { /* some options */ })).toEqual(0);
    });
//===================================================temp-hospitality page section 10 ================================================
    it('should save  temp-hospitality page section 10 screenshots', async () => {
        await(await HomePage.tempHospScroll10).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await browser.saveScreen('prod-temp-hospitality-10', { });
    }); 
    it('should compare temp-hospitality page section 10  screenshots', async () => {              
        await(await HomePage.tempHospScroll10).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await expect(await browser.checkScreen('prod-temp-hospitality-10', { /* some options */ })).toEqual(0);
    });
//===================================================temp-hospitality page section 11 ================================================
    it('should save  temp-hospitality page section 11 screenshots', async () => {                
        await(await HomePage.tempHospScroll11).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await browser.saveScreen('prod-temp-hospitality-11', { });
    }); 
    it('should compare temp-hospitality page section 11  screenshots', async () => {              
        await(await HomePage.tempHospScroll11).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await expect(await browser.checkScreen('prod-temp-hospitality-11', { /* some options */ })).toEqual(0);
    });

//===================================================temp-hospitality page section 12 ================================================
    it('should save  temp-hospitality page section 12 screenshots', async () => {               
        await(await HomePage.tempHospScroll12).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('prod-temp-hospitality-12', { });
    }); 
    it('should compare temp-hospitality page section 12  screenshots', async () => {             
        await(await HomePage.tempHospScroll12).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('prod-temp-hospitality-12', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-hospitality page section 13 ================================================
    it('should save  temp-hospitality page section 13 screenshots', async () => {                
        await(await HomePage.tempHospScroll13).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)       
        await browser.saveScreen('prod-temp-hospitality-13', { });
    }); 
    it('should compare temp-hospitality page section 13  screenshots', async () => {              
        await(await HomePage.tempHospScroll13).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await expect(await browser.checkScreen('prod-temp-hospitality-13', { /* some options */ })).toEqual(0);
    });
  











   


});