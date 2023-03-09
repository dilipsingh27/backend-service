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


const deleteField = async (params,field) => {
    const content = await db.Contents.findOne({where:{id:params.id}});
    delete content.fields[field];
    content.changed['fields',true];
    await content.save();
    return content;
}


const getContents = async () => {
    const contents = await db.Contents.findAll();
    return contents;
}





module.exports = {
    addContent,
    addField,
    deleteField,
    getContents
}