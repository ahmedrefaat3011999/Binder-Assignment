export interface Course {
  id: number;
  courseName: string;
  discountPercentage: number;
  imageURL: string;
  actualPrice:number;
  author: string;
  tags:string[];
  isListed:boolean
}


export interface Cart{
  item:Course,
}
export interface Wishlist{
  item:Course,
}



// "id": 1,
// "imageURL":"https://i.pinimg.com/474x/05/6e/8e/056e8ef61a652aabdc49fa4218f4f951.jpg",
// "courseName": "Advanced Machine Learning",
// "author": "Alex Johnson",
// "actualPrice": "₹1199",
// "discountPercentage": "15%",
// "tags": ["Machine Learning", "Python"]
