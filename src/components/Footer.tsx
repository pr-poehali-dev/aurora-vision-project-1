export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Уханов П.Д.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Учитель истории и обществознания. Помогаю ученикам полюбить предмет и успешно сдать экзамены.
            </p>
            <p className="text-xs text-muted-foreground mt-4">© 2026 Уханов Павел Дмитриевич</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Обо мне
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Направления
                </a>
              </li>
              <li>
                <a href="#tests" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Тесты
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Компетенции
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Предметы</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">📜 История</li>
              <li className="text-sm text-muted-foreground">⚖️ Обществознание</li>
              <li className="text-sm text-muted-foreground">✏️ Подготовка к ОГЭ</li>
              <li className="text-sm text-muted-foreground">🎓 Подготовка к ЕГЭ</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
