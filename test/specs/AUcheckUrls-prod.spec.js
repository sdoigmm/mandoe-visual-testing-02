
const { assert } = require('chai');
const HomePage = require('../pageobjects/home.page');



describe('AU-Mandoe Website Products tab pages', () => {

  beforeEach(async () => {

    await browser.maximizeWindow()
    await browser.setTimeout({ 'pageLoad': 1000000 })
    await browser.refresh()
    await browser.pause(1000)
    await browser.refresh()



  });
  afterEach(() => {
    browser.execute('window.localStorage.clear()');
    browser.deleteAllCookies()
    browser.execute('sessionStorage.clear()')



  });




  //=========================  Home   ===================================================


  it('TCP-001-Home page Top Nav Talk to a specialist  link -  https://mandoemedia.com/en-au/ ', async () => {
    await browser.url("en-au")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.topNavStartFreeTrialBtn).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Home page Talk to a specialist opens:', title);
    await assert.equal('Contact Sales | Digital Signage Company | Mandoe Media', title, 'title is not found')
  });
  it('TCP-002-Home page Top Nav Login  link - https://mandoemedia.com/en-au/', async () => {
    await browser.url("en-au")
    await browser.pause(4000)
    await (await HomePage.topNavLogin).moveTo()
    await browser.pause(15000)
    await (await HomePage.topNavLogin).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Home page Top Nav Login  link:', title);
    await assert.equal('Welcome | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCP-003-Home page Talk to a specialist 02 link  - https://mandoemedia.com/en-au/', async () => {
    await browser.url("en-au")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.AUhomeSFT02).waitForDisplayed({ timeout: 5000 })
    await (await HomePage.AUhomeSFT02).moveTo()
    await (await HomePage.AUhomeSFT02).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Home page  Talk to a specialist 02 opens:', title);
    await assert.equal('Contact Sales | Digital Signage Company | Mandoe Media', title, 'title is not found')
  });
  it('TCP-004-Home page Make a video its free 01 link  - https://mandoemedia.com/en-au/', async () => {
    await browser.url("en-au")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.homeMVF01).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.homeMVF01).moveTo()
    await (await HomePage.homeMVF01).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Home page  Make a video its free 01 opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCP-005-Home page footer speak to a specialist link  - https://mandoemedia.com/en-au/', async () => {

    await browser.url("en-au")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await (await HomePage.scrollToSvg).scrollIntoView()
    await (await HomePage.AUhomeSFT03).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.AUhomeSFT03).moveTo()
    await (await HomePage.AUhomeSFT03).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Home page  footer speak to a specialist opens:', title);
    await assert.equal('Contact Sales | Digital Signage Company | Mandoe Media', title, 'title is not found')

  });


  it('TCP-006-Home page footer Make a video its free 02 link  - https://mandoemedia.com/en-au/', async () => {
    await browser.url("en-au")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await (await HomePage.scrollToSvg).scrollIntoView()
    await (await HomePage.homeMVF02).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.homeMVF02).moveTo()
    await (await HomePage.homeMVF02).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Home page  footer Make a video its free 02 opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });


  //  ====================== Feature  ====================================


  it('TCP-007-Features page Talk to a specialist 01 link  - https://mandoemedia.com/en-au/features/', async () => {
    await browser.url("en-au/features/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.featuresSFT01).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.featuresSFT01).moveTo()
    await (await HomePage.featuresSFT01).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Features page  start free trial 01 opens:', title);
    await assert.equal('Contact Sales | Digital Signage Company | Mandoe Media', title, 'title is not found')
  });
  it('TCP-008-Features pageMake a video its free 01 button link', async () => {
    await browser.url("en-au/features/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.featuresMVF01).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.featuresMVF01).moveTo()
    await (await HomePage.featuresMVF01).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Features page  make a video its free on hero image:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCP-009-Features page footer speak to a specialist  button link  - https://mandoemedia.com/en-au/features/', async () => {
    await browser.url("en-au/features/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await (await HomePage.scrollfeaturesfooter).scrollIntoView()
    await (await HomePage.featuresSFT02).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.featuresSFT02).moveTo()
    await (await HomePage.featuresSFT02).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Features page  speak to a specialist on footer opens:', title);
    await assert.equal('Contact Sales | Digital Signage Company | Mandoe Media', title, 'title is not found')
  });
  it('TCP-010-Features pageMake a video its free 02  button link  - https://mandoemedia.com/en-au/features/', async () => {
    await browser.url("en-au/features/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await (await HomePage.scrollfeaturesfooter).scrollIntoView()
    await (await HomePage.featuresMVF02).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.featuresMVF02).moveTo()
    await (await HomePage.featuresMVF02).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Features page  make a video its free on footer opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });

  //===============================  How it works   ===============================================================/





  it('TCP-011-How it works page Talk to a specialist button link  - https://mandoemedia.com/en-au/how-it-works/', async () => {
    await browser.url("en-au/how-it-works/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.howItworksGetSFF01).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.howItworksGetSFF01).moveTo()
    await (await HomePage.howItworksGetSFF01).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('How it works page Talk to a specialist  button click opens:', title);
    await assert.equal('Contact Sales | Digital Signage Company | Mandoe Media', title, 'title is not found')
  });


  it('TCP-012-How it works page Talk to a specialist 02 link  - https://mandoemedia.com/en-au/how-it-works/', async () => {
    await browser.url("en-au/how-it-works/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.scrollsignupandcreate).scrollIntoView()
    await (await HomePage.howItworksSignupFF01).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.howItworksSignupFF01).moveTo()
    await (await HomePage.howItworksSignupFF01).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('How it works page Talk to a specialist 02 click opens:', title);
    await assert.equal('Contact Sales | Digital Signage Company | Mandoe Media', title, 'title is not found')
  });
  it('TCP-013-How it works page Talk to a specialist 03 link', async () => {
    await browser.url("en-au/how-it-works/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.scrollconnectyrdisplay).scrollIntoView()
    await (await HomePage.howItworksSignupFF02).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.howItworksSignupFF02).moveTo()
    await (await HomePage.howItworksSignupFF02).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('How it works page Talk to a specialist 03 click opens:', title);
    await assert.equal('Contact Sales | Digital Signage Company | Mandoe Media', title, 'title is not found')
  });


  it('TCP-014-How it workspage Footer Talk to sales button  - https://mandoemedia.com/en-au/how-it-works/', async () => {
    await browser.url("en-au/how-it-works/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.scrollGetSFFtxt).scrollIntoView()
    await (await HomePage.howItworksFooterGetSF).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.howItworksFooterGetSF).moveTo()
    await (await HomePage.howItworksFooterGetSF).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('How it works page footer Talk to sales buttonclick opens:', title);
    await assert.equal('Contact Sales | Digital Signage Company | Mandoe Media', title, 'title is not found')

  });













  // //=============================================Templates =====================================================


  it('TCP-015-Templates page Footer Get started free button  - https://mandoemedia.com/en-au/templates/', async () => {
    await browser.url("en-au/templates/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.scrolltempfooterGetSFFtxt).scrollIntoView()
    await (await HomePage.templatesFooterGetSF).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.templatesFooterGetSF).moveTo()
    await (await HomePage.templatesFooterGetSF).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Template page footer Get started free buttonclick opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });


  it('TCP-016-Hospitality  page Header Talk to a specialist button  - https://mandoemedia.com/en-au/templates/hospitality/', async () => {
    await browser.url("en-au/templates/hospitality/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.hospStartY14DFT).waitForDisplayed({ timeout: 5000 })
    await (await HomePage.hospStartY14DFT).moveTo()
    await (await HomePage.hospStartY14DFT).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('TCP Hospitality  page HeaderTalk to a specialist button click opens:', title);
    await assert.equal('Contact Sales | Digital Signage Company | Mandoe Media', title, 'title is not found')
  });

  //       //=====================Industries2 =========================================
  it('TCP-017-Industries page footer Get started free  - https://mandoemedia.com/en-au/industries2/', async () => {
    await browser.url("en-au/industries2/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.scrollindustriesfooterGetSFFtxt).scrollIntoView()
    await (await HomePage.templatesFooterGetSF).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.templatesFooterGetSF).moveTo()
    await (await HomePage.templatesFooterGetSF).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('Industries page footer Get started free button click opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });

  //  //=====================Player Hard ware page / connecting the player=========================================
  it('TCP-018-player hardware Buy media player button link  - https://mandoemedia.com/en-au/guides/connecting-the-player/', async () => {
    await browser.url("en-au/guides/connecting-the-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.buyMediaPlayerBtn).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.buyMediaPlayerBtn).moveTo()
    await (await HomePage.buyMediaPlayerBtn).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('player hardware Buy media player button link click opens:', title);
    await assert.equal('Pricing for Digital Signage Software & Hardware | Mandoe Media', title, 'title is not found')
  });
  it('TCP-019-player hardware Activate player button link  - https://mandoemedia.com/en-au/guides/connecting-the-player/', async () => {
    await browser.url("en-au/guides/connecting-the-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.activatePlayerBtn).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.activatePlayerBtn).moveTo()
    await (await HomePage.activatePlayerBtn).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('player hardware Activate player button link click opens:', title);
    await assert.equal('Welcome | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCP-020-player hardware Activate mandoemedia text link  - https://mandoemedia.com/en-au/guides/connecting-the-player/', async () => {
    await browser.url("en-au/guides/connecting-the-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.scrollactivatetxtlink).scrollIntoView()
    await browser.pause(5000)
    await (await HomePage.activatetxtlink).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.activatetxtlink).moveTo()
    await (await HomePage.activatetxtlink).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('player hardware Activate player button link click opens:', title);
    await assert.equal('Welcome | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });

  it('TCP-021-player hardware Footer Talk to sales button link  - https://mandoemedia.com/en-au/guides/connecting-the-player/', async () => {
    await browser.url("en-au/guides/connecting-the-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.scrollpHwfootGetSFFtxt).scrollIntoView()
    await browser.pause(4000)
    await (await HomePage.playerHWGSFBtn).waitForClickable({ timeout: 15000 })
    await (await HomePage.playerHWGSFBtn).moveTo()
    await (await HomePage.playerHWGSFBtn).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('player hardware Footer Talk to sales  button  click opens:', title);
    await assert.equal('Contact Sales | Digital Signage Company | Mandoe Media', title, 'title is not found')
  });
  // //         //======================Player software/download player=============================

  it('TCP-022-player software  Footer Talk to a specialist button link  - https://mandoemedia.com/en-au/download-player/', async () => {
    await browser.url("en-au/download-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.scrollpSwfootGetStodaytxt).scrollIntoView()
    await (await HomePage.PlayerSWStartFTBtn).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.PlayerSWStartFTBtn).moveTo()
    await (await HomePage.PlayerSWStartFTBtn).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('player software  Footer Talk to a specialist button click opens:', title);
    await assert.equal('Contact Sales | Digital Signage Company | Mandoe Media', title, 'title is not found')
  });
  it('TCP-023-player software  Footer Make a video - its free button  link  - https://mandoemedia.com/en-au/download-player/', async () => {
    await browser.url("en-au/download-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.scrollpSwfootGetStodaytxt).scrollIntoView()
    await (await HomePage.PlayerSWMVFBtn).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.PlayerSWMVFBtn).moveTo()
    await (await HomePage.PlayerSWMVFBtn).click()
    await browser.pause(4000)
    const title = await browser.getTitle()
    await console.log('player software  Footer Make a video - its free button click opens:', title);
    await assert.equal('Sandbox Wizard | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
  });
  it('TCP-024-Player software download windows link  - https://mandoemedia.com/en-au/download-player/', async () => {
    await browser.url("en-au/download-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.scrollpSwGetDownloadLink).scrollIntoView()
    await (await HomePage.PlayerSWWInDL).waitForDisplayed({ timeout: 15000 })
    await (await HomePage.PlayerSWWInDL).moveTo()
    await browser.pause(4000)
    const attr = await (await HomePage.PlayerSWWInDL).getAttribute('onclick')
    await console.log('Home page Talk to a specialist opens:', attr);
    await assert.equal('downloadAppWindows()', attr, 'Win Download attribute is not found')
  });
  it('TCP-025-Player software download macOS link  - https://mandoemedia.com/en-au/download-player/', async () => {
    await browser.url("en-au/download-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.scrollpSwGetDownloadLink).scrollIntoView()
    await (await HomePage.PlayerSWMacDL).waitForClickable({ timeout: 15000 })
    await (await HomePage.PlayerSWMacDL).moveTo()
    await browser.pause(4000)
    const attr = await (await HomePage.PlayerSWMacDL).getAttribute('onclick')
    await console.log('Home page Talk to a specialist opens:', attr);
    await assert.equal('downloadAppMac()', attr, 'Mac Download attribute is not found')
  });
  it('TCP-026-Player software download linux link  - https://mandoemedia.com/en-au/download-player/', async () => {
    await browser.url("en-au/download-player/")
    await browser.pause(4000)
    await (await HomePage.topNavStartFreeTrialBtn).moveTo()
    await browser.pause(15000)
    await (await HomePage.PlayerSWWInDL).scrollIntoView()
    await (await HomePage.PlayerSWLinuxDL).moveTo()
    await browser.pause(4000)
    const attr = await (await HomePage.PlayerSWLinuxDL).getAttribute('onclick')
    await console.log('Home page Talk to a specialist opens:', attr);
    await assert.equal('downloadAppLinux()', attr, 'Linux Download attribute is not found')
  });





});
