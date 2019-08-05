<template>
  <div class="contact">
      <div class="w-full max-w-lg mx-auto">
        <form
          name="contact"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          class="w-full max-w-lg mx-auto"
        >

        {{message_type}}

        <input type="hidden" name="form-name" value="contact" />

          <div class="flex flex-wrap -mx-3 mb-3">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="name">
                Your Name
              </label>
              <input name="name" v-model="formData.name" class="border border-gray-300 appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-400" id="name" type="text">
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="email">
                Your Email
              </label>
              <input name="email" v-model="formData.email" class="border border-gray-300 appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-400" id="email" type="text">
            </div>
          </div>

          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div class="message-wrapper mb-4">
            <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="message">Message</label>
            <textarea name="message" v-model="formData.message" class="border border-gray-300 appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-400" rows="10" id="message"></textarea>
          </div>
          <button type="submit" class="block w-full bg-black hover:bg-white text-white font-bold py-4 px-0 rounded-full focus:outline-none">Send Your Message</button>
        </form>
      </div>
  </div>
</template>
<style>
.input {
  @apply border border-gray-300 appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight;
}
.input:focus {
  @apply outline-none border-gray-400 bg-gray-100;
}
</style>
<script>
export default {
  name: 'Contact',
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.$router.push('/success'))
      .catch(error => alert(error))
    }
  }
}
</script>
