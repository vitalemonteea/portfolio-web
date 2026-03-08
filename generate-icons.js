const fs = require('fs');

// Simple SVG placeholders converted to Base64 to guarantee they work immediately without network dependency
const polySVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#A51A14"/><text x="50" y="65" font-family="Arial" font-size="40" fill="white" text-anchor="middle" font-weight="bold">PU</text></svg>`;
const cquptSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#00468C"/><text x="50" y="60" font-family="Arial" font-size="30" fill="white" text-anchor="middle" font-weight="bold">CQ</text><text x="50" y="80" font-family="Arial" font-size="20" fill="white" text-anchor="middle">UPT</text></svg>`;

const polyBase64 = `data:image/svg+xml;base64,${Buffer.from(polySVG).toString('base64')}`;
const cquptBase64 = `data:image/svg+xml;base64,${Buffer.from(cquptSVG).toString('base64')}`;

const aboutFile = 'src/components/sections/About.tsx';
let aboutContent = fs.readFileSync(aboutFile, 'utf8');

aboutContent = aboutContent.replace(/logo: "https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/1\/14\/Hong_Kong_Polytechnic_University_logo\.svg\/512px-Hong_Kong_Polytechnic_University_logo\.svg\.png",/g, `logo: "${polyBase64}",`);
aboutContent = aboutContent.replace(/logo: "https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/a\/ad\/Chongqing_University_of_Posts_and_Telecommunications_logo\.png",/g, `logo: "${cquptBase64}",`);

fs.writeFileSync(aboutFile, aboutContent);
console.log('Replaced with fallback SVG Data URIs successfully!');
