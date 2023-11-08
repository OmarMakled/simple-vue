app.component('post-list', {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    template: `
    <div>
          {{ post.title }} . {{ post.body }}
    </div>
    `
});