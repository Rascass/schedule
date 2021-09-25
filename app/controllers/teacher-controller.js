const express = require('express');
const router = express.Router();

const TeacherService = require(process.cwd() + '/lib/services/teacher-service');
const TeacherMiddleware = require(process.cwd() + '/lib/middlewares/teacher-middleware');

router.get('/', TeacherMiddleware.onGetAll, async (req, res, next) => {
    try {
        const teacherService = new TeacherService();
        const teachers = await teacherService.findAll(req.query);

        const response = {
            data : teachers,
            pageInfo: {
                pageSize: teacherService.pageSize,
                pageLimit: teacherService.pageLimit
            }
        };
        res.json(response);
    } catch (error) {
        next(error);
    }

});

router.get('/:id', async (req, res, next) => {
    try {
        const teacherService = new TeacherService();
        const teacher = await teacherService.find(req.params.id);
        res.json({ data: teacher });
    } catch (error) {
        next(error);
    }
});

router.post('/', TeacherMiddleware.onCreate, async (req, res, next) => {
    try {
        const teacherService = new TeacherService();
        const teacher = await teacherService.create(req.body.Teacher);
        res.json({ data: teacher });
    } catch (error) {
        next(error);
    }
});

router.put('/:id', TeacherMiddleware.onUpdate, async (req, res, next) => {
    try {
        const teacherService = new TeacherService();
        const teacher = await teacherService.update(req.params.id, req.body.Teacher);
        res.json({ data: teacher });
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const teacherService = new TeacherService();
        const teacher = await teacherService.destroy(req.params.id);
        res.json({ data: teacher });
    } catch (error) {
        next(error);
    }
});

module.exports = router;