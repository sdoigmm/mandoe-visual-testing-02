const HomePage = require('../pageobjects/home.page');



describe('Solutions Hospitality page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000}) 
        await browser.url('/industries/hospitality/'); 
        await browser.pause(8000)            
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
           
    });










//===================================================Hospitality page==============================================================================================================
    it('should save Hospitality page screenshots', async () => {  
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)         
        await browser.saveScreen('Sol-Hospitality-01', { });       
    }); 
    it('should compare Hospitality page screenshots', async () => { 
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)                            
        await expect(await browser.checkScreen('Sol-Hospitality-01', { /* some options */ })).toEqual(0);
    });

//===================================================Hospitality page section 2 ================================================
    it('should save  Hospitality page section 2 screenshots', async () => {                              
        await(await HomePage.Scroll2).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)        
        await browser.saveScreen('Sol-Hospitality-02', { });
    }); 
    it('should compare Hospitality page section 2  screenshots', async () => {                         
        await(await HomePage.Scroll2).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await expect(await browser.checkScreen('Sol-Hospitality-02', { /* some options */ })).toEqual(0);
    });
//===================================================Hospitality page section 3 ================================================
    it('should save  Hospitality page section 3 screenshots', async () => {     
        await(await HomePage.Scroll3).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('Sol-Hospitality-03', { });
    }); 
    it('should compare Hospitality page section 3  screenshots', async () => {       
        await(await HomePage.Scroll3).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await expect(await browser.checkScreen('Sol-Hospitality-03', { /* some options */ })).toEqual(0);
    });
//===================================================Hospitality page section 4 ================================================
    it('should save  Hospitality page section 4 screenshots', async () => {       
        await(await HomePage.Scroll4).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)       
        await browser.saveScreen('Sol-Hospitality-04', { });
    }); 
    it('should compare Hospitality page section 4  screenshots', async () => {  
        await(await HomePage.Scroll4).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await expect(await browser.checkScreen('Sol-Hospitality-04', { /* some options */ })).toEqual(0);
    });
    //===================================================Hospitality page section 5 ================================================
    it('should save  Hospitality page section 5 screenshots', async () => {               
        await(await HomePage.Scroll5).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)       
        await browser.saveScreen('Sol-Hospitality-05', { });
    }); 
    it('should compare Hospitality page section 5  screenshots', async () => {              
        await(await HomePage.Scroll5).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await expect(await browser.checkScreen('Sol-Hospitality-05', { /* some options */ })).toEqual(0);
    });
    //===================================================Hospitality page section 6 ================================================
    it('should save  Hospitality page section 6 screenshots', async () => { 
        await(await HomePage.Scroll6).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await browser.saveScreen('Sol-Hospitality-06', { });
    }); 
    it('should compare Hospitality page section 6  screenshots', async () => {               
        await(await HomePage.Scroll6).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await expect(await browser.checkScreen('Sol-Hospitality-06', { /* some options */ })).toEqual(0);
    });
//===================================================Hospitality page section 7 ================================================
    it('should save  Hospitality page section 7 screenshots', async () => {
        await(await HomePage.Scroll7).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await browser.saveScreen('Sol-Hospitality-07', { });
    }); 
    it('should compare Hospitality page section 7  screenshots', async () => {                
        await(await HomePage.Scroll7).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await expect(await browser.checkScreen('Sol-Hospitality-07', { /* some options */ })).toEqual(0);
    });
//===================================================Hospitality page section 8 ================================================
    it('should save  Hospitality page section 8 screenshots', async () => {
        await(await HomePage.Scroll8).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('Sol-Hospitality-08', { });
    }); 
    it('should compare Hospitality page section 8  screenshots', async () => {
        await(await HomePage.Scroll8).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await expect(await browser.checkScreen('Sol-Hospitality-08', { /* some options */ })).toEqual(0);
    });
//===================================================Hospitality page section 9 ================================================
    it('should save  Hospitality page section 9 screenshots', async () => {               
        await(await HomePage.Scroll9).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('Sol-Hospitality-09', { });
    }); 
    it('should compare Hospitality page section 9  screenshots', async () => {
        await(await HomePage.Scroll9).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)       
        await expect(await browser.checkScreen('Sol-Hospitality-09', { /* some options */ })).toEqual(0);
    });
//===================================================Hospitality page section 10 ================================================
    it('should save  Hospitality page section 10 screenshots', async () => {                
        await(await HomePage.Scroll10).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await browser.saveScreen('Sol-Hospitality-10', { });
    }); 
    it('should compare Hospitality page section 10  screenshots', async () => {
        await(await HomePage.Scroll10).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)        
        await expect(await browser.checkScreen('Sol-Hospitality-10', { /* some options */ })).toEqual(0);
    });
//===================================================Hospitality page section 11 ================================================
    it('should save  Hospitality page section 11 screenshots', async () => {
        await(await HomePage.Scroll11).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('Sol-Hospitality-11', { });
    }); 
    it('should compare Hospitality page section 11  screenshots', async () => {              
        await(await HomePage.Scroll11).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)       
        await expect(await browser.checkScreen('Sol-Hospitality-11', { /* some options */ })).toEqual(0);
    });

//===================================================Hospitality page section 12 ================================================
    it('should save  Hospitality page section 12 screenshots', async () => {
        await(await HomePage.Scroll12).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await browser.saveScreen('Sol-Hospitality-12', { });
    }); 
    it('should compare Hospitality page section 12  screenshots', async () => {              
        await(await HomePage.Scroll12).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await expect(await browser.checkScreen('Sol-Hospitality-12', { /* some options */ })).toEqual(0);
    });
    //===================================================Hospitality page section 13 ================================================
    it('should save  Hospitality page section 13 screenshots', async () => {               
        await(await HomePage.hospitalityScroll13).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)        
        await browser.saveScreen('Sol-Hospitality-13', { });
    }); 
    it('should compare Hospitality page section 13  screenshots', async () => {               
        await(await HomePage.hospitalityScroll13).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await expect(await browser.checkScreen('Sol-Hospitality-13', { /* some options */ })).toEqual(0);
    });
    //===================================================Hospitality page section 14 ================================================
    it('should save  Hospitality page section 14 screenshots', async () => {  
        await(await HomePage.Scroll14).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await browser.saveScreen('Sol-Hospitality-14', { });
    }); 
    it('should compare Hospitality page section 14  screenshots', async () => {              
        await(await HomePage.Scroll14).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)        
        await expect(await browser.checkScreen('Sol-Hospitality-14', { /* some options */ })).toEqual(0);
    });
    //===================================================Hospitality page section 15 ================================================
    it('should save  Hospitality page section 15 screenshots', async () => {              
        await(await HomePage.Scroll15).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('Sol-Hospitality-15', { });
    }); 
    it('should compare Hospitality page section 15  screenshots', async () => {              
        await(await HomePage.Scroll15).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await expect(await browser.checkScreen('Sol-Hospitality-15', { /* some options */ })).toEqual(0);
    });
     //===================================================Hospitality page section 16 ================================================
    it('should save  Hospitality page section 16 screenshots', async () => {             
        await(await HomePage.Scroll16).scrollIntoView() 
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)       
        await browser.saveScreen('Sol-Hospitality-16', { });
    }); 
    it('should compare Hospitality page section 16  screenshots', async () => {                
        await(await HomePage.Scroll16).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await expect(await browser.checkScreen('Sol-Hospitality-16', { /* some options */ })).toEqual(0);
    });
     //===================================================Hospitality page section 17 ================================================
    it('should save  Hospitality page section 17 screenshots', async () => {               
        await(await HomePage.Scroll17).scrollIntoView()  
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await browser.saveScreen('Sol-Hospitality-17', { });
    }); 
    it('should compare Hospitality page section 17  screenshots', async () => {                
        await(await HomePage.Scroll17).scrollIntoView() 
         browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)       
        await expect(await browser.checkScreen('Sol-Hospitality-17', { /* some options */ })).toEqual(0);
    });









   


});


