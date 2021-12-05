import {
  projects,
  project,
  createProject,
  updateProject,
  deleteProject,
} from './projects'
import type { StandardScenario } from './projects.scenarios'

describe('projects', () => {
  scenario('returns all projects', async (scenario: StandardScenario) => {
    const result = await projects()

    expect(result.length).toEqual(Object.keys(scenario.project).length)
  })

  scenario('returns a single project', async (scenario: StandardScenario) => {
    const result = await project({ id: scenario.project.one.id })

    expect(result).toEqual(scenario.project.one)
  })

  scenario('creates a project', async () => {
    const result = await createProject({
      input: {
        email: 'String9346663',
        title: 'String',
        website: 'String',
        description: 'String',
      },
    })

    expect(result.email).toEqual('String9346663')
    expect(result.title).toEqual('String')
    expect(result.website).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a project', async (scenario: StandardScenario) => {
    const original = await project({ id: scenario.project.one.id })
    const result = await updateProject({
      id: original.id,
      input: { email: 'String98281242' },
    })

    expect(result.email).toEqual('String98281242')
  })

  scenario('deletes a project', async (scenario: StandardScenario) => {
    const original = await deleteProject({ id: scenario.project.one.id })
    const result = await project({ id: original.id })

    expect(result).toEqual(null)
  })
})
