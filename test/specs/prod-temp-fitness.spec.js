const HomePage = require('../pageobjects/home.page');



describe('Products template fitness page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/templates/fitness/'); 
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



// //===================================================temp-fitness- page secton 1==============================================================================================================
    it('should save temp-fitness-fitness  page section 1 screenshots', async () => { 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await browser.saveScreen('prod-temp-fitness-01', { });
    }); 
    it('should compare temp-fitness page section 1 screenshots', async () => {  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await expect(await browser.checkScreen('prod-temp-fitness-01', { /* some options */ })).toEqual(0);
    });
//===================================================temp-fitness page section 2 ================================================
    it('should save  temp-fitness page section 2 screenshots', async () => {                        
        await(await HomePage.tempfitnessScroll2).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await browser.saveScreen('prod-temp-fitness-02', { });
    }); 
    it('should compare temp-fitness page section 2  screenshots', async () => {
        await(await HomePage.tempfitnessScroll2).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await expect(await browser.checkScreen('prod-temp-fitness-02', { /* some options */ })).toEqual(0);
    });
//===================================================temp-fitness page section 3 ================================================
    it('should save  temp-fitness page section 3 screenshots', async () => {
        await(await HomePage.tempfitnessScroll3).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
         
        await browser.saveScreen('prod-temp-fitness-03', { });
    }); 
    it('should compare temp-fitness page section 3  screenshots', async () => {                
        await(await HomePage.tempfitnessScroll3).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await expect(await browser.checkScreen('prod-temp-fitness-03', { /* some options */ })).toEqual(0);
    });
//===================================================temp-fitness page section 4 ================================================
    it('should save  temp-fitness page section 4 screenshots', async () => {                 
        await(await HomePage.tempfitnessScroll4).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await browser.saveScreen('prod-temp-fitness-04', { });
    }); 
    it('should compare temp-fitness page section 4  screenshots', async () => {
        await(await HomePage.tempfitnessScroll4).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await expect(await browser.checkScreen('prod-temp-fitness-04', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-fitness page section 5 ================================================
    it('should save  temp-fitness page section 5 screenshots', async () => {                 
        await(await HomePage.tempfitnessScroll5).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await browser.saveScreen('prod-temp-fitness-05', { });
    }); 
    it('should compare temp-fitness page section 5  screenshots', async () => {
        await(await HomePage.tempfitnessScroll5).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
         
        await expect(await browser.checkScreen('prod-temp-fitness-05', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-fitness page section 6 ================================================
    it('should save  temp-fitness page section 6 screenshots', async () => {
        await(await HomePage.tempfitnessScroll6).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await browser.saveScreen('prod-temp-fitness-06', { });
    }); 
    it('should compare temp-fitness page section 6  screenshots', async () => {                
        await(await HomePage.tempfitnessScroll6).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await expect(await browser.checkScreen('prod-temp-fitness-06', { /* some options */ })).toEqual(0);
    });
//===================================================temp-fitness page section 7 ================================================
    it('should save  temp-fitness page section 7 screenshots', async () => {               
        await(await HomePage.tempfitnessScroll7).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await browser.saveScreen('prod-temp-fitness-07', { });
    }); 
    it('should compare temp-fitness page section 7  screenshots', async () => {                
        await(await HomePage.tempfitnessScroll7).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await expect(await browser.checkScreen('prod-temp-fitness-07', { /* some options */ })).toEqual(0);
    });
//===================================================temp-fitness page section 8 ================================================
    it('should save  temp-fitness page section 8 screenshots', async () => {                
        await(await HomePage.tempfitnessScroll8).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        
        await browser.saveScreen('prod-temp-fitness-08', { });
    }); 
    it('should compare temp-fitness page section 8  screenshots', async () => {
        await(await HomePage.tempfitnessScroll8).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await expect(await browser.checkScreen('prod-temp-fitness-08', { /* some options */ })).toEqual(0);
    });
//===================================================temp-fitness page section 9 ================================================
    it('should save  temp-fitness page section 9 screenshots', async () => {                   
        await(await HomePage.tempfitnessScroll9).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await browser.saveScreen('prod-temp-fitness-09', { });
    }); 
    it('should compare temp-fitness page section 9  screenshots', async () => {                
        await(await HomePage.tempfitnessScroll9).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await expect(await browser.checkScreen('prod-temp-fitness-09', { /* some options */ })).toEqual(0);
    });
//===================================================temp-fitness page section 10 ================================================
    it('should save  temp-fitness page section 10 screenshots', async () => {
        await(await HomePage.tempfitnessScroll10).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
         
        await browser.saveScreen('prod-temp-fitness-10', { });
    }); 
    it('should compare temp-fitness page section 10  screenshots', async () => {              
        await(await HomePage.tempfitnessScroll10).scrollIntoView()   
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await expect(await browser.checkScreen('prod-temp-fitness-10', { /* some options */ })).toEqual(0);
    });
//===================================================temp-fitness page section 11 ================================================
    it('should save  temp-fitness page section 11 screenshots', async () => {                
        await(await HomePage.tempfitnessScroll11).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
         
        await browser.saveScreen('prod-temp-fitness-11', { });
    }); 
    it('should compare temp-fitness page section 11  screenshots', async () => {              
        await(await HomePage.tempfitnessScroll11).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await expect(await browser.checkScreen('prod-temp-fitness-11', { /* some options */ })).toEqual(0);
    });

//===================================================temp-fitness page section 12 ================================================
    it('should save  temp-fitness page section 12 screenshots', async () => {               
        await(await HomePage.tempfitnessScroll12).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await browser.saveScreen('prod-temp-fitness-12', { });
    }); 
    it('should compare temp-fitness page section 12  screenshots', async () => {             
        await(await HomePage.tempfitnessScroll12).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await expect(await browser.checkScreen('prod-temp-fitness-12', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-fitness page section 13 ================================================
    it('should save  temp-fitness page section 13 screenshots', async () => {                
        await(await HomePage.tempfitnessScroll13).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
          
        await browser.saveScreen('prod-temp-fitness-13', { });
    }); 
    it('should compare temp-fitness page section 13  screenshots', async () => {              
        await(await HomePage.tempfitnessScroll13).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        
        await expect(await browser.checkScreen('prod-temp-fitness-13', { /* some options */ })).toEqual(0);
    });
  











   


});