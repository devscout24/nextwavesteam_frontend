export type TBubblePlayers = { name: string; image_url: string }

export type TPlayerCard = {
  image_url: string
  name: string
  role: string
  rating: number
  id: string
}

export type TReviewCard = {
  reviewer_name: string
  review_text: string
  rating: number
}

export type TPlayerProfileMessageItem = {
  date: string
  id: number
  avatar: string
  name: string
  message: string
  amount: string
  status: string
}
