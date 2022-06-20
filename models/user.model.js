module.exports = (sequelize, Sequielize) => {
    const users =  sequelize.define("users", {
        user_id:{
            type: Sequielize.INTEGER,
        },
        name:{
            type: Sequielize.STRING,
        },
        address:{
            type: Sequielize.STRING,
        },
        email:{
            type: Sequielize.STRING,
        },
        password:{
            type: Sequielize.STRING,
        }
    })
    
    return users
}