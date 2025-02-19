import tailwindcss from '@tailwindcss/vite'
import { defineLocalBusiness } from 'nuxt-schema-org/schema'

const name = 'BeatenIMMO'
const description = 'Your real estate partner in Beatenberg'
const url = 'https://beatenimmo.ch'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/apollo', '@nuxtjs/seo', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },

  apollo: {
    clients: {
      default: { httpEndpoint: 'https://spacex-production.up.railway.app' },
    },
  },

  app: {
    head: {
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  site: {
    url,
    name,
    description,
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },

  schemaOrg: {
    identity: defineLocalBusiness({
      '@type': 'RealEstateAgent', // Choose from https://schema.org/LocalBusiness#subtypes

      // Basic Information (Required)
      name,
      description,
      url,

      'logo': '/img/beatenimmo-logo-light.svg',
      'telephone': '+41 78 703 00 33',
      'email': 'info@beatenimmo.ch',
      'areaServed': 'Berner Oberland',
      'sameAs': [
        'https://www.instagram.com/beatenimmo.ch',
        'https://www.facebook.com/beatenimmo.ch',
      ],

      // Location (Required)
      'address': {
        streetAddress: 'Schmockenstrasse 49',
        addressLocality: 'Beatenberg',
        addressRegion: 'BE',
        postalCode: '3803',
        addressCountry: 'CH',
      },
    }),
  },
})
