import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton({ phone = '5551997316338', message = 'Olá! Quero agendar uma avaliação.' }) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed right-6 bottom-6 bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 hover:scale-105 transform transition-transform"
    >
      <FaWhatsapp className="w-7 h-7 text-white" aria-hidden="true" />
    </a>
  )
}
