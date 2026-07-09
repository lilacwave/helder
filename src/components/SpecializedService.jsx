const points = [
  'Avaliação postural e análise de desequilíbrios musculares',
  'Identificação de pontos fracos e limitações de mobilidade',
  'Correção de padrões de movimento compensatórios',
  'Programa de fortalecimento direcionado às áreas críticas',
  'Reavaliação periódica com relatório de progresso',
  'Integração com o plano de treino global',
]

export default function SpecializedService() {
  return (
    <section id="servicos" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden rounded-2xl border border-[#1e1e2a]">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
            alt="Treino funcional e avaliação do movimento para performance"
            className="aspect-square w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Serviço especializado
          </p>
          <h2 className="mb-6 font-display text-3xl font-black uppercase italic leading-tight text-white sm:text-4xl">
            Análise do movimento e treino funcional para corrigir desequilíbrios
          </h2>
          <p className="mb-8 text-base leading-relaxed text-[#8b8b9a]">
            Análise profunda da estrutura corporal para identificar
            assimetrias, compensações e oportunidades de melhoria. Um serviço
            exclusivo para quem quer treinar com inteligência e precisão
            cirúrgica.
          </p>

          <ol className="space-y-4">
            {points.map((point, i) => (
              <li key={point} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/20 font-display text-sm font-bold text-brand">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="pt-1 text-sm leading-relaxed text-[#8b8b9a] lg:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
