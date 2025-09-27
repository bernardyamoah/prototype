'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building, Clock, Copy, ExternalLink,  Globe, Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { toast } from 'sonner'

interface PrimaryContactDetailsProps {
  contactInfo: any[]
}

const defaultContacts = [
  {
    department: 'Gabinete do Ministro',
    description: 'Contacto direto com o gabinete ministerial',
    email: 'ministro@cultura-turismo.gov.ao',
    phone: [
      { number: '+244 222 310 000', label: 'Linha Direta' },
      { number: '+244 222 310 001', label: 'Secretariado' },
    ],
    address: {
      street: 'Largo 4 de Fevereiro',
      city: 'Luanda',
      province: 'Luanda',
      country: 'Angola',
    },
    workingHours: [
      { days: 'Segunda - Sexta', hours: '8:00 - 17:00' },
      { days: 'Sábado', hours: '8:00 - 12:00' },
    ],
    fax: '+244 222 310 099',
    priority: 'high',
  },
  {
    department: 'Direcção Nacional de Turismo',
    description: 'Desenvolvimento e promoção turística',
    email: 'turismo@cultura-turismo.gov.ao',
    phone: [
      { number: '+244 222 320 000', label: 'Geral' },
      { number: '+244 923 456 789', label: 'Emergência Turística' },
    ],
    address: {
      street: 'Rua Rainha Ginga, 12',
      city: 'Luanda',
      province: 'Luanda',
      country: 'Angola',
    },
    workingHours: [
      { days: 'Segunda - Sexta', hours: '7:30 - 16:30' },
      { days: 'Sábado', hours: '8:00 - 13:00' },
    ],
    fax: '+244 222 320 099',
    priority: 'high',
  },
  {
    department: 'Centro de Atendimento ao Público',
    description: 'Informações gerais e atendimento ao cidadão',
    email: 'atendimento@cultura-turismo.gov.ao',
    phone: [
      { number: '+244 222 330 000', label: 'Linha Verde' },
      { number: '+244 912 345 678', label: 'WhatsApp' },
    ],
    address: {
      street: 'Av. 4 de Fevereiro, 42',
      city: 'Luanda',
      province: 'Luanda',
      country: 'Angola',
    },
    workingHours: [
      { days: 'Segunda - Sexta', hours: '8:00 - 17:00' },
      { days: 'Sábado', hours: '9:00 - 13:00' },
    ],
    priority: 'medium',
  },
]

const copyToClipboard = (text: string, type: string) => {
  navigator.clipboard.writeText(text)
  toast.success(`${type} copiado para a área de transferência`)
}

export function PrimaryContactDetails({ contactInfo }: PrimaryContactDetailsProps) {
  const contacts = contactInfo.length > 0 ? contactInfo : defaultContacts

  return (
    <section className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center mb-6">
          <Image
            src="/visit-angola-logo.svg"
            alt="Visit Angola"
            width={80}
            height={80}
            className="mr-4"
          />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-green to-brand-orange bg-clip-text text-transparent">
              Contactos Principais
            </h2>
            <p className="text-xl text-muted-foreground mt-2">Canais oficiais de comunicação</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {contacts.map((contact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card
              className={`h-full ${
                contact.priority === 'high'
                  ? 'border-brand-orange/30 bg-gradient-to-br from-brand-orange/5 to-brand-yellow/5'
                  : 'border-brand-green/20 bg-gradient-to-br from-brand-green/5 to-blue/5'
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-full ${
                        contact.priority === 'high' ? 'bg-brand-orange/10' : 'bg-brand-green/10'
                      }`}
                    >
                      <Building
                        className={`h-5 w-5 ${
                          contact.priority === 'high' ? 'text-brand-orange' : 'text-brand-green'
                        }`}
                      />
                    </div>
                    <span className="text-lg">{contact.department}</span>
                  </CardTitle>
                  <Badge variant={contact.priority === 'high' ? 'default' : 'secondary'}>
                    {contact.priority === 'high' ? 'Prioritário' : 'Geral'}
                  </Badge>
                </div>
                <CardDescription>{contact.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Phone Numbers */}
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-orange" />
                    Telefones
                  </h4>
                  {contact.phone.map((phone: any, phoneIndex: number) => (
                    <div
                      key={phoneIndex}
                      className="flex items-center justify-between p-3 rounded-lg bg-background/50"
                    >
                      <div>
                        <p className="font-medium">{phone.number}</p>
                        {phone.label && (
                          <p className="text-sm text-muted-foreground">{phone.label}</p>
                        )}
                      </div>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(phone.number, 'Telefone')}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={`tel:${phone.number}`}>
                            <Phone className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Mail className="h-4 w-4 text-brand-green" />
                    Email
                  </h4>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <p className="font-medium">{contact.email}</p>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(contact.email, 'Email')}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={`mailto:${contact.email}`}>
                          <Mail className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Address */}
                {contact.address && (
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      Endereço
                    </h4>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="text-sm">
                        {contact.address.street}
                        <br />
                        {contact.address.city}, {contact.address.province}
                        <br />
                        {contact.address.country}
                      </p>
                      <Button variant="ghost" size="sm" className="mt-2" asChild>
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(`${contact.address.street}, ${contact.address.city}, Angola`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Ver no Mapa
                        </a>
                      </Button>
                    </div>
                  </div>
                )}

                {/* Working Hours */}
                {contact.workingHours && (
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Clock className="h-4 w-4 text-yellow-500" />
                      Horário de Funcionamento
                    </h4>
                    <div className="p-3 rounded-lg bg-background/50">
                      {contact.workingHours.map((schedule: any, scheduleIndex: number) => (
                        <div key={scheduleIndex} className="flex justify-between text-sm">
                          <span>{schedule.days}</span>
                          <span className="font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Fax */}
                {contact.fax && (
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      {/* <Fax className="h-4 w-4 text-gray-500" /> */}
                      Fax
                    </h4>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                      <p className="font-medium">{contact.fax}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(contact.fax, 'Fax')}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12"
      >
        <Card className="bg-gradient-to-r from-brand-orange/10 to-brand-yellow/10 border-brand-orange/20">
          <CardHeader>
            <CardTitle className="text-center text-brand-orange">Acções Rápidas</CardTitle>
            <CardDescription className="text-center">
              Contacte-nos através dos canais mais convenientes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="flex flex-col gap-2 h-auto py-4" asChild>
                <a href="tel:+244222310000">
                  <Phone className="h-6 w-6" />
                  <span className="text-xs">Ligar Agora</span>
                </a>
              </Button>

              <Button variant="outline" className="flex flex-col gap-2 h-auto py-4" asChild>
                <a href="mailto:turismo@cultura-turismo.gov.ao">
                  <Mail className="h-6 w-6" />
                  <span className="text-xs">Enviar Email</span>
                </a>
              </Button>

              <Button variant="outline" className="flex flex-col gap-2 h-auto py-4" asChild>
                <a href="https://wa.me/244912345678" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-6 w-6" />
                  <span className="text-xs">WhatsApp</span>
                </a>
              </Button>

              <Button variant="outline" className="flex flex-col gap-2 h-auto py-4" asChild>
                <a
                  href="https://maps.google.com/?q=Largo+4+de+Fevereiro,+Luanda,+Angola"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-6 w-6" />
                  <span className="text-xs">Localização</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
