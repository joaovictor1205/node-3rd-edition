const names = ['Andrew', 'Jen', 'Jess'];

const shortNames = names.filter((name) => {
    return name.length <= 4;
});

console.log(shortNames);

const geoCode = (address, callback) => {
    const data = {
        latitude: 0,
        longitude: 0,
    }

    return data
}

const data = geoCode('Philadelphia');
console.log(data)