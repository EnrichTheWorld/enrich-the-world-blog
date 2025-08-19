import { createClient } from 'contentful';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('Testing Contentful connection...');
    console.log('CONTENTFUL_SPACE_ID:', process.env.CONTENTFUL_SPACE_ID);
    console.log('CONTENTFUL_ACCESS_TOKEN:', process.env.CONTENTFUL_ACCESS_TOKEN ? 'Set' : 'Not set');

    if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
      return NextResponse.json({
        error: 'Missing environment variables',
        spaceId: process.env.CONTENTFUL_SPACE_ID || 'Not set',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ? 'Set' : 'Not set'
      }, { status: 500 });
    }

    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    // Test fetching entries
    const response = await client.getEntries({
      content_type: 'pageBlogPost',
      limit: 3,
    });

    return NextResponse.json({
      success: true,
      postsFound: response.items.length,
      totalPosts: response.total,
      posts: response.items.map(item => ({
        id: item.sys.id,
        title: item.fields.title,
        slug: item.fields.slug,
      }))
    });

  } catch (error: any) {
    console.error('Contentful test error:', error);
    return NextResponse.json({
      error: 'Contentful API error',
      message: error.message,
      details: error.response?.data || 'No additional details'
    }, { status: 500 });
  }
}