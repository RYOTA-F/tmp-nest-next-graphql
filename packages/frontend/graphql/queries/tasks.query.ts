import { gql } from '@apollo/client'

export const TASKS_QUERY = gql`
  query {
    getTasks {
      id
      name
      duDate
      status
      description
    }
  }
`

export interface Task {
  description: string
  duDate: string
  id: number
  name: string
  status: string
}

export interface GetTasksResponse {
  getTasks: Task[]
}
