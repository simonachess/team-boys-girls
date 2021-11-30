// We have a list of boys and girls' heights in centimeters. Girl height is a positive number, boy's height is a negative number.You need implement separate functions to calculate and log to console these items:
// Average height in 0.1 accuracy
// Average boys height in 0.01 accuracy
// Average girls height in 0.01 accuracy 
// Check if a basketball team can be created.Team rules: height not less than 175cm, there should be at least 7 members.
// Data sets:
// [-178, 175, -186, 172, 173, 175, -185, -180, -169, 165, 176, 172, -180]
// 175.8
// 172.57
// 179.67
// No girl team
// No boy team
// const data2 = []
const data = [-178, 175, -186, 172, 173, 175, -185, -180, -169, 165, 176, 172, -180];

const boys = [];
const girls = [];
data.filter(item => item > 0 ? girls.push(item) : boys.push(Math.abs(item)));

console.log(boys, girls);

function averageHeight(data) {
    let heightSum = 0;
    for (let i = 0; i < data.length; i++) {
        heightSum = heightSum + data[i];
    }
    let average = heightSum / data.length;
    return average;
}

console.log('Average height in 0.1 accuracy: ', averageHeight(girls.concat(boys)).toFixed(1))
console.log('Average boys height in 0.01 accuracy: ', averageHeight(girls).toFixed(2))
console.log('Average girls height in 0.01 accuracy: ', averageHeight(boys).toFixed(2))

function createTeam(players) {
    const team = [];
    players.forEach(player => {
        if (player > 175) {
            team.push(player)
        }
    });
    if (team.length >= 7) {
        return true
    } else {
        return false
    }
}
console.log('Can create girls team? ', createTeam(girls))
console.log('Can create boys team? ', createTeam(boys))