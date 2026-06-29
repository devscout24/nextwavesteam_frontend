export type TChatHead = {
    id: string ,
    image: string ,
    name: string ,
    lastMessage: string ,
    lastMessageTime: string ,
    unread_count?: number ,
    is_active?: boolean ,
    onClick?: () => void ,
}


export type TUserChatCard = {
  name: string
  image: string
  last_message: string
  last_message_time: string
}