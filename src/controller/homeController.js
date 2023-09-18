import connection from "../configs/connectDB"

let getHomePage = (req, res) => {
    // logic
    let data = []
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            console.log('>>> CHECK: ');
            console.log(results);
            data = results.map((row) => { return row })
            return res.render('index.ejs', { dataUser: data })
        }
    );
}

module.exports = {
    getHomePage
}