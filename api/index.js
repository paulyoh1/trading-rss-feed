const RSSParser = require('rss-parser');
const parser = new RSSParser();

const FEEDS = [
    'https://finance.yahoo.com/rss/headlines',
    'https://www.cnbc.com/id/100003114/device/rss/rss.html',
    'https://feeds.a.cnn.com/cnn/cnnbusiness',
];

async function generateRSS() {
    let allItems = [];
    
    for (const url of FEEDS) {
        try {
            const feed = await parser.parseURL(url);
            allItems = allItems.concat(feed.items.map(item => ({
                title: `[${feed.title}] ${item.title}`,
                link: item.link,
                date: item.pubDate,
                content: item.contentSnippet || item.content
            })));
        } catch (e) {
            console.error(`Failed to fetch ${url}:`, e);
        }
    }

    // Sort by date descending
    allItems.sort((a, b) => new Date(b.date) - new Date(a.date));

    const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
    <title>Trading Headlines Aggregator</title>
    <link>https://trading-rss-feed.vercel.app</link>
    <description>Aggregated trading news for rapid market awareness</description>
    <language>en-us</language>
    ${allItems.map(item => `
    <item>
        <title>${escapeXml(item.title)}</title>
        <link>${item.link}</link>
        <description>${escapeXml(item.content || '')}</description>
        <pubDate>${new Date(item.date).toUTCString()}</pubDate>
    </item>`).join('')}
</channel>
</rss>`;

    return rssXml;
}

function escapeXml(unsafe) {
    return unsafe.replace(/[<>&"']/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '"': return '&quot;';
            case "'": return '&apos;';
        }
    });
}

module.exports = async (req, res) => {
    try {
        const xml = await generateRSS();
        res.setHeader('Content-Type', 'application/rss+xml');
        res.status(200).send(xml);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
