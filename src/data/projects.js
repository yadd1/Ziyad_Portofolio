// Shape per project (all fields required unless noted):
// { id, title: {id,en}, summary: {id,en}, details: {id,en}, tags: [string],
//   thumbnail: string|null, demoUrl?: string|null, repoUrl?: string|null }

export const projects = [
    {
        id: 'project-1',
        title: {
            id: 'Sales Dashboard',
            en: 'Sales Dashboard',
        },
        summary: {
            id: 'Dashboard untuk memantau performa penjualan.',
            en: 'A dashboard to monitor sales performance.',
        },
        details: {
            id: 'Dashboard interaktif untuk memantau performa penjualan, melihat tren penjualan, dan memahami pencapaian bisnis melalui visualisasi data.',
            en: 'An interactive dashboard to monitor sales performance, identify sales trends, and understand business performance through data visualization.',
        },
        tags: ['Excel', 'Dashboard', 'Data Analysis'],
        thumbnail: '',
        demoUrl: 'https://drive.google.com/file/d/1KzFoe6ybZ7r1Dw4SZKNPYtNZ4kQet40T/view?usp=drive_link',
        repoUrl: '',
    },
    {
        id: 'project-2',
        title: {
            id: 'Portfolio Website',
            en: 'Portfolio Website',
        },
        summary: {
            id: 'Website portfolio personal dengan desain modern.',
            en: 'A personal portfolio website with a modern design.',
        },
        details: {
            id: 'Dashboard interaktif untuk memantau performa penjualan, melihat tren penjualan, dan memahami pencapaian bisnis melalui visualisasi data.',
            en: 'An interactive dashboard to monitor sales performance, identify sales trends, and understand business performance through data visualization.',
        },
        tags: ['React', 'Tailwind CSS', 'JavaScript'],
        thumbnail: '',
        demoUrl: '',
        repoUrl: '',
    },
    {
        id: 'project-3',
        title: {
            id: 'Customer Analysis',
            en: 'Customer Analysis',
        },
        summary: {
            id: 'Analisis data untuk memahami perilaku pelanggan.',
            en: 'Data analysis to understand customer behavior.',
        },
        details: {
            id: 'Dashboard interaktif untuk memantau performa penjualan, melihat tren penjualan, dan memahami pencapaian bisnis melalui visualisasi data.',
            en: 'An interactive dashboard to monitor sales performance, identify sales trends, and understand business performance through data visualization.',
        },
        tags: ['Excel', 'Data Analysis', 'Business'],
        thumbnail: '',
        demoUrl: '',
        repoUrl: '',
    },
]

