// import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

// import { hashPassword } from '@redwoodjs/auth-dbauth-api'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    // const partnerType = [
    //   { id: 1, name: 'individual' },
    //   { id: 2, name: 'company' },
    // ]

    const partnerData = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      {
        name: 'RedwoodJS',
        slug: 'redwoodjs',
        logo: 'http://res.cloudinary.com/duh8p234y/image/upload/v1693892194/partner-badges/logos/ybf04qdgturvstwtakpo.svg',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'REDWOODJS35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=REDWOODJS35',
        partnerTypeId: 2,
      },
      {
        name: 'Prisma',
        slug: 'prisma',
        logo: 'http://res.cloudinary.com/duh8p234y/image/upload/v1693419639/partner-badges/logos/u4xeidwwcmfdengolagp.svg',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'PRISMA35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=PRISMA35',
        partnerTypeId: 2,
      },
      {
        name: 'Fixie',
        slug: 'fixie',
        logo: 'http://res.cloudinary.com/duh8p234y/image/upload/v1693892252/partner-badges/logos/ne30t8jyr3znboewy5qx.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'FIXIE35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=FIXIE35',
        partnerTypeId: 2,
      },
      {
        name: 'The Guild',
        slug: 'guild',
        logo: 'http://res.cloudinary.com/duh8p234y/image/upload/v1693892422/partner-badges/logos/n8npxrfsakisimchnkgm.svg',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'GUILD35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=GUILD35',
        partnerTypeId: 2,
      },
      {
        name: 'Inngest',
        slug: 'inngest',
        logo: 'http://res.cloudinary.com/duh8p234y/image/upload/v1693892691/partner-badges/logos/amcuxnalfmsiapslajk5.svg',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'INNGEST35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=INNGEST35',
        partnerTypeId: 2,
      },
      {
        name: 'Vercel',
        slug: 'vercel',
        logo: 'http://res.cloudinary.com/duh8p234y/image/upload/v1693892496/partner-badges/logos/kxupiwv2wiosrjlyj00v.svg',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'VERCEL35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=VERCEL35',
        partnerTypeId: 2,
      },
      {
        name: 'Apollo',
        slug: 'apollo',
        logo: 'http://res.cloudinary.com/duh8p234y/image/upload/v1693892719/partner-badges/logos/nyboaafks5tg9s49bltd.svg',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'apollo35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=APOLLO35',
        partnerTypeId: 2,
      },
      {
        name: 'Coherence',
        slug: 'coherence',
        logo: 'http://res.cloudinary.com/duh8p234y/image/upload/v1693892765/partner-badges/logos/yh5g2aqfnnj7jbqpdsqr.svg',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'COHERENCE35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=COHERENCE35',
        partnerTypeId: 2,
      },
      {
        name: 'Clerk',
        slug: 'clerk',
        logo: 'http://res.cloudinary.com/duh8p234y/image/upload/v1693892798/partner-badges/logos/m1uhb7m4ocqbnqleodlh.svg',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'CLERK35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=CLERK35',
        partnerTypeId: 2,
      },
      {
        name: 'Stripe',
        slug: 'stripe',
        logo: 'http://res.cloudinary.com/duh8p234y/image/upload/v1693892835/partner-badges/logos/ga2lhys9e5n6a9e82dyw.svg',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'STRIPE35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=STRIPE35',
        partnerTypeId: 2,
      },
      {
        name: 'Supabase',
        slug: 'supabase',
        logo: 'http://res.cloudinary.com/duh8p234y/image/upload/v1693892887/partner-badges/logos/vvbekxgkhtdofkqepxpp.webp',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'SUPABASE35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=SUPABASE35',
        partnerTypeId: 2,
      },
      {
        name: 'Tom Preston-Werner',
        slug: 'tom',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693891011/partner-badges/logos/iyqf0zeyuyffiuibcxrk.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'TOM35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=TOM35',
        partnerTypeId: 1,
      },
      {
        name: 'Orta Therox',
        slug: 'orta',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693891050/partner-badges/logos/m5hdzw4w4mfimphhxxck.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'ORTA35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=ORTA35',
        partnerTypeId: 1,
      },
      {
        name: 'Diana Mounter',
        slug: 'diana',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693890902/partner-badges/logos/d6pwovqnfgtaul19tgyv.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'DIANA35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=DIANA35',
        partnerTypeId: 1,
      },
      {
        name: 'Amy Dutton',
        slug: 'amy',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693890745/partner-badges/logos/uyulepfd7muj0svpni5w.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'amy35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=AMY35',
        partnerTypeId: 1,
      },
      {
        name: 'Jerel Miller',
        slug: 'jerel',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693891083/partner-badges/logos/bretitknrfi5jhxgbaik.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'JEREL35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=JEREL35',
        partnerTypeId: 1,
      },
      {
        name: 'Brian Douglas',
        slug: 'bdougie',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693891108/partner-badges/logos/zhdtgaoebulorvkvbkcx.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'BDOUGIE35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=BDOUGIE35',
        partnerTypeId: 1,
      },
      {
        name: 'Janet McDonald',
        slug: 'janet',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693891134/partner-badges/logos/qe9ktfvz8oel30inucaf.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'JANET35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=JANET35',
        partnerTypeId: 1,
      },
      {
        name: 'Tristan Kalos',
        slug: 'tristan',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693891165/partner-badges/logos/gidklbznrjgyrkz5mp7t.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'TRISTAN35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=TRISTAN35',
        partnerTypeId: 1,
      },
      {
        name: 'Laurin Quast',
        slug: 'laurin',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693891185/partner-badges/logos/ax09zbco0mvbijqoos3k.jpg',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'laurin35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=LAURIN35',
        partnerTypeId: 1,
      },
      {
        name: 'Michael Mentele',
        slug: 'michael',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693891208/partner-badges/logos/kcc6suyycqyizvpy4tym.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'MICHAEL35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=MICHAEL35',
        partnerTypeId: 1,
      },
      {
        name: 'David S. Price',
        slug: 'david',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693891227/partner-badges/logos/cjtykjdoxsgqbin6u9hv.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'DAVID35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=DAVID35',
        partnerTypeId: 1,
      },
      {
        name: 'Danny Choudhury',
        slug: 'danny',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693891247/partner-badges/logos/ajoxw66esxlxsngm5uoa.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'DANNY35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=DANNY35',
        partnerTypeId: 1,
      },
      {
        name: 'Eugene Kirpichov',
        slug: 'eugene',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693891270/partner-badges/logos/mmyhfm1w8rkjl4zpm0oz.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'EUGENE35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=EUGENE35',
        partnerTypeId: 1,
      },
      {
        name: 'Nick Heiner',
        slug: 'nick',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693891296/partner-badges/logos/spdzuek1jm9q1ehffjy6.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'NICK35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=NICK35',
        partnerTypeId: 1,
      },
      {
        name: 'Ben Lower',
        slug: 'ben',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693891318/partner-badges/logos/qbiob2g0zzwvu8nta1cj.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'BEN35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=BEN35',
        partnerTypeId: 1,
      },
      {
        name: 'Jon Harrell',
        slug: 'jon',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693891338/partner-badges/logos/r4tc1jofz0sac7kznfeq.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'JON35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=JON35',
        partnerTypeId: 1,
      },
      {
        name: 'Bekah',
        slug: 'bekah',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693891357/partner-badges/logos/wpb2oeu4f9wsosf5hisi.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'BEKAH35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=BEKAH35',
        partnerTypeId: 1,
      },
      {
        name: 'Elston Baretto',
        slug: 'elston',
        avatar:
          'http://res.cloudinary.com/duh8p234y/image/upload/v1693891387/partner-badges/logos/p2cjmasvjly0m2phcdk6.png',
        virtualCode: '',
        virtualDiscount: 100,
        virtualEndDate: '2023-09-27T00:00:00.000Z',
        inPersonCode: 'ELSTON35',
        inPersonDiscount: 35,
        inPersonEndDate: '2023-09-27T00:00:00.000Z',
        inPersonUrl:
          'https://www.eventbrite.com/e/645493387097/?discount=ELSTON35',
        partnerTypeId: 1,
      },
    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    // Promise.all(
    // admin users
    // adminUsers.map(async (data) => {
    //   const record = await db.user.create({ data })
    //   console.log(record)
    // })
    // )

    // partner type
    // await db.partnerType.createMany({
    //   data: partnerType,
    // })

    // partners
    await db.partner.createMany({
      data: partnerData,
    })

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //

    // const users = [{ email: 'amy@redwoodjs.com', password: 'password' }]

    // for (const user of users) {
    //   const [hashedPassword, salt] = hashPassword(user.password)
    //   await db.user.create({
    //     data: {
    //       email: user.email,
    //       hashedPassword,
    //       salt,
    //     },
    //   })
    // }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
