const router = require("express").Router();
const Movie = require('../models/movie.model');

// Error Response Function
const errorResponse = (res, error) => {
    return (
        res.status(500).json({
            Error: error.message
        })
    )
}

//TODO POST
router.post('/', async (req, res) => {
    try {
        //1. Pull data from client (body)
        const {
            title, genre, rating, length, releaseYear
        } = req.body;

        //2. Create a new object using our model
        const movie = new Movie({
            title, genre, rating, length, releaseYear
        });

        //3. Use mongoose method to save to MongoDB
        const newMovie = await movie.save();

        //4. Response
        newMovie ?
            res.status(200).json({
                newMovie,
                message: `${newMovie.title} added to collection`
            }) :
            res.status(404).send(
                "Movie not created."
            )

    } catch (err) {
        errorResponse(res, err);
    }
});

// TODO get by Id

router.get('/:id', async (req, res) => {
    try {
        //1. Get the ID from the client
        const id = req.params.id;

        //2. Use mongoose method to findOne in MongoDB by ID
        const movie = await Movie.findOne({ _id: id });

        //3. Response
        movie ?
            res.status(200).json({
                movie,
                message: `Movie found`
            }) :
            res.status(404).json({
                message: `Movie not found`
            });

    } catch (err) {
        errorResponse(res, err);
    }
});


// TODO get all
router.get('/', async (req, res) => {
    try {
        //1. Use mongoose method to find all in MongoDB
        const movies = await Movie.find({});

        //2. Response
        movies.length ?
            res.status(200).json({
                movies,
                message: `${movies.length} Movies found`
            }) :
            res.status(404).json({
                message: `No Movies found`
            });

    } catch (err) {
        errorResponse(res, err);
    }
});

//TODO Get All by Genre
router.get('/genre/:genre', async (req, res) => {
    try {
        //1. Get the genre from the client
        const genre = req.params.genre;
        //2. Use mongoose method to find all in MongoDB by genre
        const movies = await Movie.find({ genre });

        //3. Response
        movies.length ?
            res.status(200).json({
                movies,
                message: `${movies.length} Movies found with genre ${genre}`
            }) :
            res.status(404).json({
                message: `No Movies found with genre ${genre}`
            });

    } catch (err) {
        errorResponse(res, err);
    }
});






//TODO PATCH One
router.patch('/:id', async (req, res) => {
    try {

        //1. Pull value from parameter
        const { id } = req.params;
        //2. Pull data from the body
        const info = req.body;
        //3. Use method to locate document off ID and pass in new info.
        const returnOption = { new: true };

        const updated = await Movie.findOneAndUpdate({ _id: id }, info, returnOption);
        //* findOneAndUpdate(query, document, options);
        // returnOptions allow us to view the updated document right away.

        //4. Respond
        updated ?
            res.status(200).json({
                updated
            }) :
            res.status(404).json({
                message: "Can not update this movie."
            })

    } catch (err) {
        errorResponse(res, err);
    }
})

//TODO DELETE One
router.delete('/:id', async (req, res) => {
    try {

        //1. Capture ID
        const { id } = req.params;

        //2. Use a delete method to locate and removes base off the ID
        const deleteMovie = await Movie.deleteOne({ _id: id });
        console.log(deleteMovie);

        //3. Response
        deleteMovie.deletedCount > 0 ?
            res.status(200).json({
                message: 'Movie Removed'
            }) :
            res.status(404).json({
                message: 'Did not remove movie.'
            })

    } catch (err) {
        errorResponse(res, err);
    }
})

module.exports = router;