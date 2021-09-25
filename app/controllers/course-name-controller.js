const express = require('express');
const router = express.Router();

const CourseNameService = require(process.cwd() + '/lib/services/course-name-service');
const CourseNameMiddleware = require(process.cwd() + '/lib/middlewares/course-name-middleware');

router.get('/', CourseNameMiddleware.onGetAll, async (req, res, next) => {
    try {
        const courseNameService = new CourseNameService();
        const courseNames = await courseNameService.findAll(req.query);

        const response = {
            data : courseNames,
            pageInfo: {
                pageSize: courseNameService.pageSize,
                pageLimit: courseNameService.pageLimit
            }
        };
        res.json(response);
    } catch (error) {
        next(error);
    }

});

router.get('/:id', async (req, res, next) => {
    try {
        const courseNameService = new CourseNameService();
        const courseName = await courseNameService.find(req.params.id);
        res.json({ data: courseName });
    } catch (error) {
        next(error);
    }
});

router.post('/', CourseNameMiddleware.onCreate, async (req, res, next) => {
    try {
        const courseNameService = new CourseNameService();
        const courseName = await courseNameService.create(req.body.CourseName);
        res.json({ data: courseName });
    } catch (error) {
        next(error);
    }
});

router.put('/:id', CourseNameMiddleware.onUpdate, async (req, res, next) => {
    try {
        const courseNameService = new CourseNameService();
        const courseName = await courseNameService.update(req.params.id, req.body.CourseName);
        res.json({ data: courseName });
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const courseNameService = new CourseNameService();
        const courseName = await courseNameService.destroy(req.params.id);
        res.json({ data: courseName });
    } catch (error) {
        next(error);
    }
});

module.exports = router;