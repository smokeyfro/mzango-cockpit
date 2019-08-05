<Layout class="bg-white">
  <main class="p-10 relative z-10 bg-white mx-10 shadow-2xl">
    <header>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1">Contact</h1>
        <p class="text-black text-lg sm:text-3xl">Got a project you'd like to discuss? Send a message to hello@mzango.com</p>
        <hr class="border border-gray-200 mt-10 mb-10" style="width:510px;" />
      </header>
      <article class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto pb-10">
        <h2 class="text-center md:text-2xl mt-20">Or say hello on social media</h2>
        <nav class="my-2 text-center mb-10">
          <a href="https://www.youtube.com/channel/UCA_zBs_qht33mT74LHD4Ptg" width="24" height="24" class="inline-block mr-3" target="_blank" rel="nofollow noopener"><g-image src="~/assets/youtube.png" alt="github" immediate="true" /></a>
          <a href="https://instagram.com/thefoodiegardener" width="24" height="24" class="inline-block mr-3" target="_blank" rel="nofollow noopener"><g-image src="~/assets/instagram.png" alt="github" immediate="true" /></a>
          <a href="https://twitter.com/connectr" width="24" height="24" class="inline-block mr-3" target="_blank" rel="nofollow noopener"><g-image src="~/assets/twitter.png" alt="github" immediate="true" /></a>
          <a href="https://github.com/devignerforhire" width="24" height="24" class="inline-block mr-3" target="_blank" rel="nofollow noopener"><g-image src="~/assets/github.png" alt="github" immediate="true" /></a>
        </nav>
      </article>
    </main>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'

export default {
  metaInfo () {
    return {
      title: 'Conact',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: ''
        },

        { property: "og:type", content: 'article' },
        { property: "og:title", content:'Contact' },
        { property: "og:description", content: '' },
        { property: "og:url", content: `${this.config.siteUrl}/contact/` },
        { property: "og:image", content: '/images/bleda-card.png' },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: 'Contact' },
        { name: "twitter:description", content: '' },
        { name: "twitter:site", content: "@connectr" },
        { name: "twitter:creator", content: "@connectr" },
        { name: "twitter:image", content: '/images/bleda-card.png' },
      ],
    }
  },
  computed: {
    config () {
      return config
    },
  },
}
</script>
