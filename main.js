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

    ourWork: [
      {
        icon: 'fas fa-link',
        source: 'images/case-study-gallery-3-1-600x450.jpg'
      },
      {
        icon: 'fas fa-link',
        source: 'images/case-study-gallery-2-600x450.jpg'
      },
      {
        icon: 'fas fa-link',
        source: 'images/case-study-gallery-1-1-600x450.jpg'
      },
      {
        icon: 'fas fa-link',
        source: 'images/case-study-gallery-4-1-600x450.jpg'
      },
      {
        icon: 'fas fa-link',
        source: 'images/case-study-gallery-5-1-600x450.jpg'
      },
      {
        icon: 'fas fa-link',
        source: 'images/case-study-gallery-6-1-600x450.jpg'
      },
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

    services: [
      {
        icon: 'fab fa-google',
        label: 'Google SEO',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'Read More',
        arrow: 'fas fa-chevron-right'
      },
      {
        icon: 'fas fa-cog',
        label: 'Brand Strategy',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'Read More',
        arrow: 'fas fa-chevron-right'
      },
      {
        icon: 'fas fa-building',
        label: 'Local SEO',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'Read More',
        arrow: 'fas fa-chevron-right'
      },
      {
        icon: 'far fa-chart-bar',
        label: 'SEO Analysis',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'Read More',
        arrow: 'fas fa-chevron-right'
      },
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
