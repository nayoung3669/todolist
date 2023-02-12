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
            <HStack maxW="lg" spacing={40} bgColor="#fafafa">
                <Input id="task" name="task" size="lg" type="text" variant="outline"
                    value={formData.task} onChange={handleChange} placeholder="New Task"
                />
                <Button type="submit" bg="#c5cae9" size="lg" >ADD</Button>
            </HStack>
        </form>
    )
}

export default NewTodoForm;