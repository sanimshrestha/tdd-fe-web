export default function DrinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="h-full flex justify-center p-24 bg-primary">
      {children}
    </main>
  )
}