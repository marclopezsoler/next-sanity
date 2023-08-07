import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: "ws4ofw5s",
  dataset: "production",
  title: "My personal website",
  apiVersion: "2023-08-08",
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {types: schemas}
});

export default config;
