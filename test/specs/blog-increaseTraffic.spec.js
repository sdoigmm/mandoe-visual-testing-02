const HomePage = require('../pageobjects/home.page');



describe(' Blog- How to increase your foot traffic and boost your sales ', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow() 
        await browser.setTimeout({ 'pageLoad': 100000 }) 
        await browser.url('/blog/how-to-increase-foot-traffic-to-your-store-and-boost-sales/');   
        await browser.pause(2000)
        await(await HomePage.mandoeLogo).waitForDisplayed({timeout:120000})  
        await(await HomePage.mandoeLogo).moveTo() 
        await browser.pause(100) 
        await(await HomePage.locationimg).waitForDisplayed({timeout:120000})  
        await(await HomePage.locationimg).moveTo()  
        await(await HomePage.locationtxt).waitForClickable({timeout:120000})
        await browser.pause(1000)
        await(await HomePage.locationtxt).moveTo() 
        await browser.pause(1000)
        await(await HomePage.locationtxt).click()
        await browser.pause(2000)
        await(await HomePage.mandoeLogo).moveTo() 
        await browser.pause(4500)
    
     });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');     
        browser.deleteAllCookies()
        browser.execute('sessionStorage.clear()')
       
       
           
    });

    // //===================================================TrafficBlog page secton 1==============================================================================================================
    // it('should save TrafficBlog-retail  page section 1 screenshots', async () => { 
    //     await browser.pause(3000)
    //     await(await HomePage.mandoeLogo).moveTo()
    //     await browser.saveFullPageScreen('TrafficBlog-01', { });
    // }); 
    // it('should compare TrafficBlog page section 1 screenshots', async () => { 
    //     await browser.refresh() 
    //     await expect(await browser.checkFullPageScreen('TrafficBlog-01', { /* some options */ })).toEqual(0);
    // });

 //===================================================TrafficBlog page secton 1==============================================================================================================
    it('should save TrafficBlog-retail  page section 1 screenshots', async () => { 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()
        await browser.saveScreen('TrafficBlog-01', { });
    }); 
    it('should compare TrafficBlog page section 1 screenshots', async () => { 
        
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()
        await expect(await browser.checkScreen('TrafficBlog-01', { /* some options */ })).toEqual(0);
    });
//===================================================TrafficBlog page section 2 ================================================
    it('should save  TrafficBlog page section 2 screenshots', async () => {  
                           
        await(await HomePage.TrafficBlogScroll2).scrollIntoView()
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()
        await browser.saveScreen('TrafficBlog-02', { });
    }); 
    it('should compare TrafficBlog page section 2  screenshots', async () => {
       
        await(await HomePage.TrafficBlogScroll2).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()      
        await expect(await browser.checkScreen('TrafficBlog-02', { /* some options */ })).toEqual(0);
    });
//===================================================TrafficBlog page section 3 ================================================
    it('should save  TrafficBlog page section 3 screenshots', async () => {
      
        await(await HomePage.TrafficBlogScroll3).scrollIntoView()  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()     
        await browser.saveScreen('TrafficBlog-03', { });
    }); 
    it('should compare TrafficBlog page section 3  screenshots', async () => { 
                
        await(await HomePage.TrafficBlogScroll3).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()       
        await expect(await browser.checkScreen('TrafficBlog-03', { /* some options */ })).toEqual(0);
    });
//===================================================TrafficBlog page section 4 ================================================
    it('should save  TrafficBlog page section 4 screenshots', async () => { 
                    
        await(await HomePage.TrafficBlogScroll4).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()    
        await browser.saveScreen('TrafficBlog-04', { });
    }); 
    it('should compare TrafficBlog page section 4  screenshots', async () => {
        
        await(await HomePage.TrafficBlogScroll4).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()      
        await expect(await browser.checkScreen('TrafficBlog-04', { /* some options */ })).toEqual(0);
    });
    //===================================================TrafficBlog page section 5 ================================================
    it('should save  TrafficBlog page section 5 screenshots', async () => {   
                   
        await(await HomePage.TrafficBlogScroll5).scrollIntoView()  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()   
        await browser.saveScreen('TrafficBlog-05', { });
    }); 
    it('should compare TrafficBlog page section 5  screenshots', async () => {
          
        await(await HomePage.TrafficBlogScroll5).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()       
        await expect(await browser.checkScreen('TrafficBlog-05', { /* some options */ })).toEqual(0);
    });
    //===================================================TrafficBlog page section 6 ================================================
    it('should save  TrafficBlog page section 6 screenshots', async () => {
    
        await(await HomePage.TrafficBlogScroll6).scrollIntoView()  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()      
        await browser.saveScreen('TrafficBlog-06', { });
    }); 
    it('should compare TrafficBlog page section 6  screenshots', async () => {  
                     
        await(await HomePage.TrafficBlogScroll6).scrollIntoView()  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()     
        await expect(await browser.checkScreen('TrafficBlog-06', { /* some options */ })).toEqual(0);
    });
//===================================================TrafficBlog page section 7 ================================================
    it('should save  TrafficBlog page section 7 screenshots', async () => {  
               
        await(await HomePage.TrafficBlogScroll7).scrollIntoView()   
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()    
        await browser.saveScreen('TrafficBlog-07', { });
    }); 
    it('should compare TrafficBlog page section 7  screenshots', async () => { 
                        
        await(await HomePage.TrafficBlogScroll7).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()
        await expect(await browser.checkScreen('TrafficBlog-07', { /* some options */ })).toEqual(0);
    });
//===================================================TrafficBlog page section 8 ================================================
    it('should save  TrafficBlog page section 8 screenshots', async () => {                
        await(await HomePage.TrafficBlogScroll8).scrollIntoView()
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()        
        await browser.saveScreen('TrafficBlog-08', { });
    }); 
    it('should compare TrafficBlog page section 8  screenshots', async () => {
       
        await(await HomePage.TrafficBlogScroll8).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()     
        await expect(await browser.checkScreen('TrafficBlog-08', { /* some options */ })).toEqual(0);
    });

    //===================================================TrafficBlog page section 9 ================================================
    it('should save  TrafficBlog page section 9 screenshots', async () => {                
        await(await HomePage.TrafficBlogScroll9).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()       
        await browser.saveScreen('TrafficBlog-09', { });
    }); 
    it('should compare TrafficBlog page section 9  screenshots', async () => {
           
        await(await HomePage.TrafficBlogScroll9).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()     
        await expect(await browser.checkScreen('TrafficBlog-09', { /* some options */ })).toEqual(0);
    });
    //===================================================TrafficBlog page section 10 ================================================
    it('should save  TrafficBlog page section 10 screenshots', async () => {                
        await(await HomePage.TrafficBlogScroll10).scrollIntoView()
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()
        await browser.saveScreen('TrafficBlog-10', { });
    }); 
    it('should compare TrafficBlog page section 10  screenshots', async () => {
          
        await(await HomePage.TrafficBlogScroll10).scrollIntoView()  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()
        await expect(await browser.checkScreen('TrafficBlog-10', { /* some options */ })).toEqual(0);
    });

    //===================================================TrafficBlog page section 11 ================================================
    it('should save  TrafficBlog page section 11 screenshots', async () => { 
                      
        await(await HomePage.TrafficBlogScroll11).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()
        await browser.saveScreen('TrafficBlog-11', { });
    }); 
    it('should compare TrafficBlog page section 11  screenshots', async () => {
        
          
        await(await HomePage.TrafficBlogScroll11).scrollIntoView()  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()
        await expect(await browser.checkScreen('TrafficBlog-11', { /* some options */ })).toEqual(0);
    });

   







   


});