import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ProjectCreateArgs>({
  project: {
    one: {
      data: {
        email: 'String9205326',
        title: 'String',
        website: 'String',
        description: 'String',
      },
    },
    two: {
      data: {
        email: 'String2552694',
        title: 'String',
        website: 'String',
        description: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
