import { FiMinusCircle, FiMinusSquare } from 'react-icons/fi'

export default {
  title: 'Globals',
  name: 'globals',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Size Guide: Clothing Desktop Image',
      name: 'sizeGuideClothingDesktopImage',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Size Guide: Clothing Mobile Image',
      name: 'sizeGuideClothingMobileImage',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Size Guide: Shoes Desktop Image',
      name: 'sizeGuideShoesDesktopImage',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Size Guide: Shoes Mobile Image',
      name: 'sizeGuideShoesMobileImage',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Condition Guide: Text',
      name: 'conditionGuideText',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      title: 'Condition Guide: Conditions',
      name: 'conditions',
      type: 'array',
      of: [
        {
          title: 'Condition',
          name: 'condition',
          type: 'object',
          icon: FiMinusCircle,
          fields: [
            {
              title: 'Heading',
              name: 'heading',
              type: 'string',
              description: 'The heading for this condition, eg: "In Good Shape"',
            },
            {
              title: 'Text',
              name: 'text',
              type: 'text',
              rows: 2,
              validation: Rule => Rule.required()
            },
            {
              title: 'Stars',
              name: 'stars',
              type: 'string',
              options: {
                list: [
                  { title: '1', value: '1' },
                  { title: '2', value: '2' },
                  { title: '3', value: '3' },
                  { title: '4', value: '4' },
                  { title: '5', value: '5' },
                  { title: '6', value: '6' },
                ],
              },
            },
          ],
          preview: {
            select: {
              heading: 'heading',
              text: 'text'
            },
            prepare(selection) {
              const {heading, text} = selection
              return {
                title: heading,
                subtitle: text
              }
            }
          }
        },
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'Condition Guide: Image',
      name: 'conditionGuideImage',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ]
}