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
        <div class="flex items-center justify-center mb-4">
          <PrettyRadio name="message_type" type="radio" v-model="radioValue" value="message" checked="1" class="p-default p-curve mr-5">Say Hello</PrettyRadio>
          <PrettyRadio name="message_type" type="radio" v-model="radioValue" value="quote" class="p-default p-curve">Request a Quote</PrettyRadio>
        </div>

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

          <div v-if="radioValue === 'quote'">

            <div class="flex flex-wrap -mx-3 mb-3">
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="project_t">
                  Project Type
                </label>
                <div class="relative">
                  <select v-model="formData.project_type" name="project_type" class="border border-gray-300 appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-400">
                     <option class="p-2">WordPress Site</option>
                     <option class="p-2">Static Site</option>
                     <option class="p-2">Web / UI Design</option>
                     <option class="p-2">Site Review</option>
                     <option class="p-2">Mentoring</option>
                     <option class="p-2">Advice</option>
                   </select>
                   <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="name">
                  Estimated Budget (in USD)
                </label>
                <input name="budget" v-model="formData.budget" class="border border-gray-300 appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-400" id="budget" type="text">
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-3">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="website">
                  Current Website (if any)
                </label>
                <input name="website" v-model="formData.website" class="border border-gray-300 appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-400" id="website" type="text">
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="timeline">
                  Project Timeline
                </label>
                <input class="border border-gray-300 appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-400" id="timeline" type="text">
              </div>
            </div>

          </div>

          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div class="message-wrapper mb-4">
            <label v-if="radioValue === 'quote'" class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="message">Describe Your Project </label>
            <label v-if="radioValue === 'message'"  class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="message">Message</label>
            <textarea name="message" v-model="formData.message" class="border border-gray-300 appearance-none block w-full bg-white text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-400" rows="10" id="message"></textarea>
          </div>
          <button type="submit" class="block w-full bg-black hover:bg-white text-white font-bold py-4 px-0 rounded-full focus:outline-none"><span v-if="radioValue === 'quote'">Request Your Quote</span><span v-if="radioValue === 'message'">Send Your Message</span></button>
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
.pretty * {
  box-sizing:border-box;
}
.pretty {
  position:relative;
  display:inline-block;
  margin-right:1em;
  white-space:nowrap;
  line-height:1;
}
.pretty input {
  position:absolute;
  left:0;
  top:0;
  min-width:1em;
  width:100%;
  height:100%;
  z-index:2;
  opacity:0;
  cursor:pointer;
  margin:0;
  padding:0;
}
.pretty .state label {
  position:initial;
  display:inline-block;
  font-weight:400;
  text-indent:1.7em;
  min-width:calc(1em+2px);
  margin:0 15px 0 0;
}
.pretty .state label:after,
.pretty .state label:before {
  content:' ';
  width:20px;
  height:20px;
  display:block;
  box-sizing:border-box;
  border-radius:3px;
  border:1px solid transparent;
  z-index:0;
  position:absolute;
  left:0;
  top:-2px;
  background-color:transparent;
}
.pretty .state label:before {
  border-color:#e2e8f0;
}
.pretty.p-default.p-fill .state label:after {
  -webkit-transform:scale(1);
  -ms-transform:scale(1);
  transform:scale(1);
}
.pretty.p-default .state label:after {
  -webkit-transform:scale(.6);
  -ms-transform:scale(.6);
  transform:scale(.6);
}
.pretty input:checked~.state label:before,
.pretty.p-toggle .state label:before {
  border-color: #222;
}
.pretty.p-default input:checked~.state label:after {
  background: #111;
}
.pretty.p-curve .state label:after,.pretty.p-curve .state label:before {
  border-radius:20%;
}
</style>
<script>
import PrettyRadio from 'pretty-checkbox-vue/radio';

export default {
  components: {
    PrettyRadio
  },
  name: 'Contact',
  data() {
    return {
      radioValue: 'message',
      message_type: '',
      message_type: this.radioValue,
      formData: {},
    }
  },
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
