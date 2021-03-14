const { chromium } = require("playwright")

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto("https://google.com")
  await browser.close()
})()
