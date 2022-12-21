const {
    createApp
} = Vue;

createApp({
    data() {
        return {
            message: 'hello world!',
            image: 'https://picsum.photos/seed/picsum/536/354',
            MyImageClass: 'w-100'
        }
    }
}).mount('#app')