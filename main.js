var app = new Vue({
    el: '#root',
    data: {
      menuOptions:[
      {
        label: 'Home',
        type: 'LINK'
      },
      {
        label:'Who We Are',
        type: 'LINK'
      },
      {
        label:'What We Do',
        type: 'LINK'
      },
      {
        label:'Where We Work',
        type: 'LINK'
      },
      {
        label:'Careers',
        type: 'LINK'
      },
      {
        label:'News',
        type: 'LINK'
      },
      {
        label:'Get In Touch Now',
        type: 'BUTTON'
      }
    ],

    newTemplate: [
      {
        icon: 'fas fa-road',
        label: 'Establish Goals',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        icon: 'fas fa-video',
        label: 'Word With A Team',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        icon: 'fas fa-tint',
        label: 'Get Results',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ],

    news:[
      {
        label: 'Why You Need A SEO Agency Now',
        date: 'November 1st, 2017',
        background: 'images/related-service-2-700x441.jpg',
        info: 'ALorem ipsum dolor sit amet, consectetur adipiscing elit. In et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit'
      },
      {
        label: 'SEO Tips For Your Startup',
        date: 'November 1st, 2017',
        background: 'images/related-service-4-700x441.jpg',
        info: 'ALorem ipsum dolor sit amet, consectetur adipiscing elit. In et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit'
      },
      {
        label: 'Image Optimization For Your Site',
        date: 'November 1st, 2017',
        background: 'images/blog-post-6-700x441.jpg',
        info: 'ALorem ipsum dolor sit amet, consectetur adipiscing elit. In et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit'
      }
    ]
    },
});
