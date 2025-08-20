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

    // First, get the content types to see what's available
    const contentTypes = await client.getContentTypes();
    
    console.log('Available content types:', contentTypes.items.map(ct => ({ id: ct.sys.id, name: ct.name })));

    // Test fetching entries - try to find a blog post content type
    let response;
    try {
      response = await client.getEntries({
        content_type: 'pageBlogPost',
        limit: 3,
      });
    } catch (error) {
      console.log('pageBlogPost not found, trying other content types...');
      // If pageBlogPost doesn't exist, try common blog post content type names
      const possibleTypes = ['blogPost', 'post', 'article', 'blog'];
      let foundType = null;
      
      for (const type of possibleTypes) {
        try {
          const typeExists = contentTypes.items.find(ct => ct.sys.id === type);
          if (typeExists) {
            response = await client.getEntries({
              content_type: type,
              limit: 3,
            });
            foundType = type;
            break;
          }
        } catch (e) {
          console.log(`Content type ${type} not found`);
        }
      }
      
      if (!foundType) {
        // Just get all entries without specifying content type
        response = await client.getEntries({ limit: 3 });
      }
    }

    return NextResponse.json({
      success: true,
      contentTypes: contentTypes.items.map(ct => ({ id: ct.sys.id, name: ct.name })),
      postsFound: response?.items?.length || 0,
      totalPosts: response?.total || 0,
      posts: response?.items?.map(item => ({
        id: item.sys.id,
        title: item.fields.title || 'No title',
        slug: item.fields.slug || 'no-slug',
        contentType: item.sys.contentType.sys.id,
        fields: Object.keys(item.fields),
      })) || []
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