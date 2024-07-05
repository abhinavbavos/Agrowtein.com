// src/sanityClient.js
import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '3zg23lp8', // Replace with your project ID
  dataset: 'blog', // Replace with your dataset name
  useCdn: false, // `false` if you want to ensure fresh data
});
