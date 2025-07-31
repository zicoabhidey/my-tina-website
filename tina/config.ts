import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // or your default branch
  clientId: process.env.TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Page",
        path: "",
        format: "json",
        fields: [
          {
            type: "string",
            name: "heading",
            label: "Heading",
          },
        ],
        // This is a single page, so we will have a single document
        // that is always loaded.
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
    ],
  },
});