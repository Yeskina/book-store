import { SetStateAction } from "react";

export interface AuthorInfo {
  author: string
}

export interface Product {
  bookName: string
  count?: number
  author: string
  price: number
  image: string
  age: string
  pages: string
  language: string
  date: string
  grade: string
  publisher: string
  weight: string
  size: string
  bookDesc: any
  biography?: any
  id: number
}

export interface BookDescriptionInfo {
  bookName: string
  author: string
  bookDescription: () => void
  authorLink: string
}

export interface BookDetailsInfo {
  age: string
  pages: string
  language: string
  publisher: string
  weight?: string
  size?: string
  grade?: string
  date?: string
}

export interface CartListInfo {
  cartList: Array<{
    id: number
    price: number
    count: number
    bookName: string
    author: string
    image: string
  }>
  DeletePurchasedBook: (id: number) => void
}

export interface CartListInfoApp {
  id: number
  price: number
  count: number
  bookName: string
  author: string
  image: string
}

export interface CartContainerInfo {
  price?: number
  bookId?: number
  AddBookInCart: (bookId: number) => void
}

export interface ChatProps {
  showChat: boolean
  setShowChat: SetStateAction<any>
}