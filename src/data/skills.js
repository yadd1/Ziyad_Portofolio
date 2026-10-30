import { image } from "motion/react-client"

export const skillGroups = [
    {
        id: 'tools-technologies',
        title: {
            id: 'Tools & Teknologi',
            en: 'Tools & Technologies',
        },
        skills: [
            {
                id: 'python',
                name: 'Python',
                image: '/img/Skills/python.svg'
            },

            {
                id: 'sql',
                name: 'SQL',
                image: '/img/Skills/sql.svg'
            },

            { id: 'bigquery', name: 'Google BigQuery', image: '/img/Skills/BigQuery.svg' },
            { id: 'excel', name: 'Microsoft Excel', image: '/img/Skills/excel.svg' },
            { id: 'looker', name: 'Looker Studio', image: '/img/Skills/Looker.svg' },
            { id: 'tableau', name: 'Tableau', image: '/img/Skills/tableau.svg' },
            { id: 'java', name: 'Java', image: '/img/Skills/java.svg' },
            { id: 'html', name: 'HTML', image: '/img/Skills/html.svg' },
            { id: 'css', name: 'CSS', image: '/img/Skills/css.svg' },
            { id: 'bootstrap', name: 'Bootstrap', image: '/img/Skills/Bootstrap.svg' },
            { id: 'tailwind', name: 'Tailwind CSS', image: '/img/Skills/Tailwind.svg' },
            { id: 'figma', name: 'Figma', image: '/img/Skills/figma.svg' },
            { id: 'canva', name: 'Canva', image: '/img/Skills/Canva.svg' },
        ],
    },
    {
        id: 'data-analytics',
        title: {
            id: 'Data & Analytics',
            en: 'Data & Analytics',
        },
        skills: [
            { id: 'data-analysis', name: 'Data Analysis', icon: 'chart' },
            { id: 'eda', name: 'Exploratory Data Analysis', icon: 'search' },
            { id: 'data-cleaning', name: 'Data Cleaning', icon: 'filter' },
            { id: 'data-transformation', name: 'Data Transformation', icon: 'workflow' },
            { id: 'data-visualization', name: 'Data Visualization', icon: 'pie' },
            { id: 'dashboard', name: 'Dashboard Development', icon: 'layout' },
            { id: 'normalization', name: 'Data Normalization', icon: 'layers' },
            { id: 'clustering', name: 'Clustering', icon: 'network' },
        ],
    },
]

export const softSkills = [
    {
        id: 'communication',
        name: { id: 'Komunikasi', en: 'Communication' },
        icon: 'message',
    },
    {
        id: 'teamwork',
        name: { id: 'Kerja Tim', en: 'Teamwork' },
        icon: 'users',
    },
    {
        id: 'discipline',
        name: { id: 'Disiplin', en: 'Discipline' },
        icon: 'target',
    },
    {
        id: 'adaptability',
        name: { id: 'Adaptabilitas', en: 'Adaptability' },
        icon: 'refresh',
    },
    {
        id: 'detail-oriented',
        name: { id: 'Berorientasi pada Detail', en: 'Detail-oriented' },
        icon: 'scan',
    },
]
