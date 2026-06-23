import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1e1e2a]/80 bg-[#0a0a0f]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" className="shrink-0">
          <Logo className="h-9 w-auto sm:h-10" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#8b8b9a] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,123,255,0.35)] transition hover:bg-[#0056b3] lg:inline-flex"
        >
          Agendar sessão
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#1e1e2a] bg-[#0a0a0f] px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-[#8b8b9a] hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="inline-flex rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Agendar sessão
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
