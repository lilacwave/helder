import { Activity, Brain, Dumbbell, Zap } from 'lucide-react'

const items = [
  {
    icon: Activity,
    title: 'Análise Biomecânica',
    desc: 'Estudo detalhado dos padrões de movimento para otimizar técnica e prevenir lesões.',
  },
  {
    icon: Brain,
    title: 'Neuroperformance',
    desc: 'Treino cognitivo-motor para melhorar coordenação, reação e controlo corporal.',
  },
  {
    icon: Dumbbell,
    title: 'Força Funcional',
    desc: 'Desenvolvimento de força aplicada ao dia-a-dia e ao desporto específico.',
  },
  {
    icon: Zap,
    title: 'Potência & Velocidade',
    desc: 'Protocolos de alta intensidade para explosividade e performance máxima.',
  },
]

export default function PerformanceLab() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Laboratório
          </p>
          <h2 className="font-display text-3xl font-black uppercase italic text-white sm:text-4xl lg:text-5xl">
            Laboratório de <span className="text-brand">performance</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#1e1e2a] bg-[#111118] p-6 text-center transition hover:border-brand/30"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10">
                <item.icon className="text-brand" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold uppercase text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#8b8b9a]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
