const router = require('express').Router();
const { Blog } = require('../../models');


router.get('/', )


router.post('/createblog', async (req, res) => {
  try{
    console.log(req.session.user_id);
    console.lot(req.body);

    let newBlog = {
        ...req.body,
        blogger_id: req.session.user_id
    }
    console.log(newBlog);
    let newBlogData = await Blog.create(newBlog);
    res.json({ newBlogData, message: 'Your blog was created!' });
  
  }
  catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
