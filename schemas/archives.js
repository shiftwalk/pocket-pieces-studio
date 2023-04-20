export default {
  title: 'Archives',
  name: 'archives',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Image',
      name: 'image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      metaTitle: 'metaTitle',
      image: 'image'
    },
    prepare(selection) {
      const {title, metaTitle, image} = selection
      return {
        title: title,
        subtitle: metaTitle,
        media: image
      }
    }
  }
}