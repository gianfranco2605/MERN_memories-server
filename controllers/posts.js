import PostMessage from "../modules/postMessage.js"

const getPosts = async (req, res) => {
    
    try {
        const postMessage = await PostMessage.find();

        console.log(postMessage);
        res.status(200).json(postMessage)

    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

const createPost = async (req, res) => {
    const post = req.body;

    const newPost = PostMessage(post);
    try {
        await newPost.save()

        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ msg: error.message })
    }
}
export {
    getPosts,
    createPost
}