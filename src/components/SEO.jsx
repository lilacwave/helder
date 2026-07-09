import { Helmet } from 'react-helmet-async'

export default function SEO({
  title = 'Hélder Rodrigues | Treino Personalizado e Performance',
  description = 'Treino personalizado com base científica para performance, força, emagrecimento e qualidade de vida. Descubra um plano estratégico e acompanhado por um especialista.',
  keywords = 'treino personalizado, performance, treino funcional, treino para atletas, treino para emagrecer, Hélder Rodrigues',
  image = '/hero-img.webp',
}) {
  const fullTitle = title.includes('Hélder Rodrigues') ? title : `${title} | Hélder Rodrigues`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href="https://helderrodrigues.com" />
    </Helmet>
  )
}
