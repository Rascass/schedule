const express = require('express');
const router = express.Router();

const SubjectService = require(process.cwd() + '/lib/services/subject-service');
const SubjectMiddleware = require(process.cwd() + '/lib/middlewares/subject-middleware');

router.get('/', SubjectMiddleware.onGetAll, async (req, res, next) => {
    try {
        const subjectService = new SubjectService();
        const subjects = await subjectService.findAll(req.query);

        const response = {
            data : subjects,
            pageInfo: {
                pageSize: subjectService.pageSize,
                pageLimit: subjectService.pageLimit
            }
        };
        res.json(response);
    } catch (error) {
        next(error);
    }

});

router.get('/:id', async (req, res, next) => {
    try {
        const subjectService = new SubjectService();
        const subject = await subjectService.find(req.params.id);
        res.json({ data: subject });
    } catch (error) {
        next(error);
    }
});

router.post('/', SubjectMiddleware.onCreate, async (req, res, next) => {
    try {
        const subjectService = new SubjectService();
        const subject = await subjectService.create(req.body.Subject);
        res.json({ data: subject });
    } catch (error) {
        next(error);
    }
});

router.put('/:id', SubjectMiddleware.onUpdate, async (req, res, next) => {
    try {
        const subjectService = new SubjectService();
        const subject = await subjectService.update(req.params.id, req.body.Subject);
        res.json({ data: subject });
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const subjectService = new SubjectService();
        const subject = await subjectService.destroy(req.params.id);
        res.json({ data: subject });
    } catch (error) {
        next(error);
    }
});

module.exports = router;