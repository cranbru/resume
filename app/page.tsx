import ProfileCard from "@/components/profile-card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="particles-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`particle bg-cyan-500 opacity-20 absolute rounded-full animate-float-${(i % 5) + 1}`}
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div
          className="grid-lines w-full h-full border-t border-l border-cyan-500/20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="animate-fade-in-up">
        <ProfileCard />
      </div>
    </main>
  )
}
