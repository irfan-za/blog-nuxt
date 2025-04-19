const posts= [
    {
      id: 1,
      title: "Mengenal Nuxt 3: Framework Vue yang Powerful",
      slug: "mengenal-nuxt-3",
      excerpt: "Pelajari dasar-dasar Nuxt 3 dan kenapa framework ini cocok untuk membuat aplikasi modern.",
      content: "Ini adalah konten lengkap dari artikel Mengenal Nuxt 3...",
      author: "Admin",
      createdAt: "2025-04-18"
    },
    {
      id: 2,
      title: "Cara Menggunakan useFetch di Nuxt 3",
      slug: "cara-menggunakan-usefetch",
      excerpt: "Tutorial tentang bagaimana menggunakan useFetch untuk mengambil data di Nuxt 3.",
      content: "Penjelasan lengkap tentang useFetch dan contoh penggunaannya...",
      author: "Admin",
      createdAt: "2025-04-17"
    },
    {
      id: 3,
      title: "Perbedaan Layout dan Page di Nuxt",
      slug: "perbedaan-layout-dan-page",
      excerpt: "Bingung dengan layout dan page di Nuxt? Yuk simak perbedaannya!",
      content: "Layout digunakan untuk struktur global, sedangkan page adalah rute tertentu...",
      author: "Admin",
      createdAt: "2025-04-16"
    },
    {
      id: 4,
      title: "Membuat Komponen Reusable di Nuxt 3",
      slug: "komponen-reusable-nuxt",
      excerpt: "Tips dan trik membuat komponen yang bisa digunakan ulang di Nuxt.",
      content: "Agar code kamu DRY, gunakan komponen yang bisa dipakai ulang...",
      author: "Admin",
      createdAt: "2025-04-15"
    },
    {
      id: 5,
      title: "Routing Otomatis di Nuxt 3",
      slug: "routing-otomatis-nuxt",
      excerpt: "Tidak perlu buat router manual! Nuxt otomatis mendeteksi file di folder pages.",
      content: "Dengan hanya menaruh file di folder pages, Nuxt akan buat routing otomatis...",
      author: "Admin",
      createdAt: "2025-04-14"
    },
    {
      id: 6,
      title: "Menggunakan Tailwind CSS di Nuxt 3",
      slug: "tailwind-css-di-nuxt",
      excerpt: "Kombinasi Nuxt dan Tailwind membuat UI development lebih cepat dan rapi.",
      content: "Cara setup Tailwind CSS di Nuxt 3 dan contoh penggunaan utility class...",
      author: "Admin",
      createdAt: "2025-04-13"
    },
    {
      id: 7,
      title: "State Management dengan Pinia di Nuxt 3",
      slug: "state-management-pinia-nuxt",
      excerpt: "Ganti Vuex! Kini kamu bisa pakai Pinia yang lebih ringan dan modern.",
      content: "Pinia sangat mudah digunakan dengan Nuxt 3, berikut caranya...",
      author: "Admin",
      createdAt: "2025-04-12"
    },
    {
      id: 8,
      title: "Optimasi SEO di Nuxt 3",
      slug: "optimasi-seo-nuxt",
      excerpt: "Pelajari bagaimana cara optimasi SEO on-page dengan meta tag di Nuxt.",
      content: "Gunakan useHead atau definePageMeta untuk menambahkan informasi SEO...",
      author: "Admin",
      createdAt: "2025-04-11"
    },
    {
      id: 9,
      title: "Deploy Nuxt 3 ke Vercel",
      slug: "deploy-nuxt-ke-vercel",
      excerpt: "Langkah-langkah lengkap deploy Nuxt 3 kamu ke Vercel secara gratis.",
      content: "Vercel mendukung Nuxt 3 secara native, berikut langkahnya...",
      author: "Admin",
      createdAt: "2025-04-10"
    },
    {
      id: 10,
      title: "Menggunakan Markdown dengan @nuxt/content",
      slug: "markdown-nuxt-content",
      excerpt: "Pakai @nuxt/content untuk membuat blog berbasis markdown yang powerful.",
      content: "Plugin @nuxt/content sangat cocok untuk developer dan content writer...",
      author: "Admin",
      createdAt: "2025-04-09"
    }
  ]
export default defineEventHandler(async(event) => {
  const method= getMethod(event)
  if (method === 'GET') {
    return {
      success: true,
      message: "List of blog posts",
      data: posts
    }
  }
  if (method === 'POST') {
    const body = await readBody(event)

    // Validasi sederhana
    if (!body.title || !body.content) {
      return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Title and content are required",
      }))
    }
    const newPost = {
        id: posts.length + 1,
        title: body.title,
        slug: body.slug || body.title.toLowerCase().replace(/\s+/g, '-'),
        excerpt: body.excerpt || body.content.slice(0, 100) + "...",
        content: body.content,
        author: body.author || "Admin",
        createdAt: new Date().toISOString().split('T')[0]
      }
  
      posts.push(newPost)
  
      return {
        success: true,
        message: "Post created successfully",
        data: newPost
      }
}
 // Fallback jika method tidak dikenal
 return sendError(event, createError({
    statusCode: 405,
    statusMessage: "Method Not Allowed"
  }))
  })