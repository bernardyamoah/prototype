import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 relative overflow-hidden">
      <Image
        src="/angola-logo.svg"
        alt="Logo"
        width={400}
        height={400}
        className="saturate left-0 opacity-10 absolute top-0 size-124 grayscale-90 pointer-events-none"
      />
      <Image
        src="/angola-logo.svg"
        alt="Logo"
        width={400}
        height={400}
        className="saturate hidden lg:block -right-45 opacity-10 absolute bottom-6 size-150 grayscale-90 pointer-events-none"
      />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/visit-angola-logo.svg"
              alt="Logo"
              width={400}
              height={400}
              className="h-40 w-fit pointer-events-none object-cover"
            />

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

        <div className="border-t border-background/20 mt-15 pt-8 text-center text-sm opacity-75 flex flex-col gap-16">
          <Image
            src="/footer-logo.svg"
            alt="alt"
            width={100}
            height={100}
            className="mx-auto w-fit h-16 object-contain pointer-events-none"
          />
          <p>&copy; {new Date().getFullYear()} Visit Angola. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
