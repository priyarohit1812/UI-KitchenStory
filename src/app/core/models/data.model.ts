export interface User {
    userId: number,
    firstName: string,
    lastName?: string,
    email: string,
    mobile: string,
    password: string
}

export interface Address {
    addressId: number,
    address1: string,
    address2: string,
    address3: string,
    city: string,
    state: string,
    country: string,
    zipCode: string,
    user?: User,
    saveAddress?:boolean
}


export interface FoodCategory {
    foodCategoryId: number,
    categoryName: string,
    foodItems:[]
}

export interface FoodItem {
    foodItemId: number,
    foodItemCode: string,
    foodItemName: string,
    brand: string,
    weight: string,
    image_url: string,
    price: number,
    foodCategory:FoodCategory
}

export interface Response {
    isError: boolean,
    message: string,
    response: any;
}

export interface Cart {
    cartId: number,
    noOfItems: number,
    totalCartPrice: number
}

export interface OrderItem {
    orderItemId: number,
    quantity: number,
    totalPrice: number,
    foodItem:FoodItem
}

export interface cartResponse {
    cart:Cart,
    orderItems:OrderItem[]
}

export interface Payment{
    paymentId:number,
    paymentType:[],
    paymentStatus:[],
    remark: string
}

export interface PurchaseOrder{
    purchaseOrderId: number,
    orderDate:Date,
    user:[],
    cart:[],
    address:[],
    payment:[]
}
