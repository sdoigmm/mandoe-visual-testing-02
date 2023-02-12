it('pricing talk to a specialist button link', async () => {  
  await browser.url("en-au/pricing/full-service-pricing/")
  await browser.pause(4000) 
  await(await HomePage.topNavStartFreeTrialBtn).moveTo()  
  await browser.pause(15000) 
 
  await(await HomePage.pricingAUtalktoSp).waitForDisplayed({timeout : 6000}) 
  await(await HomePage.pricingAUtalktoSp).moveTo()   
  await(await HomePage.pricingAUtalktoSp).click()  
  await browser.pause(4000) 
  const title = await browser.getTitle()
  await console.log(' Full service pricing talk to a specialist button  click opens:', title);
  await assert.equal('Create your account | Instant Digital Signage | mandoemedia.com', title, 'title is not found')
});