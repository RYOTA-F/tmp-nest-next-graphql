export const ARIA_LABEL = 'Button' as const

export interface IButton {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({ children, onClick }: IButton) {
  return (
    <button
      onClick={onClick}
      className="bg-cyan-600 text-white py-2 px-5 rounded-full"
      aria-label={ARIA_LABEL}
    >
      {children}
    </button>
  )
}
