export type Mood = {
  id: string
  emoji: string
  label: string
  color: string
}

export type DiaryEntry = {
  id: string
  content: string
  mood: Mood
  createdAt: Date
  aiAnalysis?: string
}

export type Medication = {
  id: string
  name: string
  dose: string
  times: string[]
  startDate: Date
  endDate?: Date
}

export type User = {
  id: string
  name: string
  email: string
  createdAt: Date
}