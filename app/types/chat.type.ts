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