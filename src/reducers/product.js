var initialState = [
    {
        id:1,
        name: 'IPhone X',
        image:'',
        description:'Sản phẩm do apple sản xuất',
        price: 500,
        inventory:10
    },
    {
        id:2,
        name: 'SamSung Galaxy S7',
        image:'',
        description:'Sản phẩm do samsung sản xuất',
        price: 400,
        inventory:15
    },
    {
        id:1,
        name: 'Oppo F1s',
        image:'',
        description:'Sản phẩm do china sản xuất',
        price: 450,
        inventory:5 
    }
]

const product = (state = initialState, action) => {
    switch(action.type){
        default: return [...state]
    }
}

export default product