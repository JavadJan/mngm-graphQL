const clients = [
    {
        id: '1',
        name: 'javad',
        email: 'javad@khavari.com',
        phone: '03492084914'
    },
    {
        id: '2',
        name: 'Sirine',
        email: 'Sirine@khavari.com',
        phone: '036546465'
    },
    {
        id: '3',
        name: 'mahdi',
        email: 'mahdi@khavari.com',
        phone: '+76546464'
    },
    {
        id: '4',
        name: 'Najla',
        email: 'najla@khavari.com',
        phone: '03492084914'
    },
]
const projects = [
    {
        id:'1',
        clientId:"4",
        name:"project 1",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis, voluptatum dolorem corrupti commodi exercitationem omnis fuga unde possimus quaerat minima nemo molestias, veniam magni debitis error porro? Ullam, animi.",
        status:"done!"
    },
    {
        id:'2',
        clientId:"1",
        name:"project 2",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis, voluptatum dolorem corrupti commodi exercitationem omnis fuga unde possimus quaerat minima nemo molestias, veniam magni debitis error porro? Ullam, animi.",
        status:"pending!"
    },
    {
        id:'3',
        clientId:"3",
        name:"project 3",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis, voluptatum dolorem corrupti commodi exercitationem omnis fuga unde possimus quaerat minima nemo molestias, veniam magni debitis error porro? Ullam, animi.",
        status:"start!"
    },
    {
        id:'4',
        clientId:"3",
        name:"project 4",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis, voluptatum dolorem corrupti commodi exercitationem omnis fuga unde possimus quaerat minima nemo molestias, veniam magni debitis error porro? Ullam, animi.",
        status:"done!"
    },
]


module.exports = { clients, projects }