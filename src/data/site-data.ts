import Beard from '/public/services/beard.svg'
import FaceFacial from '/public/services/face-facial.svg'
import Haircut from '/public/services/haircut.svg'

export const navLinks = [
  {
    label: 'home',
    link: ''
  },
  {
    label: 'services',
    link: '#services'
  },
  {
    label: 'barbers',
    link: '#barbers'
  },
  {
    label: 'contact us',
    link: '#contactUs'
  },
  {
    label: 'location',
    link: '#location'
  }
]


export const heroSlider = [
  {
    imgsrc: '/hero/banner.webp',
    type: 'video',
    aspect: 'video',
    box: {
      label: 'Precisión. Estilo. Carácter.',
      positionX: 'right',
      positionY: 'bottom'
    }
  },
  {
    imgsrc: '/hero/barber.webp',
    type: 'image',
    aspect: 'square',
    box: {
      label: 'conoce a nuestro barberos',
      positionX: 'left',
      positionY: 'top'
    }
  },
  {
    imgsrc: '/hero/equipment.webp',
    type: 'image',
    aspect: 'square',
    box: null
  },
  {
    imgsrc: '/hero/luxury-atmosphere.webp',
    type: 'image',
    aspect: 'video',
    box: {
      label: 'ambiente de lujo',
      positionX: 'left',
      positionY: 'top'
    }
  }
]


export const services = [
  {
    category: 'cortes de pelo',
    icon: Haircut,
    items: [
      {
        label: 'Corte clasico',
        description: 'Un corte clásico que te dará un aspecto profesional y moderno.',
        price: 'S/20'
      },
      {
        label: 'corte de lujo',
        description: 'Un corte que cambiara radicalmente tu estilo y te hara lucir increible',
        price: 'S/40'
      },
      {
        label: 'corte para niños',
        description: 'Cortes de pelo para niños que te ayudaran a que tu niño se sienta cómodo',
        price: 'S/15'
      }
    ]
  },

  {
    category: 'beard',
    icon: Beard,
    items: [
      {
        label: 'recorte de barba',
        description: 'Un recorte de barba que te ayudara a que tu barba se sienta cómoda',
        price: 'S/20'
      },
      {
        label: 'afeitado con toalla caliente',
        description: 'Un afeitado con toalla caliente que te ayudara a que tu barba se sienta cómoda',
        price: 'S/30'
      },
      {
        label: 'recorte de bigote',
        description: 'Un recorte de bigote que te ayudara a que tu bigote se sienta cómoda',
        price: 'S/25'
      }
    ]
  },

  {
    category: 'facial',
    icon: FaceFacial,
    items: [
      {
        label: 'limpieza facial',
        description: 'Un limpieza facial que te ayudara a que tu piel se sienta cómoda',
        price: 'S/15'
      },
      {
        label: 'masaje facial',
        description: 'Un masaje facial que te ayudara a que tu piel se sienta cómoda',
        price: 'S/15'
      },
      {
        label: 'lavado de cabello',
        description: 'Un lavado de cabello que te ayudara a que tu cabello se sienta cómoda',
        price: 'S/10'
      }
    ]
  }
]



export const barbers = [
  {
    name: 'stefan rodriguez nick',
    imgsrc: '/barbers/stefan.webp',
    socials: {
      ig: '@stefanwellbarber',
      twiter: '@stefanwellbarber',
      facebook: '@stefanwellbarber'
    },
    awards: [
      '2024, Nombrado barbero del año en la asociación de barberos',
      '2023, Mejor barbero de corte oficial',
      '2022, Barbero más joven en obtener certificación master'
    ]
  },
  {
    name: 'diego martinez torres',
    imgsrc: '/hero/barber.webp',
    socials: {
      ig: '@diegofademaster',
      twiter: '@diegofademaster',
      facebook: '@diegofademaster'
    },
    awards: [
      '2024, Especialista certificado en fades y degradados',
      '2023, Primer lugar en competencia nacional de barbería clásica',
      '2022, Reconocimiento por excelencia en atención al cliente'
    ]
  },
  {
    name: 'alejandro vega morales',
    imgsrc: '/barbers/alejandro.webp',
    socials: {
      ig: '@alexbeardspecialist',
      twiter: '@alexbeardspecialist',
      facebook: '@alexbeardspecialist'
    },
    awards: [
      '2024, Maestro en cuidado y diseño de barbas',
      '2023, Certificación internacional en técnicas de afeitado clásico',
      '2023, Mejor barbero en estilo vintage y retro'
    ]
  },
  {
    name: 'carlos ruiz hernandez',
    imgsrc: '/barbers/carlos.webp',
    socials: {
      ig: '@carlosstyleking',
      twiter: '@carlosstyleking',
      facebook: '@carlosstyleking'
    },
    awards: [
      '2024, Innovador del año en técnicas de corte moderno',
      '2023, Especialista certificado en cortes para niños',
      '2023, Reconocimiento por mejor transformación capilar',
    ]
  }
]

export type BarbersType = typeof barbers