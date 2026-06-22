import logo from '../assets/images/logo.png'

export default function Logo({ className = 'h-10 w-auto' }) {
  return (
    <img
      src={logo}
      alt="Hélder Rodrigues"
      className={className}
    />
  )
}
