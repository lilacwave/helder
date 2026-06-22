import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-32"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
            Centro de Treino & Performance
          </p>

          <h1 className="font-display text-4xl font-black uppercase italic leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            A ciência do{' '}
            <span className="text-brand">movimento</span> aplicada a você
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-[#8b8b9a] lg:text-lg">
            Treino personalizado baseado em evidência científica. Avaliação
            completa, acompanhamento contínuo e resultados reais para as suas
            necessidades.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(0,123,255,0.4)] transition hover:bg-[#0056b3]"
            >
              Começar agora
              <ArrowRight size={18} />
            </a>
            <a
              href="#metodologia"
              className="inline-flex items-center rounded-full border border-[#1e1e2a] px-8 py-3.5 text-sm font-semibold text-white transition hover:border-brand/50 hover:text-brand"
            >
              Ver metodologia
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:ml-auto lg:max-w-md">
          <div className="overflow-hidden rounded-3xl border border-[#1e1e2a] h-[75vh]">
            <img
              src="helder/public/hero-img.png"
              alt="Helder Rodrigues a treinar"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="absolute -bottom-4 left-4 flex gap-3 sm:-bottom-6 sm:left-6">
            <div className="rounded-2xl border border-[#1e1e2a] bg-[#111118]/95 px-4 py-3 backdrop-blur-sm">
              <p className="font-display text-2xl font-black text-brand">100%</p>
              <p className="text-xs text-[#8b8b9a]">Personalizado</p>
            </div>
            <div className="rounded-2xl border border-[#1e1e2a] bg-[#111118]/95 px-4 py-3 backdrop-blur-sm">
              <p className="font-display text-2xl font-black text-white">PRO</p>
              <p className="text-xs text-[#8b8b9a]">Performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
