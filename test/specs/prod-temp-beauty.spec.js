const HomePage = require('../pageobjects/home.page');



describe('Products templates hair-beauty page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/templates/hair-beauty/'); 
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




// //===================================================temp-hair-beauty-hair-beauty page secton 1==============================================================================================================
    it('should save temp-hair-beauty-hair-beauty  page section 1 screenshots', async () => {  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('prod-temp-hair-beauty-01', { });
    }); 
    it('should compare temp-hair-beauty page section 1 screenshots', async () => {  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('prod-temp-hair-beauty-01', { /* some options */ })).toEqual(0);
    });
//===================================================temp-hair-beauty page section 2 ================================================
    it('should save  temp-hair-beauty page section 2 screenshots', async () => {                        
        await(await HomePage.tempbeautyScroll2).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('prod-temp-hair-beauty-02', { });
    }); 
    it('should compare temp-hair-beauty page section 2  screenshots', async () => {
        await(await HomePage.tempbeautyScroll2).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await expect(await browser.checkScreen('prod-temp-hair-beauty-02', { /* some options */ })).toEqual(0);
    });
//===================================================temp-hair-beauty page section 3 ================================================
    it('should save  temp-hair-beauty page section 3 screenshots', async () => {
        await(await HomePage.tempbeautyScroll3).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('prod-temp-hair-beauty-03', { });
    }); 
    it('should compare temp-hair-beauty page section 3  screenshots', async () => {                
        await(await HomePage.tempbeautyScroll3).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await expect(await browser.checkScreen('prod-temp-hair-beauty-03', { /* some options */ })).toEqual(0);
    });
//===================================================temp-hair-beauty page section 4 ================================================
    it('should save  temp-hair-beauty page section 4 screenshots', async () => {                 
        await(await HomePage.tempbeautyScroll4).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await browser.saveScreen('prod-temp-hair-beauty-04', { });
    }); 
    it('should compare temp-hair-beauty page section 4  screenshots', async () => {
        await(await HomePage.tempbeautyScroll4).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await expect(await browser.checkScreen('prod-temp-hair-beauty-04', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-hair-beauty page section 5 ================================================
    it('should save  temp-hair-beauty page section 5 screenshots', async () => {                 
        await(await HomePage.tempbeautyScroll5).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await browser.saveScreen('prod-temp-hair-beauty-05', { });
    }); 
    it('should compare temp-hair-beauty page section 5  screenshots', async () => {
        await(await HomePage.tempbeautyScroll5).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)       
        await expect(await browser.checkScreen('prod-temp-hair-beauty-05', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-hair-beauty page section 6 ================================================
    it('should save  temp-hair-beauty page section 6 screenshots', async () => {
        await(await HomePage.tempbeautyScroll6).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await browser.saveScreen('prod-temp-hair-beauty-06', { });
    }); 
    it('should compare temp-hair-beauty page section 6  screenshots', async () => {                
        await(await HomePage.tempbeautyScroll6).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await expect(await browser.checkScreen('prod-temp-hair-beauty-06', { /* some options */ })).toEqual(0);
    });
//===================================================temp-hair-beauty page section 7 ================================================
    it('should save  temp-hair-beauty page section 7 screenshots', async () => {               
        await(await HomePage.tempbeautyScroll7).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-hair-beauty-07', { });
    }); 
    it('should compare temp-hair-beauty page section 7  screenshots', async () => {                
        await(await HomePage.tempbeautyScroll7).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('prod-temp-hair-beauty-07', { /* some options */ })).toEqual(0);
    });
//===================================================temp-hair-beauty page section 8 ================================================
    it('should save  temp-hair-beauty page section 8 screenshots', async () => {                
        await(await HomePage.tempbeautyScroll8).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)        
        await browser.saveScreen('prod-temp-hair-beauty-08', { });
    }); 
    it('should compare temp-hair-beauty page section 8  screenshots', async () => {
        await(await HomePage.tempbeautyScroll8).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await expect(await browser.checkScreen('prod-temp-hair-beauty-08', { /* some options */ })).toEqual(0);
    });
//===================================================temp-hair-beauty page section 9 ================================================
    it('should save  temp-hair-beauty page section 9 screenshots', async () => {                   
        await(await HomePage.tempbeautyScroll9).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await browser.saveScreen('prod-temp-hair-beauty-09', { });
    }); 
    it('should compare temp-hair-beauty page section 9  screenshots', async () => {                
        await(await HomePage.tempbeautyScroll9).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)        
        await expect(await browser.checkScreen('prod-temp-hair-beauty-09', { /* some options */ })).toEqual(0);
    });
//===================================================temp-hair-beauty page section 10 ================================================
    it('should save  temp-hair-beauty page section 10 screenshots', async () => {
        await(await HomePage.tempbeautyScroll10).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('prod-temp-hair-beauty-10', { });
    }); 
    it('should compare temp-hair-beauty page section 10  screenshots', async () => {              
        await(await HomePage.tempbeautyScroll10).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await expect(await browser.checkScreen('prod-temp-hair-beauty-10', { /* some options */ })).toEqual(0);
    });
//===================================================temp-hair-beauty page section 11 ================================================
    it('should save  temp-hair-beauty page section 11 screenshots', async () => {                
        await(await HomePage.tempbeautyScroll11).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await browser.saveScreen('prod-temp-hair-beauty-11', { });
    }); 
    it('should compare temp-hair-beauty page section 11  screenshots', async () => {              
        await(await HomePage.tempbeautyScroll11).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await expect(await browser.checkScreen('prod-temp-hair-beauty-11', { /* some options */ })).toEqual(0);
    });

//===================================================temp-hair-beauty page section 12 ================================================
    it('should save  temp-hair-beauty page section 12 screenshots', async () => {               
        await(await HomePage.tempbeautyScroll12).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await browser.saveScreen('prod-temp-hair-beauty-12', { });
    }); 
    it('should compare temp-hair-beauty page section 12  screenshots', async () => {             
        await(await HomePage.tempbeautyScroll12).scrollIntoView()   
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-hair-beauty-12', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-hair-beauty page section 13 ================================================
    it('should save  temp-hair-beauty page section 13 screenshots', async () => {                
        await(await HomePage.tempbeautyScroll13).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('prod-temp-hair-beauty-13', { });
    }); 
    it('should compare temp-hair-beauty page section 13  screenshots', async () => {              
        await(await HomePage.tempbeautyScroll13).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await expect(await browser.checkScreen('prod-temp-hair-beauty-13', { /* some options */ })).toEqual(0);
    });
   //===================================================temp-hair-beauty page section 14 ================================================
    it('should save  temp-hair-beauty page section 14 screenshots', async () => {                
        await(await HomePage.tempbeautyScroll14).scrollIntoView()   
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await browser.saveScreen('prod-temp-hair-beauty-14', { });
    }); 
    it('should compare temp-hair-beauty page section 14  screenshots', async () => {              
        await(await HomePage.tempbeautyScroll14).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await expect(await browser.checkScreen('prod-temp-hair-beauty-14', { /* some options */ })).toEqual(0);
    });
  
     //===================================================temp-hair-beauty page section 15 ================================================
    it('should save  temp-hair-beauty page section 15 screenshots', async () => {                
        await(await HomePage.tempbeautyScroll15).scrollIntoView()   
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await browser.saveScreen('prod-temp-hair-beauty-15', { });
    }); 
    it('should compare temp-hair-beauty page section 15  screenshots', async () => {              
        await(await HomePage.tempbeautyScroll15).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await expect(await browser.checkScreen('prod-temp-hair-beauty-15', { /* some options */ })).toEqual(0);
    });
  










   


});