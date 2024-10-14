const puppeteer = require("puppeteer");

async function scrapeData(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Query all child elements from a specific parent element
    const data = await page.evaluate(() => {
        const items = [];
        const container = document.querySelector('div[data-sales="true"]'); // Adjust selector to your needs

        container.querySelectorAll('div[data-type="goods"]').forEach((item) => {
            const title = item.querySelector("h3")?.innerText;
            const salePrice = item.querySelector('div[data-type="price"] div')?.innerText;
            const isLocal = item.querySelector('div[data-type="isLocal"]')?.innerText === "Local"; // Adjust according to actual DOM
            const image = item.querySelector("img")?.src;
            const hasVideo = item.querySelector("video")?.src || null;
            const originalPrice = item.querySelector('div[data-type="marketPrice"] div')?.innerText;
            const isLastDay = item
                .querySelector('[aria-label="Last Day"]')
                ?.innerText.includes("Last Day");
            const textSection = Array.from(item.querySelectorAll('div[role="link"] span')).map(
                (el) => el.innerText
            );
            const soldNumber = item
                .querySelector('span[aria-label*="sold"]')
                ?.innerText.replace(/[Kk]+/, "000");
            const isAlmostSoldOut =
                item.querySelector('[data-active="1"][aria-label="Almost sold out"]') !== null;
            const rating = item
                .querySelector('div[aria-label*="score"]')
                ?.ariaLabel.match(/\d+(\.\d+)?/)[0];
            const numberOfRating = item.querySelector(
                'span[role="region"] span:last-child'
            )?.innerText;
            const userTitles = Array.from(item.querySelectorAll("div[user-title]")).map((el) => ({
                icon: el.querySelector("svg path")?.getAttribute("d"),
                title: el.innerText,
            }));

            items.push({
                title,
                salePrice,
                isLocal,
                image,
                hasVideo,
                originalPrice,
                isLastDay,
                textSection,
                soldNumber,
                isAlmostSoldOut,
                rating,
                numberOfRating,
                userTitles,
            });
        });

        return items;
    });

    console.log(data);
    await browser.close();
}

scrapeData("http://example.com"); // Put the correct URL here
