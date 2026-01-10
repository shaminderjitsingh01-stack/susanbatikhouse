import { NextResponse } from "next/server";

export async function GET() {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  // Check if env vars exist
  if (!domain || !token) {
    return NextResponse.json({
      error: "Missing environment variables",
      domain: domain ? "SET" : "MISSING",
      token: token ? "SET" : "MISSING",
    });
  }

  try {
    const response = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({
        query: "{ shop { name } products(first: 3) { edges { node { title } } } }",
      }),
    });

    const data = await response.json();

    return NextResponse.json({
      status: response.status,
      domain: domain,
      tokenPrefix: token.substring(0, 10) + "...",
      data: data,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Fetch failed",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
