const contentServices = require('../services/contentServices');

const addContent = async(req,res) => {
    try {
        const content = await contentServices.addContent(req.body);
        res.status(200).send(content);
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

const addField = async(req,res) => {
    try {
        // const {id} = req.params;
        const params = req.params;
        console.log(req.body)
        const {newfield} = req.body
        const newContent = await contentServices.addField(params,newfield);
        res.status(200).send(newContent);
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}


// const updateField = async(req,res) => {
//     try {
//         // const {id} = req.params;
//         const params = req.params;
//         const {newfield} = req.body
//         const updatedField = await contentServices.updateField(params,newfield);
//         res.status(200).send(updatedField);
//     } catch (error) {
//         res.status(500).send({message:error.message});
//     }
// }

const deleteField = async(req,res) => {
    try {
        // const {id} = req.params;
        const params = req.params;
        const {newfield} = req.body
        const updatedField = await contentServices.deleteField(params,newfield);
        res.status(200).send(updatedField);
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

const getContents = async(req,res) => {
    try {
        const contents = await contentServices.getContents();
        res.status(200).send(contents);
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

module.exports = {
    addContent,
    addField,
    deleteField,
    getContents
};