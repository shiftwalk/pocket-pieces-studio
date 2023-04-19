import { FiMinusCircle, FiMinusSquare } from 'react-icons/fi'

export default {
  title: 'Info',
  name: 'info',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
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
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [
        {
          title: 'Section',
          name: 'section',
          type: 'object',
          icon: FiMinusSquare,
          fields: [
            {
              title: 'Heading',
              name: 'heading',
              type: 'string',
              description: 'The heading for this section, eg: "General" or "Delivery Notes"',
            },
            {
              title: 'Questions',
              name: 'questions',
              type: 'array',
              of: [
                {
                  title: 'Question',
                  name: 'question',
                  type: 'object',
                  icon: FiMinusCircle,
                  fields: [
                    {
                      title: 'Question',
                      name: 'question',
                      type: 'string',
                      description: 'The heading for this question, eg: "How much does delivery cost?"',
                    },
                    {
                      title: 'Answer',
                      name: 'answer',
                      type: 'array', 
                      of: [{type: 'block'}],
                      validation: Rule => Rule.required()
                    },
                  ],
                  preview: {
                    select: {
                      question: 'question',
                      answer: 'answer'
                    },
                    prepare(selection) {
                      const {question, answer} = selection
                      return {
                        title: question,
                        subtitle: answer[0].children[0].text
                      }
                    }
                  }
                },
              ],
              validation: Rule => Rule.required()
            },
          ],
          preview: {
            select: {
              heading: 'heading',
              questions: 'questions'
            },
            prepare(selection) {
              const {heading, questions} = selection
              return {
                title: heading,
                subtitle: `${questions.length} Questions`
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