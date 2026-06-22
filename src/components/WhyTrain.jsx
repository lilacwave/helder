import {
  Clock,
  Headphones,
  Shield,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react'

const benefits = [
  {
    icon: Wrench,
    title: 'Equipamento Premium',
    desc: 'Máquinas e pesos de última geração para treino completo.',
  },
  {
    icon: Sparkles,
    title: 'Ambiente Exclusivo',
    desc: 'Espaço privado, climatizado e focado na sua evolução.',
  },
  {
    icon: Headphones,
    title: 'Apoio Especializado',
    desc: 'Atenção individual em cada sessão, sem distrações.',
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    desc: 'Protocolos de avaliação e progressão com foco em prevenção.',
  },
  {
    icon: Clock,
    title: 'Horário Flexível',
    desc: 'Disponível das 07h às 23h para se adaptar à sua rotina.',
  },
  {
    icon: Users,
    title: 'Comunidade Pro',
    desc: 'Rede de atletas e clientes com os mesmos objetivos.',
  },
]

export default function WhyTrain() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Diferenciais
          </p>
          <h2 className="font-display text-3xl font-black uppercase italic leading-tight text-white sm:text-4xl">
            Por que treinar no <span className="text-brand">CT</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-[#1e1e2a] bg-[#111118] p-6 transition hover:border-brand/30 hover:bg-[#16161f]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                <item.icon className="text-brand" size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#8b8b9a]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
