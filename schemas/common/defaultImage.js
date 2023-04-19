export default {
  title: "Image",
  type: 'image',
  options: {
    hotspot: true,
    metadata: ["lqip"],
  },
  name: "defaultImage",
  fields: [
    {
      title: 'Image Details',
      name: 'imageDetails',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
      {
        title: 'Alternative Text (Optional)',
        description: 'Used by screen readers to describe the image',
        name: 'alt',
        type: 'string'
      },
      {
        title: 'Caption (Optional)',
        description: 'Optional supporting caption',
        name: 'caption',
        type: 'string'
      }
    ]
  }]
}