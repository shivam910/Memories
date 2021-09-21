// Reducers is a function that accepts a state and actions & then based on the action type it perform some logic

export default (posts = [], action) =>{
    switch (action.type) {
        case 'UPDATE':
            return posts.map((post) => post._id === action.payload._id ? action.payload: post)
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
}}

// in reducers state always needs to be equal to something -> in our case state is posts