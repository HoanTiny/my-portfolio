import { NextResponse } from "next/server";

const GITHUB_USERNAME = "HoanTiny";

interface GitHubRepo {
  name: string;
  created_at: string;
  html_url: string;
  description: string | null;
  language: string | null;
}

export async function GET() {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };

    // Optional: add token for higher rate limits (60 → 5000 req/hour)
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    // Fetch all repos with pagination (GitHub max 100 per page)
    let allRepos: GitHubRepo[] = [];
    let page = 1;

    while (true) {
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created&direction=desc&per_page=100&type=owner&page=${page}`,
        {
          headers,
          next: { revalidate: 3600 }, // Cache 1 hour
        }
      );

      if (!res.ok) {
        throw new Error(`GitHub API error: ${res.status}`);
      }

      const repos: GitHubRepo[] = await res.json();
      if (repos.length === 0) break;

      allRepos = allRepos.concat(repos);

      // If less than 100, we've reached the last page
      if (repos.length < 100) break;
      page++;
    }

    // Sort by created date descending
    allRepos.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    const commits = allRepos.map((repo) => {
      const date = new Date(repo.created_at);
      const formatted = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
      });
      return {
        date: `${formatted}:`,
        title: repo.name,
        url: repo.html_url,
        description: repo.description,
        language: repo.language,
      };
    });

    return NextResponse.json(commits);
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
