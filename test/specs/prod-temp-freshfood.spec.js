const HomePage = require('../pageobjects/home.page');



describe('Products template freshfood page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/templates/fresh-food/'); 
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



// //===================================================temp-freshfood-freshfood page secton 1==============================================================================================================
    it('should save temp-freshfood-freshfood  page section 1 screenshots', async () => { 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('prod-temp-freshfood-01', { });
    }); 
    it('should compare temp-freshfood page section 1 screenshots', async () => {  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await expect(await browser.checkScreen('prod-temp-freshfood-01', { /* some options */ })).toEqual(0);
    });
//===================================================temp-freshfood page section 2 ================================================
    it('should save  temp-freshfood page section 2 screenshots', async () => {                        
        await(await HomePage.tempFreshfoodScroll2).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
      
        await browser.saveScreen('prod-temp-freshfood-02', { });
    }); 
    it('should compare temp-freshfood page section 2  screenshots', async () => {
        await(await HomePage.tempFreshfoodScroll2).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
         
        await expect(await browser.checkScreen('prod-temp-freshfood-02', { /* some options */ })).toEqual(0);
    });
//===================================================temp-freshfood page section 3 ================================================
    it('should save  temp-freshfood page section 3 screenshots', async () => {
        await(await HomePage.tempFreshfoodScroll3).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await browser.saveScreen('prod-temp-freshfood-03', { });
    }); 
    it('should compare temp-freshfood page section 3  screenshots', async () => {                
        await(await HomePage.tempFreshfoodScroll3).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
         
        await expect(await browser.checkScreen('prod-temp-freshfood-03', { /* some options */ })).toEqual(0);
    });
//===================================================temp-freshfood page section 4 ================================================
    it('should save  temp-freshfood page section 4 screenshots', async () => {                 
        await(await HomePage.tempFreshfoodScroll4).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await browser.saveScreen('prod-temp-freshfood-04', { });
    }); 
    it('should compare temp-freshfood page section 4  screenshots', async () => {
        await(await HomePage.tempFreshfoodScroll4).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
          
        await expect(await browser.checkScreen('prod-temp-freshfood-04', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-freshfood page section 5 ================================================
    it('should save  temp-freshfood page section 5 screenshots', async () => {                 
        await(await HomePage.tempFreshfoodScroll5).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await browser.saveScreen('prod-temp-freshfood-05', { });
    }); 
    it('should compare temp-freshfood page section 5  screenshots', async () => {
        await(await HomePage.tempFreshfoodScroll5).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
         
        await expect(await browser.checkScreen('prod-temp-freshfood-05', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-freshfood page section 6 ================================================
    it('should save  temp-freshfood page section 6 screenshots', async () => {
        await(await HomePage.tempFreshfoodScroll6).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
         
        await browser.saveScreen('prod-temp-freshfood-06', { });
    }); 
    it('should compare temp-freshfood page section 6  screenshots', async () => {                
        await(await HomePage.tempFreshfoodScroll6).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('prod-temp-freshfood-06', { /* some options */ })).toEqual(0);
    });
//===================================================temp-freshfood page section 7 ================================================
    it('should save  temp-freshfood page section 7 screenshots', async () => {               
        await(await HomePage.tempFreshfoodScroll7).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
             
        await browser.saveScreen('prod-temp-freshfood-07', { });
    }); 
    it('should compare temp-freshfood page section 7  screenshots', async () => {                
        await(await HomePage.tempFreshfoodScroll7).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
      
        await expect(await browser.checkScreen('prod-temp-freshfood-07', { /* some options */ })).toEqual(0);
    });
//===================================================temp-freshfood page section 8 ================================================
    it('should save  temp-freshfood page section 8 screenshots', async () => {                
        await(await HomePage.tempFreshfoodScroll8).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
            
        await browser.saveScreen('prod-temp-freshfood-08', { });
    }); 
    it('should compare temp-freshfood page section 8  screenshots', async () => {
        await(await HomePage.tempFreshfoodScroll8).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
         
        await expect(await browser.checkScreen('prod-temp-freshfood-08', { /* some options */ })).toEqual(0);
    });
//===================================================temp-freshfood page section 9 ================================================
    it('should save  temp-freshfood page section 9 screenshots', async () => {                   
        await(await HomePage.tempFreshfoodScroll9).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
         
        await browser.saveScreen('prod-temp-freshfood-09', { });
    }); 
    it('should compare temp-freshfood page section 9  screenshots', async () => {                
        await(await HomePage.tempFreshfoodScroll9).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
         
        await expect(await browser.checkScreen('prod-temp-freshfood-09', { /* some options */ })).toEqual(0);
    });
//===================================================temp-freshfood page section 10 ================================================
    it('should save  temp-freshfood page section 10 screenshots', async () => {
        await(await HomePage.tempFreshfoodScroll10).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
         
        await browser.saveScreen('prod-temp-freshfood-10', { });
    }); 
    it('should compare temp-freshfood page section 10  screenshots', async () => {              
        await(await HomePage.tempFreshfoodScroll10).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await expect(await browser.checkScreen('prod-temp-freshfood-10', { /* some options */ })).toEqual(0);
    });
//===================================================temp-freshfood page section 11 ================================================
    it('should save  temp-freshfood page section 11 screenshots', async () => {                
        await(await HomePage.tempFreshfoodScroll11).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
          
        await browser.saveScreen('prod-temp-freshfood-11', { });
    }); 
    it('should compare temp-freshfood page section 11  screenshots', async () => {              
        await(await HomePage.tempFreshfoodScroll11).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await expect(await browser.checkScreen('prod-temp-freshfood-11', { /* some options */ })).toEqual(0);
    });

//===================================================temp-freshfood page section 12 ================================================
    it('should save  temp-freshfood page section 12 screenshots', async () => {               
        await(await HomePage.tempFreshfoodScroll12).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await browser.saveScreen('prod-temp-freshfood-12', { });
    }); 
    it('should compare temp-freshfood page section 12  screenshots', async () => {             
        await(await HomePage.tempFreshfoodScroll12).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await expect(await browser.checkScreen('prod-temp-freshfood-12', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-freshfood page section 13 ================================================
    it('should save  temp-freshfood page section 13 screenshots', async () => {                
        await(await HomePage.tempFreshfoodScroll13).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
           
        await browser.saveScreen('prod-temp-freshfood-13', { });
    }); 
    it('should compare temp-freshfood page section 13  screenshots', async () => {              
        await(await HomePage.tempFreshfoodScroll13).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
      
        await expect(await browser.checkScreen('prod-temp-freshfood-13', { /* some options */ })).toEqual(0);
    });
  











   


});