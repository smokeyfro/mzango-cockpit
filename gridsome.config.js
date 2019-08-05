class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  siteName: 'Mzango',
  siteDescription: 'Backpackers Guide to South Africa',
  siteUrl: 'https://mzango.com',
  titleTemplate: `%s | Mzango`,
  icon: 'src/favicon.png',
  plugins: [
    {
      use: '~/src/plugins/source-cockpit',
        options: {
          accessToken: process.env.ACCESSTOKEN,
          host: process.env.APIHOST,
          routes: {
            post: '/mag/:slug',
            place: '/explore/:slug',
            province: '/provinces/:slug',
            host: '/hosts/:slug',
            bucketlist: '/blucklists/:slug',
            tag: '/mag/:slug',
            topic: '/mag/:slug',
            attraction: '/see/:slug',
            attraction_type: '/all/:slug',
            host: '/stay/:slug',
            event: '/events/:year/:month/:slug',
            event_type: '/events/:slug',
            activity: '/go/:slug'
          }
        }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-143897094-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'CockpitPost',
        feedOptions: {
          title: 'Mzango - Backpackers Guide to South Africa',
          feed_url: 'https://mzango.com/feed.xml',
          site_url: 'https://mzango.com'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://mzango.com/' + node.slug,
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'feed.xml'
        }
      }
    },
  ],
  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('postcss-import'),
          require('postcss-nested'),
          require('tailwindcss'),
        ])

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(...[
            require('@fullhuman/postcss-purgecss')({
              content: [
                'src/assets/**/*.css',
                'src/**/*.vue',
                'src/**/*.js'
              ],
              extractors: [
                {
                  extractor: TailwindExtractor,
                  extensions: ['css', 'vue', 'js']
                }
              ],
              whitelistPatterns: [/shiki/]
            }),
          ])
        }

        return options
      })
  },
}
