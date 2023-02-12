const HomePage = require('../pageobjects/home.page');



describe('Blog  page snapshots', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/blog/'); 
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












//===================================================blog page==============================================================================================================
    it('should save blog  page section 1 screenshots', async () => { 
        await browser.pause(2000)      
        await browser.saveScreen('blog-01', { });
        
    }); 
    it('should compare blog page section 1 screenshots', async () => {  
        await browser.pause(2000)   
        await expect(await browser.checkScreen('blog-01', { /* some options */ })).toEqual(0);
    });
//===================================================blog page section 2 ================================================
    it('should save  blog page section 2 screenshots', async () => {                        
        await(await HomePage.blogScroll2).scrollIntoView()  
        await browser.pause(2000)         
        await browser.saveScreen('blog-02', { });
    }); 
    it('should compare blog page section 2  screenshots', async () => {
        await(await HomePage.blogScroll2).scrollIntoView()  
        await browser.pause(2000)          
        await expect(await browser.checkScreen('blog-02', { /* some options */ })).toEqual(0);
    });
//===================================================blog page section 3 ================================================
    it('should save  blog page section 3 screenshots', async () => {
        await(await HomePage.blogScroll3).scrollIntoView()   
        await browser.pause(2000)         
        await browser.saveScreen('blog-03', { });
    }); 
    it('should compare blog page section 3  screenshots', async () => {                  
        await(await HomePage.blogScroll3).scrollIntoView()   
        await browser.pause(2000)         
        await expect(await browser.checkScreen('blog-03', { /* some options */ })).toEqual(0);
    });
//===================================================blog page section 4 ================================================
    it('should save  blog page section 4 screenshots', async () => {                                 
        await(await HomePage.blogScroll4).scrollIntoView() 
        await browser.pause(2000)            
        await browser.saveScreen('blog-04', { });
    }); 
    it('should compare blog page section 4  screenshots', async () => {      
        await(await HomePage.blogScroll4).scrollIntoView()  
        await browser.pause(2000)            
        await expect(await browser.checkScreen('blog-04', { /* some options */ })).toEqual(0);
    });
    
//===================================================blog page section 5 ================================================
    it('should save  blog page section 5 screenshots', async () => {                                 
        await(await HomePage.blogScroll5).scrollIntoView()   
        await browser.pause(2000)        
        await browser.saveScreen('blog-05', { });
    }); 
    it('should compare blog page section 5  screenshots', async () => {      
        await(await HomePage.blogScroll5).scrollIntoView()  
        await browser.pause(2000)            
        await expect(await browser.checkScreen('blog-05', { /* some options */ })).toEqual(0);
    });
    //===================================================blog page section 6 ================================================
    it('should save  blog page section 6 screenshots', async () => {                                 
        await(await HomePage.blogScroll6).scrollIntoView()
        await browser.pause(2000)          
        await browser.saveScreen('blog-06', { });
    }); 
    it('should compare blog page section 6  screenshots', async () => {      
        await(await HomePage.blogScroll6).scrollIntoView() 
        await browser.pause(2000)          
        await expect(await browser.checkScreen('blog-06', { /* some options */ })).toEqual(0);
    });

   //===================================================blog page section 7 ================================================
    it('should save  blog page section 7 screenshots', async () => {                                 
        await(await HomePage.blogScroll7).scrollIntoView()
        await browser.pause(2000)           
        await browser.saveScreen('blog-07', { });
    }); 
    it('should compare blog page section 7  screenshots', async () => {      
        await(await HomePage.blogScroll7).scrollIntoView()  
        await browser.pause(2000)        
        await expect(await browser.checkScreen('blog-07', { /* some options */ })).toEqual(0);
    });
     //===================================================blog page section 8 ================================================
    it('should save  blog page section 8 screenshots', async () => {                                 
        await(await HomePage.blogScroll8).scrollIntoView()
        await browser.pause(2000)          
        await browser.saveScreen('blog-08', { });
    }); 
    it('should compare blog page section 8  screenshots', async () => {      
        await(await HomePage.blogScroll8).scrollIntoView()
        await browser.pause(2000)        
        await expect(await browser.checkScreen('blog-08', { /* some options */ })).toEqual(0);
    });










   


});


