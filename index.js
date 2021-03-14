const { chromium } = require("playwright")

;(async () => {
  console.log(1)
  const browser = await chromium.launch()
  console.log(2)
  const page = await browser.newPage()
  console.log(3)
  await page.goto("https://google.com")
  console.log(4)
  await browser.close()
  console.log(5)
})()
