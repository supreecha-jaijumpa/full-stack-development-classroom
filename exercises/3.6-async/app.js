async function main() {
  const BASE = "https://api.github.com/users/torvalds";

  const [userRes, reposRes] = await Promise.all([
    fetch(BASE),
    fetch(`${BASE}/repos`),
  ]);

  if (!userRes.ok) throw new Error(`User fetch failed: ${userRes.status}`);
  if (!reposRes.ok) throw new Error(`Repos fetch failed: ${reposRes.status}`);

  const user = await userRes.json();
  const repos = await reposRes.json();

  const top3 = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3);

  console.log(`Name: ${user.name}`);
  console.log(`Public repos: ${user.public_repos}`);
  console.log("Top 3 repos by stars:");
  for (const repo of top3) {
    console.log(`  ${repo.name} — ${repo.stargazers_count} stars`);
  }
}

main().catch((err) => console.error(`Error: ${err.message}`));
