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


const updateField = async(req,res) => {
    try {
        // const {id} = req.params;
        const params = req.params;
        const updateField = req.body
        // console.log(updateField)
        const contentType = await contentServices.updateField(params,updateField);
        res.status(200).send(contentType);
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}


const deleteField = async(req,res) => {
    try {
        // const {id} = req.params;
        const params = req.params;
        const {fieldKey} = req.body
        // console.log(fieldKey)
        const contents = await contentServices.deleteField(params,fieldKey);
        res.status(200).send(contents);
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

const updateContent = async(req, res)=>{
    try{
        const params = req.params;
        const {newContent} = req.body;
        const updatedContent = await contentServices.updateContent(params,newContent);
        res.status(200).json(updatedContent);
    }catch(error){
        res.status(500).send({message:error.message});
    }
}


const getContentCount = async(req,res)=>{
    try{
        const contents = await contentServices.getContentCount();
        res.status(200).json(contents);
    }catch(error){
        res.status(500).send({message:error.message});
    }
}


const getFieldCount = async(req,res)=>{
    try{
        const params = req.params;
        const contents = await contentServices.getFieldCount(params);
        res.status(200).json(contents);
    }catch(error){
        res.status(500).send({message:error.message});
    }
}

const deleteContent = async(req,res)=>{
    try{
        const contents = await contentServices.deleteContent()
        res.status(200).json(contents);
    }catch(error){
        res.status(500).send({message:error.message});
    }
}

const getContent = async(req,res)=>{
    try{
        const params = req.params;
        const contents = await contentServices.getContent(params);
        res.status(200).json(contents);
    }catch(error){
        res.status(500).send({message:error.message});
    }
}

const deleteContentById = async(req,res)=>{
    try{
        const params = req.params;
        const contents = await contentServices.deleteContentById(params);
        res.status(200).json(contents);
    }catch(error){
        res.status(500).send({message:error.message});
    }
}

module.exports = {
    addContent,
    addField,
    deleteField,
    getContents,updateField,updateContent,getContentCount,getFieldCount,deleteContent,getContent,
    deleteContentById
};