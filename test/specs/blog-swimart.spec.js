const HomePage = require('../pageobjects/home.page');



describe('blog-swimart page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 })  
        await browser.url('/blog/customer-story-swimart/');
        await browser.pause(2000)         
        await(await HomePage.mandoeLogo).moveTo() 
        await browser.pause(10000)   
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

// //  //===================================================swimartBlog page secton 1==============================================================================================================
//     it('should save swimartBlog-retail  page section 1 screenshots', async () => { 
 
//         await browser.saveFullPageScreen('swimartBlog-01', { });
//     }); 
//     it('should compare swimartBlog page section 1 screenshots', async () => {  
         
//         await expect(await browser.checkFullPageScreen('swimartBlog-01', { /* some options */ })).toEqual(0);
//     });

 //===================================================swimartBlog page secton 1==============================================================================================================
    it('should save swimartBlog-retail  page section 1 screenshots', async () => { 
        await(await HomePage.mandoeLogo).moveTo()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await browser.saveScreen('swimartBlog-01', { });
    }); 
    it('should compare swimartBlog page section 1 screenshots', async () => { 
        await(await HomePage.mandoeLogo).moveTo()
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000) 
        await expect(await browser.checkScreen('swimartBlog-01', { /* some options */ })).toEqual(0);
    });
//===================================================swimartBlog page section 2 ================================================
    it('should save  swimartBlog page section 2 screenshots', async () => { 
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll2).scrollIntoView()
        await browser.setTimeout({ 'pageLoad': 800000 })  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await browser.saveScreen('swimartBlog-02', { });
    }); 
    it('should compare swimartBlog page section 2  screenshots', async () => {
       
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll2).scrollIntoView() 
        await browser.setTimeout({ 'pageLoad': 800000 })  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await expect(await browser.checkScreen('swimartBlog-02', { /* some options */ })).toEqual(0);
    });
//===================================================swimartBlog page section 3 ================================================
    it('should save  swimartBlog page section 3 screenshots', async () => {
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll3).scrollIntoView() 
        await browser.setTimeout({ 'pageLoad': 800000 })   
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await browser.saveScreen('swimartBlog-03', { });
    }); 
    it('should compare swimartBlog page section 3  screenshots', async () => { 
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll3).scrollIntoView() 
        await browser.setTimeout({ 'pageLoad': 800000 })  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)      
        await expect(await browser.checkScreen('swimartBlog-03', { /* some options */ })).toEqual(0);
    });
//===================================================swimartBlog page section 4 ================================================
    it('should save  swimartBlog page section 4 screenshots', async () => {   
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll4).scrollIntoView() 
        await browser.setTimeout({ 'pageLoad': 800000 })  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await browser.saveScreen('swimartBlog-04', { });
    }); 
    it('should compare swimartBlog page section 4  screenshots', async () => {
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll4).scrollIntoView() 
        await browser.setTimeout({ 'pageLoad': 800000 })  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await expect(await browser.checkScreen('swimartBlog-04', { /* some options */ })).toEqual(0);
    });
    //===================================================swimartBlog page section 5 ================================================
    it('should save  swimartBlog page section 5 screenshots', async () => {  
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll5).scrollIntoView()
        await browser.setTimeout({ 'pageLoad': 800000 })    
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await browser.saveScreen('swimartBlog-05', { });
    }); 
    it('should compare swimartBlog page section 5  screenshots', async () => {
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll5).scrollIntoView()
        await browser.setTimeout({ 'pageLoad': 800000 })   
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await expect(await browser.checkScreen('swimartBlog-05', { /* some options */ })).toEqual(0);
    });
    //===================================================swimartBlog page section 6 ================================================
    it('should save  swimartBlog page section 6 screenshots', async () => {
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll6).scrollIntoView() 
        await browser.setTimeout({ 'pageLoad': 800000 })   
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await browser.saveScreen('swimartBlog-06', { });
    }); 
    it('should compare swimartBlog page section 6  screenshots', async () => { 
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll6).scrollIntoView() 
        await browser.setTimeout({ 'pageLoad': 800000 })  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await expect(await browser.checkScreen('swimartBlog-06', { /* some options */ })).toEqual(0);
    });
//===================================================swimartBlog page section 7 ================================================
    it('should save  swimartBlog page section 7 screenshots', async () => {               
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll7).scrollIntoView()
        await browser.setTimeout({ 'pageLoad': 800000 })   
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await browser.saveScreen('swimartBlog-07', { });
    }); 
    it('should compare swimartBlog page section 7  screenshots', async () => { 
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll7).scrollIntoView()
        await browser.setTimeout({ 'pageLoad': 800000 })   
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await expect(await browser.checkScreen('swimartBlog-07', { /* some options */ })).toEqual(0);
    });
//===================================================swimartBlog page section 8 ================================================
    it('should save  swimartBlog page section 8 screenshots', async () => {                
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll8).scrollIntoView()
        await browser.setTimeout({ 'pageLoad': 800000 })    
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await browser.saveScreen('swimartBlog-08', { });
    }); 
    it('should compare swimartBlog page section 8  screenshots', async () => {
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll8).scrollIntoView()
        await browser.setTimeout({ 'pageLoad': 800000 })   
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await expect(await browser.checkScreen('swimartBlog-08', { /* some options */ })).toEqual(0);
    });
//===================================================swimartBlog page section 9 ================================================
    it('should save  swimartBlog page section 9 screenshots', async () => {                   
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll9).scrollIntoView() 
        await browser.setTimeout({ 'pageLoad': 800000 })  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await browser.saveScreen('swimartBlog-09', { });
    }); 
    it('should compare swimartBlog page section 9  screenshots', async () => { 
        await(await HomePage.mandoeLogo).moveTo() 
        await(await HomePage.swimartBlogScroll9).scrollIntoView()
        await browser.setTimeout({ 'pageLoad': 800000 })     
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await expect(await browser.checkScreen('swimartBlog-09', { /* some options */ })).toEqual(0);
    });
//===================================================swimartBlog page section 10 ================================================
    it('should save  swimartBlog page section 10 screenshots', async () => {
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll10).scrollIntoView()
        await browser.setTimeout({ 'pageLoad': 800000 })  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await browser.saveScreen('swimartBlog-10', { });
    }); 
    it('should compare swimartBlog page section 10  screenshots', async () => {
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll10).scrollIntoView()
        await browser.setTimeout({ 'pageLoad': 800000 })   
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await expect(await browser.checkScreen('swimartBlog-10', { /* some options */ })).toEqual(0);
    });
//===================================================swimartBlog page section 11 ================================================
    it('should save  swimartBlog page section 11 screenshots', async () => {                
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll11).scrollIntoView() 
        await browser.setTimeout({ 'pageLoad': 800000 })  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await browser.saveScreen('swimartBlog-11', { });
    }); 
    it('should compare swimartBlog page section 11  screenshots', async () => { 
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll11).scrollIntoView() 
        await browser.setTimeout({ 'pageLoad': 800000 })   
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await expect(await browser.checkScreen('swimartBlog-11', { /* some options */ })).toEqual(0);
    });

//===================================================swimartBlog page section 12 ================================================
    it('should save  swimartBlog page section 12 screenshots', async () => {               
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll12).scrollIntoView()
        await browser.setTimeout({ 'pageLoad': 800000 })   
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)    
        await browser.saveScreen('swimartBlog-12', { });
    }); 
    it('should compare swimartBlog page section 12  screenshots', async () => {  
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll12).scrollIntoView()
        await browser.setTimeout({ 'pageLoad': 800000 })   
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)  
        await expect(await browser.checkScreen('swimartBlog-12', { /* some options */ })).toEqual(0);
    });
    //===================================================swimartBlog page section 13 ================================================
    it('should save  swimartBlog page section 13 screenshots', async () => {                
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll13).scrollIntoView()
        await browser.setTimeout({ 'pageLoad': 800000 })  
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)     
        await browser.saveScreen('swimartBlog-13', { });
    }); 
    it('should compare swimartBlog page section 13  screenshots', async () => {  
        await(await HomePage.mandoeLogo).moveTo()
        await(await HomePage.swimartBlogScroll13).scrollIntoView() 
        await browser.setTimeout({ 'pageLoad': 800000 })   
        browser.switchToFrame('iframe1');
        await(await HomePage.intercomBtn).waitForDisplayed({timeout:600000})
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).doubleClick()
        await browser.pause(3000)   
        await expect(await browser.checkScreen('swimartBlog-13', { /* some options */ })).toEqual(0);
    });










   


});