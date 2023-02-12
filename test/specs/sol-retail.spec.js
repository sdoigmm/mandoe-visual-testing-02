const HomePage = require('../pageobjects/home.page');



describe('Solutions Retail', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000})
        await browser.url('/industries/gift-store/'); 
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











//===================================================retail page==============================================================================================================
    it('should save retail  page section 1 screenshots', async () => {  
    
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-01', { });
    }); 
    it('should compare retail page section 1 screenshots', async () => {  
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-01', { /* some options */ })).toEqual(0);
    });
//===================================================retail page section 2 ================================================
    it('should save  retail page section 2 screenshots', async () => {                        
        await(await HomePage.Scroll2).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-02', { });
    }); 
    it('should compare retail page section 2  screenshots', async () => {
        await(await HomePage.Scroll2).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-02', { /* some options */ })).toEqual(0);
    });
//===================================================retail page section 3 ================================================
    it('should save  retail page section 3 screenshots', async () => {     
        await(await HomePage.Scroll3).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-03', { });
    }); 
    it('should compare retail page section 3  screenshots', async () => {                   
        await(await HomePage.Scroll3).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-03', { /* some options */ })).toEqual(0);
    });
//===================================================retail page section 4 ================================================
    it('should save  retail page section 4 screenshots', async () => {                
        await(await HomePage.Scroll4).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-04', { });
    }); 
    it('should compare retail page section 4  screenshots', async () => {  
        await(await HomePage.Scroll4).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-04', { /* some options */ })).toEqual(0);
    });
    //===================================================retail page section 5 ================================================
    it('should save  retail page section 5 screenshots', async () => {               
        await(await HomePage.Scroll5).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-05', { });
    }); 
    it('should compare retail page section 5  screenshots', async () => {
        await(await HomePage.Scroll5).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-05', { /* some options */ })).toEqual(0);
    });
    //===================================================retail page section 6 ================================================
    it('should save  retail page section 6 screenshots', async () => {
        await(await HomePage.Scroll6).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-06', { });
    }); 
    it('should compare retail page section 6  screenshots', async () => {               
        await(await HomePage.Scroll6).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-06', { /* some options */ })).toEqual(0);
    });
//===================================================retail page section 7 ================================================
    it('should save  retail page section 7 screenshots', async () => {                
        await(await HomePage.Scroll7).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-07', { });
    }); 
    it('should compare retail page section 7  screenshots', async () => {               
        await(await HomePage.Scroll7).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-07', { /* some options */ })).toEqual(0);
    });
//===================================================retail page section 8 ================================================
    it('should save  retail page section 8 screenshots', async () => {                
        await(await HomePage.Scroll8).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-08', { });
    }); 
    it('should compare retail page section 8  screenshots', async () => {
        await(await HomePage.Scroll8).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-08', { /* some options */ })).toEqual(0);
    });
//===================================================retail page section 9 ================================================
    it('should save  retail page section 9 screenshots', async () => {                
        await(await HomePage.Scroll9).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-09', { });
    }); 
    it('should compare retail page section 9  screenshots', async () => {               
        await(await HomePage.Scroll9).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-09', { /* some options */ })).toEqual(0);
    });
//===================================================retail page section 10 ================================================
    it('should save  retail page section 10 screenshots', async () => {
        await(await HomePage.retailScroll10).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-10', { });
    }); 
    it('should compare retail page section 10  screenshots', async () => {              
        await(await HomePage.retailScroll10).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-10', { /* some options */ })).toEqual(0);
    });
//===================================================retail page section 11 ================================================
    it('should save  retail page section 11 screenshots', async () => {                
        await(await HomePage.retailScroll11).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-11', { });
    }); 
    it('should compare retail page section 11  screenshots', async () => {               
        await(await HomePage.retailScroll11).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-11', { /* some options */ })).toEqual(0);
    });

//===================================================retail page section 12 ================================================
    it('should save  retail page section 12 screenshots', async () => {                
        await(await HomePage.retailScroll12).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-12', { });
    }); 
    it('should compare retail page section 12  screenshots', async () => {              
        await(await HomePage.retailScroll12).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-12', { /* some options */ })).toEqual(0);
    });
    //===================================================retail page section 13 ================================================
    it('should save  retail page section 13 screenshots', async () => {               
        await(await HomePage.retailScroll13).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-13', { });
    }); 
    it('should compare retail page section 13  screenshots', async () => {               
        await(await HomePage.retailScroll13).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-13', { /* some options */ })).toEqual(0);
    });
    //===================================================retail page section 14 ================================================
    it('should save  retail page section 14 screenshots', async () => {                
        await(await HomePage.retailScroll14).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-14', { });
    }); 
    it('should compare retail page section 14  screenshots', async () => {
        await(await HomePage.retailScroll14).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-14', { /* some options */ })).toEqual(0);
    });
    //===================================================retail page section 15 ================================================
    it('should save  retail page section 15 screenshots', async () => {              
        await(await HomePage.retailScroll15).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-15', { });
    }); 
    it('should compare retail page section 15  screenshots', async () => {
        await(await HomePage.retailScroll15).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-15', { /* some options */ })).toEqual(0);
    });
      //===================================================retail page section 16 ================================================
    it('should save  retail page section 16 screenshots', async () => {              
        await(await HomePage.retailScroll16).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-16', { });
    }); 
    it('should compare retail page section 16  screenshots', async () => {
        await(await HomePage.retailScroll16).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-16', { /* some options */ })).toEqual(0);
    });
      //===================================================retail page section 17 ================================================
    it('should save  retail page section 17 screenshots', async () => {             
        await(await HomePage.retailScroll17).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-retail-17', { });
    }); 
    it('should compare retail page section 17  screenshots', async () => {
        await(await HomePage.retailScroll17).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-retail-17', { /* some options */ })).toEqual(0);
    });













   


});


