import { useQuery } from '@apollo/client'
import {
  TASKS_QUERY,
  GetTasksResponse,
  Task,
} from '@/graphql/queries/tasks.query'

export default function Tasks() {
  const { data, loading, error } = useQuery<GetTasksResponse>(TASKS_QUERY)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!!</div>

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <ul>
        {data?.getTasks.map((task: Task) => (
          <li key={task.id} className="[&:not(:first-of-type)]:mt-10 text-3xl">
            {task.id}: {task.name}: {task.description}
          </li>
        ))}
      </ul>
    </div>
  )
}
