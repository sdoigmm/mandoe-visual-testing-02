const HomePage = require('../pageobjects/home.page');



describe('Terms Of use page', () => {

    beforeEach(async () => {  

        await browser.maximizeWindow()
        await browser.setTimeout({ 'pageLoad': 100000 }) 
        await browser.url('/locations/'); 
        await browser.pause(2000) 
        await(await HomePage.mandoeLogo).moveTo( )  
        await browser.pause(5000) 
        browser.switchToFrame('iframe2');
        await browser.pause(6000)
        await(await HomePage.intercomBtn).moveTo()
        await(await HomePage.intercomBtn).click()
        // await browser.pause(6000)
        // browser.switchToParentFrame();
        
     });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');     
        browser.deleteAllCookies()
        browser.execute('sessionStorage.clear()')
        
       
           
    });



//===================================================locations section 1==============================================================================================================
    it('should save locations  page section 1 screenshots', async () => {  
        await browser.saveScreen('locations-01', { });
    }); 
    it('should compare locations page section 1 screenshots', async () => {  
        await expect(await browser.checkScreen('locations-01', { /* some options */ })).toEqual(0);
    });
//===================================================locations page section 2 ================================================
    it('should save  locations page section 2 screenshots', async () => { 
                             
        await(await HomePage.locationsScroll2).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}) 
        await browser.pause(6000)       
        await browser.saveScreen('locations-02', { });
    }); 
    it('should compare locations page section 2  screenshots', async () => {
       
        await(await HomePage.locationsScroll2).scrollIntoView()  
        await browser.pause(6000)
        await expect(await browser.checkScreen('locations-02', { /* some options */ })).toEqual(0);
    });
//===================================================locations page section 3 ================================================
    it('should save  locations page section 3 screenshots', async () => {     
        await(await HomePage.locationsScroll3).scrollIntoView()
        await browser.pause(6000)    
        await browser.saveScreen('locations-03', { });
    }); 
    it('should compare locations page section 3  screenshots', async () => {                   
        await(await HomePage.locationsScroll3).scrollIntoView() 
        await browser.pause(6000)       
        await expect(await browser.checkScreen('locations-03', { /* some options */ })).toEqual(0);
    });

//===================================================locations page section 4 ================================================
    it('should save  locations page section 4 screenshots', async () => {     
        await(await HomePage.locationsScroll4).scrollIntoView() 
        await browser.pause(6000)     
        await browser.saveScreen('locations-04', { });
    }); 
    it('should compare locations page section 4  screenshots', async () => {                   
        await(await HomePage.locationsScroll4).scrollIntoView() 
        await browser.pause(6000)       
        await expect(await browser.checkScreen('locations-04', { /* some options */ })).toEqual(0);
    });
//===================================================locations page section 5 ================================================
    it('should save  locations page section 5 screenshots', async () => {     
        await(await HomePage.locationsScroll5).scrollIntoView()
        await browser.pause(6000)       
        await browser.saveScreen('locations-05', { });
    }); 
    it('should compare locations page section 5  screenshots', async () => {                   
        await(await HomePage.locationsScroll5).scrollIntoView()
         await browser.pause(6000)    
        await expect(await browser.checkScreen('locations-05', { /* some options */ })).toEqual(0);
    });
  //  ===================================================locations page section 6 ================================================
    it('should save  locations page section 6 screenshots', async () => {     
        await(await HomePage.locationsScroll6).scrollIntoView()  
        await browser.saveScreen('locations-06', { });
    }); 
    it('should compare locations page section 6  screenshots', async () => {                   
        await(await HomePage.locationsScroll6).scrollIntoView()        
        await expect(await browser.checkScreen('locations-06', { /* some options */ })).toEqual(0);
    });
     //===================================================locations page section 7 ================================================
    it('should save  locations page section 7 screenshots', async () => {     
        await(await HomePage.locationsScroll7).scrollIntoView()        
        await browser.saveScreen('locations-07', { });
    }); 
    it('should compare locations page section 7  screenshots', async () => {                   
        await(await HomePage.locationsScroll7).scrollIntoView()       
        await expect(await browser.checkScreen('locations-07', { /* some options */ })).toEqual(0);
    });

     //===================================================locations page section 8 ================================================
    it('should save  locations page section 8 screenshots', async () => {     
        await(await HomePage.locationsScroll8).scrollIntoView()    
        await browser.saveScreen('locations-08', { });
    }); 
    it('should compare locations page section 8  screenshots', async () => {                   
        await(await HomePage.locationsScroll8).scrollIntoView()        
        await expect(await browser.checkScreen('locations-08', { /* some options */ })).toEqual(0);
    });

     //===================================================locations page section 9 ================================================
    it('should save  locations page section 9 screenshots', async () => {     
        await(await HomePage.locationsScroll9).scrollIntoView()     
        await browser.saveScreen('locations-09', { });
    }); 
    it('should compare locations page section 9  screenshots', async () => {                   
        await(await HomePage.locationsScroll9).scrollIntoView()       
        await expect(await browser.checkScreen('locations-09', { /* some options */ })).toEqual(0);
    });
     //===================================================locations page section 10 ================================================
    it('should save  locations page section 10 screenshots', async () => {     
        await(await HomePage.locationsScroll10).scrollIntoView()       
        await browser.saveScreen('locations-10', { });
    }); 
    it('should compare locations page section 10  screenshots', async () => {                   
        await(await HomePage.locationsScroll10).scrollIntoView()     
        await expect(await browser.checkScreen('locations-10', { /* some options */ })).toEqual(0);
    });

//    //===================================================locations page section 11 ================================================
//     it('should save  locations page section 11 screenshots', async () => {     
//         await(await HomePage.locationsScroll11).scrollIntoView()   
//         await browser.saveScreen('locations-11', { });
//     }); 
//     it('should compare locations page section 11  screenshots', async () => {                   
//         await(await HomePage.locationsScroll11).scrollIntoView()    
//         await expect(await browser.checkScreen('locations-11', { /* some options */ })).toEqual(0);
//     });
//      //===================================================locations page section 12 ================================================
//     it('should save  locations page section 12 screenshots', async () => {     
//         await(await HomePage.locationsScroll12).scrollIntoView()        
//         await browser.saveScreen('locations-12', { });
//     }); 
//     it('should compare locations page section 12  screenshots', async () => {                   
//         await(await HomePage.locationsScroll12).scrollIntoView()      
//         await expect(await browser.checkScreen('locations-12', { /* some options */ })).toEqual(0);
//     });

//    //===================================================locations page section 13 ================================================
//     it('should save  locations page section 13 screenshots', async () => {     
//         await(await HomePage.locationsScroll13).scrollIntoView()        
//         await browser.saveScreen('locations-13', { });
//     }); 
//     it('should compare locations page section 13  screenshots', async () => {                   
//         await(await HomePage.locationsScroll13).scrollIntoView()      
//         await expect(await browser.checkScreen('locations-13', { /* some options */ })).toEqual(0);
//     });

//  //===================================================locations page section 14 ================================================
//     it('should save  locations page section 14 screenshots', async () => {     
//         await(await HomePage.locationsScroll14).scrollIntoView()        
//         await browser.saveScreen('locations-14', { });
//     }); 
//     it('should compare locations page section 14  screenshots', async () => {                   
//         await(await HomePage.locationsScroll14).scrollIntoView()      
//         await expect(await browser.checkScreen('locations-14', { /* some options */ })).toEqual(0);
//     });
//  //===================================================locations page section 15 ================================================
//     it('should save  locations page section 15 screenshots', async () => {     
//         await(await HomePage.locationsScroll15).scrollIntoView()
        
//         await browser.saveScreen('locations-15', { });
//     }); 
//     it('should compare locations page section 15  screenshots', async () => {                   
//         await(await HomePage.locationsScroll15).scrollIntoView()      
//         await expect(await browser.checkScreen('locations-15', { /* some options */ })).toEqual(0);
//     });

//  //===================================================locations page section 16 ================================================
//     it('should save  locations page section 16 screenshots', async () => {     
//         await(await HomePage.locationsScroll16).scrollIntoView()        
//         await browser.saveScreen('locations-16', { });
//     }); 
//     it('should compare locations page section 16  screenshots', async () => {                   
//         await(await HomePage.locationsScroll16).scrollIntoView()
      
//         await expect(await browser.checkScreen('locations-16', { /* some options */ })).toEqual(0);
//     });
//     //===================================================locations page section 17 ================================================
//     it('should save  locations page section 17 screenshots', async () => {     
//         await(await HomePage.locationsScroll17).scrollIntoView()
        
//         await browser.saveScreen('locations-17', { });
//     }); 
//     it('should compare locations page section 17  screenshots', async () => {                   
//         await(await HomePage.locationsScroll17).scrollIntoView()
      
//         await expect(await browser.checkScreen('locations-17', { /* some options */ })).toEqual(0);
//     });
//      //===================================================locations page section 18 ================================================
//     it('should save  locations page section 18 screenshots', async () => {     
//         await(await HomePage.locationsScroll18).scrollIntoView()
        
//         await browser.saveScreen('locations-18', { });
//     }); 
//     it('should compare locations page section 18  screenshots', async () => {                   
//         await(await HomePage.locationsScroll18).scrollIntoView()
      
//         await expect(await browser.checkScreen('locations-18', { /* some options */ })).toEqual(0);
//     });
//      //===================================================locations page section 19 ================================================
//     it('should save  locations page section 19 screenshots', async () => {     
//         await(await HomePage.locationsScroll19).scrollIntoView()        
//         await browser.saveScreen('locations-19', { });
//     }); 
//     it('should compare locations page section 19  screenshots', async () => {                   
//         await(await HomePage.locationsScroll19).scrollIntoView()      
//         await expect(await browser.checkScreen('locations-19', { /* some options */ })).toEqual(0);
//     });
//      //===================================================locations page section 20 ================================================
//     it('should save  locations page section 20 screenshots', async () => {     
//         await(await HomePage.locationsScroll20).scrollIntoView()        
//         await browser.saveScreen('locations-20', { });
//     }); 
//     it('should compare locations page section 20  screenshots', async () => {                   
//         await(await HomePage.locationsScroll20).scrollIntoView()      
//         await expect(await browser.checkScreen('locations-20', { /* some options */ })).toEqual(0);
//     });

//      //===================================================locations page section 21 ================================================
//     it('should save  locations page section 21 screenshots', async () => {     
//         await(await HomePage.locationsScroll21).scrollIntoView()        
//         await browser.saveScreen('locations-21', { });
//     }); 
//     it('should compare locations page section 21  screenshots', async () => {                   
//         await(await HomePage.locationsScroll21).scrollIntoView()      
//         await expect(await browser.checkScreen('locations-21', { /* some options */ })).toEqual(0);
//     });
//        //===================================================locations page section 22 ================================================
//     it('should save  locations page section 22 screenshots', async () => {     
//         await(await HomePage.locationsScroll22).scrollIntoView()        
//         await browser.saveScreen('locations-22', { });
//     }); 
//     it('should compare locations page section 22  screenshots', async () => {                   
//         await(await HomePage.locationsScroll22).scrollIntoView()      
//         await expect(await browser.checkScreen('locations-22', { /* some options */ })).toEqual(0);
//     });

//        //===================================================locations page section 23 ================================================
//     it('should save  locations page section 23 screenshots', async () => {     
//         await(await HomePage.locationsScroll23).scrollIntoView()        
//         await browser.saveScreen('locations-23', { });
//     }); 
//     it('should compare locations page section 23  screenshots', async () => {                   
//         await(await HomePage.locationsScroll23).scrollIntoView()      
//         await expect(await browser.checkScreen('locations-23', { /* some options */ })).toEqual(0);
//     });
//    //===================================================locations page section 24 ================================================
//     it('should save  locations page section 24 screenshots', async () => {     
//         await(await HomePage.locationsScroll24).scrollIntoView()        
//         await browser.saveScreen('locations-24', { });
//     }); 
//     it('should compare locations page section 24  screenshots', async () => {                   
//         await(await HomePage.locationsScroll24).scrollIntoView()      
//         await expect(await browser.checkScreen('locations-24', { /* some options */ })).toEqual(0);
//     });

//        //===================================================locations page section 25 ================================================
//     it('should save  locations page section 25 screenshots', async () => {     
//         await(await HomePage.locationsScroll25).scrollIntoView()        
//         await browser.saveScreen('locations-25', { });
//     }); 
//     it('should compare locations page section 25  screenshots', async () => {                   
//         await(await HomePage.locationsScroll25).scrollIntoView()      
//         await expect(await browser.checkScreen('locations-25', { /* some options */ })).toEqual(0);
//     });
//        //===================================================locations page section 26 ================================================
//     it('should save  locations page section 26 screenshots', async () => {     
//         await(await HomePage.locationsScroll26).scrollIntoView()        
//         await browser.saveScreen('locations-26', { });
//     }); 
//     it('should compare locations page section 26  screenshots', async () => {                   
//         await(await HomePage.locationsScroll26).scrollIntoView()      
//         await expect(await browser.checkScreen('locations-26', { /* some options */ })).toEqual(0);
//     });

//    //===================================================locations page section 27 ================================================
//     it('should save  locations page section 27 screenshots', async () => {     
//         await(await HomePage.locationsScroll27).scrollIntoView()        
//         await browser.saveScreen('locations-27', { });
//     }); 
//     it('should compare locations page section 27  screenshots', async () => {                   
//         await(await HomePage.locationsScroll27).scrollIntoView()      
//         await expect(await browser.checkScreen('locations-27', { /* some options */ })).toEqual(0);
//     });
//    //===================================================locations page section 28 ================================================
//     it('should save  locations page section 28 screenshots', async () => {     
//         await(await HomePage.locationsScroll28).scrollIntoView()        
//         await browser.saveScreen('locations-28', { });
//     }); 
//     it('should compare locations page section 28  screenshots', async () => {                   
//         await(await HomePage.locationsScroll28).scrollIntoView()      
//         await expect(await browser.checkScreen('locations-28', { /* some options */ })).toEqual(0);
//     });

//    //===================================================locations page section 29 ================================================
//     it('should save  locations page section 29 screenshots', async () => {     
//         await(await HomePage.locationsScroll29).scrollIntoView()        
//         await browser.saveScreen('locations-29', { });
//     }); 
//     it('should compare locations page section 29  screenshots', async () => {                   
//         await(await HomePage.locationsScroll29).scrollIntoView()      
//         await expect(await browser.checkScreen('locations-29', { /* some options */ })).toEqual(0);
//     });
//    //===================================================locations page section 30 ================================================
//     it('should save  locations page section 30 screenshots', async () => {     
//         await(await HomePage.locationsScroll30).scrollIntoView()        
//         await browser.saveScreen('locations-30', { });
//     }); 
//     it('should compare locations page section 30  screenshots', async () => {                   
//         await(await HomePage.locationsScroll30).scrollIntoView()      
//         await expect(await browser.checkScreen('locations-30', { /* some options */ })).toEqual(0);
//     });






});