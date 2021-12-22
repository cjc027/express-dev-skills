const skills = [
    {id: 10111213, skill: 'HTML', proficient: true},
    {id: 11121314, skill: 'CSS', proficient: false},
    {id: 12131415, skill: 'JavaScript', proficient: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

function create (skill) {
    skill.id = Date.now() % 100000000;
    skill.proficient = false;
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function update (id, skill) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skill.id = parseInt(id);
    skills.splice(idx, 1, skill);
}
