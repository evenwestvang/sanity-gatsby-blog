export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebd9e6725a5f101770312af',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-oy4fwxy9',
                  apiId: '10c565fc-e660-49e9-bdf2-089ab750416a'
                },
                {
                  buildHookId: '5ebd9e679cbc31eebfebab5d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tfria7w3',
                  apiId: 'e98cb054-d371-493e-a435-b33fc92c0426'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evenwestvang/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tfria7w3.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
