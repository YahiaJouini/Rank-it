export default function Question({ question }: { question: string }) {
  return (
    <h1 className="flex items-center h-[105px] txt mb-12">{question}</h1>
  )
}
