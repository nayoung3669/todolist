import { Button, Input, HStack } from "@chakra-ui/react";

import { useState } from "react";
import uuid from "react-uuid";


function NewTodoForm({updateTodos}) {
    const [formData, setFormData] = useState({
        id: "",
        task: "",
    })

    const handleChange = (e) => {
        setFormData({[e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTodos({id: uuid(), task: formData.task});
        setFormData({task: ""})
    }


    return (
        <form onSubmit={handleSubmit}>
            <HStack  spacing={40} bgColor="#d8c8b8">
                <Input id="task" name="task" size="lg" type="text" maxLength={50} variant="outline"
                    value={formData.task} onChange={handleChange} placeholder="New Task" border="none"
                />
                <Button type="submit" bg="#a8a39d" size="lg" >ADD</Button>
            </HStack>
        </form>
    )
}

export default NewTodoForm;