const base = process.env.GITHUB_BASE_REF;
const head = process.env.GITHUB_HEAD_REF;

if (!base || !head) {
  console.log("No pull request context; promotion-path check skipped.");
  process.exit(0);
}

const allowed = {
  development: /^(feature|fix|chore|docs|security)\//,
  staging: /^development$/,
  release: /^staging$/,
  main: /^release$/,
};

const rule = allowed[base];
if (!rule || !rule.test(head)) {
  console.error(`Invalid promotion path: ${head} -> ${base}`);
  process.exit(1);
}

console.log(`Promotion path verified: ${head} -> ${base}`);
