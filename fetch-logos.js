const https = require('https');
const fs = require('fs');

async function downloadAndToBase64(url, outputPath) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode !== 200) {
                if (res.statusCode === 301 || res.statusCode === 302) {
                    return downloadAndToBase64(res.headers.location, outputPath).then(resolve).catch(reject);
                }
                reject(new Error(`Failed to download: ${res.statusCode}`));
                return;
            }
            const data = [];
            res.on('data', (chunk) => data.push(chunk));
            res.on('end', () => {
                const buffer = Buffer.concat(data);
                const base64 = `data:image/png;base64,${buffer.toString('base64')}`;
                fs.writeFileSync(outputPath, base64);
                console.log(`Saved base64 to ${outputPath}`);
                resolve();
            });
        }).on('error', reject);
    });
}

async function main() {
    try {
        await downloadAndToBase64('https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Hong_Kong_Polytechnic_University_logo.svg/512px-Hong_Kong_Polytechnic_University_logo.svg.png', 'poly-base64.txt');
        await downloadAndToBase64('https://upload.wikimedia.org/wikipedia/zh/thumb/4/4b/Chongqing_University_of_Posts_and_Telecommunications_logo.svg/512px-Chongqing_University_of_Posts_and_Telecommunications_logo.svg.png', 'cqupt-base64.txt');
    } catch (e) {
        console.error(e);
    }
}

main();
