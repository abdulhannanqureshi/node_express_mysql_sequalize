import app from './app'
import sequelize from './config/database'

const PORT = process.env.PORT

sequelize.sync({ force: false }).then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
        console.log("Server Run");
    })
}).catch(err => {
    console.log("Unable to connect DB", err);
})