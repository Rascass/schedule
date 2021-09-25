const express = require('express');
const router = express.Router();

const TeachersSubjectService = require(process.cwd() + '/lib/services/teachers-subject-service');
const TeachersSubjectMiddleware = require(process.cwd() + '/lib/middlewares/teachers-subject-middleware');

router.get('/', TeachersSubjectMiddleware.onGetAll, async (req, res, next) => {
    try {
        const teachersSubjectService = new TeachersSubjectService();
        const teachersSubjects = await teachersSubjectService.findAll(req.query);

        const response = {
            data : teachersSubjects,
            pageInfo: {
                pageSize: teachersSubjectService.pageSize,
                pageLimit: teachersSubjectService.pageLimit
            }
        };
        res.json(response);
    } catch (error) {
        next(error);
    }

});

router.get('/:id', async (req, res, next) => {
    try {
        const teachersSubjectService = new TeachersSubjectService();
        const teachersSubject = await teachersSubjectService.find(req.params.id);
        res.json({ data: teachersSubject });
    } catch (error) {
        next(error);
    }
});

router.post('/', TeachersSubjectMiddleware.onCreate, async (req, res, next) => {
    try {
        const teachersSubjectService = new TeachersSubjectService();
        const teachersSubject = await teachersSubjectService.create(req.body.TeachersSubject);
        res.json({ data: teachersSubject });
    } catch (error) {
        next(error);
    }
});

router.put('/:id', TeachersSubjectMiddleware.onUpdate, async (req, res, next) => {
    try {
        const teachersSubjectService = new TeachersSubjectService();
        const teachersSubject = await teachersSubjectService.update(req.params.id, req.body.TeachersSubject);
        res.json({ data: teachersSubject });
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const teachersSubjectService = new TeachersSubjectService();
        const teachersSubject = await teachersSubjectService.destroy(req.params.id);
        res.json({ data: teachersSubject });
    } catch (error) {
        next(error);
    }
});

module.exports = router;