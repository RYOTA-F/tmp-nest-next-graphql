export interface ConnpassEventsResponse {
  results_start: number
  results_returned: number
  results_available: number
  events: ConnpassEvent[]
}

export interface ConnpassEvent {
  event_id: number
  title: string
  catch: string
  description: string
  event_url: string
  started_at: Date
  ended_at: Date
  limit: number
  hash_tag: string
  event_type: string
  accepted: number
  waiting: number
  updated_at: Date
  owner_id: number
  owner_nickname: string
  owner_display_name: string
  place: string
  address: string
  lat: string
  lon: string
  series: ConnpassEventSeries
}

export interface ConnpassEventSeries {
  id: number
  title: string
  url: string
}
