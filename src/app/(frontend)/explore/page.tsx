import { HeroSection } from '@/components/hero-section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bed, Calendar, Camera, Car, MapPin, Utensils } from 'lucide-react'
import Link from 'next/link'

export default function ExplorePage() {
  const destinations = [
    {
      name: 'Tundavala',
      province: 'Huíla',
      description:
        'Uma das paisagens mais espetaculares de Angola, com vistas deslumbrantes sobre o vale.',
      image: '/placeholder.svg?height=300&width=400&text=Tundavala',
      activities: ['Fotografia', 'Caminhadas', 'Observação'],
      season: 'Todo o ano',
    },
    {
      name: 'Baia dos Tigres',
      province: 'Namibe',
      description: 'Península única onde o deserto encontra o oceano, oferecendo paisagens únicas.',
      image: '/placeholder.svg?height=300&width=400&text=Baia+dos+Tigres',
      activities: ['Pesca', 'Fotografia', 'Aventura'],
      season: 'Maio - Setembro',
    },
    {
      name: 'Ilha do Mussulo',
      province: 'Luanda',
      description:
        'Paraíso tropical próximo à capital, perfeito para relaxamento e desportos aquáticos.',
      image: '/placeholder.svg?height=300&width=400&text=Ilha+do+Mussulo',
      activities: ['Desportos aquáticos', 'Relaxamento', 'Gastronomia'],
      season: 'Todo o ano',
    },
    {
      name: 'Quedas de Kalandula',
      province: 'Malanje',
      description: 'Uma das maiores quedas de água de África, com 105 metros de altura.',
      image: '/placeholder.svg?height=300&width=400&text=Quedas+Kalandula',
      activities: ['Caminhadas', 'Fotografia', 'Natureza'],
      season: 'Março - Maio',
    },
    {
      name: 'Parque Nacional da Kissama',
      province: 'Bengo',
      description: 'Santuário da vida selvagem com elefantes, antílopes e outras espécies nativas.',
      image: '/placeholder.svg?height=300&width=400&text=Kissama+Park',
      activities: ['Safari', 'Observação de animais', 'Fotografia'],
      season: 'Maio - Outubro',
    },
    {
      name: 'Fortaleza de São Miguel',
      province: 'Luanda',
      description: 'Monumento histórico que conta a história colonial de Angola.',
      image: '/placeholder.svg?height=300&width=400&text=Fortaleza+São+Miguel',
      activities: ['História', 'Cultura', 'Museus'],
      season: 'Todo o ano',
    },
  ]

  const culturalHighlights = [
    {
      title: 'Música e Dança',
      description: 'Descubra os ritmos únicos de Angola, desde o semba ao kuduro.',
      icon: '🎵',
    },
    {
      title: 'Artesanato',
      description: 'Arte tradicional em madeira, cerâmica e tecidos coloridos.',
      icon: '🎨',
    },
    {
      title: 'Gastronomia',
      description: 'Sabores autênticos com pratos como muamba, calulu e funge.',
      icon: '🍽️',
    },
    {
      title: 'Festivais',
      description: 'Celebrações tradicionais e eventos culturais ao longo do ano.',
      icon: '🎭',
    },
  ]

  const accommodationTypes = [
    {
      type: 'Hotéis de Luxo',
      description: 'Experiências premium com todas as comodidades modernas.',
      priceRange: '$$$',
      locations: ['Luanda', 'Benguela', 'Lubango'],
    },
    {
      type: 'Pousadas',
      description: 'Acomodações acolhedoras com toque local e familiar.',
      priceRange: '$$',
      locations: ['Interior', 'Cidades médias'],
    },
    {
      type: 'Lodges Eco',
      description: 'Experiências sustentáveis em contacto com a natureza.',
      priceRange: '$$',
      locations: ['Parques Nacionais', 'Áreas rurais'],
    },
    {
      type: 'Resorts',
      description: 'Complexos turísticos com múltiplas atividades e serviços.',
      priceRange: '$$$',
      locations: ['Costa', 'Ilha do Mussulo'],
    },
  ]

  return (
    <div className="min-h-screen  mx-auto">
      <HeroSection
        title="Explore Angola"
        subtitle="Descubra destinos únicos, cultura rica e experiências inesquecíveis"
        backgroundImage="/placeholder.svg?height=600&width=1200&text=Angola+Landscape"
      
      />

      {/* Rotas e Destinos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Rotas Destino Angola
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore os destinos mais espetaculares de Angola, desde paisagens naturais
              deslumbrantes até sítios históricos únicos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card
                key={destination.name}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${destination.image})` }}
                />
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{destination.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      <MapPin className="w-3 h-3 mr-1" />
                      {destination.province}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{destination.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span>Melhor época: {destination.season}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {destination.activities.map((activity) => (
                        <Badge key={activity} variant="outline" className="text-xs">
                          {activity}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full mt-4">Explorar Destino</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Arte e Cultura */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Arte e Cultura</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Mergulhe na rica herança cultural de Angola, com tradições milenares e expressões
              artísticas únicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturalHighlights.map((item) => (
              <Card key={item.title} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <Button variant="outline" size="sm">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Atividades e Experiências */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Atividades e Experiências
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Desde aventuras na natureza até experiências culturais autênticas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Aventura',
                icon: <Camera className="w-8 h-8" />,
                activities: ['Safari fotográfico', 'Caminhadas', 'Desportos aquáticos', 'Escalada'],
                image: '/placeholder.svg?height=200&width=300&text=Adventure',
              },
              {
                category: 'Gastronomia',
                icon: <Utensils className="w-8 h-8" />,
                activities: [
                  'Tours gastronómicos',
                  'Aulas de culinária',
                  'Mercados locais',
                  'Restaurantes típicos',
                ],
                image: '/placeholder.svg?height=200&width=300&text=Food',
              },
              {
                category: 'Mobilidade',
                icon: <Car className="w-8 h-8" />,
                activities: [
                  'Aluguer de carros',
                  'Tours guiados',
                  'Transporte público',
                  'Transfers',
                ],
                image: '/placeholder.svg?height=200&width=300&text=Transport',
              },
            ].map((category) => (
              <Card
                key={category.category}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div
                  className="h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-primary mr-3">{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {category.activities.map((activity) => (
                      <li
                        key={activity}
                        className="text-sm text-muted-foreground flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent">
                    Ver Opções
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alojamentos */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lugares para Ficar
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Encontre a acomodação perfeita para a sua estadia em Angola.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accommodationTypes.map((accommodation) => (
              <Card key={accommodation.type} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{accommodation.type}</CardTitle>
                    <Badge variant="outline">{accommodation.priceRange}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{accommodation.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Bed className="w-4 h-4 mr-2 text-primary" />
                      <span>Disponível em:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {accommodation.locations.map((location) => (
                        <Badge key={location} variant="secondary" className="text-xs">
                          {location}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full mt-4">Ver Opções</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dicas e Inspirações */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dicas e Inspirações
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conselhos úteis e inspiração para tornar a sua viagem inesquecível.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Melhor Época para Visitar',
                content:
                  'Angola tem clima tropical. A estação seca (maio-outubro) é ideal para turismo, com temperaturas amenas e pouca chuva.',
                icon: '🌤️',
              },
              {
                title: 'O que Levar na Bagagem',
                content:
                  'Roupas leves, protetor solar, repelente, calçado confortável e câmara fotográfica são essenciais.',
                icon: '🎒',
              },
              {
                title: 'Experiências Únicas',
                content:
                  'Não perca o pôr do sol na Tundavala, um safari no Kissama e a gastronomia local em Luanda.',
                icon: '⭐',
              },
            ].map((tip) => (
              <Card key={tip.title} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl mb-4">{tip.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                  <p className="text-muted-foreground">{tip.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/facilidades">Ver Todas as Dicas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para Explorar Angola?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Comece a planear a sua aventura pelos destinos mais belos de Angola.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Planeie a sua Viagem
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Contactar Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}
