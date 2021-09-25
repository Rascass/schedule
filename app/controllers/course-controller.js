const express = require('express');
const router = express.Router();

const CourseService = require(process.cwd() + '/lib/services/course-service');
const CourseMiddleware = require(process.cwd() + '/lib/middlewares/course-middleware');

router.get('/', CourseMiddleware.onGetAll, async (req, res, next) => {
    try {
        const courseService = new CourseService();
        const courses = await courseService.findAll(req.query);

        const response = {
            data : courses,
            pageInfo: {
                pageSize: courseService.pageSize,
                pageLimit: courseService.pageLimit
            }
        };
        res.json(response);
    } catch (error) {
        next(error);
    }

});

router.get('/:id', async (req, res, next) => {
    try {
        const courseService = new CourseService();
        const course = await courseService.find(req.params.id);
        res.json({ data: course });
    } catch (error) {
        next(error);
    }
});

router.post('/', CourseMiddleware.onCreate, async (req, res, next) => {
    try {
        const courseService = new CourseService();
        const course = await courseService.create(req.body.Course);
        res.json({ data: course });
    } catch (error) {
        next(error);
    }
});

router.put('/:id', CourseMiddleware.onUpdate, async (req, res, next) => {
    try {
        const courseService = new CourseService();
        const course = await courseService.update(req.params.id, req.body.Course);
        res.json({ data: course });
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const courseService = new CourseService();
        const course = await courseService.destroy(req.params.id);
        res.json({ data: course });
    } catch (error) {
        next(error);
    }
});

module.exports = router;