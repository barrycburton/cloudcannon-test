import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    settings: singleton({
      label: 'Settings',
      schema: {
        title: fields.text({ name: { label: 'Title' } }),
        name: fields.text({ name: { label: 'Name' } }),
      },
    }),
  },
  collections: {
    newsletter: collection({
      label: 'Newsletter',
      slugField: 'title',
      path: 'src/content/newsletter/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.datetime({ name: { label: 'Date' } }),
        categories: fields.array(
          fields.text({ label: 'Category' }),
          {
            label: 'Categories',
            itemLabel: props => props.value
          }
        ),
        draft: fields.checkbox({
          label: 'Draft',
        }),
        image: fields.image({
          label: 'Image',
          directory: 'public/uploads',
          publicPath: 'uploads/',
        }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
          options: {
            image: {
              directory: 'public/uploads',
              publicPath: 'uploads/',
            },
          },
        }),
      },
    }),
    work: collection({
      label: 'Work',
      slugField: 'title',
      path: 'src/content/work/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.datetime({ name: { label: 'Date' } }),
        categories: fields.array(
          fields.text({ label: 'Category' }),
          {
            label: 'Categories',
            itemLabel: props => props.value
          }
        ),
        featured: fields.checkbox({
          label: 'Featured',
        }),
        image: fields.image({
          label: 'Image',
          directory: 'public/uploads',
          publicPath: 'uploads/',
        }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
          options: {
            image: {
              directory: 'public/uploads',
              publicPath: 'uploads/',
            },
          },
        }),
      },
    }),
  },
});
