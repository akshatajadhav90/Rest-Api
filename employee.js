var faker = require('faker')
function generateEmployees(){
    var employees=[]
    for(var id=0;id<50;id++)
    {
        var firstName=faker.name.firstName();
        var lstName=faker.name.lastName();
        var email=faker.name.email();

        employees.push({
            "id":id,
            "first_name":fisrtName,
            "last_name":lastNmae,
            "email":email

        })

    }
    return{"employees":employees}
}

module.exports=generateEmployees