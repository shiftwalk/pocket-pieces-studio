import { defineConfig } from "sanity"
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'
import { Logo } from './plugins/logo/Logo'
import { media, mediaAssetSource } from 'sanity-plugin-media'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { customTheme } from './utils/theme'
import { defaultDocumentNode } from './utils/defaultDocumentNode'

const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["home", "about", "credits", "info", "contact", "privacy"])


export default defineConfig({
  title: "Pocket Pieces",
  projectId: "u1c1jefd",
  dataset: "production",
  theme: customTheme,
  plugins: [
    deskTool({
      defaultDocumentNode,
      structure: deskStructure
    }),
    visionTool(),
    media(),
    vercelDeployTool()
  ],
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    image: {
      assetSources: () => [mediaAssetSource]
    },
    file: {
      assetSources: previousAssetSources => {
        return previousAssetSources.filter(assetSource => assetSource !== mediaAssetSource)
      }
    }
  },
  tools: (prev) => {
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
  schema: {
    types: schemas,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  studio: {
    components: {
      logo: Logo
    }
  },
  document: {
    productionUrl: async (prev, context) => {
      const { dataset, document} = context

      if (document._type === 'home') {
        const params = new URLSearchParams()
        params.set('preview', 'true')
        params.set('slug', '/')

        return `http://localhost:3000/${params}`
      } else {
        const params = new URLSearchParams()
        params.set('preview', 'true')
        params.set('slug', document._type)

        return `http://localhost:3000/${params}`
      }
    },
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != 'settings')
      }
      return prev
    },
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});