import { FiHeart, FiCamera } from 'react-icons/fi'

export default {
  title: 'About',
  name: 'about',
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
      rows: 2,
      description: 'The main heading text that appears in the hero',
      validation: Rule => Rule.required()
    },
    {
      title: 'Reel Image',
      name: 'reelImages',
      description: 'The 3 images that appear in the reel, ideally portrait orientation',
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
      validation: Rule => Rule.required().min(3).max(3)
    },
    {
      title: 'About Text',
      name: 'aboutText',
      type: 'text',
      rows: 3,
      description: 'The heading text that appears under (About P.P)',
      validation: Rule => Rule.required()
    },
    {
      title: 'Polaroids',
      name: 'polaroids',
      type: 'array',
      of: [
        {
          title: 'Polaroid',
          name: 'polaroid',
          type: 'object',
          icon: FiCamera,
          fields: [
            {
              title: 'Text',
              name: 'text',
              type: 'string',
              description: 'The optional text heading for the polaroid',
            },
            {
              title: 'Images',
              name: 'images',
              description: 'The images for this polaroid, if 2 are added the 2nd image will rotate in on hover',
              type: 'array',
              options: {
                layout: 'grid',
              },
              of: [
                {
                  title: 'Image',
                  name: 'polaroidImage',
                  type: 'defaultImage',
                },
              ],
              validation: Rule => Rule.required().max(2)
            },
          ],
          preview: {
            select: {
              text: 'text',
              images: 'images'
            },
            prepare(selection) {
              const {text, images} = selection
              return {
                title: text,
                media: images[0]
              }
            }
          }
        },
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'Bio Text',
      name: 'bioText',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Kind Words (Testimonials)',
      name: 'testimonials',
      type: 'array',
      of: [
        {
          title: 'Testimonial',
          name: 'testimonial',
          type: 'object',
          icon: FiHeart,
          fields: [
            {
              title: 'Text',
              name: 'text',
              type: 'text',
              description: 'The actual testimonial quote text',
              rows: 2,
              validation: Rule => Rule.required()
            },
            {
              title: 'Images',
              name: 'images',
              description: 'The images to accompany this testimonial (min / max 3)',
              type: 'array',
              options: {
                layout: 'grid',
              },
              of: [
                {
                  title: 'Image',
                  name: 'testimonialImage',
                  type: 'defaultImage',
                },
              ],
              validation: Rule => Rule.max(3)
            },
            {
              title: 'Instagram Handle',
              name: 'instagramHandle',
              description: '(Optional) add a Instagram handle for this quote (include the @, eg: @luckyluv_86',
              type: 'string',
            }
          ],
          preview: {
            select: {
              text: 'text',
              instagramHandle: 'instagramHandle'
            },
            prepare(selection) {
              const {text, instagramHandle} = selection
              return {
                title: text,
                subtitle: instagramHandle
              }
            }
          }
        },
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ]
}