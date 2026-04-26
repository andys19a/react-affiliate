const fs = require('fs');
const posts = JSON.parse(fs.readFileSync('public/data/blogPosts.json', 'utf8'));

// keyword candidates ordered from most to least specific
// Each entry: [phrase to find, target slug, display text (null = use matched text)]
const CANDIDATES = [
  ['Kelly criterion',               'kelly-criterion-value-betting',      null],
  ['Kelly Criterion',               'kelly-criterion-value-betting',      null],
  ['expected value',                'ev-expected-value-betting',          null],
  ['Expected Value',                'ev-expected-value-betting',          null],
  ['bankroll management',           'bankroll-management',                null],
  ['bankrollhantering',             'bankroll-management',                null],
  ['sure betting',                  'value-betting-vs-sure-betting',      null],
  ['arbitrage',                     'value-betting-vs-sure-betting',      null],
  ['value bets',                    'hitta-value-bets-steg-for-steg',     null],
  ['value bet',                     'hitta-value-bets-steg-for-steg',     null],
  ['undvika limitering',            'undvika-limitering-spelbolag',       null],
  ['undviker limitering',           'undvika-limitering-spelbolag',       null],
  ['hur du undviker limitering',    'undvika-limitering-spelbolag',       'hur du undviker limitering'],
  ['limitering',                    'undvika-limitering-spelbolag',       null],
  ['RebelBetting',                  'hur-rebelbetting-fungerar',          null],
  ['varians',                       'varians-bettingresultat',            null],
  ['bankrulle',                     'bankroll-management',                null],
  ['positiv EV',                    'ev-expected-value-betting',          null],
  ['insatsstorlek',                 'kelly-criterion-value-betting',      null],
  ['risk vs bel',                   'risk-vs-beloning-i-betting',         'risk vs belöning'],
  ['vanliga misstag',               'vanliga-misstag-value-betting',      null],
  ['långsiktig strategi',           'langsiktig-strategi-value-betting',  null],
  ['sidoinkomst',                   'sidoinkomst-value-betting-2025',     null],
  ['skatt',                         'skatt-pa-bettingvinster-sverige',    null],
  ['hur mycket',                    'hur-mycket-tjana-value-betting',     null],
  ['bästa spelbolag',               'basta-spelbolag-value-betting',      null],
  ['spelbolag',                     'basta-spelbolag-value-betting',      null],
];

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function injectLinks(html, selfSlug) {
  const parts = html.split(/(<[^>]*>)/);
  const usedSlugs = new Set([selfSlug]);
  let linkCount = 0;
  let insideAnchor = false;

  const result = [];
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    // Track open/close <a> tags
    if (part.startsWith('<')) {
      if (/^<a[\s>]/i.test(part)) insideAnchor = true;
      if (/^<\/a>/i.test(part)) insideAnchor = false;
      result.push(part);
      continue;
    }

    // Skip text inside anchor tags or if we have enough links
    if (insideAnchor || linkCount >= 5) {
      result.push(part);
      continue;
    }

    let text = part;
    for (const [keyword, slug, display] of CANDIDATES) {
      if (usedSlugs.has(slug)) continue;
      if (linkCount >= 5) break;

      // Case-insensitive search for the keyword
      const regex = new RegExp(escapeRegex(keyword), 'i');
      const match = regex.exec(text);
      if (match) {
        const linkedText = display || match[0];
        const href = `/blogg/${slug}`;
        text =
          text.slice(0, match.index) +
          `<a href="${href}">${linkedText}</a>` +
          text.slice(match.index + match[0].length);
        usedSlugs.add(slug);
        linkCount++;
        break; // one replacement per text segment
      }
    }
    result.push(text);
  }

  return result.join('');
}

let totalLinksAdded = 0;

posts.forEach(post => {
  if (!post.content) return;
  const before = (post.content.match(/<a href="\/blogg\//g) || []).length;
  post.content = injectLinks(post.content, post.slug);
  const after = (post.content.match(/<a href="\/blogg\//g) || []).length;
  const added = after - before;
  totalLinksAdded += added;
  console.log(`ID ${post.id} | +${added} links | ${post.title.slice(0, 50)}`);
});

fs.writeFileSync('public/data/blogPosts.json', JSON.stringify(posts, null, 2), 'utf8');
console.log(`\nTotal internal links added: ${totalLinksAdded}`);
