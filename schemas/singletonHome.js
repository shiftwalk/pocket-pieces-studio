export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Background Image',
      name: 'image',
      description: 'The large image that appears in the background',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Intro Text',
      name: 'introText',
      type: 'text',
      rows: 3,
      description: 'The introduction text that appears on the poster',
      validation: Rule => Rule.required()
    },
    {
      title: 'Poster Reel Images',
      name: 'posterReelImages',
      description: 'The images that tick along in the reel',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        {
          title: 'Image',
          name: 'reelImage',
          type: 'defaultImage',
        },
      ],
      validation: Rule => Rule.required().min(3).max(20)
    },
    {
      title: 'Poster Video Reel',
      name: 'posterVideoReel',
      description: 'The .mp4 file for the poster video',
      type: 'file',
      validation: Rule => Rule.required()
    },
    {
      title: 'Footer Text',
      name: 'footerText',
      type: 'text',
      rows: 3,
      description: 'The ending text that appears below the footer logo',
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ]
}