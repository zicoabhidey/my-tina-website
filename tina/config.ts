import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "media",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Page",
        path: "content", // Points to the 'content' folder
        format: "json",
        fields: [
          {
            type: "string",
            name: "heading",
            label: "Heading",
            isTitle: true,
            required: true,
          },
        ],
        ui: {
          // Don't allow creating new files in this collection
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
    ],
  },
});
