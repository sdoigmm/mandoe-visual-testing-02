const HomePage = require('../pageobjects/home.page');



describe('Products Blogs food sustainability page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()  
        await browser.setTimeout({ 'pageLoad': 100000 })       
        await browser.url('/blog/elements-and-templates-food-sustainability/');
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

    // //===================================================foodBlog page secton 1==============================================================================================================
    // it('should save foodBlog-retail  page section 1 screenshots', async () => { 
    //     await browser.pause(3000)
    //     await(await HomePage.mandoeLogo).moveTo()
    //     await browser.saveFullPageScreen('foodBlog-01', { });
    // }); 
    // it('should compare foodBlog page section 1 screenshots', async () => {  
    //     await expect(await browser.checkFullPageScreen('foodBlog-01', { /* some options */ })).toEqual(0);
    // });

 //===================================================foodBlog page secton 1==============================================================================================================
    it('should save foodBlog-retail  page section 1 screenshots', async () => { 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()
        await browser.saveScreen('foodBlog-01', { });
    }); 
    it('should compare foodBlog page section 1 screenshots', async () => {  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()
        await expect(await browser.checkScreen('foodBlog-01', { /* some options */ })).toEqual(0);
    });
//===================================================foodBlog page section 2 ================================================
    it('should save  foodBlog page section 2 screenshots', async () => {                        
        await(await HomePage.foodBlogScroll2).scrollIntoView()
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()
        await browser.saveScreen('foodBlog-02', { });
    }); 
    it('should compare foodBlog page section 2  screenshots', async () => {
        await(await HomePage.foodBlogScroll2).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()      
        await expect(await browser.checkScreen('foodBlog-02', { /* some options */ })).toEqual(0);
    });
//===================================================foodBlog page section 3 ================================================
    it('should save  foodBlog page section 3 screenshots', async () => {
        await(await HomePage.foodBlogScroll3).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()      
        await browser.saveScreen('foodBlog-03', { });
    }); 
    it('should compare foodBlog page section 3  screenshots', async () => {                
        await(await HomePage.foodBlogScroll3).scrollIntoView()  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()      
        await expect(await browser.checkScreen('foodBlog-03', { /* some options */ })).toEqual(0);
    });
//===================================================foodBlog page section 4 ================================================
    it('should save  foodBlog page section 4 screenshots', async () => {                 
        await(await HomePage.foodBlogScroll4).scrollIntoView()  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()   
        await browser.saveScreen('foodBlog-04', { });
    }); 
    it('should compare foodBlog page section 4  screenshots', async () => {
        await(await HomePage.foodBlogScroll4).scrollIntoView()   
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()    
        await expect(await browser.checkScreen('foodBlog-04', { /* some options */ })).toEqual(0);
    });
    //===================================================foodBlog page section 5 ================================================
    it('should save  foodBlog page section 5 screenshots', async () => {                 
        await(await HomePage.foodBlogScroll5).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()    
        await browser.saveScreen('foodBlog-05', { });
    }); 
    it('should compare foodBlog page section 5  screenshots', async () => {
        await(await HomePage.foodBlogScroll5).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()       
        await expect(await browser.checkScreen('foodBlog-05', { /* some options */ })).toEqual(0);
    });
    //===================================================foodBlog page section 6 ================================================
    it('should save  foodBlog page section 6 screenshots', async () => {
        await(await HomePage.foodBlogScroll6).scrollIntoView()
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()        
        await browser.saveScreen('foodBlog-06', { });
    }); 
    it('should compare foodBlog page section 6  screenshots', async () => {                
        await(await HomePage.foodBlogScroll6).scrollIntoView()  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()     
        await expect(await browser.checkScreen('foodBlog-06', { /* some options */ })).toEqual(0);
    });
//===================================================foodBlog page section 7 ================================================
    it('should save  foodBlog page section 7 screenshots', async () => {               
        await(await HomePage.foodBlogScroll7).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()      
        await browser.saveScreen('foodBlog-07', { });
    }); 
    it('should compare foodBlog page section 7  screenshots', async () => {                
        await(await HomePage.foodBlogScroll7).scrollIntoView() 
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()
        await expect(await browser.checkScreen('foodBlog-07', { /* some options */ })).toEqual(0);
    });
//===================================================foodBlog page section 8 ================================================
    it('should save  foodBlog page section 8 screenshots', async () => {                
        await(await HomePage.foodBlogScroll8).scrollIntoView()   
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()     
        await browser.saveScreen('foodBlog-08', { });
    }); 
    it('should compare foodBlog page section 8  screenshots', async () => {
        await(await HomePage.foodBlogScroll8).scrollIntoView()  
        await browser.pause(3000)
        await(await HomePage.mandoeLogo).moveTo()    
        await expect(await browser.checkScreen('foodBlog-08', { /* some options */ })).toEqual(0);
    });











   


});