const HomePage = require('../pageobjects/home.page');



describe(' PrivacyPolicy page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 800000 }) 
        await browser.url('/privacypolicy/');        
        await browser.pause(2000)         
        await(await HomePage.mandoeLogo).moveTo()    
        await(await HomePage.locationtxt).waitForDisplayed({timeout:9000000000})
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



//===================================================privacyPolicy section 1==============================================================================================================
    it('should save privacyPolicy  page section 1 screenshots', async () => {  
        await browser.saveScreen('privacyPolicy-01', { });
    }); 
    it('should compare privacyPolicy page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('privacyPolicy-01', { /* some options */ })).toEqual(0);
    });
//===================================================privacyPolicy page section 2 ================================================
    it('should save  privacyPolicy page section 2 screenshots', async () => {                        
        await(await HomePage.privacyPolicyScroll2).scrollIntoView()      
        await browser.saveScreen('privacyPolicy-02', { });
    }); 
    it('should compare privacyPolicy page section 2  screenshots', async () => {
        await(await HomePage.privacyPolicyScroll2).scrollIntoView()      
        await expect(await browser.checkScreen('privacyPolicy-02', { /* some options */ })).toEqual(0);
    });
//===================================================privacyPolicy page section 3 ================================================
    it('should save  privacyPolicy page section 3 screenshots', async () => {     
        await(await HomePage.privacyPolicyScroll3).scrollIntoView()      
        await browser.saveScreen('privacyPolicy-03', { });
    }); 
    it('should compare privacyPolicy page section 3  screenshots', async () => {                   
        await(await HomePage.privacyPolicyScroll3).scrollIntoView()      
        await expect(await browser.checkScreen('privacyPolicy-03', { /* some options */ })).toEqual(0);
    });

//===================================================privacyPolicy page section 4 ================================================
    it('should save  privacyPolicy page section 4 screenshots', async () => {     
        await(await HomePage.privacyPolicyScroll4).scrollIntoView()      
        await browser.saveScreen('privacyPolicy-04', { });
    }); 
    it('should compare privacyPolicy page section 4  screenshots', async () => {                   
        await(await HomePage.privacyPolicyScroll4).scrollIntoView()      
        await expect(await browser.checkScreen('privacyPolicy-04', { /* some options */ })).toEqual(0);
    });
//===================================================privacyPolicy page section 5 ================================================
    it('should save  privacyPolicy page section 5 screenshots', async () => {     
        await(await HomePage.privacyPolicyScroll5).scrollIntoView()      
        await browser.saveScreen('privacyPolicy-05', { });
    }); 
    it('should compare privacyPolicy page section 5  screenshots', async () => {                   
        await(await HomePage.privacyPolicyScroll5).scrollIntoView()
      
        await expect(await browser.checkScreen('privacyPolicy-05', { /* some options */ })).toEqual(0);
    });
        //===================================================privacyPolicy page section 6 ================================================
        it('should save  privacyPolicy page section 6 screenshots', async () => {     
            await(await HomePage.privacyPolicyScroll6).scrollIntoView()      
            await browser.saveScreen('privacyPolicy-06', { });
        }); 
        it('should compare privacyPolicy page section 6  screenshots', async () => {                   
            await(await HomePage.privacyPolicyScroll6).scrollIntoView()      
            await expect(await browser.checkScreen('privacyPolicy-06', { /* some options */ })).toEqual(0);
        });
    
        //===================================================privacyPolicy page section 7 ================================================
        it('should save  privacyPolicy page section 7 screenshots', async () => {     
            await(await HomePage.privacyPolicyScroll7).scrollIntoView()      
            await browser.saveScreen('privacyPolicy-07', { });
        }); 
        it('should compare privacyPolicy page section 7  screenshots', async () => {                   
            await(await HomePage.privacyPolicyScroll7).scrollIntoView()      
            await expect(await browser.checkScreen('privacyPolicy-07', { /* some options */ })).toEqual(0);
        });
        //===================================================privacyPolicy page section 8 ================================================
        it('should save  privacyPolicy page section 8 screenshots', async () => {     
            await(await HomePage.privacyPolicyScroll8).scrollIntoView()      
            await browser.saveScreen('privacyPolicy-08', { });
        }); 
        it('should compare privacyPolicy page section 8  screenshots', async () => {                   
            await(await HomePage.privacyPolicyScroll8).scrollIntoView()      
            await expect(await browser.checkScreen('privacyPolicy-08', { /* some options */ })).toEqual(0);
        });
     //===================================================privacyPolicy page section 9 ================================================
        it('should save  privacyPolicy page section 9 screenshots', async () => {     
            await(await HomePage.privacyPolicyScroll9).scrollIntoView()      
            await browser.saveScreen('privacyPolicy-09', { });
        }); 
        it('should compare privacyPolicy page section 9  screenshots', async () => {                   
            await(await HomePage.privacyPolicyScroll9).scrollIntoView()      
            await expect(await browser.checkScreen('privacyPolicy-09', { /* some options */ })).toEqual(0);
        });
     //===================================================privacyPolicy page section 10 ================================================
        it('should save  privacyPolicy page section 10 screenshots', async () => {     
            await(await HomePage.privacyPolicyScroll10).scrollIntoView()      
            await browser.saveScreen('privacyPolicy-10', { });
        }); 
        it('should compare privacyPolicy page section 10  screenshots', async () => {                   
            await(await HomePage.privacyPolicyScroll10).scrollIntoView()      
            await expect(await browser.checkScreen('privacyPolicy-10', { /* some options */ })).toEqual(0);
        });








   


});


