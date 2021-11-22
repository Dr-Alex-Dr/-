
const fs = require('fs');
const conn = require('../dbConnection').promise();


exports.addpoint = async (req, res, next) => {
    console.log(req.body);
    console.log(req.files);
    res.send("Image upload");

    function parseString() {
        let td = [];
        req.files.forEach((item) => {
            td.append(item.path);
        });
        return json.stringify(td);

        
    }
    
    try {
        if (req.body.get == "true") {
            // const point = await conn.execute(
            //     "SELECT * FROM `addpoint`" ,
                
            //   );
            //   res.send(JSON.stringify(point[0]));
            console.log(fs.readFileSync('./uploads\\1637152203602.jpg', { encoding: 'base64' }));
              
        } else {
        const [rows] = await conn.execute('INSERT INTO `addpoint`(`clear`,`name`,`photos`,`latitude`,`longitude`,`text`,`size`,`car`,`trash`,`anonim`) VALUES(?,?,?,?,?,?,?,?,?,?)',[
            req.body.clear,
            req.body.name,
            req.files[0].path,
            JSON.parse(req.body.location).coords.latitude,
            JSON.parse(req.body.location).coords.longitude,
            req.body.text,
            req.body.size,
            req.body.car,
            req.body.trash,
            req.body.anonim
        ]);
    }
    } catch(err) {
        next(err);
    }
    
    
}