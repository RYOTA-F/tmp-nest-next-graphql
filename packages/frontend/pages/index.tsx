import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex items-center justify-center h-[100vh]">
      <div className="text-center">
        <h1 className="text-white text-3xl">
          Next.js × NestJS × PostgreSQL × Prisma × GraphQL × Docker
        </h1>
        <div className="mt-10">
          <Link href="/tasks" className="text-white">
            Go to Tasks →
          </Link>
        </div>
      </div>
    </main>
  )
}
