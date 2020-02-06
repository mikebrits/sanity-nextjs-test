export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e3c8a0d31a9ac7509548fab',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-test-studio-8wpdx4kt',
                  apiId: '93c2b88a-88cb-4bcc-99c5-543343c2f118'
                },
                {
                  buildHookId: '5e3c8a0dc5205fcc0a1f6483',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-test-web-of9yjaa9',
                  apiId: 'e738ed9d-8fba-4427-acb0-2aba2a89897c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikebrits/sanity-nextjs-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-test-web-of9yjaa9.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
