<script>
  export default {
    name: 'modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop w-full h-screen fixed z-50 top-0 right-0 top-0 bottom-0 flex items-center justify-center content-center">
      <div class="modal w-1/3 overflow-auto flex flex-col bg-white p-10 rounded-lg shadow-2xl text-center"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header text-black text-3xl font-bold mb-3"
          id="modalTitle"
        >
          <slot name="header">
            This is the default tile!

            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body relative text-black text-lg"
          id="modalDescription"
        >
          <slot name="body">
            Body
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            Footer
            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<style>
  .modal-backdrop {
    background-color: #cc2222a6;
  }
</style>