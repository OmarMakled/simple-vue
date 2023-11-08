const app = Vue.createApp({});
app.component('app', {
    data() {
      return {
        posts: []
      };
    },
    template: `
      <div class="container mx-auto">
        <div class="mb-2" v-for="post in posts" :key="post.id">
          <post-list :post="post"></post-list>
        </div>
      </div>
    `,
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
              const response = await fetch('https://jsonplaceholder.typicode.com/posts');
              
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
          
              this.posts = await response.json();
            } catch (error) {
              console.error('An error occurred:', error);
            }
          }
    }     
});
app.mount('#app');
