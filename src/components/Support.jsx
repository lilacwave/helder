import {
  Calendar,
  ClipboardList,
  MessageCircle,
  RefreshCw,
  Smartphone,
  TrendingUp,
  Video,
  Wifi,
} from 'lucide-react'

const supports = [
  { icon: Calendar, title: 'Agendamento online', desc: 'Marque sessões em segundos.' },
  { icon: ClipboardList, title: 'Planos digitais', desc: 'Acesso ao seu programa 24/7.' },
  { icon: MessageCircle, title: 'Chat direto', desc: 'Tire dúvidas entre sessões.' },
  { icon: Video, title: 'Vídeo-análise', desc: 'Feedback visual da sua técnica.' },
  { icon: TrendingUp, title: 'Relatórios', desc: 'Evolução mensal detalhada.' },
  { icon: RefreshCw, title: 'Ajustes semanais', desc: 'Plano adaptado ao progresso.' },
  { icon: Smartphone, title: 'App dedicado', desc: 'Treinos e métricas no telemóvel.' },
  { icon: Wifi, title: 'Monitorização remota', desc: 'Dados sincronizados em tempo real.' },
]

export default function Support() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Suporte
          </p>
          <h2 className="font-display text-3xl font-black uppercase italic text-white sm:text-4xl lg:text-5xl">
            Acompanhamento <span className="text-brand">continuado</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {supports.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#1e1e2a] bg-[#111118] p-5 transition hover:border-brand/30"
            >
              <item.icon className="mb-3 text-brand" size={22} strokeWidth={1.5} />
              <h3 className="mb-1 text-sm font-semibold text-white">{item.title}</h3>
              <p className="text-xs leading-relaxed text-[#8b8b9a]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
