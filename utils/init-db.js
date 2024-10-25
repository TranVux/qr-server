const mongoose = require('mongoose')

if (!mongoose.connections[0].readyState) {
    mongoose.set({
        strictQuery: false,
    })
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('init db successfully 💪')
    }).catch(console.error)
}
