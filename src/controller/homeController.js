import pool from "../configs/connectDB"

let getHomePage = async (req, res) => {
    // logic
    const [rows, fields] = await pool.execute('SELECT * FROM users')
    return res.render('index.ejs', { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id
    let user = await pool.execute('SELECT * FROM users WHERE id = ?', [userId])
    return res.send('DONEEEEEEEEEEEE!!!!')
}

module.exports = {
    getHomePage,
    getDetailPage
}