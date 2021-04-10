'use strict';

const fs = require('fs').promises;

async function createAvatarInitials(initials) {
  const avatar = `<svg height="300" width="300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="100%" height="100%" fill="#fff"/>
  <text x="28" y="225" font-family="monospace" font-size="200" fill="#00a7b4">${initials.toUpperCase()}</text>
  </svg>`;

  await fs.writeFile(`${__dirname}/../../public_html/media/profiles/${initials}.svg`, avatar);
};

module.exports = createAvatarInitials;
