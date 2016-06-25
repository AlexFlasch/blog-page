var baseUrl = 'https://blog-dev-f2132.firebaseio.com/';

var baseRef = new Firebase(baseUrl);
var blogPostRef = baseRef.child('blogPosts');

Vue.component('lightbox-album', {
	template: '#lightbox-album',
	data: function() {
		return {
			modalShown: false,
			store: store
		};
	},
	props: {
		data: Array
	},
	methods: {
		openLightbox: function() {
			store.images = this.data;
			store.currentImage = 0;
			this.$root.$refs.lightboxModal.open();
		}
	},
	computed: {

	}
});

Vue.component('blog-post', {
	template: '#blog-post',
    props: {
    	data: Object
    },
    methods: {

    },
    computed: {
    	titleImage: function() {
    		return {
    			background: 'url(' + this.data.titleImg + ')'
    		};
    	}
    }
});

var store = {
	images: [],
	currentImage: 0
};

var vm = new Vue({
    el: '#app',
    firebase: {

    },
	components: VueMdl.components,
	directives: VueMdl.directives,
    data: {
    	blogPosts: [],
		store: store
    },
    methods: {

    },
    computed: {

    },
    ready: function() {
        var that = this;

        baseRef.on('value', function(snapshot) {
        	that.$set('blogPosts', snapshot.val().blogPosts);
        });
    }
});
