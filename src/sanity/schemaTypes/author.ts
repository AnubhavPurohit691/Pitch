import { UserIcon } from "lucide-react";
import { title } from "process";
import { defineField, defineType } from "sanity";

export const author = defineType({
    name: "author",
    title: "Author",
    type: "document",
    icon:UserIcon,
    fields: [
           defineField({
            name: "id",
            type: "number",
           }),
           defineField({
            name:"name",
            type:'string'
           }),
           defineField({
            name:"username",
            type:'number'
           }),
           defineField({
            name:"email",
            type:'string'
           }),
           defineField({
            name:"bio",
            type:"text"
           }),
           defineField({
            name:"image",
            type:"url"
           })
    ],
    preview:{
        select:{
            title:"name"
        }
    }
});

