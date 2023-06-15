import { FiCamera } from 'react-icons/fi'

export default {
  title: 'Credits',
  name: 'credits',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Text',
      name: 'heroText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    // {
    //   title: 'Hero Background Image',
    //   name: 'heroBackgroundImage',
    //   description: 'The large image that appears in the background of the hero',
    //   type: 'defaultImage',
    //   validation: Rule => Rule.required()
    // },
    // {
    //   title: 'Hero Polaroids',
    //   name: 'heroPolaroids',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'Polaroid',
    //       name: 'polaroid',
    //       type: 'object',
    //       icon: FiCamera,
    //       fields: [
    //         {
    //           title: 'Text',
    //           name: 'text',
    //           type: 'string',
    //           description: 'The optional text heading for the polaroid',
    //         },
    //         {
    //           title: 'Images',
    //           name: 'images',
    //           description: 'The images for this polaroid, if 2 are added the 2nd image will rotate in on hover',
    //           type: 'array',
    //           options: {
    //             layout: 'grid',
    //           },
    //           of: [
    //             {
    //               title: 'Image',
    //               name: 'polaroidImage',
    //               type: 'defaultImage',
    //             },
    //           ],
    //           validation: Rule => Rule.required().max(3)
    //         },
    //       ],
    //       preview: {
    //         select: {
    //           text: 'text',
    //           images: 'images'
    //         },
    //         prepare(selection) {
    //           const {text, images} = selection
    //           return {
    //             title: text,
    //             media: images[0]
    //           }
    //         }
    //       }
    //     },
    //   ],
    //   validation: Rule => Rule.required()
    // },
    {
      title: 'Content Heading Text',
      name: 'contentHeadingText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    // {
    //   title: 'Content Polaroids',
    //   name: 'contentPolaroids',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'Polaroid',
    //       name: 'polaroid',
    //       type: 'object',
    //       icon: FiCamera,
    //       fields: [
    //         {
    //           title: 'Text',
    //           name: 'text',
    //           type: 'string',
    //           description: 'The optional text heading for the polaroid',
    //         },
    //         {
    //           title: 'Images',
    //           name: 'images',
    //           description: 'The images for this polaroid, if 2 are added the 2nd image will rotate in on hover',
    //           type: 'array',
    //           options: {
    //             layout: 'grid',
    //           },
    //           of: [
    //             {
    //               title: 'Image',
    //               name: 'polaroidImage',
    //               type: 'defaultImage',
    //             },
    //           ],
    //           validation: Rule => Rule.required().max(3)
    //         },
    //       ],
    //       preview: {
    //         select: {
    //           text: 'text',
    //           images: 'images'
    //         },
    //         prepare(selection) {
    //           const {text, images} = selection
    //           return {
    //             title: text,
    //             media: images[0]
    //           }
    //         }
    //       }
    //     },
    //   ],
    //   validation: Rule => Rule.required()
    // },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ]
}