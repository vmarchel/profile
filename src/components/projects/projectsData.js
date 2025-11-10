import portfolioImg from './images/portfolioImg.png'
import expenseFlowImg from './images/expenseFlowImg.png'
import wisdomsImg from './images/wisdomsImg.jpg'
import adoptatailImg from './images/adoptatailImg.png'


export const projects = [

    {
        id: 1,
        title: 'Expense Tracker',
        description: 'A React-based expense tracking application for managing personal finances. Implements full CRUD operations, state management with React Hooks, and Material-UI components for a polished, modern interface. Features expense categorization and real-time data updates.',
        image: expenseFlowImg,
        technologies: ['React', 'Material-UI', 'JavaScript', 'Component-based Architecture'],
        demo: 'https://expensefl0w.netlify.app'
    },
    {
        id: 2,
        title: 'Wisdoms - Quotes App',
        description: 'A quotes application that integrates with the DummyJSON API to fetch and display inspirational quotes. Features search functionality with keyword filtering, local storage for saving favorite quotes and a clean UI.',
        image: wisdomsImg,
        technologies: ['JavaScript', 'REST API', 'HTML5', 'CSS3'],
        demo: 'https://wisdoms-app.netlify.app'
    },
    {
        id: 3,
        title: 'Pet Adoption Website',
        description: 'A pet adoption website showcasing clean HTML and CSS fundamentals. Clean design with thoughtful layout and spacing',
        image: adoptatailImg,
        technologies: ['HTML5', 'CSS3', 'Responsive Design'],
        demo: 'https://adopt-a-tail.netlify.app'
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description: 'A responsive portfolio website showcasing projects and skills. Built with React and features smooth scrolling navigation, dynamic project cards, and mobile-optimized design.',
        image: portfolioImg,
        technologies: ['React', 'CSS3', 'Responsive Design', 'Javascript'],
        demo: 'https://valentinamarchel.com'
},
];