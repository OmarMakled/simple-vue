const app = Vue.createApp({});
app.component('app', {
    data() {
      return {
        retailes: []
      };
    },
    template: `
      <div class="container mx-auto">
        <div class="grid grid-cols-3 gap-4">
            <div class="bg-gray-300 p-4" v-for="retaile in retailes" :key="retaile.id">
                <retaile-list :retaile="retaile"></retaile-list> 
            </div>
        </div>
    </div>
    `,
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
              const response = await fetch('http://localhost:3000/api/retailes');
              
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
          
              this.retailes = await response.json();
            } catch (error) {
              console.error('An error occurred:', error);
            }
          }
    }     
});
app.mount('#app');
