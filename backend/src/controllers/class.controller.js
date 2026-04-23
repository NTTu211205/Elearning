const classService = require('../services/class.service');

const addClass = async (req, res) => {
    try {
        const {subjectId, teacherId, quantity} = req.body;

        const result = await classService.createClass({subjectId, teacherId, quantity});

        res.status(200).json({
            message: 'Success',
            data: result
        })
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {addClass};