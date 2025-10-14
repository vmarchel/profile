import portfolioImg from './images/portfolioImg.png'
import expenseFlowImg from './images/expenseFlowImg.png'
import quotesImg from './images/quotesImg.png'
import adoptatailImg from './images/adoptatailImg.png'


export const projects = [
    {
        id: 1,
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built with React.',
        image: portfolioImg,
        technologies: ['React', 'CSS3', 'Responsive Design'],
        demo: '#'
    },
    {
        id: 2,
        title: 'Expense Tracker',
        description: 'A React-based expense tracking application.',
        image: expenseFlowImg,
        technologies: ['React', 'Material-UI', 'JavaScript'],
        demo: '#'
    },
    {
        id: 3,
        title: 'Quotes Application',
        description: 'An interactive quotes app with full CRUD operations.',
        image: quotesImg,
        technologies: ['JavaScript', 'API', 'HTML5', 'CSS3'],
        demo: '#'
    },
    {
        id: 4,
        title: 'Pet Adoption Website',
        description: 'A responsive website showcasing pet adoption services.',
        image: adoptatailImg,
        technologies: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
        demo: '#'
    }
];