import { defineConfig } from "sanity"
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'
import { Logo } from './plugins/logo/Logo'
import { media, mediaAssetSource } from 'sanity-plugin-media'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { customTheme } from './utils/theme'


export default defineConfig({
  title: "Pocket Pieces",
  projectId: "u1c1jefd",
  dataset: "production",
  theme: customTheme,
  plugins: [
    deskTool({
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
  },
  studio: {
    components: {
      logo: Logo
    }
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return []
      }
      return null
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'settings') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      return prev
    },
  },
});