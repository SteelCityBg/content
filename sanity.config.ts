import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const sharedConfig = {
  projectId: 'tcz7hq3z',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
}

export default defineConfig([
  {
    ...sharedConfig,
    name: 'production',
    title: 'Steel City Website',
    dataset: 'production',
    basePath: '/production',
  },
  {
    ...sharedConfig,
    name: 'staging',
    title: 'Steel City Website (Staging)',
    dataset: 'staging',
    basePath: '/staging',
  },
])
