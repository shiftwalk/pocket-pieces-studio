import { FiMail, FiStar } from "react-icons/fi"

export default {
  title: 'Contact',
  name: 'contact',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Intro Text',
      name: 'introText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      description: 'The hero image that appears top left, ideally Portrait orientation',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Emails',
      name: 'emails',
      type: 'array',
      of: [
        {
          title: 'Email',
          name: 'emailItem',
          type: 'object',
          icon: FiMail,
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
              description: 'The title for this email address, eg: "General Enquiries", or "Hiring Enquiries"',
              validation: Rule => Rule.required()
            },
            {
              title: 'Address',
              name: 'address',
              description: 'The address of this email address, eg: "hello@pocketpieces.com"',
              type: 'email',
              validation: Rule => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'title',
              address: 'address'
            },
            prepare(selection) {
              const {title, address} = selection
              return {
                title: title,
                subtitle: address
              }
            }
          }
        },
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'Socials',
      name: 'socials',
      type: 'array',
      of: [
        {
          title: 'Social',
          name: 'socialItem',
          type: 'object',
          icon: FiStar,
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
              description: 'The title for this social channel, eg: "Instagram" or "Twitter"',
              validation: Rule => Rule.required()
            },
            {
              title: 'URL',
              name: 'url',
              description: 'The url for this social channel, eg: "https://www.instagram.com/_pocketpieces_/"',
              type: 'url',
              validation: Rule => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'title',
              url: 'url'
            },
            prepare(selection) {
              const {title, url} = selection
              return {
                title: title,
                subtitle: url
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