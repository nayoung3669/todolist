import { Button, Input, HStack, FormErrorMessage, FormControl, Select, FormLabel, Tag, Avatar, TagLabel } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import uuid from "react-uuid";
import * as yup from 'yup';


function NewTodoForm({updateTodos}) {
    const formik = useFormik({
        initialValues: {
            id: "",
            task: "",
            due: "",
            description: "",
            inProgress: true,
            category:"",
        },
        onSubmit:(values, actions) => {
            updateTodos({id: uuid(), task: values.task, due: values.due, description:"", inProgress: true, category: values.category});
            actions.resetForm();
        },
        validationSchema: yup.object({
            task: yup.string().required("Please fill out your new task."),
        }),
    });

    const {getFieldProps} = formik;

    return (
        <form onSubmit={formik.handleSubmit}>
            <HStack border="2px solid #90ADC6" borderRadius={10} padding="10px" >
                <FormControl isInvalid={formik.errors.task && formik.touched.task}>
                    <Input id="task" name="task" size="lg" type="text" width="500px" minW="200px" variant="outline"
                        value={formik.values.task} onChange={formik.handleChange} placeholder="New Task" border="none" errorBorderColor="#000000"
                    />
                    <FormErrorMessage>{formik.errors.task}</FormErrorMessage>
                </FormControl>
                <FormControl >
                    <Input id="due" type="date" name="due" size="sm" variant="flushed" width="120px" value={formik.values.due} onChange={formik.handleChange} {...getFieldProps("due")}/>
                </FormControl>
                <FormControl >
                    
                    <Select id="" variant="flushed" name="due" maxW="100px" placeholder="Category" value={formik.values.category} onChange={formik.handleChange} {...getFieldProps("category")}>
                        <option value="School" color="red">School 📖</option>
                        <option value="Work">Work 📂</option>
                        <option value="Project">Project 📚</option>
                    </Select>
                </FormControl>
                <Button type="submit" color="#FAD02C" bg="#90ADC6" size="md" ><AddIcon /></Button>
            </HStack>
        </form>
    )
}

export default NewTodoForm;