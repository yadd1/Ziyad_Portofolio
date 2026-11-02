// Shape per project:
// { id, title, summary, details, tags, thumbnail, links: [] }

export const projects = [
    {
        id: 'project-1',
        title: {
            id: 'Movie Sales Analysis Dashboard',
            en: 'Movie Sales Analysis Dashboard',
        },
        summary: {
            id: 'Dashboard interaktif berbasis Power BI yang dikembangkan untuk menganalisis performa penjualan bioskop menggunakan 20.000 data transaksi simulasi dari Juni 2025. Project ini mencakup analisis tren pendapatan, penjualan tiket, performa film, dan perbandingan studio untuk menemukan insight bisnis yang dapat mendukung pengambilan keputusan berbasis data.',
            en: 'An interactive Power BI dashboard developed to analyze cinema sales performance using 20,000 simulated transaction records from June 2025. The project explores revenue trends, ticket sales, movie performance, and studio comparisons to uncover meaningful business insights and support data-driven decision-making.',
        },
        details: {
            id: `
Project ini merupakan project Power BI pertama saya yang dikembangkan melalui Karirnex Bootcamp menggunakan 20.000 data transaksi bioskop simulasi selama Juni 2025.

Dashboard terdiri dari tiga halaman utama:

- **Overview:** Gambaran umum pendapatan dan penjualan tiket.
- **Movie Analysis:** Analisis performa dan penjualan setiap film.
- **Studio & Sales Analysis:** Perbandingan performa studio dan pola penjualan.

**Key Insights:**

- Rata-rata pendapatan harian pada akhir pekan lebih tinggi dibandingkan hari kerja.
- Harga tiket rata-rata tertimbang pada akhir pekan juga lebih tinggi.
- Perbedaan pendapatan terlihat lebih berkaitan dengan harga tiket dibandingkan volume penjualan tiket.

**Tools:** Power BI, Power Query, DAX, dan Microsoft Excel.

*Catatan: Dataset merupakan data simulasi dari materi pembelajaran Karirnex Bootcamp, bukan data transaksi bioskop aktual.*
    `,
            en: `
This is my first Power BI project, developed as part of my learning experience through Karirnex Bootcamp. It uses 20,000 simulated cinema transaction records from June 2025.

The dashboard consists of three main pages:

- **Overview:** Provides a summary of revenue and ticket sales performance.
- **Movie Analysis:** Examines the sales performance of individual movies.
- **Studio & Sales Analysis:** Compares studio performance and explores sales patterns.

**Key Insights:**

- Average daily revenue was higher on weekends than on weekdays.
- The weighted average ticket price was also higher on weekends.
- Revenue differences appeared to be more closely associated with ticket prices than ticket sales volume.

**Tools:** Power BI, Power Query, DAX, and Microsoft Excel.

*Note: The dataset was provided through Karirnex Bootcamp learning materials and contains simulated data, not actual cinema transactions.*
    `,
        },
        tags: ['Power BI', 'Dashboard', 'Data Analysis'],
        thumbnail: '/img/Project/Movie_Sales_Analysis_Dashboard_page-0001.jpg',
        links: [

            {
                label: 'GitHub',
                url: 'https://github.com/yadd1/Movie-sales-performance-dashboard',
            },
            {
                label: 'Google Drive',
                url: 'https://drive.google.com/drive/folders/14mt1jnpvnJkjboxgv8UtZ1OkpW4cZKIW?usp=sharing',
            },

        ],
    },
    {
        id: 'project-2',
        title: {
            id: 'Portfolio Website',
            en: 'Portfolio Website',
        },
        summary: {
            id: 'PETDULI merupakan aplikasi mobile yang dirancang untuk memudahkan pemilik hewan peliharaan menemukan petshop terdekat, membeli kebutuhan hewan, serta mengakses layanan grooming, konsultasi, dan edukasi dalam satu platform.',
            en: 'PETDULI is a mobile app UI/UX design project that helps pet owners discover nearby pet shops, purchase pet supplies, and access grooming, consultation, and educational services in one platform.',
        },
        details: {
            id: 'Project skripsi ini berfokus pada perancangan UI/UX aplikasi PETDULI berdasarkan kebutuhan dan preferensi pemilik hewan peliharaan.\n\nAplikasi ini menyediakan beberapa fitur utama:\n- Shop: Pembelian produk kebutuhan hewan.\n- Petshop: Menemukan petshop terdekat.\n- PetEdu: Mengakses konten edukasi.\n- MyPets: Mengelola informasi hewan peliharaan.\n\nTools: Figma\nHasil Project: Desain UI/UX Aplikasi Mobile.',

            en: 'This undergraduate thesis project focuses on designing the PETDULI app UI/UX based on pet owners’ needs and preferences.\n\nThe application provides several key features:\n- Shop: Purchasing pet supplies.\n- Petshop: Discovering nearby pet shops.\n- PetEdu: Accessing educational content.\n- MyPets: Managing pet information.\n\nTools: Figma\n\nDeliverable: Mobile App UI/UX Design.',
        },
        tags: ['Figma', 'UI/UX Design', 'Mobile App'],
        thumbnail: '/img/Project/PETDULIpro.png',
        links: [
            {
                label: 'Figma',
                url: 'https://www.figma.com/design/jmN95KAC9u7LAi3CR7hWob/Petduli?node-id=0-1&t=H6lVUvul30N6ntmt-1',
            },
        ],
    },
    {
        id: 'project-3',
        title: {
            id: 'COMING SOON',
            en: 'COMING SOON',
        },
        summary: {
            id: 'COMING SOON',
            en: 'COMING SOON',
        },
        details: {
            id: 'COMING SOON',
            en: 'COMING SOON',
        },
        tags: ['Excel', 'Data Analysis', 'Business'],
        thumbnail: '/img/Project/soon.png',
        links: [],
    },
]