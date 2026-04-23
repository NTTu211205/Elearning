const db = require('../config/MySQLConnect');

const createClass = async(classData) => {
    const {subjectId, teacherId, quantity} = classData;

    const [subject] = await db.execute('SELECT * FROM subject WHERE id = ? AND status = 1', [subjectId]);
    if (subject.length === 0) {
        throw new Error('Subject not valid');
    }

    const [teacher] = await db.execute('SELECT * FROM user WHERE id = ? AND status = 1 AND role = teacher', [teacherId]);
    if (teacher.length === 0) {
        throw new Error('Teacher not valid');
    }

    const [newClass] = await db.execute('INSERT INTO class(subject_id, teacher_id, quantity) VALUES (?, ?, ?)', [subject, teacherId, quantity]);

    return {
        id: newClass.insertId,
        subjectId, teacherId, quantity
    };
}

module.exports = {createClass};