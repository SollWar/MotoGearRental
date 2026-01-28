export const dynamic = 'force-static'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: ['/admin', '/private/'], // Запрети то, что не должны видеть клиенты
    },
    sitemap: 'https://sollwar.github.io/kw-motoger-rental/sitemap.xml', // Замени на свой реальный домен
  }
}
