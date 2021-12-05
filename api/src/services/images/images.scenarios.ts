import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ImageCreateArgs>({
  image: { one: { data: { url: 'String' } }, two: { data: { url: 'String' } } },
})

export type StandardScenario = typeof standard
