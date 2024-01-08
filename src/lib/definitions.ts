export enum GroupType {
    HOME,
    TRIP
}

export enum RegistrationStatus {
    CONFIRMED = 'confirmed',
    UNSUBSCRIBED = 'unsubscribed',
}

export enum Category {
    ENTERTAINMENT,
    UNCATEGORIZED,
    FOOD_AND_DRINK,
    HOME,
    LIFE,
    TRANSPORTATION,
    UTILITIES
}

export type Friend = {
    id: string
    email: string
    firstName: string
    lastName?: string
    groups: Group[]
    registrationStatus: RegistrationStatus
    avatar: string
    balance: Balance[]
}

export type Group = {
    id: string
    name: string
    avatar: string
    createdAt: Date
    updatedAt: Date
    members: User[]
    originalDebts: any[]
    simplifiedDebts: any[]
    whiteboard?: string
    groupType: GroupType
    inviteLink: string
    groupRemainders: any
}

export type User = {
    id: string
    country: string
    defaultCurrency: string
    dateFormat: string
    email: string
    firstName: string
    lastName?: string
    locale: string
    registrationStatus: RegistrationStatus
    avatar: string
}

export type Notification = {
    id: string
    category: string
    content: string
    createdAt: Date
    createdBy: string
    source: any
    image: string
}

type Metadata = {
    features: any[]
}

type Balance = {
    amount: number
    currency: string
}

type Repayment = {
    from: number
    to: number
    amount: number
}

export type Expense = {
    id: string
    category: any
    comments?: string
    createdAt: Date
    createdBy: Partial<User>
    updatedAt?: Date
    updatedBy?: User
    cost: number
    currency: string
    description: string
    groupId: string
    repayment: Repayment[]
}


export type MainResponse = {
    friends: Friend[]
    groups: Group[]
    user: User
    notifications: Notification[]
    metadata: Metadata
}

export type Menu = {
    href: string
    icon: string
    title: string
}