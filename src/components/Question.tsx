export default function Question({ question }: { question: string }) {
  return (
    <h1 className="flex items-center h-[80px] text-[24px] mb-8 lg:h-[105px] lg:txt lg:mb-12">{question}</h1>
  )
}
