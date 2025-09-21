import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VISIT ANGOLA</h3>
            <p className="text-sm opacity-75">
              Descubra a beleza natural e as oportunidades únicas que Angola tem para oferecer.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Destinos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/explore/luanda" className="hover:text-accent">
                  Luanda
                </Link>
              </li>
              <li>
                <Link href="/explore/benguela" className="hover:text-accent">
                  Benguela
                </Link>
              </li>
              <li>
                <Link href="/explore/huila" className="hover:text-accent">
                  Huíla
                </Link>
              </li>
              <li>
                <Link href="/explore/namibe" className="hover:text-accent">
                  Namibe
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Experiências</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/explore/cultura" className="hover:text-accent">
                  Cultura
                </Link>
              </li>
              <li>
                <Link href="/explore/natureza" className="hover:text-accent">
                  Natureza
                </Link>
              </li>
              <li>
                <Link href="/explore/aventura" className="hover:text-accent">
                  Aventura
                </Link>
              </li>
              <li>
                <Link href="/explore/gastronomia" className="hover:text-accent">
                  Gastronomia
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/facilidades" className="hover:text-accent">
                  Planeie a Viagem
                </Link>
              </li>
              <li>
                <Link href="/suporte" className="hover:text-accent">
                  Suporte 24h
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-accent">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 Visit Angola. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
