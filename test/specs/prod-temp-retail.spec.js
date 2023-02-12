const HomePage = require('../pageobjects/home.page');



describe('Products templates retail page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 100000 }) 
        await browser.url('/templates/retail/'); 
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



 //===================================================temp-retail page secton 1==============================================================================================================
    it('should save temp-retail-retail  page section 1 screenshots', async () => {  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-01', { });
    }); 
    it('should compare temp-retail page section 1 screenshots', async () => {  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-01', { /* some options */ })).toEqual(0);
    });
//===================================================temp-retail page section 2 ================================================
    it('should save  temp-retail page section 2 screenshots', async () => {                        
        await(await HomePage.tempRetailScroll2).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-02', { });
    }); 
    it('should compare temp-retail page section 2  screenshots', async () => {
        await(await HomePage.tempRetailScroll2).scrollIntoView()       
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-02', { /* some options */ })).toEqual(0);
    });
//===================================================temp-retail page section 3 ================================================
    it('should save  temp-retail page section 3 screenshots', async () => {
        await(await HomePage.tempRetailScroll3).scrollIntoView()       
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-03', { });
    }); 
    it('should compare temp-retail page section 3  screenshots', async () => {                
        await(await HomePage.tempRetailScroll3).scrollIntoView()        
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-03', { /* some options */ })).toEqual(0);
    });
//===================================================temp-retail page section 4 ================================================
    it('should save  temp-retail page section 4 screenshots', async () => {                 
        await(await HomePage.tempRetailScroll4).scrollIntoView()     
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-04', { });
    }); 
    it('should compare temp-retail page section 4  screenshots', async () => {
        await(await HomePage.tempRetailScroll4).scrollIntoView()       
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-04', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-retail page section 5 ================================================
    it('should save  temp-retail page section 5 screenshots', async () => {                 
        await(await HomePage.tempRetailScroll5).scrollIntoView()     
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-05', { });
    }); 
    it('should compare temp-retail page section 5  screenshots', async () => {
        await(await HomePage.tempRetailScroll5).scrollIntoView()        
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-05', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-retail page section 6 ================================================
    it('should save  temp-retail page section 6 screenshots', async () => {
        await(await HomePage.tempRetailScroll6).scrollIntoView()        
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-06', { });
    }); 
    it('should compare temp-retail page section 6  screenshots', async () => {                
        await(await HomePage.tempRetailScroll6).scrollIntoView()       
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-06', { /* some options */ })).toEqual(0);
    });
//===================================================temp-retail page section 7 ================================================
    it('should save  temp-retail page section 7 screenshots', async () => {               
        await(await HomePage.tempRetailScroll7).scrollIntoView()       
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-07', { });
    }); 
    it('should compare temp-retail page section 7  screenshots', async () => {                
        await(await HomePage.tempRetailScroll7).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-07', { /* some options */ })).toEqual(0);
    });
//===================================================temp-retail page section 8 ================================================
    it('should save  temp-retail page section 8 screenshots', async () => {                
        await(await HomePage.tempRetailScroll8).scrollIntoView()        
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-08', { });
    }); 
    it('should compare temp-retail page section 8  screenshots', async () => {
        await(await HomePage.tempRetailScroll8).scrollIntoView()      
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-08', { /* some options */ })).toEqual(0);
    });
//===================================================temp-retail page section 9 ================================================
    it('should save  temp-retail page section 9 screenshots', async () => {                   
        await(await HomePage.tempRetailScroll9).scrollIntoView()        
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-09', { });
    }); 
    it('should compare temp-retail page section 9  screenshots', async () => {                
        await(await HomePage.tempRetailScroll9).scrollIntoView()        
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-09', { /* some options */ })).toEqual(0);
    });
//===================================================temp-retail page section 10 ================================================
    it('should save  temp-retail page section 10 screenshots', async () => {
        await(await HomePage.tempRetailScroll10).scrollIntoView()       
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-10', { });
    }); 
    it('should compare temp-retail page section 10  screenshots', async () => {              
        await(await HomePage.tempRetailScroll10).scrollIntoView()      
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-10', { /* some options */ })).toEqual(0);
    });
//===================================================temp-retail page section 11 ================================================
    it('should save  temp-retail page section 11 screenshots', async () => {                
        await(await HomePage.tempRetailScroll11).scrollIntoView()        
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-11', { });
    }); 
    it('should compare temp-retail page section 11  screenshots', async () => {              
        await(await HomePage.tempRetailScroll11).scrollIntoView()       
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-11', { /* some options */ })).toEqual(0);
    });

//===================================================temp-retail page section 12 ================================================
    it('should save  temp-retail page section 12 screenshots', async () => {               
        await(await HomePage.tempRetailScroll12).scrollIntoView()       
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-12', { });
    }); 
    it('should compare temp-retail page section 12  screenshots', async () => {             
        await(await HomePage.tempRetailScroll12).scrollIntoView()     
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-12', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-retail page section 13 ================================================
    it('should save  temp-retail page section 13 screenshots', async () => {                
        await(await HomePage.tempRetailScroll13).scrollIntoView()        
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-13', { });
    }); 
    it('should compare temp-retail page section 13  screenshots', async () => {              
        await(await HomePage.tempRetailScroll13).scrollIntoView()      
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-13', { /* some options */ })).toEqual(0);
    });
   //===================================================temp-retail page section 14 ================================================
    it('should save  temp-retail page section 14 screenshots', async () => {                
        await(await HomePage.tempRetailScroll14).scrollIntoView()        
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-14', { });
    }); 
    it('should compare temp-retail page section 14  screenshots', async () => {              
        await(await HomePage.tempRetailScroll14).scrollIntoView()      
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-14', { /* some options */ })).toEqual(0);
    });
  
     //===================================================temp-retail page section 15 ================================================
    it('should save  temp-retail page section 15 screenshots', async () => {                
        await(await HomePage.tempRetailScroll15).scrollIntoView()        
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-15', { });
    }); 
    it('should compare temp-retail page section 15  screenshots', async () => {              
        await(await HomePage.tempRetailScroll15).scrollIntoView()      
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-15', { /* some options */ })).toEqual(0);
    });
  
   //===================================================temp-retail page section 16 ================================================
    it('should save  temp-retail page section 16 screenshots', async () => {                
        await(await HomePage.tempRetailScroll6).scrollIntoView()        
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-16', { });
    }); 
    it('should compare temp-retail page section 16  screenshots', async () => {              
        await(await HomePage.tempRetailScroll16).scrollIntoView()      
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-16', { /* some options */ })).toEqual(0);
    });
     //===================================================temp-retail page section 17 ================================================
    it('should save  temp-retail page section 17 screenshots', async () => {                
        await(await HomePage.tempRetailScroll17).scrollIntoView()        
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-17', { });
    }); 
    it('should compare temp-retail page section 17  screenshots', async () => {              
        await(await HomePage.tempRetailScroll17).scrollIntoView()      
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-17', { /* some options */ })).toEqual(0);
    });
     //===================================================temp-retail page section 18 ================================================
    it('should save  temp-retail page section 18 screenshots', async () => {                
        await(await HomePage.tempRetailScroll18).scrollIntoView()        
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-18', { });
    }); 
    it('should compare temp-retail page section 18  screenshots', async () => {              
        await(await HomePage.tempRetailScroll18).scrollIntoView()      
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-18', { /* some options */ })).toEqual(0);
    });
    //===================================================temp-retail page section 19 ================================================
    it('should save  temp-retail page section 19 screenshots', async () => {                
        await(await HomePage.tempRetailScroll19).scrollIntoView()        
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('prod-temp-retail-19', { });
    }); 
    it('should compare temp-retail page section 19  screenshots', async () => {              
        await(await HomePage.tempRetailScroll19).scrollIntoView()      
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-19', { /* some options */ })).toEqual(0);
    });
  //===================================================temp-retail page section 20 ================================================
    it('should save  temp-retail page section 20 screenshots', async () => {                
        await(await HomePage.tempRetailScroll20).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)       
        await browser.saveScreen('prod-temp-retail-20', { });
    }); 
    it('should compare temp-retail page section 20  screenshots', async () => {              
        await(await HomePage.tempRetailScroll20).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await expect(await browser.checkScreen('prod-temp-retail-20', { /* some options */ })).toEqual(0);
    });
      //===================================================temp-retail page section 21 ================================================
    it('should save  temp-retail page section 21 screenshots', async () => {                
        await(await HomePage.tempRetailScroll21).scrollIntoView()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await browser.saveScreen('prod-temp-retail-21', { });
    }); 
    it('should compare temp-retail page section 21  screenshots', async () => {              
        await(await HomePage.tempRetailScroll21).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('prod-temp-retail-21', { /* some options */ })).toEqual(0);
    });
  









   


});