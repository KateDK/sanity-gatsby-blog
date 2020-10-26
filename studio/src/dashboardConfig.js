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
                  buildHookId: '5f97098c0e5ee94a8fc2ff32',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3wpy389n',
                  apiId: '84138604-f301-4965-ac55-7caf208b871d'
                },
                {
                  buildHookId: '5f97098c415e215902d1cd49',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-evy6ksxm',
                  apiId: '364cb848-3777-42ac-8c34-58370e501132'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KateDK/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-evy6ksxm.netlify.app', category: 'apps' }
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
