import { DollarSign, LucideIcon, PartyPopper, ShoppingBag, User2 } from "lucide-react"

export type cardContentType = {
  id: number,
  cardTitle: string,
  CardIcon: LucideIcon,
  iconColor: string,
  p1: string,
  p2: string,
}

export const cardContent: cardContentType[] = [
  {
    id: 1,
    cardTitle: 'Total revenue',
    CardIcon: DollarSign,
    iconColor: 'text-green-500',
    p1: '$100.00',
    p2: 'Based on 100 Charges',
  },
  {
    id: 2,
    cardTitle: 'Total Sales',
    CardIcon: ShoppingBag,
    iconColor: 'text-blue-500',
    p1: '+50',
    p2: 'total sales on shoeMarshal',
  },
  {
    id: 3,
    cardTitle: 'Total products',
    CardIcon: PartyPopper,
    iconColor: 'text-indigo-500',
    p1: '37',
    p2: 'total product created',
  },
  {
    id: 4,
    cardTitle: 'Total users',
    CardIcon: User2,
    iconColor: 'text-orange-500',
    p1: '120',
    p2: 'total users signed up',
  },
]