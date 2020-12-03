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

    ourPlans: [
      {
        label: 'Standard',
        currency: '$',
        price: '19',
        rest: '99',
        subs: 'monthly',
        projects: '5 projects',
        storage: '5 GB Storage',
        users: 'Unlimited Users',
        button: 'Start Today',
        buttonType: 'trans-button'
      },
      {
        label: 'Premium',
        currency: '$',
        price: '29',
        rest: '99',
        subs: 'monthly',
        projects: '10 projects',
        storage: '15 GB Storage',
        users: 'Unlimited Users',
        button: 'Start Today',
        buttonType: 'trans-button'
      },
      {
        label: 'Professional',
        currency: '$',
        price: '39',
        rest: '99',
        subs: 'monthly',
        projects: '15 projects',
        storage: '30 GB Storage',
        users: 'Unlimited Users',
        button: 'Start Today',
        buttonType: 'orange-button'
      },
      {
        label: 'Extreme',
        currency: '$',
        price: '59',
        rest: '99',
        subs: 'monthly',
        projects: 'Unlimited projects',
        storage: 'Unlimited Storage',
        users: 'Unlimited Users',
        button: 'Start Today',
        buttonType: 'trans-button'
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
    ],

    feedback:[
      {
        source: 'images/clients_partner_1-200x202.png'
      },
      {
        source: 'images/clients_partner_2-200x202.png'
      },
      {
        source: 'images/clients_partner_3-200x202.png'
      },
      {
        source: 'images/clients_partner_4-200x202.png'
      },
    ],
  },
});
