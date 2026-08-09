/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = '';
if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
  if (repoName && repoName !== 'akashrc.github.io') {
    repo = `/${repoName}`;
  }
}

const nextConfig = {
  output: 'export',
  basePath: repo,
  assetPrefix: repo ? `${repo}/` : undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
