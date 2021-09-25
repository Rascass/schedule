const express = require('express');
const router = express.Router();

const LessonService = require(process.cwd() + '/lib/services/lesson-service');
const LessonMiddleware = require(process.cwd() + '/lib/middlewares/lesson-middleware');

router.get('/', LessonMiddleware.onGetAll, async (req, res, next) => {
    try {
        const lessonService = new LessonService();
        const lessons = await lessonService.findAll(req.query);

        const response = {
            data : lessons,
            pageInfo: {
                pageSize: lessonService.pageSize,
                pageLimit: lessonService.pageLimit
            }
        };
        res.json(response);
    } catch (error) {
        next(error);
    }

});

router.get('/:id', async (req, res, next) => {
    try {
        const lessonService = new LessonService();
        const lesson = await lessonService.find(req.params.id);
        res.json({ data: lesson });
    } catch (error) {
        next(error);
    }
});

router.post('/', LessonMiddleware.onCreate, async (req, res, next) => {
    try {
        const lessonService = new LessonService();
        const lesson = await lessonService.create(req.body.Lesson);
        res.json({ data: lesson });
    } catch (error) {
        next(error);
    }
});

router.put('/:id', LessonMiddleware.onUpdate, async (req, res, next) => {
    try {
        const lessonService = new LessonService();
        const lesson = await lessonService.update(req.params.id, req.body.Lesson);
        res.json({ data: lesson });
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const lessonService = new LessonService();
        const lesson = await lessonService.destroy(req.params.id);
        res.json({ data: lesson });
    } catch (error) {
        next(error);
    }
});

module.exports = router;