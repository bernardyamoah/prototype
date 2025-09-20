import { HeroSection } from '@/components/hero-section'
import ExploreCarousel from './explore/_component/explore-tours'

export default async function HomePage() {
  return (
    <div className="">
      <HeroSection
        title="Explore"
        subtitle="De outro lado novas experiências"
        backgroundImage="/explore.jpg"
        className=""
      />

      {/* Featured Tours Section */}
      <div className="bg-[#f7f0df]">
        <ExploreCarousel />
      </div>

      {/* Footer */}
      {/* <footer className="bg-brand-orange text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">VISIT ANGOLA</h3>
              <p className="text-sm text-brand-yellow font-medium mb-4">The rhythm of life</p>
              <p className="text-sm opacity-90">
                Descubra a beleza natural e as oportunidades únicas que Angola tem para oferecer.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/explore/destinos"
                    className="hover:text-brand-yellow transition-colors"
                  >
                    Destinos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/explore/cultura"
                    className="hover:text-brand-yellow transition-colors"
                  >
                    Cultura
                  </Link>
                </li>
                <li>
                  <Link
                    href="/explore/natureza"
                    className="hover:text-brand-yellow transition-colors"
                  >
                    Natureza
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Invista</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/investe/oportunidades"
                    className="hover:text-brand-yellow transition-colors"
                  >
                    Oportunidades
                  </Link>
                </li>
                <li>
                  <Link
                    href="/investe/setores"
                    className="hover:text-brand-yellow transition-colors"
                  >
                    Setores
                  </Link>
                </li>
                <li>
                  <Link
                    href="/investe/incentivos"
                    className="hover:text-brand-yellow transition-colors"
                  >
                    Incentivos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contacto" className="hover:text-brand-yellow transition-colors">
                    Fale Connosco
                  </Link>
                </li>
                <li>
                  <Link href="/suporte" className="hover:text-brand-yellow transition-colors">
                    Suporte
                  </Link>
                </li>
                <li>
                  <Link href="/parcerias" className="hover:text-brand-yellow transition-colors">
                    Parcerias
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2024 Visit Angola. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
