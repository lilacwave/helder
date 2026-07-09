import logo from '../assets/images/logo.webp'

export default function Logo({ className = 'h-10 w-auto' }) {
  return (
    <img
      src={logo}
      alt="Hélder Rodrigues - treino personalizado e performance"
      className={className}
      loading="eager"
      decoding="async"
    />
  )
}
