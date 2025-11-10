export default function Header() {
  return (
    <header className="bg-beige px-6 py-4 flex justify-between items-center">
      <h1 className="text-3xl font-script text-dark-brown">Legacy.</h1>
      <button className="text-dark-brown">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  )
}

