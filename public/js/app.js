var blogPost = Vue.extend({
	template: '#blog-post',
    props: {
    	data: Object
    },
    components: {
    	'waterfall': Waterfall.waterfall,
        'waterfall-slot': Waterfall.waterfallSlot,
    },
    methods: {
   		
    },
    computed: {
    	titleImage: function() {
    		return {
    			background: 'url(' + this.data.titleImg + ')'
    		}
    	}
    }
});

var baseUrl = 'https://blog-af387.firebaseio.com/';

var baseRef = new Firebase(baseUrl);
var blogPostRef = new Firebase('https://blog-af387.firebaseio.com/blogPosts');

new Vue({
    el: '#app',
    firebase: {
    	
    },
    components: {
        'blog-post': blogPost
    },
    data: {
    	blogPosts: []
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