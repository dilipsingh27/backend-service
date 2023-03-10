const db = require('../models');

const addContent = async (content) => {
    const newContent = await db.Contents.create({name:content.name, fields:{}});
    return newContent;
}


const addField = async (params,field) => {
    const content = await db.Contents.findOne({where:{id:params.id}});
    console.log(content.dataValues)
    content.fields[field] = "";

    // content.fields.unshift(newfield);
    content.changed('fields',true);
    console.log(content.dataValues)
    await content.save();
    console.log(content.dataValues)
    return content;
    // const newField = await db.Contents.create({fields:{...content.fields, [field.name]:field.value}}, {where:{id:params.id}});
    // return newField;
}


const deleteField = async (params,fieldKey) => {
    const content = await db.Contents.findOne({where:{id:params.id}});
    delete content.fields[fieldKey];
    content.changed('fields',true);
    await content.save();
    return content;
}


const getContents = async () => {
    const contents = await db.Contents.findAll();
    return contents;
}

const updateField = async (params,changeField) => {
    // console.log(changeField)
    const content = await db.Contents.findOne({where:{id:params.id}});

    delete content.fields[changeField.old];
    content.fields[changeField.new] = "";
    content.changed['fields',true];
    await content.save();
    return content;
}

const updateContent = async (params,newContent) => {
    const content = await db.Contents.findOne({where:{id:params.id}});
    content.name = newContent;
    await content.save();
    return content;
}


const getContentCount = async () => {
    const count = await db.Contents.count();
    return count;
}


const getFieldCount = async (params) => {
    const content = await db.Contents.findOne({where:{id:params.id}});
    const count = Object.keys(content.fields).length;
    return count;
}


const deleteContent = async () => {
    //destroy all contents
    const content = await db.Contents.destroy({where:{},truncate:true});
    return content;
}

const getContent = async (params) => {
    const content = await db.Contents.findOne({where:{id:params.id}});
    return content;
}

const deleteContentById = async (params) => {
    const content = await db.Contents.destroy({where:{id:params.id}});
    console.log(content);
    return content;
}

module.exports = {
    addContent,
    addField,
    deleteField,
    getContents,updateField,updateContent,getContentCount,getFieldCount,deleteContent,getContent,
    deleteContentById
}