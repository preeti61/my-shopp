const bcrypt=require('bcryptjs')
const data={
    Users:[{
        name:"Preeti",
        email:"preetirautela61@gmail.com",
        password:bcrypt.hashSync('1234',8),
        isAdmin:true
    },
    {
        name:"Rahul",
        email:"rahulrautela9675@gmail.com",
        password:bcrypt.hashSync('8888',8),
        isAdmin:false
    }
],
    Products:[
        {
           
            name:'Cello Highlighter (set of 5-multicolor)',
            image:'/images/hl.jpeg',
            price:80,
            brand:'Cello',
            rating:4.5,
            countProduct:8,
             description:'high quality product'
        },
        {
            
            name:'Adidas Neo shirt',
            image:'/images/p2.jpg',
            price:699,
            brand:'Adidas',
            rating:5,
            countProduct:2,
             description:'high quality product'
        },
        {
           
            name:'Ipad Black',
            image:'/images/appleipad.jpeg',
            price:34789,
            brand:'Apple',
            rating:4.5,
            countProduct:0,
             description:'Extraordinary'
        }
        ,
        {
           
            name:'Nike shirt',
            image:'/images/p3.jpg',
            price:699,
            brand:'Nike',
            rating:4.5,
            countProduct:0,
             description:'high quality product'
        },
        {
           
            name:'Introduction to Algorithms',
            image:'/images/algorithms.jpeg',
            price:1345,
            brand:'PHI',
            rating:4.5,
            countProduct:3,
             description:'Best book for Algorithms'
        },
        
        {
           name:'Nike Pants',
            image:'/images/p4.jpg',
            price:699,
            brand:'Nike',
            rating:4,
            countProduct:9,
             description:'high quality product'
        },
        {
           
            name:'Database System Concepts',
            image:'/images/dbms.jpeg',
            price:699,
            brand:'McGraw Hill',
            rating:4.5,
            countProduct:0,
             description:'A book for database concepts'
        },
        {
            
            name:'Puma pants',
            image:'/images/p5.jpg',
            price:699,
            brand:'Puma',
            rating:4,
            countProduct:5,
             description:'high quality product'
        },
        {
           
            name:'Computer Networks-A top down approach',
            image:'/images/cn.jpeg',
            price:699,
            brand:'Pearson',
            rating:4.5,
            countProduct:10,
             description:'high quality product'
        },
        {
          
          name:'Puma pants',
          image:'/images/p6.jpg',
          price:699,
          brand:'Puma',
          rating:4.5,
          countProduct:7,
           description:'high quality product'
      }
    ]
}
 
module.exports= data;