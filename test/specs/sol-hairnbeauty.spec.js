const HomePage = require('../pageobjects/home.page');



describe('Solutions hairnBeauty', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000}) 
        await browser.url('/industries/hair-salon/'); 
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













//===================================================hairnBeauty page==============================================================================================================
    it('should save hairnBeauty  page section 1 screenshots', async () => {  
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-01', { });
    }); 
    it('should compare hairnBeauty page section 1 screenshots', async () => {  
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-01', { /* some options */ })).toEqual(0);
    });
//===================================================hairnBeauty page section 2 ================================================
    it('should save  hairnBeauty page section 2 screenshots', async () => {                        
        await(await HomePage.Scroll2).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-02', { });
    }); 
    it('should compare hairnBeauty page section 2  screenshots', async () => {
        await(await HomePage.Scroll2).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-02', { /* some options */ })).toEqual(0);
    });
//===================================================hairnBeauty page section 3 ================================================
    it('should save  hairnBeauty page section 3 screenshots', async () => {
        await(await HomePage.Scroll3).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-03', { });
    }); 
    it('should compare hairnBeauty page section 3  screenshots', async () => {                  
        await(await HomePage.Scroll3).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-03', { /* some options */ })).toEqual(0);
    });
//===================================================hairnBeauty page section 4 ================================================
    it('should save  hairnBeauty page section 4 screenshots', async () => {                                 
        await(await HomePage.Scroll4).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-04', { });
    }); 
    it('should compare hairnBeauty page section 4  screenshots', async () => {      
        await(await HomePage.Scroll4).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-04', { /* some options */ })).toEqual(0);
    });
    //===================================================hairnBeauty page section 5 ================================================
    it('should save  hairnBeauty page section 5 screenshots', async () => {                    
        await(await HomePage.Scroll5).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-05', { });
    }); 
    it('should compare hairnBeauty page section 5  screenshots', async () => {  
        await(await HomePage.Scroll5).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-05', { /* some options */ })).toEqual(0);
    });
    //===================================================hairnBeauty page section 6 ================================================
    it('should save  hairnBeauty page section 6 screenshots', async () => {
        await(await HomePage.Scroll6).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-06', { });
    }); 
    it('should compare hairnBeauty page section 6  screenshots', async () => {               
        await(await HomePage.Scroll6).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-06', { /* some options */ })).toEqual(0);
    });
//===================================================hairnBeauty page section 7 ================================================
    it('should save  hairnBeauty page section 7 screenshots', async () => {               
        await(await HomePage.Scroll7).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-07', { });
    }); 
    it('should compare hairnBeauty page section 7  screenshots', async () => {               
        await(await HomePage.Scroll7).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-07', { /* some options */ })).toEqual(0);
    });
//===================================================hairnBeauty page section 8 ================================================
    it('should save  hairnBeauty page section 8 screenshots', async () => {                
        await(await HomePage.Scroll8).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-08', { });
    }); 
    it('should compare hairnBeauty page section 8  screenshots', async () => {
        await(await HomePage.Scroll8).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-08', { /* some options */ })).toEqual(0);
    });
//===================================================hairnBeauty page section 9 ================================================
    it('should save  hairnBeauty page section 9 screenshots', async () => {              
        await(await HomePage.Scroll9).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-09', { });
    }); 
    it('should compare hairnBeauty page section 9  screenshots', async () => {               
        await(await HomePage.Scroll9).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-09', { /* some options */ })).toEqual(0);
    });
//===================================================hairnBeauty page section 10 ================================================
    it('should save  hairnBeauty page section 10 screenshots', async () => {
        await(await HomePage.hairnBeautyScroll10).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-10', { });
    }); 
    it('should compare hairnBeauty page section 10  screenshots', async () => {                 
        await(await HomePage.hairnBeautyScroll10).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-10', { /* some options */ })).toEqual(0);
    });
//===================================================hairnBeauty page section 11 ================================================
    it('should save  hairnBeauty page section 11 screenshots', async () => {                
        await(await HomePage.hairnBeautyScroll11).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-11', { });
    }); 
    it('should compare  page section 11  screenshots', async () => {               
        await(await HomePage.hairnBeautyScroll11).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-11', { /* some options */ })).toEqual(0);
    });

//=================================================== page section 12 ================================================
    it('should save   page section 12 screenshots', async () => {               
        await(await HomePage.hairnBeautyScroll12).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-12', { });
    }); 
    it('should compare  page section 12  screenshots', async () => {               
        await(await HomePage.hairnBeautyScroll12).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-12', { /* some options */ })).toEqual(0);
    });
    //=================================================== page section 13 ================================================
    it('should save   page section 13 screenshots', async () => {                
        await(await HomePage.hairnBeautyScroll13).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-13', { });
    }); 
    it('should compare  page section 13  screenshots', async () => {               
        await(await HomePage.hairnBeautyScroll13).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-13', { /* some options */ })).toEqual(0);
    });
    //=================================================== page section 14 ================================================
    it('should save   page section 14 screenshots', async () => {            
        await(await HomePage.hairnBeautyScroll14).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-14', { });
    }); 
    it('should compare  page section 14  screenshots', async () => {
        
        await(await HomePage.hairnBeautyScroll14).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-14', { /* some options */ })).toEqual(0);
    });
    //=================================================== page section 15 ================================================
    it('should save   page section 15 screenshots', async () => {                
        await(await HomePage.retailScroll15).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-15', { });
    }); 
    it('should compare  page section 15  screenshots', async () => {
        await(await HomePage.retailScroll15).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-15', { /* some options */ })).toEqual(0);
    });
      //===================================================hairnBeauty page section 16 ================================================
    it('should save  hairnBeauty page section 16 screenshots', async () => {              
        await(await HomePage.hairnBeautyScroll16).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-16', { });
    }); 
    it('should compare hairnBeauty page section 16  screenshots', async () => {
        await(await HomePage.hairnBeautyScroll16).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-16', { /* some options */ })).toEqual(0);
    });
      //===================================================hairnBeauty page section 17 ================================================
    it('should save  hairnBeauty page section 17 screenshots', async () => {              
        await(await HomePage.retailScroll17).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await browser.saveScreen('Sol-hairnBeauty-17', { });
    }); 
    it('should compare hairnBeauty page section 17  screenshots', async () => {
        await(await HomePage.retailScroll17).scrollIntoView()
        browser.switchToFrame('iframe1');
        await browser.pause(2000) 
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)
        await expect(await browser.checkScreen('Sol-hairnBeauty-17', { /* some options */ })).toEqual(0);
    });













   


});


