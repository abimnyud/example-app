const db = require('../../../connection/dbConnect');



const postGameHandler = async (req, res) => {
    const game = req.body;
    let insertQuery = `insert into game("nama_game", "tanggal_rilis", "harga") 
                       values(${game.nama_game}, '${game.tanggal_rilis}', '${game.harga}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
    // const game = req.body;
    // let query = `insert into game("nama_game", "tanggal_rilis", "harga") 
    // values ('${game,nama_game}', '${game,tanggal_rilis}', ${game,harga})`;

    // try {
    //     const { rows } = await db.query(query);
    //     res.send('Insertion was successful');
    //     // res.status(200).json(rows);
    // } catch (err) {
    //     res.status(500).json({
    //         message: err.message,
    //     });
    // }
}

module.exports = postGameHandler;