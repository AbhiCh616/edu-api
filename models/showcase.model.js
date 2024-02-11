const showcaseSchema = new Schema({
    id: Number,
    name: String
})

const showcaseModel = mongoose.model('Showcases', showcaseSchema);