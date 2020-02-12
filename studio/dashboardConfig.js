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
                  buildHookId: '5e439684c3c3ddb27b04a8a7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-51x54cah',
                  apiId: '6e8a9453-7c74-415c-b320-baf70f4996f5'
                },
                {
                  buildHookId: '5e43968521ab927621148b54',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hrxd44ny',
                  apiId: '02452e91-fd55-4bec-9fc6-5b40350c70d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MarLapuz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hrxd44ny.netlify.com', category: 'apps'}
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
