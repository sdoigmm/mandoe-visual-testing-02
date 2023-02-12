

const Page = require('./page');


class HomePage extends Page {
    
    get locationtclick() {return $("(//div)[239]")}
    get talktoSales(){return $("//a[@class='buttonLink_blueFilled__o04lE']")} 
    get startFreeTrial(){return $("//a[@class='buttonLink_blueFilled__o04lE']")}
    get popUpclick() {return $("//div[@class='spu-container']")} 
   
    get locationtxt () {return $("//div[@class='siteFooter_flagFlex__eaEyZ']/a[3]")} 
    get locationtxt1 () {return $("//div[@class='siteFooter_flagFlex__eaEyZ']/a[2]")}  
    get mandoeTxt () {return $("//h1[contains(text(),'Design your New Improved Digital Signage in Minutes')]")}   
    get intercomMessengerIframe(){return $("//iframe[@title='Intercom live chat']")}
  
    get intercomMesTxt(){return $("//span[contains(text(),'Send us a message')]")}
   
    get intercomBtnSvg(){return $("(//*[name()='svg'][@focusable='false'])[2]")}
    get closeintercom(){return $("//div[@class='intercom-1f2urc1 e4nbtsn3']")}
   
    get intcMsgr(){return $("//div[@aria-label='Open Intercom Messenger']//div[1]")}
    get frame(){return $("#intercom-frame")}
    get intercomBtn(){return $("//iframe[@title='Intercom live chat']")}
   
    get mandoeLogo(){return $("//div[@class='siteHeader_logoWrap__tymZ3']/a/svg")}
    get talkToSalesBtn(){return $("//a[@href='https://mandoemedia.com/contact/sales/']")}
    get productsLnk(){return $("//button[@class='desktopNavigation_headerText__bZrI_']")}
    // get sanboxUrlBtn(){return $(".fl-button[href='https://sandbox.mandoemedia.com/sandbox?template=R2FsbGVyeTovL2dhbGxlcnkvUHVibGljL1RlbXBsYXRlcy9MYW5kc2NhcGUvSG9zcGl0YWxpdHlfQ2FmZS9Ib3NwaXRhbGl0eV9DYWZlXzAxNS50ZW1wbGF0ZQ%3D%3D']")}
//=============================Home page==================================================================


    // get googleRatingTxt(){return $("//div[@class='pp-rating-title mobile-centered']")}
    // get driveFootTxt(){return $("//strong[normalize-space()='Drive foot traffic']")}
    // get dailySalesSection(){return $("//div[@id='section-daily-sales']")}
    // get gaov(){return $("//img[@id='reduce-marketing-costs']")}
    get getStartedTdy(){return $("(//*[name()='svg'][@class='siteFooter_svgBlackMask__6LPbq'])")}
    get talktoSalesFooterBtn(){return $("//a[@href='/contact/sales/'][normalize-space()='Talk to Us']")}
//====================================Features Page ====================================================
    get featuresScroll2(){return $("(//div)[90]")}
    get featuresScroll3(){return $("(//div)[102]")}
    get featuresScroll4(){return $("(//div)[116]")}
    get featuresScroll5(){return $("(//div)[135]")}
    get featuresScroll6(){return $("(//div)[157]")}
    get featuresScroll7(){return $("(//div)[205]")}
    get featuresScroll8(){return $("//p[contains(text(),'See what content played at what times and match it')]")}
    get featuresScroll9(){return $("(//div)[226]")}
    get featuresScroll10(){return $("//div[@class='pp-rating-title']")}
    get featuresScroll11(){return $("//img[@title='Mandoe makes digital Signage Simple']")}
//============================================How it works Page,Hardware and Player software pages ============================================


     get howItworksScroll2(){return $("(//a[@role='button'])[4]")}//step1
     get howItworksScroll3(){return $("//p[normalize-space()='Step 1']")}//step1
     get howItworksScroll4(){return $("//p[normalize-space()='Step 2']")}//step2
     get howItworksScroll5(){return $("(//div)[176]")}//step3
     get howItworksScroll6(){return $("(//div)[201]")}//step4
     get howItworksScroll7(){return $("(//div)[239]")}
     get howItworksScroll8(){return $("(//img[@title='Mandoe makes digital Signage Simple']")}
     get hardwareScroll2(){return $("(//p)[2]")}  
     get hardwareScroll3(){return $("(//img[@title='connect power'])[1]")} 
     get hardwareScroll4(){return $("//img[@title='connect HDMI']")}
     get hardwareScroll5(){return $("(//img[@title='step 3'])[1]")}  
     get hardwareScroll6(){return $("//img[@title='separator']")} 
   
     get hardwareScroll7(){return $("(//div)[223]")} 
     get hardwareScroll8(){return $("(//div)[248]")} 
     get hardwareScroll9(){return $("(//div)[279]")}          
     get playerSoftScroll2(){return $("(//div)[95]")}     
     get  playerSoftScroll3(){return $("//span[normalize-space()='Linux Desktop Player']")}

     get  playerSoftScroll4(){return $("//p[contains(text(),'Take Mandoe for a test drive to see how easy it is')]")}


//============================================ Industries2 Page ==============================================
     get industries2Scroll2(){return $("(//div)[256]")}//hospitality section
     get industries2Scroll3(){return $("//h3[normalize-space()='Clubs']")}//freshfood section
     get industries2Scroll4(){return $("(//div)[321]")}//fitness section
     get  industries2Scroll5(){return $("(//div)[351]")}//health section
     get industries2Scroll6(){return $("(//div)[381]")}//medical section
     get  industries2Scroll7(){return $("(//div)[411]")}//hairnbeauty section
     get  industries2Scroll8(){return $("(//div)[441]")}//retail section
     get  industries2Scroll9(){return $("(//div)[471]")}//corporateHR section
     get  industries2Scroll10(){return $("(//div)[501]")}//realestate section
     get  industries2Scroll11(){return $("(//div)[557]")}
  

//==========================================================================================================================



    get featuresLnk(){return $("//a[@href='/features/']")}
    get templatesLnk(){return $("//button[@class='desktopNavigation_headerText__bZrI_']")}
    get signtypesLnk(){return $("(//button[@class='desktopNavigation_headerText__bZrI_'])[2]")}
    get pricingPageLnk(){return $("//a[normalize-space()='Pricing']")}
    get pricingTxt(){return $("//strong[contains(text(),'What’s included?')]")}
    get templatesLnk(){return $("//button[@class='desktopNavigation_headerText__bZrI_']")}
    get scrollTotempTxt(){return $("//span[normalize-space()='Digital Signage Templates']")}
    get howItworksLnk(){return $("//a[normalize-space()='How it Works']")}
    get startFreetrialTxt(){return $("(//a[@role='button'])[4]")}
    get industriesLnk(){return $("//ul[@class='corporal']//a[contains(text(),'Industries')]")}
    get hardwareLnk(){return $("//a[normalize-space()='Hardware']")}
    get playerSoftwareLnk(){return $("//a[normalize-space()='Player Software']")}
//=========================================Soultions Page Hospitality=========================================================
    get Scroll2(){return $("(//div)[103]")}
    get Scroll3(){return $("(//div)[124]")}
    get Scroll4(){return $("(//div)[129]")}
    get Scroll5(){return $("(//div)[158]")}
    get Scroll6(){return $("(//div)[171]")}
    get Scroll7(){return $("(//div)[208]")}
    get Scroll8(){return $("(//div)[236]")}
    get Scroll9(){return $("(//div)[264]")}
    get Scroll10(){return $("(//div)[708]")}
    get Scroll11(){return $("(//div)[726]")}
    get Scroll12(){return $("(//div)[756]")}//medical , fitness
    get hospitalityScroll13(){return $("//span[normalize-space()='Benefits of digital signage for hospitality venues']")}
    get Scroll14(){return $("//h2[normalize-space()='What our customers say']")}//fitness, medical
    get Scroll15(){return $("(//div[contains(text(),'350+ 5-star reviews on Google')])[2]")}
    get Scroll16(){return $("(//div)[1049]")}
    get Scroll17(){return $("(//div)[1060]")}
    //=============================================Retail===================================
    get retailScroll10(){return $("(//div)[668]")}
    get retailScroll11(){return $("(//div)[686]")}
    get retailScroll12(){return $("(//div)[706]")}
    get retailScroll13(){return $("//span[normalize-space()='Benefits of digital signage for gift stores']")}
    get retailScroll14(){return $("(//div)[786]")}
    get retailScroll15(){return $("(//div[contains(text(),'350+ 5-star reviews on Google')])[2]")}
    get retailScroll16(){return $("//h2[@itemprop='headline']//a[@title='Books']")}
    get retailScroll17(){return $("//p[contains(text(),'Take Mandoe for a test drive to see how easy it is')]")}

//======================================================Hair and Beauty==============================================================
    get hairnBeautyScroll9(){return $("(//strong[normalize-space()='Landscape'])[1]")}
    get hairnBeautyScroll10(){return $("(//div)[678]")}
    get hairnBeautyScroll11(){return $("(//div)[696]")}
    get hairnBeautyScroll12(){return $("(//div)[716]")}
    get hairnBeautyScroll13(){return $("//span[normalize-space()='Benefits of digital signage for Hair Salons']")}
    get hairnBeautyScroll14(){return $("(//div)[796]")}
    get hairnBeautyScroll15(){return $("(//div)[874]")}
    get hairnBeautyScroll16(){return $("//h2[@itemprop='headline']//a[@title='Doctor']")}   
    
 //=========================================================Medical===========================================  
    get medicalScroll10(){return $("(//div)[718]")}//fitness
    get medicalScroll11(){return $("(//div)[736]")}//fitness  
    get medicalScroll13(){return $("//span[normalize-space()='Benefits of digital signage for Pharmacies']")}
    get medicalScroll15(){return $("(//div)[920]")}//fitness
    get medicalScroll16(){return $("//h2[@itemprop='headline']//a[@title='Clinics']")}  
    get fitnessScroll13(){return $("//span[normalize-space()='Benefits of digital signage for gyms']")}////fitness 
    get sallyImg(){return $("(//div)[848]")}//medical

//======================================================Digital Menu Boards ================================================

    get digitalMenuBoardsScroll2(){return $("(//div)[109]")}
    get digitalMenuBoardsScroll3(){return $("(//div)[133]")}
    get digitalMenuBoardsScroll4(){return $("(//div)[166]")}
    get digitalMenuBoardsScroll5(){return $("(//div)[195]")}
    get digitalMenuBoardsScroll6(){return $("//img[@alt='digital menuboard analytics']")}
    get digitalMenuBoardsScroll7(){return $("(//div)[263]")}
    get digitalMenuBoardsScroll8(){return $("(//h3)[8]")}
    get digitalMenuBoardsScroll9(){return $("(//p)[12]")}
    get digitalMenuBoardsScroll10(){return $("(//div)[825]")}
//========================================Window Signage=================================================    
    get windowSignageScroll6(){return $("//img[@title='Crust - reporting']")}
    get windowSignageScroll09(){return $("(//h2)[6]")}
    get windowSignageScroll10(){return $("(//p)[14]")}
    get windowSignageScroll11(){return $("(//div)[850]")}
//=========================================In-store Signage======================================
    get instoreSignageScroll6(){return $("//img[@title='digital menuboard analytics']")}
//=============================================Enterprise ============================================
    get enterpriseScroll2(){return $("(//p)[4]")}
    get enterpriseScroll3(){return $("(//p)[13]")}
    get enterpriseScroll4(){return $("(//p)[17]")}
    get enterpriseScroll5(){return $("(//div)[143]")}
    get enterpriseScroll6(){return $("(//div)[172]")}
    get enterpriseScroll7(){return $("(//div)[203]")}
    get enterpriseScroll8(){return $("(//p)[31]")}
    get enterpriseScroll9(){return $("(//div)[285]")}
    get enterpriseScroll10(){return $("(//div)[321]")}
    get enterpriseScroll11(){return $("(//img)[51]")}
    get enterpriseScroll12(){return $("(//div)[346]")}
    get enterpriseScroll13(){return $("//input[@value='Talk to Us']")}
    get enterpriseScroll14(){return $("(//p)[37]")}
//=======================================templates page =============================================
    get tempScroll2(){return $("(//div)[131]")}
    get tempScroll3(){return $("(//div)[352]")}
    get tempScroll4(){return $("(//div)[592]")}
    get tempScroll5(){return $("(//div)[813]")}
    get tempScroll6(){return $("(//div)[1053]")}
    get tempScroll7(){return $("(//div)[1274]")}
    get tempScroll8(){return $("(//div)[1514]")}
    get tempScroll9(){return $("(//div)[1735]")}
    get tempScroll10(){return $("(//div)[1975]")}
    get tempScroll11(){return $("(//div)[2196]")}
    get tempScroll12(){return $("(//div)[2436]")}
    get tempScroll13(){return $("(//span[contains(text(),'Portrait')])[6]")}
    get tempScroll14(){return $("//span[normalize-space()='Retail']")}
    get tempScroll15(){return $("(//span[contains(text(),'Portrait')])[7]")}
    get tempScroll16(){return $("(//span[normalize-space()='Real Estate'])[1]")}
    get tempScroll17(){return $("(//span[contains(text(),'Portrait')])[8]")}
    get tempScroll18(){return $("(//p[contains(text(),'Create beautiful digitals signs and display them i')])[1]")}
 //=======================================templates category page- Hospitality =============================================
    get tempHospScroll2(){return $("(//h2)[1]")}  
    get tempHospScroll3(){return $("(//h3)[2]")}
    get tempHospScroll4(){return $("(//h2)[2]")}
    get tempHospScroll5(){return $("(//h3)[4]")}  
    get tempHospScroll6(){return $("(//h2)[3]")} 
    get tempHospScroll7(){return $("(//h3)[6]")}  
    get tempHospScroll8(){return $("(//h2)[4]")}  
    get tempHospScroll9(){return $("(//h3)[8]")}
    get tempHospScroll10(){return $("(//h2)[5]")}  
    get tempHospScroll11(){return $("(//h3)[10]")}
    get tempHospScroll12(){return $("(//h2)[6]")}  
    get tempHospScroll13(){return $("(//p)[3]")}
      //=======================================templates category page- Freshfood =============================================
    get tempFreshfoodScroll2(){return $("(//h2)[1]")}  
    get tempFreshfoodScroll3(){return $("(//h3)[2]")}
    get tempFreshfoodScroll4(){return $("(//h2)[2]")}
    get tempFreshfoodScroll5(){return $("(//h3)[4]")}  
    get tempFreshfoodScroll6(){return $("(//h2)[3]")} 
    get tempFreshfoodScroll7(){return $("(//h3)[6]")}  
    get tempFreshfoodScroll8(){return $("(//h2)[4]")}  
    get tempFreshfoodScroll9(){return $("(//h3)[8]")}
    get tempFreshfoodScroll10(){return $("(//h2)[5]")}  
    get tempFreshfoodScroll11(){return $("(//h3)[10]")}
    get tempFreshfoodScroll12(){return $("(//h2)[6]")}  
    get tempFreshfoodScroll13(){return $("(//p)[3]")}

    //=======================================templates category page- fitness =============================================
    get tempfitnessScroll2(){return $("(//h2)[1]")}  
    get tempfitnessScroll3(){return $("(//h3)[2]")}
    get tempfitnessScroll4(){return $("(//h2)[2]")}
    get tempfitnessScroll5(){return $("(//h3)[4]")}  
    get tempfitnessScroll6(){return $("(//h2)[3]")} 
    get tempfitnessScroll7(){return $("(//h3)[6]")}  
    get tempfitnessScroll8(){return $("(//h2)[4]")}  
    get tempfitnessScroll9(){return $("(//h3)[8]")}
    get tempfitnessScroll10(){return $("(//h2)[5]")}  
    get tempfitnessScroll11(){return $("(//h3)[10]")}
    get tempfitnessScroll12(){return $("(//h2)[6]")}  
    get tempfitnessScroll13(){return $("(//p)[3]")}
    //=======================================templates category page- health =============================================
    get temphealthScroll2(){return $("(//h2)[1]")}  
    get temphealthScroll3(){return $("(//h3)[2]")}
    get temphealthScroll4(){return $("(//h2)[2]")}
    get temphealthScroll5(){return $("(//h3)[4]")}  
    get temphealthScroll6(){return $("(//h2)[3]")} 
    get temphealthScroll7(){return $("(//h3)[6]")}  
    get temphealthScroll8(){return $("(//h2)[4]")}  
    get temphealthScroll9(){return $("(//h3)[8]")}
    get temphealthScroll10(){return $("(//h2)[5]")}     
    get temphealthScroll11(){return $("(//h2)[6]")}  
   
 //=======================================templates category page- medical =============================================
    get tempmedicalScroll2(){return $("(//h2)[1]")}  
    get tempmedicalScroll3(){return $("(//h3)[2]")}
    get tempmedicalScroll4(){return $("(//h2)[2]")}
    get tempmedicalScroll5(){return $("(//h3)[4]")}  
    get tempmedicalScroll6(){return $("(//h2)[3]")} 
    get tempmedicalScroll7(){return $("(//h3)[6]")}  
    get tempmedicalScroll8(){return $("(//h2)[4]")}  
    get tempmedicalScroll9(){return $("(//h3)[8]")}
    get tempmedicalScroll10(){return $("(//h2)[5]")}     
    get tempmedicalScroll11(){return $("//img[@title='Mandoe makes digital Signage Simple']")} 

     //=======================================templates category page- Financial =============================================
    get tempFinancialScroll2(){return $("(//h2)[1]")}  
    get tempFinancialScroll3(){return $("(//h3)[2]")}
    get tempFinancialScroll4(){return $("(//h2)[2]")}
    get tempFinancialScroll5(){return $("//img[@title='Mandoe makes digital Signage Simple']")} 
    
     //====================================== page- swimartBlog =============================================
    get swimartBlogScroll2(){return $("//img[@alt='Installed at over 70 sites']")}  
    get swimartBlogScroll3(){return $("(//p)[5]")}
    get swimartBlogScroll4(){return $("(//h2)[3]")}
    get swimartBlogScroll5(){return $("(//p)[13]")} 
    get swimartBlogScroll6(){return $("//img[@alt='Swimart quote 1']")} 
    
    get swimartBlogScroll7(){return $("(//p)[14]")}
    get swimartBlogScroll8(){return $("(//p)[19]")}
    get swimartBlogScroll9(){return $("(//p)[20]")}
    get swimartBlogScroll10(){return $("//img[@alt='Swimart quote 2']")} 
    get swimartBlogScroll11(){return $("(//img[@alt='Swimart chooses Mandoe for digital signage'])[3]")}
    get swimartBlogScroll12(){return $("(//div)[127]")}
    get swimartBlogScroll13(){return $("(//div)[193]")}
    get footerScroll(){return $("//img[@title='Mandoe makes digital Signage Simple']")}
      //====================================== page- foodBlog =============================================
    get foodBlogScroll2(){return $("(//p)[5]")}  
    get foodBlogScroll3(){return $("(//p)[6]")}
    get foodBlogScroll4(){return $("(//p)[7]")}
    get foodBlogScroll5(){return $("(//p)[8]")} 
    get foodBlogScroll6(){return $("(//p)[9]")} 
    
    get foodBlogScroll7(){return $("(//div)[173]")}
    get foodBlogScroll8(){return $("(//div)[250]")}
     //====================================== page- Blog- How to increase your foot traffic and boost your sales =============================================
    get TrafficBlogScroll2(){return $("(//p)[5]")}  
    get TrafficBlogScroll3(){return $("(//p)[6]")}
    get TrafficBlogScroll4(){return $("(//img[@alt='How to increase foot traffic to your store and boost sales'])[1]")}
    get TrafficBlogScroll5(){return $("(//h3)[2]")} 
    get TrafficBlogScroll6(){return $("(//h3)[4]")} 
    
    get TrafficBlogScroll7(){return $("(//h3)[5]")}
    get TrafficBlogScroll8(){return $("(//div)[110]")}
    get TrafficBlogScroll9(){return $("(//h2)[2]")}
    get TrafficBlogScroll10(){return $("//a[@title='Modern cafe design ideas']")}
    get TrafficBlogScroll11(){return $("(//div)[296]")}
    get TrafficBlogScroll12(){return $("(//div)[327]")}
      //=======================================templates category page- Liquor promotional template =============================================
    get tempLiquorScroll2(){return $("(//div)[113]")}  
    get tempLiquorScroll3(){return $("(//h3)[1]")}
    get tempLiquorScroll4(){return $("(//h3)[2]")}
    get tempLiquorScroll5(){return $("(//h2)[3]")}  
    get tempLiquorScroll6(){return $("(//p)[16]")}  
    
      
 //=======================================templates category page- Real-estate =============================================
    get tempRealestateScroll2(){return $("(//h2)[1]")}  
    get tempRealestateScroll3(){return $("(//h3)[2]")}
    get tempRealestateScroll4(){return $("(//h2)[2]")}
    get tempRealestateScroll5(){return $("(//h3)[4]")}  
    get tempRealestateScroll6(){return $("(//h2)[3]")}
    get tempRealestateScroll7(){return $("//img[@title='Mandoe makes digital Signage Simple']")}   
     //=======================================templates category page-Hair and  beauty =============================================
     get tempbeautyScroll2(){return $("(//h2)[1]")}  
     get tempbeautyScroll3(){return $("(//h3)[2]")}
     get tempbeautyScroll4(){return $("(//h2)[2]")}
     get tempbeautyScroll5(){return $("(//h3)[4]")}  
     get tempbeautyScroll6(){return $("(//h2)[3]")} 
     get tempbeautyScroll7(){return $("(//h3)[6]")}  
     get tempbeautyScroll8(){return $("(//h2)[4]")}  
     get tempbeautyScroll9(){return $("(//h3)[8]")}
     get tempbeautyScroll10(){return $("(//h2)[5]")}  
     get tempbeautyScroll11(){return $("(//h3)[10]")}
     get tempbeautyScroll12(){return $("(//h2)[6]")}
     get tempbeautyScroll13(){return $("(//h3)[12]")} 
     get tempbeautyScroll14(){return $("(//h2)[7]")}   
     get tempbeautyScroll15(){return $("(//p)[3]")}
      //=======================================templates category page Retail =============================================
     get tempRetailScroll2(){return $("(//h2)[1]")}  
     get tempRetailScroll3(){return $("(//h3)[2]")}
     get tempRetailScroll4(){return $("(//h2)[2]")}
     get tempRetailScroll5(){return $("(//h3)[4]")}  
     get tempRetailScroll6(){return $("(//h2)[3]")} 
     get tempRetailScroll7(){return $("(//h3)[6]")}  
     get tempRetailScroll8(){return $("(//h2)[4]")}  
     get tempRetailScroll9(){return $("(//h3)[8]")}
     get tempRetailScroll10(){return $("(//h2)[5]")}  
     get tempRetailScroll11(){return $("(//h3)[10]")}
     get tempRetailScroll12(){return $("(//h2)[6]")}
     get tempRetailScroll13(){return $("(//h3)[12]")} 
     get tempRetailScroll14(){return $("(//h2)[7]")}    
     get tempRetailScroll15(){return $("(//h3)[14]")}  
     get tempRetailScroll16(){return $("(//h2)[8]")}  
     get tempRetailScroll17(){return $("(//h3)[16]")}  
     get tempRetailScroll18(){return $("(//h2)[9]")} 
     get tempRetailScroll19(){return $("(//h3)[18]")}  
     get tempRetailScroll20(){return $("(//h2)[10]")}    
     get tempRetailScroll21(){return $("(//p)[3]")}
    
//========================================Pricing page ==============================================================================================================

    get pricingScroll2(){return $("(//div)[161]")}
    get pricingScroll3(){return $("(//div)[173]")}
    get pricingScroll4(){return $("(//div)[198]")}
//========================================About us  page ==============================================================================================================

    
    get aboutScroll2(){return $("(//div)[79]")}
    get aboutScroll3(){return $("(//div)[104]")}
    get aboutScroll4(){return $("(//h2)[2]")}
    
    get aboutScroll5(){return $("(//h2)[3]")}
    get aboutScroll6(){return $("//img[@title='life-at-mandoe']")}
    get aboutScroll7(){return $("(//div)[154]")}


    get aboutScroll8(){return $("(//div)[184]")}

//-================================ Blog page ============================================================================================================
    get blogScroll2(){return $("(//h2)[1]")}    
    get blogScroll3(){return $("(//h2)[2]")} 
    get blogScroll4(){return $("(//h2)[14]")} 
    get blogScroll5(){return $("//a[@title='Case Studies']//span")}        
    get blogScroll6(){return $("//a[@title='News and Updates']//span")}        
    get blogScroll7(){return $("//a[@title='Design Inspiration']//span")}   
    get blogScroll8(){return $("//p[contains(text(),'Create beautiful digitals signs and display them i')]")}  
    //-================================ Case Studies ============================================================================================================
    get caseStudiesScroll2(){return $("(//div)[103]")}    
    get caseStudiesScroll3(){return $("(//div)[203]")} 
    get caseStudiesScroll4(){return $("(//div)[269]")} 
    get caseStudiesScroll5(){return $("(//p)[7]")}        
   
 //===================================Customers=================================================================================   
    get customersScroll2(){return $("(//div)[82]")}    
    get customersScroll3(){return $("(//div)[159]")}    
    get customersScroll4(){return $("(//div)[269]")}  
    
    get customersScroll5(){return $("(//div)[339]")}     
//===================================== Safety Warranty regulatory guide =============================================================
    get safetyWarrantyScroll2(){return $("(//p)[2]")} 
    get safetyWarrantyScroll3(){return $("(//p)[23]")} 
    get safetyWarrantyScroll4(){return $("(//strong)[6]")} 
    get safetyWarrantyScroll5(){return $("(//p)[43]")} 
    get safetyWarrantyScroll6(){return $("(//strong)[11]")} 
    get safetyWarrantyScroll7(){return $("(//strong)[12]")} 
    get safetyWarrantyScroll8(){return $("(//p)[66]")} 
//==============================================Contact/Sales page ========================================================================
    get contactSalesScroll2(){return $("//p[contains(text(),'Enter your details below and a member of our team ')]")} 
    get contactSalesScroll3(){return $("//label[@for='input_4_16']")} 
    get contactSalesScroll4(){return $("//input[@value='TALK TO US']")} 
//==========================================================Partner-Program==========================================================
    get partnerProgramScroll2(){return $("(//div)[88]")} 
    get partnerProgramScroll3(){return $("(//div)[112]")} 
    get partnerProgramScroll4(){return $("(//div)[136]")} 
    get partnerProgramScroll5(){return $("(//li)[36]")} 
    get partnerProgramScroll6(){return $("//label[@for='input_19_3']")} 
    get partnerProgramScroll7(){return $("//input[@value='Talk to Us']")} 
    get partnerProgramScroll8(){return $("(//div)[197]")} 
//=====================================================Terms of use ===================================================================

     get termsOfuseScroll2(){return $("(//h3)[1]")} 
     get termsOfuseScroll3(){return $("(//h3)[5]")} 
     get termsOfuseScroll4(){return $("(//h3)[7]")} 
     get termsOfuseScroll5(){return $("(//h3)[10]")} 
     get termsOfuseScroll6(){return $("(//p)[68]")} 
     get termsOfuseScroll7(){return $("(//li)[33]")} 
     get termsOfuseScroll8(){return $("(//h3)[15]")}
     get termsOfuseScroll9(){return $("(//p)[102]")} 
     get termsOfuseScroll10(){return $("(//li)[46]")} 
     get termsOfuseScroll11(){return $("(//a[@href='#next'])[4]")}  
     get termsOfuseScroll12(){return $("(//div)[139]")} 
//=====================================================Locations  ===================================================================

     get locationsScroll2(){return $("(//div)[96]")}
     get locationsScroll3(){return $("(//div)[138]")}   
     get locationsScroll4(){return $("(//div)[180]")} 
     get locationsScroll5(){return $("(//div)[222]")} 
     get locationsScroll6(){return $("(//div)[264]")} 
     get locationsScroll7(){return $("(//div)[306]")} 
     get locationsScroll8(){return $("(//div)[348]")} 
     get locationsScroll9(){return $("(//h3)[43]")} 
     get locationsScroll10(){return $("(//h3)[49]")} 
     get locationsScroll11(){return $("(//h3)[55]")} 
     get locationsScroll12(){return $("(//h3)[61]")} 
     get locationsScroll13(){return $("(//h3)[67]")} 
     get locationsScroll14(){return $("(//h3)[73]")} 
     get locationsScroll15(){return $("(//h3)[79]")} 
     get locationsScroll16(){return $("(//h3)[85]")} 
     get locationsScroll17(){return $("(//h3)[91]")}
     get locationsScroll18(){return $("(//h3)[97]")}  
     get locationsScroll19(){return $("(//h3)[103]")}  
     get locationsScroll20(){return $("(//h3)[109]")} 
     get locationsScroll21(){return $("(//h3)[117]")}
     get locationsScroll22(){return $("(//h3)[123]")}
     get locationsScroll23(){return $("(//h3)[129]")}
     get locationsScroll24(){return $("(//h3)[135]")}
     get locationsScroll25(){return $("(//h3)[141]")}
     get locationsScroll26(){return $("(//h3)[147]")}
     get locationsScroll27(){return $("(//h3)[153]")}
     get locationsScroll28(){return $("(//h3)[159]")}
     get locationsScroll29(){return $("(//h3)[165]")}
     get locationsScroll30(){return $("(//h3)[171]")}

     get locationClick1(){return $("//a[normalize-space()='Norwich']")}
     get locationClick2(){return $("//a[normalize-space()='Preston']")}























//=====================================================Privacy Policy ===================================================================

    get privacyPolicyScroll2(){return $("(//h3)[1]")} 
    get privacyPolicyScroll3(){return $("(//p)[26]")} 
    get privacyPolicyScroll4(){return $("(//p)[34]")} 
    get privacyPolicyScroll5(){return $("(//p)[42]")} 
    get privacyPolicyScroll6(){return $("(//h3)[6]")} 
    get privacyPolicyScroll7(){return $("(//p)[58]")} 
    get privacyPolicyScroll8(){return $("(//p)[76]")} 
    get privacyPolicyScroll9(){return $("(//h3)[14]")} 
    get privacyPolicyScroll10(){return $("(//div)[154]")} 
//=====================================================Info ===================================================================

    get infoScroll2(){return $("(//div)[94]")} 
    get infoScroll3(){return $("(//div)[103]")} 
//=========================================================Support================================================================
get supportScroll2(){return $("//p[contains(text(),'Enter your details below and a member of our team ')]")} 
    get supportScroll3(){return $("//label[@for='input_17_13']")} 

    get supportScroll4(){return $("(//div)[123]")} 
//=================================================== legal ==================================================================
    get legalScroll2(){return $("(//p)[6]")} 
//=================================================== Thanks ==================================================================
    get thanksScroll2(){return $("(//div)[101]")} 
    get thanksScroll3(){return $("//img[@title='Mandoe makes digital Signage Simple']")} 
//=====================================================trialForm ===================================================================

    get trialFormScroll2(){return $("(//h1)[1]")}
//=====================================================Reseller Program ===================================================================

    get resellerProgramScroll2(){return $("//a[@href='#join']")}
    get resellerProgramScroll3(){return $("//label[@for='input_21_10']")}
    get resellerProgramScroll4(){return $("(//select)[1]")}
    get resellerProgramScroll5(){return $("//input[@value='Register your interest']")}



    get hospitalityLnk(){return $("//a[@href='/industries/hospitality/']")}
    get talkSalesBtn(){return $("(//a[@role='button'])[4]")}
    get retailLnk(){return $("//a[@href='/industries/gift-store/']")}
    get hairnBeautyLnk(){return $("//a[@href='/industries/hair-salon/']")}
    get medicalLnk(){return $("//a[@href='/industries/pharmacy/']")}
    get fitnessLnk(){return $("//a[@href='/industries/gym/']")}
    get moreLnk(){return $("//a[normalize-space()='More']")}
    get digMenuBoardsLnk(){return $("//a[normalize-space()='Digital Menu Boards']")}
    get digMenuBoardTxt(){return $("(//span[contains(text(),'Talk to Sales')])[2]")}
    get windowSignageLnk(){return $("//a[normalize-space()='Window Signage']")}
    get instoreSignageLnk(){return $("//a[normalize-space()='In-Store Signage']")}
    get enterpriseLnk(){return $("//a[@href='/enterprise/']")}
    get customersLnk(){return $("//a[@href='/customers/']")}
    get partnerProgramLnk(){return $("//a[@href='/partner-program/']")}
    get partnerProgramTxt(){return $("//span[normalize-space()='Join the Partner Program']")}
//============================================Resources Page ===========================================================
    get blogLnk(){return $("//a[@href='/blog/']")}
    get sliderSvg(){return $("(//*[name()='svg'][@role='img'])[1]")}
    get caseStudiesLnk(){return $("//a[@href='/blog/topic/case-studies/']")}
    get caseStudiesTxt(){return $("//a[@class='case-studies']")}
    get helpCentreLnk(){return $("(//a[@href='https://help.mandoemedia.com'])[1]")}
    get aboutLnk(){return $("//a[normalize-space()='About']")}
    get contactLnk(){return $("//a[normalize-space()='Contact']")}
    get supportLnk(){return $("//a[normalize-space()='Support']")}

//============================================Help Centre ===========================================================
    get helpCentreScroll2(){return $("(//h3)[1]")}


   //===============================================Buttons-home===================================================

   get topNavStartFreeTrialBtn(){return $("(//a[@role='button'])[3]")}
   get homeSFT02(){return $("(//a[@role='button'][normalize-space()='Start Free Trial'])[3]")}
   
   get AUhomeSFT02(){return $("(//a[contains(text(),'Talk to a Specialist')])[1]")}
   
   get scrollToSvg(){return $("(//h2)[3]")}
   get homeSFT03(){return $("(//a[@role='button'][normalize-space()='Start Free Trial'])[4]")}
   get AUhomeSFT03(){return $("//a[normalize-space()='Speak to a Specialist']")}
   get homeMVF01(){return $("(//a[@role='button'])[5]")}
   get homeMVF02(){return $("(//a[@role='button'])[7]")}
 //==========features
   get featuresSFT01(){return $("(//a[@role='button'])[4]")}
   get featuresMVF01(){return $("(//a[@role='button'])[5]")}
   get featuresMVF02(){return $("(//a[@role='button'])[7]")}
   get scrollfeaturesfooter(){return $("//span[normalize-space()='Get Started Today!']")}
   get howItworksGetSFF01(){return $("(//a[@role='button'])[4]")}

   get scrollsignupandcreate(){return $("(//div)[143]")}
   get howItworksSignupFF01(){return $("(//a[@role='button'])[5]")}
   get scrollconnectyrdisplay(){return $("(//div)[189]")}
   get howItworksSignupFF02(){return $("(//a[@role='button'])[6]")}
   get scrollGetSFFtxt(){return $("(//h2)[5]")}
   get howItworksFooterGetSF(){return $("(//a[@role='button'])[7]")}

//===============Template================================================
   get scrolltempfooterGetSFFtxt(){return $("(//h2)[9]")} 
   get templatesFooterGetSF(){return $("(//a[@href='https://sandbox.mandoemedia.com/sandbox-wizard'])[1]")}

   //========template category Hospitality================
   get hospStartY14DFT(){return $("(//a[@role='button'])[4]")}

   //==========================Industries - 1 button on the footwe=========================================
   get scrollindustriesfooterGetSFFtxt(){return $("(//h2)[10]")} 
   get templatesFooterGetSF(){return $("(//a[@href='https://sandbox.mandoemedia.com/sandbox-wizard'])[1]")}
   //============================Player Hardware/ coonecting the player- 3 buttons  =========================================

  
   get buyMediaPlayerBtn(){return $("(//span[normalize-space()='Buy Media Player'])[1]")}
   get activatePlayerBtn(){return $("(//a[@role='button'])[5]")}
   get scrollpHwfootGetSFFtxt(){return $("(//div)[233]")} 
   
   get playerHWGSFBtn(){return $("(//a[@role='button'])[6]")}



   //=======================Player software / download player 02 buttons on the footer==============================

   get scrollpSwfootGetStodaytxt(){return $("(//h2)[1]")} 
   get PlayerSWStartFTBtn(){return $("(//a[@role='button'])[7]")}
   get PlayerSWMVFBtn(){return $("(//a[@href='https://sandbox.mandoemedia.com/sandbox-wizard'])[1]")}

   //=====================Soultions- Hospitality

   get HospitalitySFTBtn(){return $("(//a[@role='button'])[4]")}
   get HospitalityMakeaDigSign(){return $("(//a[@role='button'])[5]")}
   //=====portrait templates div to get the middle image bar
   get scrollHospGSTdiv(){return $("(//div)[466]")}
   get HospitalitySFTBtn02(){return $("(//a[@role='button'])[6]")}
   get scrollHospFooterGSTtxt(){return $("(//h2)[15]")}
   get HospitalitySFTBtn03(){return $("(//a[@role='button'])[7]")}
   get HospitalityfooterMVIF(){return $("(//a[@role='button'])[8]")}



   //================================== Use cases - Digital menuboard

   get DigMBSFTBtn01(){return $("(//a[@role='button'])[4]")}
   get DigMBmakeaDM(){return $("(//a[@role='button'])[5]")}
   get scrollDigMBimg(){return $("(//div)[246]")}

   get DigMBSFTBtn02(){return $("(//a[@role='button'])[6]")}
   get scrollDigMBFooterGSTtxt(){return $("(//h2)[7]")}
   get DigMBSFTBtn03(){return $("(//a[@role='button'])[7]")}
   get DigMBfooterMVIF(){return $("(//a[@role='button'])[8]")}

//===============================Solutions Enterprise
   get EntConOurTeam(){return $("(//a[@role='button'])[4]")}
   get scrollEntFooterSTOT(){return $("(//h2[normalize-space()='Speak to our team today'])[1]")}
   get EntConUs(){return $("(//a[@role='button'])[5]")}

//===============================Solutions Customers
   get CustomerSFT01(){return $("(//div)[86]")}
   get CustomerMVIF01(){return $("(//a[@role='button'])[5]")}
   get scrollCusFooterGST(){return $("(//h2)[1]")}
   get CustomerSFT02(){return $("(//a[@role='button'])[6]")}
   get CustomerMVIF02(){return $("(//a[@role='button'])[7]")}


//==========================Blog
   get scrollBlogSFT01(){return $("(//div)[464]")}
   get BlogSFT01(){return $("(//a[@role='button'])[4]")}
   get scrollBlogfooterGSFF(){return $("(//h2)[19]")}
   get BlogfooterGSF(){return $("(//a[@href='https://sandbox.mandoemedia.com/sandbox-wizard'])[1]")}

//=========Food sustainability
get BlogFoodMVIF(){return $("(//a[@role='button'])[4]")}
get scrollBlogFoodGS(){return $("(//div)[118]")}
get BlogFoodGS(){return $("(//a[@role='button'])[5]")}
get scrollBlogFoodGSF(){return $("(//h2)[6]")}
get BlogFoodGSF(){return $("(//a[@role='button'])[6]")}
//============Case studies
get CStudiesGS(){return $("(//a[@role='button'])[4]")}
get scrollCStudiesGSF(){return $("(//h2)[3]")}
get CStudiesGSF(){return $("(//a[@role='button'])[5]")}

//==============Soft ware only pricing
get scrollSWOPS14DFT(){return $("//p[contains(text(),'Good for businesses with basic requirements who on')]")}
get SWOP14DFTleft(){return $("(//a[@role='button'])[5]")}
get SWOP14DFTright(){return $("(//a[@role='button'])[7]")}
get scrollSWOPfooterGSF(){return $("(//h2)[1]")}
get SWOPGSF(){return $("(//a[@role='button'])[8]")}

//=============about
get scrollAboutfooter(){return $("(//h2)[4]")}
get aboutSFT(){return $("(//a[@role='button'])[4]")}
get aboutMVIF(){return $("(//a[@href='https://sandbox.mandoemedia.com/sandbox-wizard'])[1]")}





























    open () {
        return super.open('/');
    }
}

module.exports = new HomePage();
