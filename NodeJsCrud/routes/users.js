
const { v4: uuidv4 } = require('uuid');
const express=require("express");
const router=express.Router();


var users=[
    {id:uuidv4(),name:"Ulvi",surname:"Majidov",age:25},
    {id:uuidv4(),name:"Orxan",surname:"Memmedli",age:30},
    {id:uuidv4(),name:"Lorem",surname:"Dolerov",age:30}
]

// get all allusers
router.get('/',((req, res) => {
    res.send(users)
}));

//getuserByid
router.get('/:id',(((req, res) => {
    const user=users.find(x=>x.id===req.params.id);
    if(!user) res.status(404).send({message :`User with ${req.params.id} don't exist`,status:404});
    res.send(user);
})))

//create
router.post('/',(req, res) => {
    const newUser={
        id:uuidv4(),
        name:req.body.name,
        surname:req.body.surname,
        age:req.body.age};
    users.push(newUser);
    res.send(newUser);
});

//update
router.put('/:id',(req, res) => {
    const user=users.find(x=>x.id===req.params.id);
    if(!user) res.status(404).send({message :`User with ${req.params.id} don't exist`,status:404});
    else{
        user.name=req.body.name;
        user.age=req.body.surname;
        user.surname=req.body.surname;
        res.send(user);
    }
});

//delete
router.delete('/:id',(req, res) => {
    const dbUser=users.find(x=>x.id===req.params.id);
    if(!dbUser) res.status(404).send({message :`User with ${req.params.id} don't exist`,status:404});
    users=users.filter(u=>u.id!==req.params.id);
    res.send(dbUser);
});
module.exports=router;
