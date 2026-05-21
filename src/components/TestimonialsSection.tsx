import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Павел Дмитриевич объясняет так, что история становится живой! Раньше я не понимал, зачем учить даты, а теперь вижу, как всё связано.",
    name: "Алексей",
    role: "Ученик, 10 класс",
  },
  {
    quote:
      "Благодаря урокам Павла Дмитриевича я сдала ЕГЭ по обществознанию на 84 балла. Он умеет объяснять сложное просто и структурированно.",
    name: "Мария",
    role: "Выпускница",
  },
  {
    quote:
      "Наш сын стал интересоваться историей — раньше это казалось невозможным. Учитель умеет зажечь интерес и мотивировать детей.",
    name: "Родители Дмитрия",
    role: "8 класс",
  },
  {
    quote:
      "Подготовка к ОГЭ с Павлом Дмитриевичем — это не зубрёжка, а понимание. Он учит думать, а не просто запоминать ответы.",
    name: "Анастасия",
    role: "Ученица, 9 класс",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят ученики
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Лучший показатель работы педагога — это успехи и отзывы учеников. Вот что говорят те, кто уже учится вместе со мной.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
