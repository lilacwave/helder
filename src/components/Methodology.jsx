import { CheckCircle2 } from 'lucide-react'

const steps = [
  'Avaliação inicial completa — postura, mobilidade e força',
  'Plano de treino personalizado com progressões claras',
  'Monitorização de dados — BPM, carga, volume e recuperação',
  'Ajustes semanais baseados em performance real',
  'Acompanhamento contínuo com feedback direto',
]

export default function Methodology() {
  return (
    <section id="metodologia" className="section-border px-5 py-20 lg:px-8 lg:py-28 bg-[#111118]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Metodologia
          </p>
          <h2 className="mb-8 font-display text-3xl font-black uppercase italic leading-tight text-white sm:text-4xl">
            Metodologia <span className="text-brand">única</span>
          </h2>

          <ul className="space-y-4">
            {steps.map((step) => (
              <li key={step} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-brand"
                  size={20}
                  strokeWidth={2}
                />
                <span className="text-sm leading-relaxed text-[#8b8b9a] lg:text-base">
                  {step}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-[#1e1e2a] bg-[#0a0a0f] p-6 lg:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8b8b9a]">
                Performance
              </p>
              <p className="font-display text-2xl font-bold text-white">
                Dados em tempo real
              </p>
            </div>
            <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-brand">
              Live
            </span>
          </div>

          <div className="mb-6 grid grid-cols-3 gap-4">
            {[
              { label: 'BPM', value: '142' },
              { label: 'KCAL', value: '486' },
              { label: 'CARGA', value: '85kg' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[#1e1e2a] bg-[#111118] p-4 text-center"
              >
                <p className="font-display text-2xl font-black text-brand">
                  {stat.value}
                </p>
                <p className="text-xs text-[#8b8b9a]">{stat.label}</p>
              </div>
            ))}
          </div>

          <svg viewBox="0 0 400 120" className="w-full" aria-hidden="true">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#007bff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#007bff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,90 L50,70 L100,75 L150,45 L200,55 L250,30 L300,40 L350,15 L400,25 L400,120 L0,120 Z"
              fill="url(#chartGrad)"
            />
            <polyline
              points="0,90 50,70 100,75 150,45 200,55 250,30 300,40 350,15 400,25"
              fill="none"
              stroke="#007bff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
