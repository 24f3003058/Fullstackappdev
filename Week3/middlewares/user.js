const {user} = require("../db");

function UserMiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;

    UserMiddleware.findone({
        username:username,
        password:password
    }).then(
        function(value){
            if(value){
                next;
            }
            else{
                res.status(403).json({
                    msg:"doesn't exist"
                })
            }
        }
    )
}

Module.export=UserMiddleware;
